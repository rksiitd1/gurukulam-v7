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
    colSpan: "lg:col-span-2",
    accent: "text-[#B3391A]", // Deep Terracotta
    bgHover: "hover:bg-[#B3391A]/[0.02]",
    borderHover: "group-hover:border-[#B3391A]"
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
    bgHover: "hover:bg-[#C2933D]/[0.03]",
    borderHover: "group-hover:border-[#C2933D]"
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
    bgHover: "hover:bg-[#164928]/[0.03]",
    borderHover: "group-hover:border-[#164928]"
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
    bgHover: "hover:bg-[#B3391A]/[0.02]",
    borderHover: "group-hover:border-[#B3391A]"
  },
  {
    id: "research",
    title: "DBM Research Labs",
    hindi: "अनुसंधान एवं विकास",
    description: "You cannot build for a reality you do not understand. Ground-level data collection, systems analysis, and whitepapers on rural economies.",
    status: "Upcoming",
    icon: FlaskConical,
    link: "#",
    colSpan: "lg:col-span-1",
    accent: "text-[#261912]", // Dark Espresso
    bgHover: "hover:bg-[#261912]/[0.03]",
    borderHover: "group-hover:border-[#261912]"
  }
]

export function FutureInitiatives() {
  return (
    <section className="bg-[#FDF9F1] py-24 md:py-32 border-y border-[#261912]/10 relative selection:bg-[#B3391A] selection:text-white overflow-hidden">

      {/* Texture & Watermark (Tactile Elegance) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none select-none opacity-[0.02]">
        <span className="text-[40rem] font-bold leading-none text-[#261912]" style={{ fontFamily: 'var(--font-rozha, serif)' }}>
          सेवा
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section (Scaled Up Typography) */}
        <div className="mb-20 md:mb-32 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
          <div className="max-w-4xl">
            <h2 className="text-[#C2933D] font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-6" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
              Expanding The Ecosystem
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-[5rem] text-[#261912] leading-[1.05]" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>
              Pathways to Build <br className="hidden md:block" />
              <span className="italic text-[#B3391A]">Bharat</span>
            </h3>
            <p className="text-[#B3391A] text-2xl md:text-3xl mt-6" style={{ fontFamily: 'var(--font-rozha, serif)' }}>
              राष्ट्र निर्माण के मार्ग
            </p>
          </div>

          <div className="max-w-lg border-l-2 border-[#C2933D]/40 pl-6 md:pl-10 py-2">
            <p className="text-[#261912]/80 leading-relaxed text-base md:text-lg" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
              Whether you are a researcher mapping ancient epistemologies, an engineer building offline-first tech, or a citizen offering your weekends—this is the architecture for your contribution.
            </p>
          </div>
        </div>

        {/* The Grid: Architectural, Sharp, High-End */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l border-[#261912]/10 bg-[#261912]/5">
          {opportunities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`group relative bg-[#FDF9F1] border-b border-r border-[#261912]/10 p-10 lg:p-14 transition-all duration-700 ${item.bgHover} ${item.colSpan}`}
              >
                {/* Status Tag & Icon */}
                <div className="flex justify-between items-start mb-16">
                  <span
                    className="inline-block px-4 py-1.5 border border-[#261912]/20 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#261912]/60 bg-white/50 backdrop-blur-sm"
                    style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                  >
                    {item.status}
                  </span>
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 ${item.accent}`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className={`text-xl lg:text-2xl mb-3 ${item.accent}`} style={{ fontFamily: 'var(--font-rozha, serif)' }}>
                    {item.hindi}
                  </p>
                  <h4 className="text-3xl lg:text-4xl text-[#261912] mb-6" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>
                    {item.title}
                  </h4>
                  <p className="text-[#261912]/75 leading-relaxed text-base lg:text-lg mb-12 max-w-2xl" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                    {item.description}
                  </p>
                </div>

                {/* Action Link (Bottom Left) */}
                <div className="mt-auto pt-8 border-t border-[#261912]/5">
                  {item.link !== "#" ? (
                    <Link
                      href={item.link}
                      className={`inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] font-bold ${item.accent} transition-all duration-300 group-hover:gap-5`}
                      style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                    >
                      Explore Initiative
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <span
                      className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.15em] font-bold text-[#261912]/30 cursor-not-allowed"
                      style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                    >
                      Launching Soon
                    </span>
                  )}
                </div>

                {/* High-End Hover Border Frame */}
                <div className={`absolute inset-0 border-[3px] border-transparent ${item.borderHover} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20`} />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}