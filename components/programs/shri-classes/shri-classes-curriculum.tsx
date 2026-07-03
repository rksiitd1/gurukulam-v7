import { Eye, Lightbulb, ListChecks, Link2 } from "lucide-react"

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
    description: "Every subject is shown to mean something — not just something to be solved.",
  },
]

export function ShriClassesCurriculum() {
  return (
    <section className="py-16 lg:py-24 bg-[#FDFBF6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A9812F]">
            How We Teach
          </span>
          <h2 className="font-[family-name:var(--font-source-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#16284A] mt-3 mb-4 tracking-tight">
            Concept Before Method
          </h2>
          <p className="text-lg text-[#3E4A61] leading-relaxed">
            Across every subject on the timetable, the approach stays the same: understand why, before
            memorising how. Daily practice problems, chapter tests and steady revision all serve one goal —
            real understanding, not shortcuts. Every worksheet is also built to be read comfortably on a
            phone, since that's how most students here actually study.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#16284A]/10 max-w-5xl mx-auto">
          {philosophy.map((item, index) => (
            <div key={index} className="bg-[#FDFBF6] p-7 text-center">
              <item.icon className="h-6 w-6 text-[#16284A] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-source-serif)] font-semibold text-[#16284A] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7488] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
