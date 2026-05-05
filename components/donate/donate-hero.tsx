import { Button } from "@/components/ui/button"
import { Heart, ShieldCheck, ArrowRight, Sparkles, FileText, Download } from "lucide-react"

interface DonateHeroProps {
  onDonateClick: () => void;
}

export function DonateHero({ onDonateClick }: DonateHeroProps) {
  return (
    <section className="relative bg-[#FAFAF9] py-24 lg:py-32 overflow-hidden border-b border-orange-900/5">
      {/* Premium Background Mesh/Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-orange-200/40 to-red-300/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-t from-amber-200/40 to-orange-300/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 bg-white border border-orange-100 shadow-sm px-5 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-bold tracking-widest text-orange-800 uppercase">A Call to Build Bharat</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Transform Lives with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-orange-600">
              Radical Generosity
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
            Every rupee you donate is a brick in the foundation of rural Bihar. Join our mission to create self-reliant, educated, and culturally rooted communities.
          </p>

          <p className="text-2xl md:text-3xl font-devanagari text-orange-800/80 mb-12 font-semibold italic">
            "दान धर्म का सबसे उत्तम रूप है"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center w-full">
              {/* Primary Button */}
              <Button
                size="lg"
                className="group relative w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-10 py-7 text-lg md:text-xl rounded-2xl shadow-xl shadow-orange-600/30 transition-all hover:-translate-y-1 overflow-hidden"
                onClick={onDonateClick}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-3">
                  <Heart className="w-6 h-6 fill-white/20" />
                  Donate Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Secondary Button */}
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto border-2 border-orange-200 text-orange-900 bg-white/60 backdrop-blur-md hover:bg-white hover:border-orange-400 px-10 py-7 text-lg md:text-xl rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                asChild
              >
                <a href="/call-to-seva.html" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-3 text-orange-600" />
                  A Call to Seva
                </a>
              </Button>
            </div>

            {/* Subtle PDF Link */}
            <a 
              href="/call-to-seva.pdf" 
              download 
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors group mt-2"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="underline underline-offset-4 decoration-gray-300 group-hover:decoration-orange-600 transition-colors">
                Download as PDF document
              </span>
            </a>
          </div>
        </div>

        {/* Premium Trust Indicators */}
        <div className="mt-20 pt-10 border-t border-gray-200/60 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold text-gray-700">80G Tax Exempt</span>
            </div>
            <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold text-gray-700">12A Registered</span>
            </div>
            <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-base font-semibold text-gray-700">100% Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
