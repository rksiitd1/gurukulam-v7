import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: 1,
    title: "Reach Out",
    description: "Call or message us on WhatsApp — tell us which class your child is in.",
  },
  {
    step: 2,
    title: "Sit In on a Class",
    description: "Come see a session in person, or try a sample DPP, before deciding anything.",
  },
  {
    step: 3,
    title: "Join a Batch",
    description: "Once you're ready, your child starts with that day's Daily Practice Problem.",
  },
]

export function ShriClassesAdmission() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-[#0B1B33]/5 text-[#0B1B33] hover:bg-[#0B1B33]/10 border-0">
            Join Shri Classes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B33] mb-4 tracking-tight">
            Getting Started Is Simple
          </h2>
          <p className="text-lg text-[#4A5468] leading-relaxed">
            No forms, no documents, no waiting list. If your child is struggling in any subject, from Class 9
            to Class 12, the door is open.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((item) => (
              <Card key={item.step} className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#0B1B33] text-white font-semibold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#0B1B33] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5B6478] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-[#0B1B33] text-white overflow-hidden">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold mb-2">Talk to Us</h3>
              <p className="text-[#C9D2E0] mb-8 max-w-xl">
                Reach the Shri Classes team directly — part of Divya Bihar Mission, based in Raghopur.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center gap-2">
                  <MapPin className="w-6 h-6 text-[#C7A354]" />
                  <div className="font-semibold text-sm">Visit Us</div>
                  <div className="text-sm text-[#C9D2E0] leading-snug">
                    Raghopur, Supaul District
                    <br />
                    Bihar, India – 852111
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Phone className="w-6 h-6 text-[#C7A354]" />
                  <div className="font-semibold text-sm">Call Us</div>
                  <a href="tel:+919262536295" className="text-sm text-[#C9D2E0] hover:text-white transition-colors">
                    +91 92625 36295
                  </a>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Mail className="w-6 h-6 text-[#C7A354]" />
                  <div className="font-semibold text-sm">Email Us</div>
                  <a
                    href="mailto:contact@divyabiharmission.com"
                    className="text-sm text-[#C9D2E0] hover:text-white transition-colors"
                  >
                    contact@divyabiharmission.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center border-t border-white/10 pt-8">
                <Button size="lg" className="bg-[#C7A354] hover:bg-[#B8924A] text-[#0B1B33] font-semibold" asChild>
                  <Link
                    href="https://wa.me/919262536295?text=Namaste%2C%20I%27m%20interested%20in%20Shri%20Classes."
                    target="_blank"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message on WhatsApp
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link href="/contact">
                    Send an Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
