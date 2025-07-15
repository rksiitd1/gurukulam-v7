"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function VolunteerSignup() {
    const [name, setName] = useState('');
    const [interest, setInterest] = useState('');

    const handleWhatsAppApply = () => {
        const message = encodeURIComponent(
            `Hello Divya Bihar Mission,\n\nI'm interested in volunteering. \n\nMy Name: ${name}\nMy Area of Interest: ${interest}\n\nPlease let me know the next steps.\n\nThank you!`
        );
        const whatsappLink = `https://wa.me/919262536295?text=${message}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <section id="apply" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Take the
                    <span className="text-green-600 block">First Step?</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                    Applying is easy. Connect with us directly on WhatsApp for a quick chat, or fill out our detailed form if you prefer.
                </p>

                <div className="bg-gradient-to-br from-green-50 to-orange-50 p-8 rounded-2xl shadow-lg border">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Apply via WhatsApp</h3>
                    <div className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <Label htmlFor="name" className="font-semibold">Your Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-white"
                            />
                        </div>
                        <div>
                            <Label htmlFor="interest" className="font-semibold">Area of Interest</Label>
                            <Input
                                id="interest"
                                type="text"
                                placeholder="e.g., Teaching, Agriculture"
                                value={interest}
                                onChange={(e) => setInterest(e.target.value)}
                                className="bg-white"
                            />
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full max-w-md"
                        onClick={handleWhatsAppApply}
                        disabled={!name || !interest}
                    >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Send a Message on WhatsApp
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500 font-semibold">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="mt-8">
                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prefer a Detailed Application?</h3>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_9-_9qvt_Ld4Yc22CqKso_w2a6yG5j9pYpZl8rXJ8aXJ0Ww/viewform" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="border-orange-600 text-orange-700 hover:bg-orange-50">
                            <FileText className="w-5 h-5 mr-2" />
                            Fill Our Google Form
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}