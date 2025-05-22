import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.scss'

// Enable analytics in production only
const analyticsEnabled = process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  title: 'Exioraa | Digital Agency',
  description: 'We create bold digital experiences',
}

import { initSmoothScroll } from '@/lib/gsapAnimations';
import { useEffect } from 'react';

// Google Analytics component
function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initSmoothScroll();
  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  )
}