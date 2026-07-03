const beliefs = [
  {
    title: "Concept, Not Shortcuts",
    description: "We'd rather a student understand slowly than memorise quickly. It's the only kind of learning that stays.",
  },
  {
    title: "Part of a Larger Mission",
    description: "Shri Classes exists because Divya Bihar Mission believes a village deserves the same seriousness as any city.",
  },
  {
    title: "No One to Compete With",
    description: "We don't measure ourselves against other institutes nearby. Anyone doing something positive for a child's education is doing something worth doing.",
  },
  {
    title: "Built for the Long Run",
    description: "Discipline and consistency, not shortcuts — because the goal was never just one exam.",
  },
]

export function ShriClassesResults() {
  return (
    <section className="py-16 lg:py-24 bg-[#16284A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A550]">
            What We Believe
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl mx-auto mb-20">
          {beliefs.map((belief, index) => (
            <div key={index}>
              <span className="block w-6 h-px bg-[#C9A550] mb-4" />
              <h3 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold text-white mb-2">
                {belief.title}
              </h3>
              <p className="text-sm text-[#C9D2E0] leading-relaxed">{belief.description}</p>
            </div>
          ))}
        </div>

        {/* Founder Quote */}
        <div className="max-w-2xl mx-auto text-center border-t border-white/10 pt-14">
          <blockquote className="font-devanagari text-2xl sm:text-3xl text-white mb-3 leading-snug">
            "शिक्षा ही वह शक्ति है जो समाज को बदल सकती है"
          </blockquote>
          <p className="text-[#C9D2E0] italic mb-3">
            "Education is the power that can transform society."
          </p>
          <cite className="text-sm text-[#C9A550] font-medium not-italic">
            — Mukund Agrawal, IIT Delhi alumnus & founder, Divya Bihar Mission
          </cite>
        </div>
      </div>
    </section>
  )
}
