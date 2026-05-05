import Link from "next/link"
import { ArrowUpRight, BookOpen, Compass, FlaskConical, HeartHandshake, Users } from "lucide-react"

const opportunities = [
  {
    id: "fellowship",
    title: "DBM Rural Fellowship",
    hindi: "ग्रामीण फेलोशिप",
    description: "Not a corporate internship, but a zero-to-one construction project. A 6-12 month immersion for India's brightest technical and analytical minds to build scalable solutions directly from the soil of Bihar.",
    status: "Accepting Applications",
    icon: Compass,
    link: "/fellowship",
    colSpan: "lg:col-span-2", // Takes up 2 columns for architectural asymmetry
    accent: "text-[#B3391A]", // Deep Terracotta
    borderHover: "hover:border-[#B3391A]"
  },
  {
    id: "iks",
    title: "IKS Integration",
    hindi: "भारतीय ज्ञान परंपरा",
    description: "Reclaiming our civilizational roots. Researching and embedding Sanskrit, Yoga, and traditional ecological knowledge into modern pedagogy.",
    status: "In Development",
    icon: BookOpen,
    link: "#",
    colSpan: "lg:col-span-1",
    accent: "text-[#C2933D]", // Antique Gold
    borderHover: "hover:border-[#C2933D]"
  },
  {
    id: "internship",
    title: "Internships",
    hindi: "प्रशिक्षु कार्यक्रम",
    description: "Short-term, high-impact roles across education, agriculture, and operations. Gain ground-reality experience while actively building Bharat.",
    status: "Active",
    icon: Users,
    link: "/internship",
    colSpan: "lg:col-span-1",
    accent: "text-[#164928]", // Heritage Forest
    borderHover: "hover:border-[#164928]"
  },
  {
    id: "volunteering",
    title: "Volunteering",
    hindi: "स्वयंसेवा",
    description: "Commit your Tan, Man, and Dhan (Time, Mind, and Wealth). Flexible opportunities for professionals and citizens to contribute to the rural movement.",
    status: "Active",
    icon: HeartHandshake,
    link: "/volunteer",
    colSpan: "lg:col-span-1",
    accent: "text-[#B3391A]",
    borderHover: "hover:border-[#B3391A]"
  },
  {
    id: "research",
    title: "DBM Research Labs",
    hindi: "अनुसंधान एवं विकास",
    description: "You cannot build for a reality you do not understand. Ground-level data collection, systems analysis, and whitepapers on rural economies, education, and agriculture.",
    status: "Upcoming",
    icon: FlaskConical,
    link: "#",
    colSpan: "lg:col-span-1",
    accent: "text-[#261912]", // Dark Espresso
    borderHover: "hover:border-[#261912]"
  }
]

export function FutureInitiatives() {
  return (
    <section className="bg-[#FDF9F1] py-24 border-y border-[#261912]/10 relative selection:bg-[#B3391A] selection:text-white">
      {/* Editorial Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[1px] border-[#261912]" />
        <div className="absolute top-32 -left-32 w-[500px] h-[500px] rounded-full border-[1px] border-[#261912]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#C2933D] font-bold tracking-[0.2em] text-[10px] uppercase mb-4" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
              Expanding The Ecosystem
            </h2>
            <h3 className="text-4xl md:text-5xl text-[#261912] leading-[1.1]" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>
              Pathways to Build <br className="hidden md:block" />
              <span className="italic text-[#B3391A]">Bharat</span>
            </h3>
            <p className="text-[#B3391A] text-xl mt-4" style={{ fontFamily: 'var(--font-rozha, serif)' }}>
              राष्ट्र निर्माण के मार्ग
            </p>
          </div>

          <div className="max-w-md border-l border-[#C2933D]/50 pl-6 py-2">
            <p className="text-[#261912]/80 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
              Whether you are a researcher mapping ancient epistemologies, an engineer building offline-first tech, or a citizen offering your weekends—this is the architecture for your contribution.
            </p>
          </div>
        </div>

        {/* The Grid: Architectural, Sharp, No Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#261912]/10 bg-[#261912]/10">
          {opportunities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`group relative bg-[#FDF9F1] border-b border-r border-[#261912]/10 p-8 md:p-10 transition-all duration-500 hover:bg-white ${item.colSpan}`}
              >
                {/* Status Tag */}
                <div className="flex justify-between items-start mb-12">
                  <span
                    className="inline-block px-3 py-1 border border-[#261912]/20 text-[9px] uppercase tracking-[0.15em] font-bold text-[#261912]/60"
                    style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                  >
                    {item.status}
                  </span>
                  <Icon className={`w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity duration-300 ${item.accent}`} />
                </div>

                {/* Content */}
                <div>
                  <p className={`text-lg mb-2 ${item.accent}`} style={{ fontFamily: 'var(--font-rozha, serif)' }}>
                    {item.hindi}
                  </p>
                  <h4 className="text-2xl md:text-3xl text-[#261912] mb-4" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>
                    {item.title}
                  </h4>
                  <p className="text-[#261912]/70 leading-relaxed text-sm mb-8" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                    {item.description}
                  </p>
                </div>

                {/* Action Link (Bottom Left) */}
                <div className="mt-auto pt-6">
                  {item.link !== "#" ? (
                    <Link
                      href={item.link}
                      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold ${item.accent} group-hover:translate-x-2 transition-transform duration-300`}
                      style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                    >
                      Explore
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#261912]/30 cursor-not-allowed"
                      style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                    >
                      Launching Soon
                    </span>
                  )}
                </div>

                {/* Subtle Hover Border Effect */}
                <div className={`absolute inset-0 border-2 border-transparent ${item.borderHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}