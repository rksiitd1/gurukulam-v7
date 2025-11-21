// components/internship/InternshipTestimonials.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Heart, Mic } from "lucide-react";

const values = [
  {
    title: "Frugal Innovation",
    description: "We don't complain about resources; we get creative. You will learn to design high-impact solutions using low-cost, locally available materials. It's about solving problems with your brain, not just your budget.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    color: "border-yellow-500",
  },
  {
    title: "Empathy in Action",
    description: "Designs don't happen in a vacuum. You will live among the community, eat the same food, and understand their daily struggles. True engineering starts with deep empathy for the user.",
    icon: <Heart className="w-8 h-8 text-red-400" />,
    color: "border-red-500",
  },
  {
    title: "Voice for the Voiceless",
    description: "Your work isn't just about code or crops; it's about dignity. Whether you are documenting a story or building a tool, you are amplifying the potential of rural India to the world.",
    icon: <Mic className="w-8 h-8 text-blue-400" />,
    color: "border-blue-500",
  },
];

const InternshipTestimonials = () => {
  return (
    <section className="py-20 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The Intern Mindset
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            We don't just look for skills; we look for the right spirit. This is what defines life at the mission.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className={`bg-slate-800 border-t-4 ${value.color} border-x-0 border-b-0 text-white hover:bg-slate-750 transition-colors`}>
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6 p-3 bg-slate-700/50 rounded-full w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <blockquote className="text-base text-slate-300 leading-relaxed">
                  "{value.description}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTestimonials;