import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function ShriClassesAdmission() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-[#0B1B33]/5 text-[#0B1B33] hover:bg-[#0B1B33]/10 border-0">
            Reach Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B33] mb-4 tracking-tight">
            The Door Is Open
          </h2>
          <p className="text-lg text-[#4A5468] leading-relaxed">
            Shri Classes doesn't run a formal admissions process. If you're ever in Raghopur and want to see
            a class, or simply want to talk, here's how to find us.
          </p>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-[#0B1B33] text-white overflow-hidden">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold mb-2">Talk to Us</h3>
              <p className="text-[#C9D2E0] mb-8 max-w-xl">
                Part of Divya Bihar Mission, based in Raghopur.
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

              <div className="flex justify-center border-t border-white/10 pt-8">
                <a
                  href="https://wa.me/919262536295?text=Namaste%2C%20I%27m%20interested%20in%20Shri%20Classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#C9D2E0] hover:text-white transition-colors border-b border-[#C9D2E0]/30 hover:border-white/60 pb-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Or reach us on WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
