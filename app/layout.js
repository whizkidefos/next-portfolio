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

export const metadata = {
  title: "Efosa Igbinehi | AI Software Engineer",
  description: "Professional portfolio showcasing AI and software engineering projects",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iefosa.me',
    title: 'Efosa Igbinehi | AI Software Engineer',
    description: 'Professional portfolio showcasing AI and software engineering projects',
    siteName: 'Efosa Igbinehi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Efosa Igbinehi | AI Software Engineer',
    description: 'Professional portfolio showcasing AI and software engineering projects',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
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
