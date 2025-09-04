"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, CheckCircle, Heart, User, Mail, Phone, IndianRupee, BookOpen, Sprout, Star, Award, Users } from "lucide-react";
import useRazorpay from "@/hooks/useRazorpay";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import Image from "next/image";

declare global {
  interface Window { Razorpay: any; }
}

interface DonationFormProps {
  initialAmount?: number;
  onPaymentStart?: () => void;
}

export function DonationForm({ initialAmount, onPaymentStart }: DonationFormProps) {
  const isRazorpayLoaded = useRazorpay();
  const { toast } = useToast();

  const [amount, setAmount] = useState(initialAmount?.toString() || "");
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });

  const predefinedAmounts = ["500", "2000", "5000", "10000"];

  useEffect(() => {
    if (initialAmount) {
      if (predefinedAmounts.includes(initialAmount.toString())) {
        setAmount(initialAmount.toString());
        setCustomAmount("");
      } else {
        setCustomAmount(initialAmount.toString());
        setAmount("");
      }
    }
  }, [initialAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const finalAmount = useMemo(() => Number(customAmount) || Number(amount) || 0, [customAmount, amount]);

  const impactMessage = useMemo(() => {
    if (finalAmount >= 10000) return { 
      icon: <Award className="w-10 h-10 text-amber-600" />, 
      text: "Your generous contribution will fund a complete scholarship for a deserving student, transforming their entire future.", 
      highlight: "Life-Changing Impact",
      color: "from-amber-100 to-yellow-100 border-amber-200"
    };
    if (finalAmount >= 5000) return { 
      icon: <Sprout className="w-10 h-10 text-emerald-600" />, 
      text: "You're empowering farmers with sustainable agriculture training that will benefit generations.", 
      highlight: "Community Empowerment",
      color: "from-emerald-100 to-green-100 border-emerald-200"
    };
    if (finalAmount >= 2000) return { 
      icon: <BookOpen className="w-10 h-10 text-blue-600" />, 
      text: "You're providing essential educational resources that will inspire young minds to dream bigger.", 
      highlight: "Educational Support",
      color: "from-blue-100 to-sky-100 border-blue-200"
    };
    if (finalAmount >= 500) return { 
      icon: <Heart className="w-10 h-10 text-rose-600" />, 
      text: "Your kindness will directly support a student's learning journey for an entire month.", 
      highlight: "Direct Impact",
      color: "from-rose-100 to-pink-100 border-rose-200"
    };
    return { 
      icon: <Users className="w-10 h-10 text-indigo-600" />, 
      text: "Every contribution matters and will be channeled where it creates the most meaningful change.", 
      highlight: "Community Support",
      color: "from-indigo-100 to-purple-100 border-indigo-200"
    };
  }, [finalAmount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!isRazorpayLoaded) { toast({ variant: "destructive", title: "Error", description: "Payment gateway is not loaded." }); setIsSubmitting(false); return; }
    if (!finalAmount || finalAmount <= 0) { toast({ variant: "destructive", title: "Invalid Amount", description: "Please select or enter a valid donation amount." }); setIsSubmitting(false); return; }

    try {
      const orderResponse = await fetch("/api/razorpay", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ amount: finalAmount }) });
      if (!orderResponse.ok) throw new Error("Failed to create payment order.");
      const order = await orderResponse.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, amount: order.amount, currency: order.currency, name: "Divya Bihar Mission",
        description: "Donation to support our mission", image: "/DBM-logo.png", order_id: order.id,
        handler: function (response: any) { toast({ title: "Thank You! 🙏", description: "Your donation has been received successfully." }); },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        notes: { address: formData.address }, theme: { color: "#ea580c" },
        modal: { ondismiss: function() { setIsSubmitting(false); } }
      };
      if (onPaymentStart) onPaymentStart();
      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on('payment.failed', function (response: any){ toast({ variant: "destructive", title: "Payment Failed", description: `Error: ${response.error.description}` }); });
    } catch (error) { toast({ variant: "destructive", title: "Error", description: "Something went wrong. Please try again." }); }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {!initialAmount && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full mb-6 border border-orange-200">
              <Heart className="w-5 h-5 text-orange-600" />
              <span className="text-orange-800 font-semibold">Support Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Lives with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-pink-600">
                Your Generosity
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Join our mission to empower rural Bihar through education, sustainable agriculture, and entrepreneurship
            </p>
            <p className="text-lg font-hindi text-orange-700 font-medium">
              "सेवा परमो धर्मः" - Service is the highest virtue
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-8">
          {/* MAIN DONATION FORM - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl bg-white/90 backdrop-blur-sm border-0 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Complete Your Donation
                </CardTitle>
                <p className="text-orange-100 opacity-90">Secure, fast, and completely transparent</p>
              </CardHeader>
              
              <CardContent className="p-8 space-y-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* STEP 1: Amount Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Choose Your Contribution</h3>
                        <p className="text-gray-600">Select an amount that feels right for you</p>
                      </div>
                    </div>

                    <RadioGroup value={amount} onValueChange={(value) => { setAmount(value); setCustomAmount(""); }} className="grid grid-cols-2 gap-4">
                      {predefinedAmounts.map((amt) => (
                        <div key={amt}>
                          <RadioGroupItem value={amt} id={`amt-${amt}`} className="sr-only" />
                          <Label 
                            htmlFor={`amt-${amt}`} 
                            className={cn(
                              "flex flex-col items-center justify-center p-6 text-lg font-bold border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 group",
                              amount === amt 
                                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-600 shadow-xl transform scale-105" 
                                : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 shadow-md"
                            )}
                          >
                            <IndianRupee className={cn("w-6 h-6 mb-2", amount === amt ? "text-white" : "text-orange-500")} />
                            ₹{parseInt(amt).toLocaleString('en-IN')}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="relative">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Custom Amount</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input 
                          type="number" 
                          placeholder="Enter your preferred amount" 
                          value={customAmount} 
                          onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} 
                          className="pl-12 py-4 text-lg border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  {/* STEP 2: Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold text-lg shadow-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Your Information</h3>
                        <p className="text-gray-600">Help us send you updates and receipts</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="Enter your full name" 
                            className="pl-12 py-4 text-base border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="Your contact number" 
                            className="pl-12 py-4 text-base border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="your.email@example.com" 
                          className="pl-12 py-4 text-base border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-semibold text-gray-700">Address (for 80G certificate)</Label>
                      <Textarea 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        placeholder="Your complete address for tax receipt" 
                        className="text-base border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 min-h-[100px] resize-none" 
                      />
                    </div>
                  </div>

                  <Separator className="bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  {/* STEP 3: Confirmation & Payment */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-lg shadow-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Confirm & Pay</h3>
                        <p className="text-gray-600">Complete your secure donation</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-gray-700">Donation Amount:</span>
                        <span className="text-3xl font-bold text-orange-600">₹{finalAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Processing Fee:</span>
                        <span className="text-green-600 font-semibold">₹0 (We cover it!)</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <Checkbox id="terms" required className="mt-1" />
                      <Label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                        I agree to the{" "}
                        <a href="/terms" target="_blank" className="text-orange-600 hover:text-orange-700 underline font-medium">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" target="_blank" className="text-orange-600 hover:text-orange-700 underline font-medium">
                          Privacy Policy
                        </a>
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:from-orange-700 hover:via-red-700 hover:to-pink-700 text-white text-lg font-bold py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      disabled={isSubmitting || finalAmount <= 0 || !isRazorpayLoaded}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Processing Your Donation...
                        </>
                      ) : (
                        <>
                          <Lock className="w-6 h-6 mr-3" />
                          Donate ₹{finalAmount.toLocaleString('en-IN')} Securely
                        </>
                      )}
                    </Button>

                    {!isRazorpayLoaded && (
                      <p className="text-xs text-center text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-200">
                        Payment gateway is loading, please wait...
                      </p>
                    )}

                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>256-bit SSL</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>PCI Compliant</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Lock className="w-4 h-4 text-purple-500" />
                        <span>Bank Grade Security</span>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* IMPACT SIDEBAR - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Impact Preview Card */}
            <Card className={`shadow-xl bg-gradient-to-br ${impactMessage.color} border-2 rounded-3xl overflow-hidden`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-amber-500" />
                  {impactMessage.highlight}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/40">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Your Contribution</p>
                  <p className="text-4xl font-bold text-gray-900 tracking-tighter">₹{finalAmount.toLocaleString('en-IN')}</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/30">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg">
                    {impactMessage.icon}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {impactMessage.text}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">Why Donate With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800">80G Tax Exemption</div>
                    <div className="text-xs text-green-600">Save up to 50% on taxes</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-800">100% Transparency</div>
                    <div className="text-xs text-blue-600">Track your donation's impact</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
                  <Heart className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-800">Direct Impact</div>
                    <div className="text-xs text-orange-600">95% goes to programs</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-800">Regular Updates</div>
                    <div className="text-xs text-purple-600">Monthly progress reports</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Message */}
            <div className="text-center">
              <div className="inline-block p-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-4">
                <Image 
                  src="/images/team/mukund.jpg" 
                  alt="Founder Mukund Agrawal" 
                  width={80} 
                  height={80} 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg" 
                />
              </div>
              <blockquote className="text-sm text-gray-600 italic leading-relaxed bg-white/60 p-4 rounded-xl border border-gray-200 backdrop-blur-sm">
                "Every contribution, regardless of its size, is a beacon of hope that lights up the path toward a self-reliant and prosperous Bihar. Your trust in our mission is deeply valued."
              </blockquote>
              <div className="mt-3">
                <p className="text-sm font-bold text-gray-800">Mukund Agrawal</p>
                <p className="text-xs text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}