// components/fellowship/eligibility-offerings.tsx
import { CheckCircle, Heart, Lightbulb, Shield, Users, Wallet } from "lucide-react";

export function EligibilityOfferings() {
    const criteria = [
        "Prepared for/appeared in top exams (UPSC, State PCS, etc.)",
        "Graduated from premier institutions (IITs, NITs, AIIMS, etc.)",
        "Demonstrated excellence or deep expertise in any field",
        "Or simply carry a burning desire to create impact in rural Bihar"
    ];

    const offerings = [
        {
            icon: <Wallet className="w-6 h-6 text-green-600" />,
            title: "Basic Expenses Covered",
            desc: "We cover living and operational costs. This isn't a luxury fellowship; it's a sustenance model for service."
        },
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Purpose-Driven Community",
            desc: "Live and work with like-minded individuals who have chosen nation-building over corporate comfort."
        },
        {
            icon: <Shield className="w-6 h-6 text-orange-600" />,
            title: "Direct Ground Impact",
            desc: "No red tape. Work directly in villages, schools, and farms to see the visible change you create."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
            title: "Mentorship",
            desc: "Guidance from IIT alumni and experienced social workers involved in the Mission."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Who is this for? */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Who is this Fellowship for?</h2>
                        <p className="mt-4 text-lg text-gray-600">Knowledge. Skill. Passion. If you have these, you are welcome.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            {criteria.map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-orange-600 mt-1 mr-4 flex-shrink-0" />
                                    <span className="text-lg text-gray-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* What we offer */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">What the Fellowship Offers</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            This is not a fellowship of luxury — it is a fellowship of <span className="font-semibold text-orange-700">service, action, and nation-building.</span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {offerings.map((offer, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-orange-500">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                    {offer.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{offer.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}