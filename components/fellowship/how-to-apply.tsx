// components/fellowship/how-to-apply.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";

export function HowToApply() {
    return (
        <section id="apply" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Build Bharat?</h2>
                    <p className="text-xl text-gray-600">
                        If you believe Bihar can rise, and that serving the nation means serving its people...
                    </p>
                </div>

                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg overflow-hidden">
                    <CardContent className="p-8 sm:p-12 text-center">
                        <Mail className="w-16 h-16 text-orange-600 mx-auto mb-6" />

                        <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h3>

                        <div className="text-left max-w-lg mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-orange-200 mb-8">
                            <p className="font-medium text-gray-800 mb-4">Please send an email including:</p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">1</span> Your CV / Resume</li>
                                <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">2</span> A short Statement of Purpose (Why you?)</li>
                                <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">3</span> Relevant achievements or projects</li>
                                <li className="flex items-center"><span className="w-6 h-6 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center text-xs font-bold mr-3">4</span> Contact Details</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600 font-medium">Send your application to:</p>
                            <a
                                href="mailto:fellowship@divyabiharmission.com"
                                className="inline-flex items-center justify-center text-2xl sm:text-3xl font-bold text-orange-700 hover:text-orange-800 transition-colors underline decoration-orange-300 underline-offset-4"
                            >
                                fellowship@divyabiharmission.com
                            </a>
                        </div>

                        <div className="mt-10 pt-8 border-t border-orange-200">
                            <p className="font-devanagari text-xl text-gray-800 font-medium">
                                "आइए, साथी बनें। भारत के निर्माता बनें।"
                            </p>
                            <p className="text-gray-600 mt-1">Come. Be a Fellow. Be a Builder of Bharat.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}