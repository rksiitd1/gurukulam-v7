import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const faculty = [
  { name: "Mukund Agrawal", qualification: "B.Tech, IIT Delhi (2017)" },
  { name: "Raju Kumar Jha", qualification: "M.Sc., Patna University" },
  { name: "Ratnesh Kumar Sharma", qualification: "B.Tech, IIT Delhi (2023)" },
  { name: "Vivek Kumar", qualification: "B.Sc. Physics (Hons.), Bhupendra Narayan Mandal University" },
  { name: "Sanjay Kumar", qualification: "B.A., Madhepura University" },
  { name: "Ritesh Kumar Jha", qualification: "LLB coursework, Banaras Hindu University" },
  { name: "Roshan Kumar", qualification: "I.Sc. Mathematics (2026)" },
]

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function ShriClassesFaculty() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-[#0B1B33]/5 text-[#0B1B33] hover:bg-[#0B1B33]/10 border-0">
            Our Faculty
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B33] mb-4 tracking-tight">
            Seven Teachers, One Standard
          </h2>
          <p className="text-lg text-[#4A5468] leading-relaxed">
            Every teacher at Shri Classes brings a real degree from a real institution — from IIT Delhi to
            the universities of Bihar. No stock photos, no invented bios. Just who actually teaches here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {faculty.map((person, index) => (
            <Card key={index} className="border-0 shadow-sm bg-[#FAF7F1]">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0B1B33] flex items-center justify-center shrink-0">
                  <span className="text-[#C7A354] font-semibold text-sm">{initials(person.name)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1B33] leading-snug">{person.name}</h3>
                  <p className="text-sm text-[#5B6478] mt-1 leading-snug">{person.qualification}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
