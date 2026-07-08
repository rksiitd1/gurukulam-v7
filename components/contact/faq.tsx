"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "The Vision & Ecosystem",
      questions: [
        {
          question: "Is Divya Bihar Mission just a school?",
          answer:
            "No. While the Divya Bihar Global Gurukulam is our anchor, DBM is a comprehensive civilizational model—a 'Rural Y-Combinator'. We operate across five pillars: Education (Gurukulam), Agriculture (Organic Farming & Gaushala), Enterprise (Udyamita), and Values (Sanskar). We are building a self-reliant rural ecosystem.",
        },
        {
          question: "Why focus entirely on rural Bihar instead of urban centers?",
          answer:
            "Because true national progress is impossible if we abandon our villages. Currently, our education system acts as a filter, pulling the brightest minds out of villages to serve global corporate machinery. We exist to reverse this brain drain. As our motto states: 'देश की आत्मा गाँवों में बसती है' (When villages rise, only then will the nation progress).",
        },
        {
          question: "What makes your educational approach different?",
          answer:
            "We integrate modern, tech-enabled pedagogy with Indian Knowledge Systems (IKS). We don't just prepare students for board exams; we root them deeply in cultural values (Sanskar) while equipping them with the scientific and analytical rigor required to solve real-world problems in their own communities.",
        },
      ],
    },
    {
      category: "Fellowships & Volunteering",
      questions: [
        {
          question: "I am a working professional or student. How can I contribute?",
          answer:
            "We offer multiple pathways. For serious builders, we run the DBM Rural Fellowship—a 6-12 month on-ground immersion to incubate scalable solutions in education and agriculture. We also welcome short-term volunteering and remote intellectual contributions (Man Seva). We need engineers, researchers, and operators who want to build zero-to-one solutions.",
        },
        {
          question: "Can I visit the campus in Raghopur without a formal appointment?",
          answer:
            "Yes. Our doors are always open to seekers, builders, and well-wishers. Come as you are, see the ground reality, interact with the students and farmers, and understand the ecosystem. We believe transparency is built through direct human connection.",
        },
      ],
    },
    {
      category: "Local Programs & Community",
      questions: [
        {
          question: "How does the Gurukulam and Shri Classes admission process work?",
          answer:
            "We focus on intent, potential, and need rather than rigid filtering. Admissions to our programs are open to local rural youth. We maintain minimal fees to ensure the dignity of the parents, but no deserving child is ever turned away due to financial constraints.",
        },
        {
          question: "How does the Agriculture and Gaushala program help the local community?",
          answer:
            "Our 10-Acre Demo Farm and Dhatri Godham (Gaushala) serve as live training centers. We train local farmers in organic practices, ecological restoration, and high-yield farming. We actively protect indigenous cattle breeds and integrate them into a sustainable, zero-waste agricultural cycle.",
        },
      ],
    },
    {
      category: "Support & Donations",
      questions: [
        {
          question: "Is my financial contribution tax-exempt?",
          answer:
            "Yes. Divya Bihar Mission is a registered public charitable trust (Reg: AAETD5010DE20241) spearheaded by a collective of IIT alumni. All financial contributions are eligible for a 50% tax exemption under Section 80G of the Income Tax Act.",
        },
        {
          question: "I want to sponsor a specific project (like a Smart Board). Is that possible?",
          answer:
            "Absolutely. We believe in absolute tangibility. People don't donate to abstract ideas; they donate to tangible outcomes. You can direct your 'Vidya Daan' to sponsor a specific asset like a Smart Board, adopt a child's education for a year, or fund our 10-Acre Demo Farm. Please reach out to our team to discuss specific funding requirements.",
        },
        {
          question: "How do I know where my money is being utilized?",
          answer:
            "We operate with the strict financial transparency of an audited institution. You will receive regular, data-backed impact reports, photographs of the assets you funded, and an open invitation to visit our campus in Supaul to witness your contribution at work.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Common
            <span className="text-blue-600 block">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most commonly asked questions about us, our programs, and how you
            can get involved with our mission.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">अक्सर पूछे जाने वाले प्रश्न</p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-r from-white via-gray-50 to-blue-50/30 rounded-lg border-l-4 border-blue-600 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-mono tracking-tight border-b-2 border-blue-200 pb-3">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card key={faqIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900 p-10 text-white border-l-4 border-blue-500 shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-mono tracking-tight mb-6 text-blue-100">Still Have Questions?</h3>
            <p className="text-lg font-medium text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our
              programs, admissions, or how to get involved.
            </p>
            <p className="font-devanagari text-xl text-blue-200 mb-10">अभी भी कोई प्रश्न है?</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="mailto:contact@divyabiharmission.com"
                className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 font-bold font-mono tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center border-2 border-transparent hover:border-blue-300"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                Ask a Question
              </a>
              <a
                href="tel:+919262536295"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-bold font-mono tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Call Us Now
              </a>
            </div>

            <div className="bg-slate-700/50 p-6 border-l-2 border-blue-400">
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <p className="font-semibold">
                  Email: <span className="text-blue-300">contact@divyabiharmission.com</span>
                </p>
                <p className="font-semibold">
                  Phone: <span className="text-blue-300">+91 92625 36295</span>
                </p>
                <p className="text-xs text-gray-400 mt-3">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}