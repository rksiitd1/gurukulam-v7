import { Clock, Calendar, Camera, Shield, Heart, Home, HandHeart, GraduationCap } from "lucide-react"
import Link from "next/link"

export function VisitingInfo() {
  const visitTypes = [
    {
      type: "🏫 Campus Tour",
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      description:
        "Walk through our Gurukulam campus and experience the spaces where learning, simplicity, and service come together. This visit offers a glimpse into our classrooms, living areas, and daily life in the mission.",
      requirements: [
        "Kindly inform us in advance so we can warmly welcome you",
        "Come as you are, with curiosity and openness",
        "Families and well-wishers are always welcome",
      ],
      contact: "divyabiharmission@gmail.com",
    },
    {
      type: "🙌 Seva Opportunity",
      icon: <HandHeart className="w-6 h-6 text-green-500" />,
      description:
        "If you feel called to contribute your time, skills, or presence, we welcome you with open arms. Whether for a day or longer, there is always space for sincere service.",
      requirements: [
        "A desire to serve with humility",
        "Let us know in advance how you'd like to contribute",
        "No formalities—just sincerity and a smile",
      ],
      contact: "divyabiharmission@gmail.com",
    },
    {
      type: "🎓 Internship Opportunity",
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      description:
        "For students and seekers who wish to learn by doing, we offer internships that combine real experience with purpose-driven work in a nurturing environment.",
      requirements: [
        "Share your background and interests",
        "Let us know how you'd like to be involved",
        "Curiosity, openness, and a willingness to grow",
      ],
      contact: "divyabiharmission@gmail.com",
    },
    {
      type: "🤝 Partnership Meeting",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      description:
        "Let's connect to explore how we can support each other in creating meaningful impact—through collaborative efforts, shared values, and long-term engagement rooted in service.",
      requirements: [
        "Schedule a time with us",
        "Share a little about your journey or organization",
        "Bring your ideas and intention to serve",
      ],
      contact: "divyabiharmission@gmail.com",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Visit Information
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Plan Your
            <span className="text-purple-600 block">Campus Visit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our mission firsthand by visiting our campus. We welcome prospective students, parents, partners,
            and supporters to see our work and meet our community.
          </p>
          <p className="text-lg font-devanagari text-purple-700 mt-2">अपनी यात्रा की योजना बनाएं</p>
        </div>

        {/* Always Open Message */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white via-green-50 to-blue-50 rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden border border-green-100">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-pink-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-200 rounded-full opacity-40 animate-pulse delay-500"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-6 shadow-lg">
                <Home className="w-10 h-10 text-green-600" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Our Home is
                <span className="text-green-600 block">Always Open for You! 🏠</span>
              </h3>

              <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto leading-relaxed">
                Come as you are, whenever you can. Our doors are open 24/7, 365 days a year —
                <span className="font-semibold text-green-700"> no appointment needed!</span>
              </p>

              <p className="text-lg text-purple-600 mb-8 font-devanagari font-medium">हमारे दरवाजे आपके लिए हमेशा खुले हैं ❤️</p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-green-700">Welcome Anytime</span>
                </div>

                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-700">24/7 Open</span>
                </div>

                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-gray-700">365 Days</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 italic">"Just show up and we'll take care of the rest! ✨"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Come Be a Part of Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Come Be a Part of Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {visitTypes.map((visit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col relative"
              >
                <div className="flex items-start space-x-4 mb-6">
                  {visit.icon}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{visit.type}</h4>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{visit.description}</p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Requirements:</h5>
                    <div className="space-y-2">
                      {visit.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Contact to reach us:</p>
                    <a
                      href={`mailto:${visit.contact}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
                    >
                      📧 {visit.contact}
                    </a>
                  </div>
                </div>

                {/* Add buttons for Seva and Internship tiles - now in normal flow for better mobile UX */}
                {(visit.type === "🙌 Seva Opportunity" || visit.type === "🎓 Internship Opportunity") && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:bottom-8 md:right-8 md:left-auto md:translate-x-0 md:items-end">
                    {visit.type === "🙌 Seva Opportunity" && (
                      <Link
                        href="/volunteer"
                        aria-label="Apply to volunteer"
                        className="group inline-flex w-auto"
                      >
                        <span className="relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 shadow-lg transition-all duration-300 hover:shadow-xl">
                          <span className="inline-flex h-10 md:h-12 items-center justify-center gap-2 rounded-full bg-white px-5 md:px-6 text-sm md:text-base font-semibold text-green-700 ring-1 ring-black/5">
                            <HandHeart className="w-5 h-5 text-green-600" />
                            <span>Volunteer</span>
                            <svg className="w-4 h-4 text-green-700/80 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                          </span>
                        </span>
                      </Link>
                    )}
                    {visit.type === "🎓 Internship Opportunity" && (
                      <Link
                        href="/internship"
                        aria-label="Apply for internship"
                        className="group inline-flex w-auto"
                      >
                        <span className="relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 shadow-lg transition-all duration-300 hover:shadow-xl">
                          <span className="inline-flex h-10 md:h-12 items-center justify-center gap-2 rounded-full bg-white px-5 md:px-6 text-sm md:text-base font-semibold text-orange-700 ring-1 ring-black/5">
                            <GraduationCap className="w-5 h-5 text-orange-600" />
                            <span>Internships</span>
                            <svg className="w-4 h-4 text-orange-700/80 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                          </span>
                        </span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
