const faculty = [
  { name: "Mukund Agrawal", qualification: "B.Tech, IIT Delhi (2017)", teaches: "English & Mathematics · XI–XII" },
  { name: "Raju Kumar Jha", qualification: "M.Sc., Patna University", teaches: "Chemistry, Biology & Geography" },
  { name: "Ratnesh Kumar Sharma", qualification: "B.Tech, IIT Delhi (2023)", teaches: "English, Mathematics & Physics" },
  { name: "Vivek Kumar", qualification: "B.Sc. Physics (Hons.), Bhupendra Narayan Mandal University", teaches: "Science · IX" },
  { name: "Sanjay Kumar", qualification: "B.A., Madhepura University", teaches: "Hindi & Social Science" },
  { name: "Ritesh Kumar Jha", qualification: "LLB coursework, Banaras Hindu University", teaches: null },
  { name: "Roshan Kumar", qualification: "I.Sc. Mathematics (2026)", teaches: "Mathematics · IX" },
]

export function ShriClassesFaculty() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14 max-w-3xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A9812F]">
            Our Faculty
          </span>
          <h2 className="font-[family-name:var(--font-source-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#16284A] mt-3 mb-4 tracking-tight">
            Seven Teachers
          </h2>
          <p className="text-lg text-[#3E4A61] leading-relaxed">
            Real degrees, from IIT Delhi to the universities of Bihar. No stock photos, no invented bios —
            just who actually teaches here, and what they teach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto border-t border-[#16284A]/12">
          {faculty.map((person, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-5 border-b border-[#16284A]/12"
            >
              <div>
                <h3 className="font-[family-name:var(--font-source-serif)] text-lg font-semibold text-[#16284A]">
                  {person.name}
                </h3>
                <p className="text-sm text-[#6B7488] mt-0.5">{person.qualification}</p>
              </div>
              {person.teaches && (
                <span className="text-xs uppercase tracking-[0.1em] text-[#A9812F] whitespace-nowrap shrink-0">
                  {person.teaches}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
