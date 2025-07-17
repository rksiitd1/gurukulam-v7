import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"

export function TeamProfiles() {
  const coreTeam = [
    {
      name: "Shri Mukund Agrawal",
      title: "Founder & Acharya",
      titleHindi: "संस्थापक एवं आचार्य",
      education: "B.Tech Mechanical Engineering, IIT Delhi",
      experience: "6+ years in education and grassroot work",
      specialization: "Educational Leadership, Rural Development",
      description:
        'Visionary leader who left corporate opportunities to serve rural Bihar. Known affectionately as "Golu Sir" by students whose lives he has touched, he represents the rare combination of modern educational insight and deep spiritual wisdom.',
      image: "/images/team/mukund.jpg",
      contact: {
        email: "mukund@divyabiharmission.in",
        phone: "+91 98765 43210",
      },
      achievements: [
        "Founded Divya Bihar Mission in 2018",
        "Educated 500+ rural students",
        "Established sustainable farming models",
        "State recognition for educational innovation",
      ],
    },
    {
      name: "Raju Kumar Jha",
      title: "Senior Acharya",
      titleHindi: "वरिष्ठ आचार्य",
      education: "M.Sc. Patna University",
      experience: "6+ years in education",
      specialization: "Youth Guide/Mentor, Faculty Training",
      description:
        "A dedicated educator with deep roots in Bihar's educational landscape, Raju Sir brings transformative vision to rural learning. With his value-integrated pedagogy, he has revolutionized how traditional wisdom meets modern curriculum standards.",
      image: "/images/team/raju.jpg",
      contact: {
        email: "priya@divyabiharmission.in",
        phone: "+91 98765 43211",
      },
      achievements: [
        "Developed integrated curriculum model",
        "Trained 50+ rural teachers",
        "95% student success rate",
        "Expert in bilingual education",
      ],
    },
    {
      name: "Sanjay Kumar",
      title: "Gurukulam Faculty",
      titleHindi: "गुरुकुलम शिक्षक",
      education: "B.A. Madhepura University",
      experience: "3+ years in Education",
      specialization: "Education, Community Relations",
      description:
        "The organizational backbone of Divya Bihar Mission, while being a dedicated faculty, Sanjay ji manages day-to-day operations, financial planning, and community outreach. Ensures smooth functioning of all programs.",
      image: "/images/team/sanjay.jpg",
      contact: {
        email: "rajesh@divyabiharmission.in",
        phone: "+91 98765 43212",
      },
      achievements: [
        "Streamlined operations across 15 villages",
        "Maintained 100% financial transparency",
        "Built strong community partnerships",
        "Expert in rural project management",
      ],
    },
    {
      name: "Vivek Kumar",
      title: "Gurukulam Faculty",
      titleHindi: "गुरुकुलम शिक्षक",
      education: "B.Sc. Physics(Hons.), BNMU",
      experience: "3+ years in education, rural community work",
      specialization: "Education, Organic Farming",
      description:
        "Born into a farming family in rural Bihar, Vivek ji represents the perfect blend of traditional wisdom and modern sustainable practices. While being a great faculty, he leads our organic farming and agroforestry models suitable for Bihar's climate.",
      image: "/images/team/vivek.jpg",
      contact: {
        email: "sunita@divyabiharmission.in",
        phone: "+91 98765 43213",
      },
      achievements: [
        "Trained 200+ farmers in organic methods",
        "Increased farm productivity by 40%",
        "Established 50-acre demonstration farm",
        "Expert in indigenous seed preservation",
      ],
    },
    {
      name: "Ratnesh Sharma",
      title: "Faculty Member",
      titleHindi: "शिक्षक",
      education: "B.Tech Biotechnology, IIT Delhi",
      experience: "2+ years in education",
      specialization: "Community Engagement, Teaching",
      description:
        "Ratnesh is dedicated to supporting students and community programs, bringing energy and care to every initiative.",
      image: "/images/team/ratnesh.jpg",
      contact: {
        email: "ratnesh@divyabiharmission.in",
        phone: "",
      },
      achievements: [
        "Active in community outreach",
        "Supports academic and extracurricular activities",
      ],
    },
    {
      name: "Mukul Das",
      title: "Krida Acharya & Senior Social Worker",
      titleHindi: "क्रीड़ा आचार्य एवं वरिष्ठ समाजसेवी",
      education: "20+ years as a principal in various schools",
      experience: "20+ years in social work and community development",
      specialization: "Physical Education, Sports Training, Student Wellness",
      description:
        "A veteran social worker with over two decades of unwavering dedication to rural Bihar's upliftment, Mukul ji embodies the true spirit of seva and community service. As our Krida Acharya, he believes that physical fitness and mental strength are the foundations of a strong society."
      image: "/images/team/mukul.jpg",
      contact: {
        email: "mukul@divyabiharmission.in",
        phone: "",
      },
      achievements: [
        "Mentors students in academics and values",
        "Helps manage daily school operations",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet the
            <span className="text-blue-600 block">Dedicated Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate group of educators, social workers, and development professionals committed to transforming
            rural Bihar through education and empowerment.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">समर्पित टीम से मिलें</p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {coreTeam.map((member, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative mx-auto">
                      <div className="w-40 h-48 mx-auto relative transform group-hover:scale-105 transition-transform duration-500">
                        {/* Background Frame */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-blue-700 to-indigo-800 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-xl"></div>
                        {/* Inner Frame */}
                        <div className="absolute inset-1 bg-gradient-to-br from-slate-500 via-blue-600 to-indigo-700 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                        {/* Image Container */}
                        <div className="relative w-full h-full p-2">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={160}
                            height={192}
                            className="relative w-full h-full object-cover shadow-2xl border-4 border-white group-hover:border-slate-200 transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                        {/* Corner Accent */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-slate-600 to-blue-700 transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-lg border-2 border-white"></div>
                        {/* Bottom Shadow Effect */}
                        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/15 blur-xl transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-lg font-semibold text-blue-600">{member.title}</p>
                      <p className="text-md font-devanagari text-gray-600">{member.titleHindi}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{member.education}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700">{member.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">{member.specialization}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-lg opacity-90 mb-6">
            We're always looking for passionate individuals who want to make a difference in rural education and
            development.
          </p>
          <p className="font-devanagari text-lg opacity-90 mb-6">हमारे मिशन में शामिल हों</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Career Opportunities
            </button>
            <a href="/volunteer" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
