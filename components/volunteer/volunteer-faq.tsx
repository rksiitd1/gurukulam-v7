"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function VolunteerFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  const faqs = [
    {
      question: "What are the basic requirements to volunteer?",
      answer: "The primary requirement is a genuine passion for selfless service (Seva) and alignment with our mission. For on-site roles, you must be over 18. Specific roles may have additional skill requirements, which are listed in the opportunities section."
    },
    {
      question: "Do I need to know Hindi to volunteer on-site?",
      answer: "While knowing Hindi is very helpful for deeper community interaction, it is not a strict requirement for all roles. A willingness to learn and adapt is more important. We have bilingual team members who can assist."
    },
    {
      question: "Is there a minimum time commitment?",
      answer: "The time commitment varies by role. On-site teaching roles typically require a minimum of 3 months to build a rapport with students. However, we also offer flexible short-term and project-based roles. Please check the specific opportunity for details."
    },
    {
      question: "Are accommodation and food provided for on-site volunteers?",
      answer: "Yes, for long-term on-site volunteers (commitment of 1 month or more), we provide simple, shared accommodation and nutritious vegetarian meals at our campus at no cost."
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Absolutely! We have several remote opportunities in areas like content creation, web support, and curriculum development. This is a great way to contribute your skills from anywhere in the world."
    },
    {
      question: "What is the application process like?",
      answer: "It's simple! You can start by sending us a quick message on WhatsApp. We'll have an informal chat to understand your interests. Alternatively, you can fill out our Google Form for a more detailed application. This is followed by a short online interview with our team."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Volunteer FAQs
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Questions
            <span className="text-blue-600 block">Answered</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
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
    </section>
  )
}