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
  BookOpen,
  Camera,
  MessageSquare,
  User,
  ArrowRight,
  GraduationCap,
  Linkedin
} from "lucide-react"

export const metadata: Metadata = {
  title: "Links | Divya Bihar Mission",
  description: "Quick access to all Divya Bihar Mission links - donation, contact, social media, and more.",
  openGraph: { images: ["/og-image.jpg"] },
}

export default function LinktreePage() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/DivyaBiharMission",
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/divyabiharmission",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-700 hover:bg-blue-50"
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/divyabiharmsn",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "hover:text-gray-900 hover:bg-gray-100"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@divyabiharmission",
      icon: <Youtube className="w-5 h-5" />,
      color: "hover:text-red-600 hover:bg-red-50"
    }
  ];

  const mainLinks = [
    {
      title: "Homepage",
      href: "/",
      icon: <Home className="w-5 h-5" />,
      description: "Visit our main website",
    },
    {
      title: "Our Programs",
      href: "/programs",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Gurukulam, Agriculture & Udyamita",
    },
    {
      title: "Stories & Blog",
      href: "/blog",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Read ground-level impact stories",
    },
    {
      title: "Media Gallery",
      href: "/gallery",
      icon: <Camera className="w-5 h-5" />,
      description: "Photos & videos of our work",
    },
  ];

  const contactLinks = [
    {
      title: "WhatsApp Us",
      href: "https://wa.me/919262536295",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Quick chat with our team",
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
      title: "Email Us",
      href: "mailto:contact@divyabiharmission.com",
      icon: <Mail className="w-5 h-5" />,
      description: "contact@divyabiharmission.com",
      external: true,
    },
    {
      title: "About Founder",
      href: "/about-founder",
      icon: <User className="w-5 h-5" />,
      description: "Meet Mukund Agrawal",
    },
  ];

  const LinkCard = ({ link }: { link: any }) => {
    const content = (
      <div className="group relative flex items-center p-4 bg-white/70 backdrop-blur-xl border border-white hover:border-orange-200 rounded-2xl shadow-sm hover:shadow-md hover:shadow-orange-500/10 transition-all duration-300 w-full touch-manipulation">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
          {link.icon}
        </div>
        <div className="ml-4 flex-1 text-left">
          <h3 className="font-semibold text-gray-900 text-[15px] leading-tight">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
              {link.description}
            </p>
          )}
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
          <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
        </div>
      </div>
    );

    return link.external ? (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl">
        {content}
      </a>
    ) : (
      <Link href={link.href} className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl">
        {content}
      </Link>
    );
  };

  return (
    <main className="min-h-screen bg-[#FDFBF6] relative overflow-hidden font-sans selection:bg-orange-200 selection:text-orange-900">

      {/* Premium Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] rounded-full bg-orange-300/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] rounded-full bg-red-300/15 blur-[100px]" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10 max-w-[480px] mx-auto px-5 py-12 pb-20">

        {/* Header / Profile */}
        <header className="text-center mb-10">
          <div className="relative w-28 h-28 mx-auto mb-5">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-red-500 animate-spin-slow opacity-20 blur-md"></div>
            <div className="relative w-full h-full bg-white rounded-full p-3 shadow-xl border border-white flex items-center justify-center">
              <Image
                src="/DBM-logo.png"
                alt="Divya Bihar Mission Logo"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-serif">
            Divya Bihar Mission
          </h1>
          <p className="text-orange-700 font-devanagari font-medium mt-1 text-[17px]">
            दिव्य बिहार मिशन
          </p>
          <p className="text-gray-500 text-sm mt-3 px-4 leading-relaxed">
            Village Upliftment, Nation Building. <br className="hidden sm:block" />
            Empowering rural Bihar through education and values.
          </p>
        </header>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Primary Action Button */}
        <div className="mb-10">
          <Link href="/donate" className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl group">
            <div className="relative w-full bg-gradient-to-r from-orange-600 to-red-600 p-[1px] rounded-2xl shadow-xl shadow-orange-600/20 transition-transform duration-300 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl">
                <Heart className="w-5 h-5 text-white fill-white/20 animate-pulse" />
                <span className="text-white font-bold text-lg tracking-wide">Donate to Support Us</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Links Sections */}
        <div className="space-y-8">

          {/* Section: Discover */}
          <section>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2">
              Discover
            </h2>
            <div className="space-y-3">
              {mainLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </div>
          </section>

          {/* Section: Connect */}
          <section>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2">
              Connect With Us
            </h2>
            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-300 to-red-300 mx-auto rounded-full mb-6 opacity-50"></div>
          <p className="text-sm font-semibold text-gray-900">Divya Bihar Mission Trust</p>
          <p className="text-xs text-gray-500 mt-1.5">Registered under 12A & 80G</p>
          <p className="text-xs text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </footer>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </main>
  )
}