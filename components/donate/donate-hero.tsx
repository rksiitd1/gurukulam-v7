import { Button } from "@/components/ui/button"
import { Heart, Users, GraduationCap, Sprout, TrendingUp } from "lucide-react"

interface DonateHeroProps {
  onDonateClick: () => void;
}

export function DonateHero({ onDonateClick }: DonateHeroProps) {
  const stats = [
    { icon: Users, value: "2,500+", label: "Lives Transformed", color: "text-blue-600" },
    { icon: GraduationCap, value: "850+", label: "Students Educated", color: "text-green-600" },
    { icon: Sprout, value: "150+", label: "Farmers Supported", color: "text-emerald-600" },
    { icon: TrendingUp, value: "45+", label: "Entrepreneurs Created", color: "text-purple-600" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#FFF9F2] via-[#FFF1E5] to-[#FFE8D6] py-24 overflow-hidden border-b border-orange-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-red-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Support Our Mission</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Lives with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Your Donation
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every rupee you donate directly impacts rural Bihar communities through education, sustainable agriculture,
            and entrepreneurship programs. Join us in building a brighter future.
          </p>

          <p className="text-lg font-devanagari text-orange-700 mb-8">
            "दान धर्म का सबसे उत्तम रूप है" - Your generosity creates lasting change
          </p>

          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-7 text-lg rounded-xl shadow-xl shadow-orange-600/20 transition-all duration-300 hover:scale-105"
                onClick={onDonateClick}
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-200 text-orange-800 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-orange-300 hover:text-orange-900 px-10 py-7 text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                asChild
              >
                <a href="/call-to-seva.html" target="_blank" rel="noopener noreferrer">
                  Read Call to Seva
                </a>
              </Button>
            </div>
            <a href="/call-to-seva.pdf" download className="mt-6 text-sm font-medium text-orange-700/70 hover:text-orange-700 transition-colors flex items-center gap-1.5 group">
              <span className="underline underline-offset-4 decoration-orange-700/30 group-hover:decoration-orange-700">Or download as PDF</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
          </div>
        </div>

        {/* <!-- Impact Stats -->
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">80G Tax Exemption</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">12A Registered</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">100% Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
