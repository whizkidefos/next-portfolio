import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await request.json();
    
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['me@iefosa.me'],  // Your email address
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}