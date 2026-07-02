import { Button } from "@/components/ui/button"
import { GraduationCap, MapPin, NotebookPen, MessageCircle } from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "../../ui/hero-carousel"

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Engineer-Led Teaching",
    detail: "IIT Delhi alumnus",
  },
  {
    icon: MapPin,
    label: "Bihar Board Aligned",
    detail: "Raghopur, Supaul",
  },
  {
    icon: NotebookPen,
    label: "Class 10 Focus",
    detail: "Mathematics, from the basics",
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
                Mathematics, Rebuilt
                <span className="block text-[#E7D3A1]">From the Ground Up.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#C9D2E0] leading-relaxed max-w-xl">
                For Class 10 students in Raghopur who feel left behind in mathematics — taught concept-first,
                one problem at a time, by an IIT Delhi engineer who chose to teach in his own village.
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-[#C7A354] hover:bg-[#B8924A] text-[#0B1B33] font-semibold" asChild>
                <Link href="https://wa.me/919262536295?text=Namaste%2C%20I%27m%20interested%20in%20Shri%20Classes%20for%20Class%2010%20Mathematics." target="_blank">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Us on WhatsApp
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="#method">See How We Teach</Link>
              </Button>
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
                alt="Students studying mathematics at Shri Classes in Raghopur"
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
                  <div className="text-xs text-[#5B6478]">Every single day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
