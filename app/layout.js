import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";

// Dynamically import components that aren't needed for initial render
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <div className="h-20 bg-background/80 backdrop-blur-sm" />,
  ssr: true
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-16 bg-background/80 backdrop-blur-sm" />,
  ssr: true
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: [400, 500, 700],
  variable: '--font-jetbrainsMono',
  display: 'swap',
});

export const viewport = {
  themeColor: "#000000",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark light',
};

export const metadata = {
  metadataBase: new URL('https://iefosa.me'),
  title: "Efosa Igbinehi | Software Engineer",
  description: "Software Developer based in Manchester, United Kingdom. I build responsive, accessible, and performant web applications.",
  manifest: "/manifest.json",
  robots: "index, follow",
  icons: {
    icon: '/assets/efosa_igbinehi.webp',
    apple: '/assets/efosa_igbinehi.webp',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iefosa.me',
    title: 'Efosa Igbinehi | Software Engineer',
    description: 'Software Developer based in Manchester, United Kingdom. I build responsive, accessible, and performant web applications.',
    siteName: 'Efosa Igbinehi Portfolio',
    images: [{ 
      url: '/assets/efosa_igbinehi.webp',
      width: 192,
      height: 192,
      alt: 'Efosa Igbinehi'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Efosa Igbinehi | Software Engineer',
    description: 'Software Developer based in Manchester, United Kingdom. I build responsive, accessible, and performant web applications.',
    images: ['/assets/efosa_igbinehi.webp']
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/webp" href="/assets/efosa_igbinehi.webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/assets/efosa_igbinehi.webp" sizes="192x192" />
      </head>
      <body>
        <Suspense fallback={<div className="h-20 bg-background/80 backdrop-blur-sm" />}>
          <Header />
        </Suspense>
        
        <main>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>}>
            {children}
          </Suspense>
        </main>

        <Suspense fallback={<div className="h-16 bg-background/80 backdrop-blur-sm" />}>
          <Footer />
        </Suspense>
        
        <Toaster />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
