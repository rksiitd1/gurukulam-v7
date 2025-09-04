"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, CheckCircle, Heart, User, Mail, Phone, IndianRupee, BookOpen, Sprout } from "lucide-react";
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
    if (finalAmount >= 10000) return { icon: <Heart className="w-8 h-8 text-red-500" />, text: "You are funding a full-year scholarship for a deserving student, changing a life forever." };
    if (finalAmount >= 5000) return { icon: <Sprout className="w-8 h-8 text-dharmic-green" />, text: "You are supporting a training program that empowers a farmer with sustainable agriculture skills." };
    if (finalAmount >= 2000) return { icon: <BookOpen className="w-8 h-8 text-blue-500" />, text: "You are providing essential books and learning materials for a group of 5 eager students." };
    if (finalAmount >= 500) return { icon: <Heart className="w-8 h-8 text-red-500" />, text: "You are sponsoring one student's complete educational needs for an entire month." };
    return { icon: <Heart className="w-8 h-8 text-red-500" />, text: "Your contribution will be directed where it is most needed to support our mission." };
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
        notes: { address: formData.address }, theme: { color: "#f97316" },
        modal: { ondismiss: function() { setIsSubmitting(false); } }
      };
      if (onPaymentStart) onPaymentStart();
      const rzp = new window.Razorpay(options);
      rzp.open();
      rzp.on('payment.failed', function (response: any){ toast({ variant: "destructive", title: "Payment Failed", description: `Error: ${response.error.description}` }); });
    } catch (error) { toast({ variant: "destructive", title: "Error", description: "Something went wrong. Please try again." }); }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!initialAmount && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Make Your Contribution</h2>
            <p className="text-2xl text-orange-700 font-devanagari">एक छोटा सा योगदान, एक बड़ा परिवर्तन</p>
          </div>
        )}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM CARD */}
          <Card className="shadow-2xl bg-white/80 backdrop-blur-sm border-orange-100/60 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* STEP 1: Amount */}
                <div>
                  <div className="flex items-center gap-4 mb-6"><div className="flex items-center justify-center w-10 h-10 bg-saffron-100 text-saffron-700 rounded-full font-bold text-xl">1</div><h3 className="text-2xl font-bold text-gray-800">Choose Your Contribution</h3></div>
                  <RadioGroup value={amount} onValueChange={(value) => { setAmount(value); setCustomAmount(""); }} className="grid grid-cols-2 gap-4">
                    {predefinedAmounts.map((amt) => (
                      <div key={amt}>
                        <RadioGroupItem value={amt} id={`amt-${amt}`} className="sr-only" />
                        <Label htmlFor={`amt-${amt}`} className={cn("flex items-center justify-center p-4 text-lg font-semibold border-2 rounded-lg cursor-pointer transition-all duration-200", amount === amt ? "bg-saffron-500 text-white border-saffron-600 shadow-lg" : "bg-white text-gray-700 border-gray-200 hover:border-saffron-300 hover:bg-saffron-50")}>
                          ₹{parseInt(amt).toLocaleString('en-IN')}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="relative mt-4"><IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" /><Input id="custom-amount" type="number" placeholder="Or Enter Custom Amount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} className="pl-12 py-6 text-lg border-2"/></div>
                </div>
                <Separator />
                {/* STEP 2: Details */}
                <div>
                  <div className="flex items-center gap-4 mb-6"><div className="flex items-center justify-center w-10 h-10 bg-saffron-100 text-saffron-700 rounded-full font-bold text-xl">2</div><h3 className="text-2xl font-bold text-gray-800">Your Information</h3></div>
                  <div className="space-y-4">
                    <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" /><Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Full Name *" className="pl-12 py-6 text-base border-2"/></div>
                    <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" /><Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="Email Address *" className="pl-12 py-6 text-base border-2"/></div>
                    <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" /><Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="Phone Number *" className="pl-12 py-6 text-base border-2"/></div>
                    <div><Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address (for 80G certificate)" className="text-base border-2" rows={3} /></div>
                  </div>
                </div>
                <Separator />
                {/* FINAL STEP: Submit */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3"><Checkbox id="terms" required /><Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">I agree to the <a href="/terms" target="_blank" className="text-orange-600 hover:underline">Terms of Service</a> & <a href="/privacy" target="_blank" className="text-orange-600 hover:underline">Privacy Policy</a>*</Label></div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-saffron-600 to-red-600 hover:from-saffron-700 hover:to-red-700 text-lg font-bold py-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" disabled={isSubmitting || finalAmount <= 0 || !isRazorpayLoaded}>
                    {isSubmitting ? (<><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>Processing...</>) : (<><Heart className="w-6 h-6 mr-3" />Donate ₹{finalAmount.toLocaleString('en-IN')} Securely</>)}
                  </Button>
                  {!isRazorpayLoaded && <p className="text-xs text-center text-red-600 mt-2">Payment gateway is loading, please wait...</p>}
                </div>
              </form>
            </CardContent>
          </Card>
          {/* IMPACT PANEL */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="shadow-xl bg-gradient-to-br from-dharmic-green to-green-800 text-white rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-yellow-300">See Your Impact Instantly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-center bg-white/10 p-6 rounded-lg">
                        <p className="text-lg font-semibold">Your Contribution</p>
                        <p className="text-5xl font-bold text-white tracking-tighter my-2">₹{finalAmount.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg min-h-[120px]">
                        <div className="flex-shrink-0 bg-white p-2 rounded-full">{impactMessage.icon}</div>
                        <p className="text-base text-green-100">{impactMessage.text}</p>
                    </div>
                    <Separator className="bg-white/20"/>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-yellow-300" /><span>80G Tax Exemption Eligible</span></div>
                        <div className="flex items-center gap-3"><Shield className="w-5 h-5 text-yellow-300" /><span>100% Secure Payments</span></div>
                        <div className="flex items-center gap-3"><Heart className="w-5 h-5 text-yellow-300" /><span>Directly Supports Our Programs</span></div>
                    </div>
                </CardContent>
            </Card>
            <div className="text-center mt-6">
                <Image src="/images/team/mukund.jpg" alt="Founder Mukund Agrawal" width={80} height={80} className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-lg" />
                <p className="text-sm text-gray-600 mt-3 italic">"Every single contribution, no matter the size, is a step towards building a self-reliant and prosperous Bihar. Thank you for your faith in our mission."</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">- Mukund Agrawal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}