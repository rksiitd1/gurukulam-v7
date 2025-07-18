import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Quote, Star } from "lucide-react"

export function HomepageTestimonials() {
  // A curated list of the most impactful testimonials for the homepage
  const testimonials = [
    {
      name: "Amit Singh",
      title: "Former Student, Now Engineering Student",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Golu sir (Mukund Agrawal) changed my life. From a village boy with no hope, I'm now pursuing engineering. The values he taught will stay with me forever.",
      initials: "AS",
    },
    {
      name: "Sunita Devi",
      title: "Farmer, Supaul",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The agriculture training from Divya Bihar Mission helped me triple my income. I learned organic farming techniques and now I teach other women in my village.",
      initials: "SD",
    },
    {
      name: "Priya Sharma",
      title: "Parent, Raghopur",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "My son is getting an excellent education at the Gurukulam. They teach modern subjects along with our cultural values (sanskar). I am so grateful.",
      initials: "PS",
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Professor, IIT Delhi",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Mukund's dedication is exemplary. His approach of combining modern curriculum with traditional values is exactly what rural India needs for a sustainable future.",
      initials: "RK",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4 shadow-sm">
            <Quote className="w-4 h-4 mr-2" />
            Voices of Our Community
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hear What People Are
            <span className="text-purple-600 block">Saying About Us</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from the students, parents, and community members we serve.
          </p>
          <p className="text-base lg:text-lg font-devanagari text-purple-700 mt-2">हमारे समुदाय की आवाज़ें</p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                      <Quote className="w-10 h-10 text-purple-300 mb-4" />
                      <p className="text-gray-700 italic leading-relaxed flex-grow">"{testimonial.content}"</p>
                      <div className="flex mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </CardContent>
                    <div className="bg-gray-50 p-4 flex items-center space-x-4 border-t border-gray-100">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-purple-200 text-purple-700 font-bold">{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/blog">
              Read More Stories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}