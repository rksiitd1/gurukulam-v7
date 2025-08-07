import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Devanagari } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
})

// --- SEO & Site Configuration ---
// Central place to manage your site's core information.
const siteConfig = {
  name: "Divya Bihar Mission",
  description:
    "From IIT to Village - Empowering Bihar through education with yogic values, sustainable farming, and cultural values. Join our mission to transform rural communities.",
  url: "https://divyabiharmission.com", // Your NEW, current domain.
  ogImage: "https://divyabiharmission.com/og-image.jpg", // An image for social media sharing.
  author: "Mukund Agrawal",
};

// --- Optimised Metadata for Google & Social Media ---
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), // Sets the base URL for all other links.
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Creates dynamic page titles like "About Us | Divya Bihar Mission".
  },
  description: siteConfig.description,
  
  // Canonical URL to tell Google this is the primary domain.
  alternates: {
    canonical: siteConfig.url,
  },

  // For Social Media Sharing (Open Graph)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Empowering Rural Bihar`,
      },
    ],
  },
  
  // For Search Engine Crawlers
  robots: {
    index: true,
    follow: true,
  },
  
  // For Website Icons (Favicon, etc.)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Other Important Tags
  creator: siteConfig.author,
  publisher: siteConfig.name,
  manifest: `/site.webmanifest`, // For Progressive Web App features.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // --- Structured Data for Rich Google Results ---
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Divya Bihar Mission",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/DBM-logo.png`, // Full URL to your logo
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-92625-36295",
      "contactType": "Customer Service"
    },
    "sameAs": [
      // Add your official social media URLs here when available
      // "https://www.youtube.com/@shriclasses2",
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${notoSansDevanagari.variable}`} suppressHydrationWarning>
      <head>
        {/* Injects the structured data into every page's <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow"> {/* Added <main> for better semantics */}
            {children}
          </main>
          <Footer />
          <Toaster /> {/* Global notification system */}
        </ThemeProvider>
      </body>
    </html>
  )
}