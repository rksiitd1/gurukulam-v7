import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Devanagari } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap', // Better font loading
  preload: true
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: 'swap', // Better font loading
  preload: true
})

// --- SEO & Site Configuration ---
// Central place to manage your site's core information.
const siteConfig = {
  name: "Divya Bihar Mission",
  description:
    "From IIT Delhi to Bihar Villages - Empowering Bihar through education with yogic values, sustainable farming, and cultural values. Join our mission to transform rural communities.",
  url: "https://divyabiharmission.com",
  ogImage: "https://divyabiharmission.com/og-image.jpg",
  author: "Mukund Agrawal",
  location: {
    address: "Jiaram Raghopur, Simrahi Bazaar",
    city: "Supaul",
    region: "Bihar",
    postalCode: "852111",
    country: "India",
    geo: {
      latitude: "25.9",
      longitude: "86.6"
    },
    landmark: "~200m from Raghopur Railway Station"
  },
  social: {
    facebook: "https://www.facebook.com/DivyaBiharMission",
    youtube: "https://www.youtube.com/@shriclasses2"
  },
  // businessHours: "Mo-Su 09:00-18:00"
};

// --- Optimised Metadata for Google & Social Media ---
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  
  // Canonical URL and language alternates
  alternates: {
    canonical: siteConfig.url,
    // Add if you have other language versions
    // languages: {
    //   'en-US': '/en-US',
    //   'hi': '/hi',
    // },
  },

  // Open Graph for Social Media
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Empowering Rural Bihar`,
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@DBMRaghopur', // Update with your Twitter handle if available
  },
  
  // Search Engine Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons and PWA
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  
  // Additional Metadata
  creator: siteConfig.author,
  publisher: siteConfig.name,
  manifest: '/site.webmanifest',
  keywords: [
    'Divya Bihar Mission', 
    'Rural Education Bihar', 
    'Yogic Education', 
    'Sustainable Farming',
    'Bihar Development',
    'Raghopur Education',
    'Supaul Schools'
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'WtriZ8saaxufwWJ7SNEjCzc8yxjp4BnmAmFnBRB_4NM', // Replace with your actual key
  },
  other: {
    'msapplication-TileColor': '#2b5797',
    // Removed browserconfig.xml reference as it's no longer used
  },
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
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/DBM-logo.png`,
      "width": 600,
      "height": 60
    },
    "image": siteConfig.ogImage,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.location.address,
      "addressLocality": siteConfig.location.city,
      "addressRegion": siteConfig.location.region,
      "postalCode": siteConfig.location.postalCode,
      "addressCountry": siteConfig.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.location.geo.latitude,
      "longitude": siteConfig.location.geo.longitude
    },
    "hasMap": `https://maps.google.com/maps?q=${siteConfig.location.geo.latitude},${siteConfig.location.geo.longitude}`,
    "nonprofitStatus": "Nonprofit",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-92625-36295",
      "contactType": ["customer service", "general"],
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN",
      "contactOption": "TollFree"
    }],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.youtube
    ]
  };

  // Additional WebSite and WebPage schemas
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "isPartOf": {
      "@id": `${siteConfig.url}/#website`
    },
    "about": {
      "@id": `${siteConfig.url}/#organization`
    },
    "primaryImageOfPage": {
      "@id": siteConfig.ogImage
    },
    "inLanguage": "en-US"
  };

  return (
    <html 
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${notoSansDevanagari.variable}`} 
      suppressHydrationWarning
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        
        {/* Preload critical resources - Removed as Next.js handles this automatically */}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Mobile address bar theming */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        
        {/* iOS specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* PWA related */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={siteConfig.name} />
        
        {/* Security Headers - Note: X-Frame-Options should be set in server config */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      </head>
      <body 
        className="font-sans antialiased overflow-x-hidden"
        itemScope 
        itemType="https://schema.org/WebPage"
      >
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