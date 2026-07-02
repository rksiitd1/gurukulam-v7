"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Lightbulb, ListChecks, Link2, Smartphone, FileCheck2 } from "lucide-react"

const dppParts = [
  {
    count: "5",
    title: "Objective Questions",
    description: "Quick, focused recall — the questions students should be able to answer without hesitation.",
  },
  {
    count: "5",
    title: "Short Answer Questions",
    description: "Applying the concept in a slightly new way, so understanding isn't just memorised.",
  },
  {
    count: "1",
    title: "Thinking Question",
    description: "One question designed to be genuinely challenging — and to build real confidence when solved.",
  },
]

const philosophy = [
  {
    icon: Eye,
    title: "Visual First",
    description: "Every concept is shown before it's stated as a rule.",
  },
  {
    icon: Lightbulb,
    title: "Why Before How",
    description: "Students understand the reasoning, not just the steps.",
  },
  {
    icon: ListChecks,
    title: "Step-by-Step",
    description: "No leaps. Every method is built from what came before it.",
  },
  {
    icon: Link2,
    title: "Connected to Real Life",
    description: "Mathematics is shown to mean something, not just to be solved.",
  },
]

const cycle = [
  { step: "Evening", activity: "Today's DPP is solved at home — 11 questions, no more, no less." },
  { step: "Next Morning", activity: "Every answer is checked in class, question by question." },
  { step: "On the Spot", activity: "Mistakes are corrected immediately, before they become habits." },
  { step: "Ongoing", activity: "The same concept resurfaces later, until it's genuinely secure." },
]

export function ShriClassesCurriculum() {
  return (
    <section id="method" className="py-16 lg:py-24 bg-[#FAF7F1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-[#0B1B33]/5 text-[#0B1B33] hover:bg-[#0B1B33]/10 border-0">
            Our Teaching System
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B33] mb-4 tracking-tight">
            The Daily Practice Problem System
          </h2>
          <p className="text-lg text-[#4A5468] leading-relaxed">
            The Bihar Board Class 10 Mathematics syllabus is completed early — deliberately — so the months
            before the exam can be spent where they matter most: revision, practice, and correcting mistakes
            before they show up in the exam hall.
          </p>
        </div>

        {/* DPP Breakdown */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-4">
            <span className="text-4xl sm:text-5xl font-bold text-[#0B1B33]">11</span>
            <span className="text-lg text-[#4A5468] ml-2">questions, every single day</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {dppParts.map((part, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-[#C7A354] mb-3">{part.count}</div>
                  <h3 className="font-semibold text-[#0B1B33] mb-2">{part.title}</h3>
                  <p className="text-sm text-[#5B6478] leading-relaxed">{part.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] text-center mb-10">
            Concept Before Method
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-[#0B1B33]/5">
                <div className="bg-[#0B1B33]/5 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-[#0B1B33]" />
                </div>
                <h4 className="font-semibold text-[#0B1B33] mb-2">{item.title}</h4>
                <p className="text-sm text-[#5B6478]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Cycle */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1B33] text-center mb-10">
            How a DPP Actually Gets Used
          </h3>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {cycle.map((item, index) => (
              <div key={index} className="flex gap-4 p-5 bg-white rounded-lg border border-[#0B1B33]/5">
                <div className="w-8 h-8 rounded-full bg-[#0B1B33] text-white text-sm font-semibold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0B1B33]">{item.step}</div>
                  <p className="text-sm text-[#5B6478] mt-0.5">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials note */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-[#0B1B33] text-white">
            <CardContent className="p-8 sm:p-10 grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-[#C7A354] mb-3">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-sm font-medium uppercase tracking-wide">Built for a Phone Screen</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Every worksheet is designed to be read on mobile</h4>
                <p className="text-sm text-[#C9D2E0] leading-relaxed">
                  Large fonts, one question per page, no clutter. Most students here study from a phone, not a
                  desk full of books — so the materials are built for that reality, not against it.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#C7A354] mb-3">
                  <FileCheck2 className="h-5 w-5" />
                  <span className="text-sm font-medium uppercase tracking-wide">NCERT + Bihar Board Aligned</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Notes built from absolute basics</h4>
                <p className="text-sm text-[#C9D2E0] leading-relaxed">
                  Theory notes are written chapter by chapter, assuming nothing — because the students who need
                  Shri Classes most are the ones who were never given a strong foundation to begin with.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
