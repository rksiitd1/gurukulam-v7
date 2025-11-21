// components/fellowship/the-philosophy.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function ThePhilosophy() {
    return (
        <section id="philosophy" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: The Argument */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Not every patriot wears a uniform. <br />
                            <span className="text-orange-600">Some build villages.</span>
                        </h2>

                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Many aspire to paths like the IAS because they want to <em>serve the country</em>. But often, once inside the machinery, the dream of reform gets entangled in the system itself. You become an official, an administrator—but are you still a changemaker?
                            </p>
                            <p>
                                <strong>Real ground-level change demands something different.</strong>
                            </p>
                            <p>
                                It demands presence on the ground, freedom from rigid protocols, and a direct commitment to the people. It requires you to be an actor, not just an official.
                            </p>
                            <p>
                                Our fellowship is for those who feel a deep calling to serve Bihar and Bharat—not as officials behind air-conditioned desks, but as builders living among the communities they wish to uplift.
                            </p>
                        </div>
                    </div>

                    {/* Right: The Quote/Highlight */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-100 rounded-full -z-10"></div>
                        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-2xl">
                            <CardContent className="p-10 flex flex-col justify-center min-h-[400px]">
                                <Quote className="w-12 h-12 text-orange-500 mb-6 opacity-80" />
                                <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-100">
                                    "We do not believe that only officers and positions create change. We believe people create change."
                                </blockquote>
                                <div className="mt-8 pt-8 border-t border-slate-700">
                                    <p className="text-orange-400 font-semibold text-lg">Divya Bihar Mission</p>
                                    {/* <p className="text-slate-400 text-sm mt-1">Core Belief</p> */}
                                </div>
                            </CardContent>
                        </Card>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full -z-10 opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}