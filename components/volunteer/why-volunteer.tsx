import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sprout, BookOpen, Handshake } from "lucide-react"

const reasons = [
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Fulfill Your Dharma",
    titleHindi: "धर्म का पालन करें",
    description: "Experience the profound joy of 'Seva' (selfless service) and contribute to the nation-building process from the ground up.",
  },
  {
    icon: <Sprout className="w-10 h-10 text-green-500" />,
    title: "Gain Real-World Skills",
    titleHindi: "व्यावहारिक कौशल सीखें",
    description: "Develop skills in teaching, sustainable agriculture, community management, and grassroots leadership in a dynamic environment.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    title: "Cultural Immersion",
    titleHindi: "सांस्कृतिक अनुभव",
    description: "Live and work in the heart of rural Bihar, experiencing its rich traditions, heritage, and the warmth of its people.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-orange-500" />,
    title: "Create Lasting Impact",
    titleHindi: "स्थायी प्रभाव डालें",
    description: "Your efforts will directly empower children, support farmers, and build a self-reliant future for the community.",
  },
]

export function WhyVolunteer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Volunteer with
            <span className="text-green-600 block">Divya Bihar Mission?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Volunteering with us is more than just giving time; it's a journey of personal growth and collective transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-orange-400">
              <CardContent className="p-8 space-y-4">
                <div className="flex justify-center">{reason.icon}</div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                  <p className="text-lg font-devanagari text-gray-600">{reason.titleHindi}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}