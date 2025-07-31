"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Quote, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function HomepageTestimonials() {
  const [api, setApi] = useState<any>(null)

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      const currentIndex = api.selectedScrollSnap()
      const totalSlides = api.slideNodes().length
      
      if (currentIndex === totalSlides - 1) {
        // If we're at the last slide, go to the first
        api.scrollTo(0)
      } else {
        // Otherwise, go to the next slide
        api.scrollNext()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [api])
  // A curated list of the most impactful testimonials for the homepage
  const testimonials = [
    {
      name: "Nikhil Kulkarni",
      title: "CS, BTech, IIT Delhi",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Bihar’s villages felt safer, cleaner, and richer -- culturally, socially, and even in natural beauty -- than many towns. After meeting the children at Divya Bihar Mission , I came back deeply assured about India’s future. The values and education they’re receiving are already visible in their personalities and confidence. Many, many best wishes to you, Mukund Bhaiya!",
      initials: "NK",
    },
    {
      name: "Robin Singh Rathore",
      title: "PhD Scholar, BTech, Chemical Engg, IIT Delhi",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Visiting Bihar has always been special — not just for its rich heritage of knowledge and spirituality, but also for the potential it holds today. Despite challenges like high population and small landholdings, it remains one of the most fertile regions in India. My visit to Raghopur was truly inspiring. I met changemakers like Mukund Bhai, who are working to build villages that are sustainable and aligned with nature. What stood out most was the role of education — the true anchor for change. It can empower youth to take charge of their communities and lead the way toward a better, more sustainable rural India.",
      initials: "SD",
    },
    {
      name: "Omkar",
      title: "Aurangabad, Maharashtra",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The overall impression of Bihar in the public mind is well known. However, rural areas in Bihar are an exception. The reason for this was that I met a well-wisher residing in a district called Supaul in Bihar and stayed there for some time. The difference in the experience of urban and rural life in Bihar was striking. Rural Bihar appears cleaner, beautiful, safe and prosperous in comparison. The abundant water and fertile land there enrich the rural life. This is a rural area in Bihar Instead of 'male-dominated' it should be called 'feminine-dominated' because all the domestic and agricultural work there is mainly done by women. The male class has largely migrated in search of work. This is the reason why the villages there are more attractive. In short, Bihar has succeeded in preserving the rural culture. May Bihar prosper in all things and prosper there. And finally, words are not enough to express my gratitude to Mukund Bhaiya for this unforgettable experience.",
      initials: "PS",
    },
    {
      name: "Dharmadas Ji",
      title: "Vivekananda Kendra, Kanyakumari",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Mukund's dedication is exemplary. His approach of combining modern curriculum with traditional values is exactly what rural India needs for a sustainable future. He is doing great job for nation building.",
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
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
          >
                      <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                      <Quote className="w-10 h-10 text-purple-300 mb-4" />
                                             <p className="text-gray-700 italic leading-relaxed flex-grow">"{testimonial.content}"</p>
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