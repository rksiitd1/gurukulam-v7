// components/internship/InternshipHero.tsx

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Target } from "lucide-react";

const InternshipHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
            <Target className="w-4 h-4 mr-2" />
            A Call to Nation Builders
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            The Ultimate Engineering Challenge
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Your problem-solving skills are needed to tackle some of India's most complex grassroots challenges. This isn't about optimizing ad revenue. It's about optimizing lives.
          </p>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            An invitation from an IIT Delhi alumnus to the brightest minds of India: Leave the simulation. Enter the real world.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#roles">
              <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105">
                View Open Missions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#impact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-slate-600 border-slate-600 hover:bg-slate-700 hover:text-white font-medium px-8 py-6">
                Why This Matters
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipHero;