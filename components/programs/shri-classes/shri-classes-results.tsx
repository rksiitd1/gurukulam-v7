"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const comparison = [
  {
    dimension: "Teaching Style",
    typical: "Rote memorisation, formula-first",
    shri: "Concept-first — students learn why a method works",
  },
  {
    dimension: "Who Teaches",
    typical: "Varies, often uncertified",
    shri: "IIT Delhi engineer, teaching in his own village",
  },
  {
    dimension: "Practice",
    typical: "Occasional homework",
    shri: "Daily DPPs in Mathematics, full chapter tests in every subject — all checked promptly",
  },
  {
    dimension: "Materials",
    typical: "Photocopied, generic",
    shri: "Written from scratch, NCERT + Bihar Board aligned, built for mobile",
  },
  {
    dimension: "Purpose",
    typical: "Run as a business",
    shri: "Run as a mission — part of Divya Bihar Mission",
  },
]

export function ShriClassesResults() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-[#C7A354]/10 text-[#8B6B33] hover:bg-[#C7A354]/20 border-0">
            What Makes This Different
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B33] mb-4 tracking-tight">
            Not Just Another Coaching Class
          </h2>
          <p className="text-lg text-[#4A5468] leading-relaxed">
            Raghopur already has tuition classes. Here's what Shri Classes does differently — and why it exists
            at all.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="hidden sm:grid grid-cols-[1fr_1.3fr_1.3fr] gap-4 px-6 pb-3 text-xs font-semibold uppercase tracking-wide text-[#8B95AA]">
            <div />
            <div>Typical Coaching</div>
            <div className="text-[#0B1B33]">Shri Classes</div>
          </div>
          <div className="space-y-3">
            {comparison.map((row, index) => (
              <Card key={index} className="border-0 shadow-sm bg-[#FAF7F1]">
                <CardContent className="p-6 grid sm:grid-cols-[1fr_1.3fr_1.3fr] gap-3 sm:gap-4 items-center">
                  <div className="font-semibold text-[#0B1B33] text-sm">{row.dimension}</div>
                  <div className="flex items-start gap-2 text-sm text-[#6B7488]">
                    <X className="h-4 w-4 text-[#B8A98C] mt-0.5 shrink-0" />
                    <span>{row.typical}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-[#0B1B33] font-medium">
                    <Check className="h-4 w-4 text-[#C7A354] mt-0.5 shrink-0" />
                    <span>{row.shri}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-t border-[#0B1B33]/10 pt-12">
            <blockquote className="font-devanagari text-2xl sm:text-3xl text-[#0B1B33] mb-3 leading-snug">
              "शिक्षा ही वह शक्ति है जो समाज को बदल सकती है"
            </blockquote>
            <p className="text-[#4A5468] italic mb-3">
              "Education is the power that can transform society."
            </p>
            <cite className="text-sm text-[#8B6B33] font-medium not-italic">
              — Mukund Agrawal, IIT Delhi alumnus & founder, Divya Bihar Mission
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
