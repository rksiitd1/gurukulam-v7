// components/internship/InternshipImpact.tsx

import { Code, GitBranch, Users, BrainCircuit, ShieldCheck, TrendingUp } from "lucide-react";

const impactAreas = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    title: "Solve High-Stakes Problems",
    description: "Work on challenges where the outcome directly impacts lives. Design systems for education, agriculture, and community health with immediate, measurable feedback from the real world.",
  },
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    title: "Build From Zero to One",
    description: "This is a greenfield opportunity. You won't be fixing legacy bugs. You will architect, design, and deploy mission-critical systems from the ground up, owning the entire product lifecycle.",
  },
  {
    icon: <GitBranch className="w-10 h-10 text-purple-500" />,
    title: "Develop Full-Stack Acumen",
    description: "Go beyond code. Learn resource allocation under extreme constraints, user-centric design through direct community interaction, and agile project management. This is the ultimate full-stack experience: Technology + Humanity.",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-500" />,
    title: "Direct Mentorship",
    description: "Work directly with our founder, an IITD alumnus, and a core team of dedicated professionals. This isn't a corporate hierarchy; it's a small, focused task force. Your ideas will be heard and valued.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-pink-500" />,
    title: "A Life-Altering Perspective",
    description: "Understand the complexities of India beyond the urban bubble. This experience will fundamentally change how you view engineering, society, and your own potential to create change.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-red-500" />,
    title: "An Unforgettable Portfolio",
    description: "Leave with more than just a certificate. You'll have a portfolio of deployed projects, tangible impact data, and a story that will set you apart in any future endeavor, be it a global tech company, a startup, or public service.",
  },
];

const InternshipImpact = () => {
  return (
    <section id="impact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            An Internship in Nation-Building
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            This is an opportunity to apply your world-class education to world-changing problems.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-2xl hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex-shrink-0 mb-6">{area.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-700 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipImpact;