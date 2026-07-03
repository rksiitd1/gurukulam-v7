import { GraduationCap, Users, BadgeCheck, NotebookPen, MessageCircle } from "lucide-react"
import { HeroCarousel } from "../../ui/hero-carousel"

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Engineer-Led Teaching",
    detail: "IIT Delhi alumnus",
  },
  {
    icon: Users,
    label: "69 Students",
    detail: "Classes IX–XII, this session",
  },
  {
    icon: BadgeCheck,
    label: "7 Teachers",
    detail: "Real degrees, real people",
  },
]

export function ShriClassesHero() {
  return (
    <section className="relative bg-[#0B1B33] py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Subtle gold hairline texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#C7A354,transparent_45%),radial-gradient(circle_at_80%_0%,#C7A354,transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C7A354]" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#C7A354]">
                  श्री Classes · DBG Gurukulam
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
                Rebuilding the Basics,
                <span className="block text-[#E7D3A1]">One Subject at a Time.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#C9D2E0] leading-relaxed max-w-xl">
                A modern Gurukul in Raghopur for Classes IX–XII — Mathematics, Science and English, taught
                concept-first by an IIT Delhi engineer who came home to teach. It runs deepest today in our
                Class 10 Bihar Board Mathematics program.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-lg p-4"
                >
                  <div className="bg-[#C7A354]/15 p-2 rounded-full shrink-0">
                    <fact.icon className="h-4 w-4 text-[#C7A354]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white leading-tight">{fact.label}</div>
                    <div className="text-xs text-[#9AA6BC] mt-0.5">{fact.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiet contact line */}
            <div className="pt-2">
              <a
                href="https://wa.me/919262536295?text=Namaste%2C%20I%27m%20interested%20in%20Shri%20Classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#C9D2E0] hover:text-white transition-colors border-b border-[#C9D2E0]/30 hover:border-white/60 pb-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Reach us on WhatsApp
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm text-[#7E8AA3] pt-2 font-devanagari tracking-wide">
              विद्याधनं सर्वधनं प्रधानम्
            </p>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <HeroCarousel
                imageDir="shri-classes"
                alt="Students studying at Shri Classes in Raghopur"
                className="w-full h-[22rem] sm:h-[28rem] md:h-[32rem]"
                showOverlay
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#0B1B33]/5 p-2 rounded-full">
                  <NotebookPen className="h-5 w-5 text-[#0B1B33]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0B1B33]">11 Questions</div>
                  <div className="text-xs text-[#5B6478]">Class 10 Math, every day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
