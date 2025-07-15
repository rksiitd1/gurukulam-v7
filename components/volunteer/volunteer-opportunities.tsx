import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Sprout, Users, Code, PenSquare, Camera } from "lucide-react";

const opportunities = [
    {
        category: "On-Field Roles",
        roles: [
            {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: "Gurukulam Educator",
                description: "Teach subjects like Mathematics, Science, or English. Mentor students and assist with co-curricular activities.",
                skills: ["Passion for teaching", "Patience", "Subject knowledge"],
                commitment: "Minimum 3 months",
            },
            {
                icon: <Sprout className="w-8 h-8 text-green-600" />,
                title: "Agriculture Assistant",
                description: "Work on our demonstration farms, assist with organic farming, and help train local farmers in sustainable practices.",
                skills: ["Interest in farming", "Willingness to work outdoors"],
                commitment: "Flexible (Short & Long term)",
            },
            {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Community Coordinator",
                description: "Help organize community events, manage outreach programs, and facilitate workshops for women and youth.",
                skills: ["Good communication", "Organizational skills"],
                commitment: "Minimum 1 month",
            },
        ],
    },
    {
        category: "Remote & Skill-Based Roles",
        roles: [
            {
                icon: <PenSquare className="w-8 h-8 text-purple-600" />,
                title: "Content Creator",
                description: "Write blog posts, create social media content, and develop educational materials to share our story.",
                skills: ["Strong writing skills", "Creative thinking"],
                commitment: "Flexible (Part-time)",
            },
            {
                icon: <Code className="w-8 h-8 text-red-600" />,
                title: "Tech Support",
                description: "Assist with our website, manage digital tools, or help develop simple tech solutions for our programs.",
                skills: ["Web development", "IT support knowledge"],
                commitment: "Flexible (Project-based)",
            },
            {
                icon: <Camera className="w-8 h-8 text-yellow-600" />,
                title: "Photography/Videography",
                description: "Visit us to capture the essence of our work, or help edit and produce visual content remotely.",
                skills: ["Photography", "Videography", "Editing"],
                commitment: "Flexible (On-site or Remote)",
            },
        ]
    }
];

export function VolunteerOpportunities() {
    return (
        <section id="opportunities" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Find Your Way to
                        <span className="text-orange-600 block">Contribute</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Whether you can join us on the ground or support us from afar, there's a place for you in our mission.
                    </p>
                </div>

                {opportunities.map((category, index) => (
                    <div key={index} className="mb-16">
                        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 pb-2 border-b-2 border-orange-300">{category.category}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.roles.map((role, rIndex) => (
                                <Card key={rIndex} className="bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center space-x-4 mb-4">
                                            {role.icon}
                                            <h4 className="text-xl font-bold text-gray-900">{role.title}</h4>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{role.description}</p>
                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <h5 className="font-semibold text-sm text-gray-800 mb-2">Skills/Interests:</h5>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {role.skills.map((skill, sIndex) => (
                                                    <span key={sIndex} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-medium rounded-full">{skill}</span>
                                                ))}
                                            </div>
                                            <p className="text-xs text-orange-700 font-semibold">Commitment: {role.commitment}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}