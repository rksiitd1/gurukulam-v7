import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function VolunteerTestimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      title: "Tech Volunteer (Remote)",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Volunteering remotely for Divya Bihar Mission has been incredibly fulfilling. Contributing my tech skills to such a meaningful cause, even from miles away, makes me feel connected to the grassroots reality of India.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      title: "Teaching Volunteer (On-site)",
      image: "/placeholder.svg?height=80&width=80",
      content: "Spending three months teaching at the Gurukulam was a life-changing experience. The children's eagerness to learn and the community's warmth is something I will cherish forever. It’s more than volunteering; it’s becoming part of a family.",
      rating: 5,
    },
    {
      name: "Rohan Desai",
      title: "Agriculture Volunteer (On-site)",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working in the fields, learning about organic farming, and seeing the direct impact on local farmers' lives was eye-opening. This is the real India, and serving here has given my life a new purpose.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">💬</span>
            Voices of Our Volunteers
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stories from the
            <span className="text-purple-600 block">Heart of Seva</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from individuals who have dedicated their time and skills to our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-purple-400" />
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}