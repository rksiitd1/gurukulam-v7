import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Home,
  Heart,
  Mail,
  Facebook,
  Youtube,
  Phone,
  Users,
  BookOpen,
  Camera,
  MessageSquare,
  User,
  ExternalLink,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Links | Divya Bihar Mission",
  description: "Quick access to all Divya Bihar Mission links - donation, contact, social media, and more.",
  openGraph: { images: ["/og-image.jpg"] },
}

interface LinkItem {
  title: string
  href: string
  icon: React.ReactNode
  description?: string
  external?: boolean
  highlight?: boolean
}

export default function LinktreePage() {
  const links: LinkItem[] = [
    {
      title: "Homepage",
      href: "/",
      icon: <Home className="w-5 h-5" />,
      description: "Visit our main website",
    },
    {
      title: "Donate Now",
      href: "/donate",
      icon: <Heart className="w-5 h-5" />,
      description: "Support our mission",
      highlight: true,
    },
    {
      title: "Email Us",
      href: "mailto:contact@divyabiharmission.com",
      icon: <Mail className="w-5 h-5" />,
      description: "contact@divyabiharmission.com",
      external: true,
    },
    {
      title: "Call Us",
      href: "tel:+919262536295",
      icon: <Phone className="w-5 h-5" />,
      description: "+91 92625 36295",
      external: true,
    },
    {
      title: "About Us",
      href: "/about",
      icon: <Users className="w-5 h-5" />,
      description: "Learn about our mission",
    },
    {
      title: "Programs",
      href: "/programs",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Our initiatives",
    },
    {
      title: "Gallery",
      href: "/gallery",
      icon: <Camera className="w-5 h-5" />,
      description: "See our work",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Get in touch",
    },
    {
      title: "About Founder",
      href: "/about-founder",
      icon: <User className="w-5 h-5" />,
      description: "Meet the founder",
    },
    {
      title: "Blog & Stories",
      href: "/stories",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Read our stories",
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/DivyaBiharMission",
      icon: <Facebook className="w-5 h-5" />,
      description: "Follow us on Facebook",
      external: true,
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/@shriclasses2",
      icon: <Youtube className="w-5 h-5" />,
      description: "Watch our videos",
      external: true,
    },
    {
      title: "Twitter / X",
      href: "https://x.com/DBMRaghopur",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      description: "Follow us on X",
      external: true,
    },
  ]

  const LinkCard = ({ link }: { link: LinkItem }) => {
    const content = (
      <div
        className={`
          group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl
          border-2 transition-all duration-200
          ${link.highlight
            ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-orange-500 shadow-lg hover:shadow-xl hover:scale-[1.02]'
            : 'bg-white text-gray-900 border-gray-200 hover:border-orange-400 hover:shadow-md hover:bg-orange-50'
          }
          touch-manipulation
          min-h-[72px]
        `}
      >
        <div
          className={`
            flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg
            flex items-center justify-center
            ${link.highlight
              ? 'bg-white/20 text-white'
              : 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
            }
            transition-colors
          `}
        >
          {link.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className={`font-semibold text-base sm:text-lg ${link.highlight ? 'text-white' : 'text-gray-900'}`}>
              {link.title}
            </h3>
            {link.external && (
              <ExternalLink className={`w-4 h-4 flex-shrink-0 ${link.highlight ? 'text-white/80' : 'text-gray-400'}`} />
            )}
          </div>
          {link.description && (
            <p className={`text-sm mt-1 ${link.highlight ? 'text-white/90' : 'text-gray-600'}`}>
              {link.description}
            </p>
          )}
        </div>
        <ArrowRight
          className={`
            w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1
            ${link.highlight ? 'text-white/80' : 'text-gray-400'}
          `}
        />
      </div>
    )

    if (link.external) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      )
    }

    return (
      <Link href={link.href} className="block">
        {content}
      </Link>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="max-w-md mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg p-3 border-4 border-orange-200">
              <Image
                src="/DBM-logo.png"
                alt="Divya Bihar Mission Logo - Sun and Open Book Symbol"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Divya Bihar Mission
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-devanagari mb-1">
            दिव्य बिहार मिशन
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Empowering rural Bihar through education
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3 sm:space-y-4">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Divya Bihar Mission
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Registered under 12A & 80G
          </p>
        </div>
      </div>
    </main>
  )
}

