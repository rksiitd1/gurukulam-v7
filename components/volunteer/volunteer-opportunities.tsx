import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sprout, Users, Code, PenSquare, Camera, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

const sevaPaths = [
    {
        sevaType: "Tan Seva",
        sevaTypeHindi: "तन सेवा",
        description: "Offer your physical presence and effort. Join us on the ground to serve the community directly.",
        color: "green",
        opportunities: [
            {
                icon: <BookOpen />,
                title: "Ignite Minds as an Educator",
                details: "Mentor and teach at our Gurukulam, shaping the next generation with knowledge and values.",
                commitment: "3-6 months commitment",
            },
            {
                icon: <Sprout />,
                title: "Nurture the Land with Farmers",
                details: "Work on our organic farms, promote sustainable agriculture, and empower our farming community.",
                commitment: "1-3 months commitment",
            },
            {
                icon: <Users />,
                title: "Strengthen the Community",
                details: "Organize workshops, health camps, and cultural events that bring our villages together.",
                commitment: "Flexible commitment",
            },
        ],
    },
    {
        sevaType: "Man Seva",
        sevaTypeHindi: "मन सेवा",
        description: "Offer your intellectual and creative skills. Support our mission from anywhere in the world.",
        color: "orange",
        opportunities: [
            {
                icon: <PenSquare />,
                title: "Weave Our Story",
                details: "Use your writing skills to create compelling content, grant proposals, and social media posts.",
                commitment: "Flexible & Remote",
            },
            {
                icon: <Code />,
                title: "Build Our Digital Ashram",
                details: "Lend your tech expertise to enhance our website, develop learning tools, and improve our digital outreach.",
                commitment: "Project-based & Remote",
            },
            {
                icon: <Camera />,
                title: "Capture the Spirit of Seva",
                details: "Document our journey through photography and videography, either on-site or by editing remotely.",
                commitment: "Flexible (On-site/Remote)",
            },
        ]
    }
];

const getColorClasses = (color: "green" | "orange") => {
    if (color === 'green') {
        return {
            bg: 'bg-green-50',
            border: 'border-green-600',
            text: 'text-green-600',
            button: 'bg-green-600 hover:bg-green-700',
        };
    }
    return {
        bg: 'bg-orange-50',
        border: 'border-orange-600',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
    };
};


export function VolunteerOpportunities() {
    return (
        <section id="opportunities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-orange-800 rounded-full text-sm font-medium mb-4 shadow-sm">
                        <Heart className="w-4 h-4 mr-2 text-orange-600" />
                        An Invitation to Serve
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Offer Your Seva: Body & Mind
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-devanagari">
                        तन, मन से हमारे इस सेवा यज्ञ में अपनी आहुति दें।
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {sevaPaths.map((path) => {
                        const colors = getColorClasses(path.color as "green" | "orange");
                        return(
                            <div key={path.sevaType} className={`p-8 rounded-2xl shadow-lg border-t-4 ${colors.border} ${colors.bg}`}>
                                <div className="text-center mb-8">
                                    <h3 className={`text-3xl font-bold ${colors.text}`}>{path.sevaType}</h3>
                                    <p className={`text-2xl font-devanagari mt-1 ${colors.text}`}>{path.sevaTypeHindi}</p>
                                    <p className="mt-2 text-gray-600">{path.description}</p>
                                </div>
                                <div className="space-y-6">
                                    {path.opportunities.map((opp) => (
                                        <Card key={opp.title} className="bg-white hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                            <div className="p-5 flex items-start space-x-4">
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${colors.bg} ${colors.text}`}>
                                                    {opp.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-800">{opp.title}</h4>
                                                    <p className="text-sm text-gray-600 mt-1">{opp.details}</p>
                                                    <p className={`mt-2 text-xs font-semibold ${colors.text}`}>{opp.commitment}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center mt-16">
                    <p className="text-lg text-gray-700 mb-6">Every act of service, big or small, helps us build a brighter future for Bihar.</p>
                    <Link href="#apply">
                        <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Apply to Volunteer
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}