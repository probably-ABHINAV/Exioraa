import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Exioraa - Digital Innovation Studio | Web Development & Tech Solutions",
    template: "%s | Exioraa"
  },
  description: "Transform your business with cutting-edge digital solutions. Exioraa specializes in web development, mobile apps, UI/UX design, and digital transformation strategies that drive growth and maximize ROI.",
  keywords: [
    "digital innovation",
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital transformation",
    "tech solutions",
    "React development",
    "Next.js",
    "SEO optimization",
    "digital marketing",
    "custom software",
    "API development",
    "cloud solutions",
    "startup consulting"
  ],
  authors: [{ name: "Exioraa Team", url: "https://exioraa.com" }],
  creator: "Exioraa Digital Innovation Studio",
  publisher: "Exioraa",
  metadataBase: new URL("https://exioraa.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://exioraa.vercel.app",
    siteName: "Exioraa Digital Innovation Studio",
    title: "Exioraa - Digital Innovation Studio | Transform Your Business",
    description: "Partner with Exioraa to deliver cutting-edge digital solutions that drive growth, enhance user experience, and maximize ROI. From strategic planning to implementation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Exioraa Digital Innovation Studio - Transform Your Business with Digital Excellence",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Exioraa Digital Innovation Studio",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@exioraa",
    creator: "@exioraa",
    title: "Exioraa - Digital Innovation Studio",
    description: "Transform your business with cutting-edge digital solutions. Web development, mobile apps, UI/UX design, and digital transformation strategies.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Technology",
  classification: "Business",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Exioraa" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-black text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1 pt-0">{children}</div>
          </div>
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Exioraa Digital Innovation Studio",
              "url": "https://exioraa.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://exioraa.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}