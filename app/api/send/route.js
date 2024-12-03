import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize rate limiting map
const rateLimitMap = new Map();
const RATE_LIMIT_DURATION = parseInt(process.env.RATE_LIMIT_DURATION_MS) || 60000; // 1 minute default
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 3; // 3 requests per duration default

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration from environment variables
const EMAIL_FROM = process.env.EMAIL_FROM || 'Contact Form <onboarding@resend.dev>';
const EMAIL_TO = process.env.EMAIL_TO?.split(',') || ['me@iefosa.me'];

/**
 * Rate limiting middleware
 * @param {string} ip - IP address to check
 * @returns {boolean} - true if request should be rate limited
 */
function isRateLimited(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  
  // Clean up old requests
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_DURATION);
  
  // Check if user has exceeded rate limit
  if (recentRequests.length >= MAX_REQUESTS) {
    return true;
  }
  
  // Add current request timestamp
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  
  // Clean up old entries from the map
  if (now % (RATE_LIMIT_DURATION * 10) === 0) { // Periodic cleanup
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_DURATION);
      if (validTimestamps.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, validTimestamps);
      }
    }
  }
  
  return false;
}

export async function POST(request) {
  try {
    // Get client IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate request body
    const { firstname, lastname, email, phone, service, message } = await request.json();
    
    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent from: ${ip}</small></p>
      `
    });

    return NextResponse.json({ 
      message: 'Email sent successfully',
      data,
      remainingRequests: MAX_REQUESTS - (rateLimitMap.get(ip)?.length || 0)
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}