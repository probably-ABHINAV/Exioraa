import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessibilityImprovements } from "@/components/accessibility-improvements"

export const metadata = {
  title: "Exioraa - Digital Innovation Studio | Web Development & Design Agency",
  description: "Transform your digital presence with Exioraa's cutting-edge web development, mobile apps, UI/UX design, and branding services. Specializing in React, Next.js, and modern tech solutions.",
  keywords: "web development, mobile app development, UI/UX design, React, Next.js, digital innovation, branding, SEO, e-commerce, custom software",
  authors: [{ name: "Exioraa Team" }],
  creator: "Exioraa Digital Innovation Studio",
  publisher: "Exioraa",
  openGraph: {
    title: "Exioraa - Digital Innovation Studio",
    description: "We design, build & scale digital experiences with cutting-edge technology",
    url: "https://exioraa.vercel.app",
    siteName: "Exioraa",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Exioraa Digital Innovation Studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Exioraa - Digital Innovation Studio",
    description: "We design, build & scale digital experiences with cutting-edge technology",
    images: ["/placeholder-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  },
  generator: 'Next.js'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black font-space-grotesk" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AccessibilityImprovements />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}