// components/internship/InternshipRoles.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Leaf, BarChart2 } from "lucide-react";

const roles = [
  {
    id: "tech",
    title: "Tech for Impact Lead",
    icon: <Cpu className="w-8 h-8 text-white" />,
    badge: "Software & Systems",
    color: "from-blue-600 to-indigo-600",
    challenge: "Our Gurukulam's operations, from student admissions to academic performance tracking, are manual and inefficient. This consumes valuable teacher time that could be spent on mentoring students.",
    mission: "Design, develop, and deploy a lightweight, robust Gurukulam Management System. This includes a student information module, a performance analytics dashboard for teachers, and a low-bandwidth mobile interface for parents.",
    skills: ["React/Next.js", "Python (Django/Flask)", "Database Architecture (SQL/NoSQL)", "UI/UX Design Principles", "System Design"],
  },
  {
    id: "agri",
    title: "Sustainable Agriculture Innovator",
    icon: <Leaf className="w-8 h-8 text-white" />,
    badge: "Engineering & Data Science",
    color: "from-green-600 to-emerald-600",
    challenge: "Local farmers suffer from unpredictable yields due to erratic weather and inefficient water usage. They lack access to data-driven insights to optimize their organic farming practices.",
    mission: "Develop and implement a low-cost, IoT-based soil moisture and nutrient monitoring system. Create a simple data analytics platform to provide farmers with actionable advice on irrigation and organic inputs via SMS or a simple app.",
    skills: ["IoT/Embedded Systems (Arduino/Raspberry Pi)", "Data Analysis (Python/R)", "Mechanical/Agricultural Engineering", "Prototyping"],
  },
  {
    id: "data",
    title: "Impact Measurement Analyst",
    icon: <BarChart2 className="w-8 h-8 text-white" />,
    badge: "Data & Strategy",
    color: "from-purple-600 to-violet-600",
    challenge: "We know we are creating impact, but we need to quantify it effectively to secure future funding and scale our operations. Our data collection is fragmented across multiple, offline sources.",
    mission: "Establish a unified data collection framework across all our programs. Build automated dashboards to track Key Performance Indicators (KPIs) for education, agriculture, and entrepreneurship. Conduct a qualitative and quantitative impact assessment study.",
    skills: ["Data Analytics & Visualization (Tableau/PowerBI)", "Statistics", "Survey Design & Analysis", "Strategic Thinking"],
  },
];

const InternshipRoles = () => {
  return (
    <section id="roles" className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Choose Your Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            These are not tasks; they are missions. Each role comes with significant autonomy, responsibility, and the opportunity to create lasting impact.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {roles.map((role) => (
            <Card key={role.id} className={`bg-gradient-to-br ${role.color} text-white shadow-2xl flex flex-col`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="p-4 bg-white/20 rounded-lg">{role.icon}</div>
                <Badge variant="secondary" className="text-sm font-semibold">{role.badge}</Badge>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardTitle className="text-2xl font-bold mb-4">{role.title}</CardTitle>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-orange-300">The Challenge:</h4>
                  <p className="text-slate-200 mb-4">{role.challenge}</p>
                  <h4 className="font-semibold text-lg mb-2 text-orange-300">Your Mission:</h4>
                  <p className="text-slate-200 mb-6">{role.mission}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/20">
                  <h4 className="font-semibold text-md mb-3 text-slate-200">Skills Required:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="text-white border-white/50">{skill}</Badge>
                    ))}
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

export default InternshipRoles;