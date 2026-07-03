import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function ShriClassesAdmission() {
  return (
    <section className="py-16 lg:py-24 bg-[#FDFBF6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A9812F]">
            Reach Us
          </span>
          <h2 className="font-[family-name:var(--font-source-serif)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#16284A] mt-3 mb-4 tracking-tight">
            The Door Is Open
          </h2>
          <p className="text-lg text-[#3E4A61] leading-relaxed">
            Shri Classes doesn't run a formal admissions process. If you're ever in Raghopur and want to see
            a class, or simply want to talk, here's how to find us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8 border-t border-b border-[#16284A]/12 py-10">
          <div className="text-center">
            <MapPin className="w-5 h-5 text-[#A9812F] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-semibold text-sm text-[#16284A] mb-1">Visit Us</div>
            <p className="text-sm text-[#6B7488] leading-snug">
              Raghopur, Supaul District
              <br />
              Bihar, India – 852111
              <br />
              <span className="text-xs text-[#8B95AA]">~200m from Raghopur Railway Station</span>
            </p>
          </div>
          <div className="text-center">
            <Phone className="w-5 h-5 text-[#A9812F] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-semibold text-sm text-[#16284A] mb-1">Call Us</div>
            <a href="tel:+919262536295" className="text-sm text-[#6B7488] hover:text-[#16284A] transition-colors">
              +91 92625 36295
            </a>
          </div>
          <div className="text-center">
            <Mail className="w-5 h-5 text-[#A9812F] mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-semibold text-sm text-[#16284A] mb-1">Email Us</div>
            <a
              href="mailto:contact@divyabiharmission.com"
              className="text-sm text-[#6B7488] hover:text-[#16284A] transition-colors break-all"
            >
              contact@divyabiharmission.com
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/919262536295?text=Namaste%2C%20I%27m%20interested%20in%20Shri%20Classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#16284A] hover:text-[#2B4F8C] transition-colors border-b border-[#16284A]/30 hover:border-[#2B4F8C] pb-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Or reach us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
