import { GraduationCap, Users, BadgeCheck, MessageCircle } from "lucide-react"
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
    <section className="relative bg-[#F3EDE0] py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#A9812F]" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#A9812F]">
                  श्री Classes · DBG Gurukulam
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-source-serif)] text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#16284A] leading-[1.1] tracking-tight">
                Rebuilding the Basics,
                <span className="block italic text-[#2B4F8C]">One Subject at a Time.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3E4A61] leading-relaxed max-w-xl">
                A modern Gurukul in Raghopur for Classes IX–XII — Mathematics, Science, English, Hindi,
                Sanskrit and Social Science, taught concept-first by seven real teachers, led by an IIT
                Delhi engineer who came home to teach.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/60 border border-[#16284A]/10 p-4"
                >
                  <div className="bg-[#A9812F]/10 p-2 rounded-full shrink-0">
                    <fact.icon className="h-4 w-4 text-[#A9812F]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#16284A] leading-tight">{fact.label}</div>
                    <div className="text-xs text-[#6B7488] mt-0.5">{fact.detail}</div>
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
                className="inline-flex items-center gap-2 text-sm text-[#16284A] hover:text-[#2B4F8C] transition-colors border-b border-[#16284A]/30 hover:border-[#2B4F8C] pb-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Reach us on WhatsApp
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm text-[#8B6B33] pt-2 font-devanagari tracking-wide">
              विद्याधनं सर्वधनं प्रधानम्
            </p>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="p-2 bg-white border border-[#16284A]/10">
              <HeroCarousel
                imageDir="shri-classes"
                alt="Students studying at Shri Classes in Raghopur"
                className="w-full h-[22rem] sm:h-[28rem] md:h-[32rem]"
                showOverlay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
