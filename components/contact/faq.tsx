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
          question: "I am a working professional / student. How can I contribute?",
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
      category: "Donations & Trust",
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
  ]

  return (
    <section className="py-20 bg-[#FDF9F1]"> {/* Warm Sand background from Brand Book */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#261912] mb-4" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>
            Common
            <span className="text-[#B3391A] block">Inquiries</span> {/* Deep Terracotta */}
          </h2>
          <p className="text-xl text-[#665B54] max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
            Find answers about our civilizational model, programs, fellowships, and how you can contribute to building Bharat.
          </p>
          <p className="text-lg text-[#B3391A] mt-2" style={{ fontFamily: 'var(--font-rozha, serif)' }}>अक्सर पूछे जाने वाले प्रश्न</p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg border-l-4 border-[#B3391A] p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#261912] mb-6 tracking-tight border-b border-orange-100 pb-3" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card key={faqIndex} className="border border-gray-100 shadow-none hover:border-orange-200 transition-colors">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-5 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors"
                        >
                          <h4 className="text-[17px] font-semibold text-[#261912] pr-4" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#B3391A] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1">
                            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                              {faq.answer}
                            </p>
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
        <div className="mt-16 bg-[#261912] p-10 text-[#FDF9F1] border-l-4 border-[#C2933D] shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-dm-serif, serif)' }}>Still Have Questions?</h3>
            <p className="text-lg font-medium text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
              Whether you want to sponsor a classroom, apply for the Rural Fellowship, or simply understand our systems better—we are just a message away.
            </p>
            <p className="text-xl text-[#C2933D] mb-10" style={{ fontFamily: 'var(--font-rozha, serif)' }}>अभी भी कोई प्रश्न है?</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="mailto:contact@divyabiharmission.com"
                className="bg-[#B3391A] text-white hover:bg-[#8f2d15] px-8 py-4 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center rounded-sm"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                Ask a Question
              </a>
              <a
                href="tel:+919262536295"
                className="border-2 border-white/20 text-white hover:bg-white hover:text-[#261912] px-8 py-4 font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center rounded-sm"
              >
                Call Us Now
              </a>
            </div>

            <div className="bg-white/5 p-6 border-l-2 border-[#164928] max-w-xl mx-auto text-left">
              <div className="text-sm text-gray-300 space-y-2" style={{ fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                <p className="font-semibold">
                  Email: <span className="text-[#C2933D]">contact@divyabiharmission.com</span>
                </p>
                <p className="font-semibold">
                  Phone: <span className="text-[#C2933D]">+91 92625 36295</span>
                </p>
                <p className="text-xs text-gray-400 mt-3 italic">We humbly accept and respect every inquiry. Our team will respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}