// components/internship/InternshipTestimonials.tsx

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    college: "IIT Delhi, Computer Science",
    role: "Tech for Impact Intern, Summer '24",
    quote: "I wrote more meaningful code in 8 weeks here than during my entire previous internship at a big tech firm. Seeing the teachers use the system I built, and knowing it saves them hours every day... that's a different level of satisfaction. This isn't just resume-building; it's character-building.",
    image: "/images/team/placeholder-male-1.jpg",
  },
  {
    name: "Priya Singh",
    college: "NIT Trichy, Civil Engineering",
    role: "Sustainable Agriculture Intern, Summer '24",
    quote: "My coursework was all theory. Here, I designed a real, low-cost rainwater harvesting system that is now being implemented. I learned more about frugal innovation and user-centric design in two months than in two years of college. You learn to solve problems with your brain, not just with a budget.",
    image: "/images/team/placeholder-female-1.jpg",
  },
  {
    name: "Rohan Verma",
    college: "BITS Pilani, Economics & Finance",
    role: "Impact Measurement Intern, Summer '24",
    quote: "The 'impact' in a corporate ESG report feels abstract. Here, I was on the ground, interviewing farmers and students, collecting data, and building a model that directly influences strategy. This experience gave me a clarity of purpose that no corporate internship could ever offer.",
    image: "/images/team/placeholder-male-2.jpg",
  },
];

const InternshipTestimonials = () => {
  return (
    <section className="py-20 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Voices from the Field
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Perspectives from past interns who took the challenge.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-8">
                <blockquote className="text-lg text-slate-200 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.college}</p>
                    <p className="text-xs text-orange-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTestimonials;