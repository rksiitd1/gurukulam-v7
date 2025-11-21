// components/fellowship/fellowship-hero.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Target } from "lucide-react";
import Link from "next/link";

export function FellowshipHero() {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 text-white py-24 sm:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-8 border border-orange-500/30">
                        <Target className="w-4 h-4 mr-2" />
                        Divya Bihar Mission Fellowship
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                        Serve Beyond the System. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                            Serve from the Soil.
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Real nation-building doesn't always happen behind a desk or inside a government office. It happens here, on the ground, among the people.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#philosophy">
                            <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                                Read Our Philosophy
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="#apply">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-slate-300 border-slate-500 hover:bg-slate-800 hover:text-white font-medium px-8 py-6">
                                Apply Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}