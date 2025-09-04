"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Lock, CheckCircle, Heart } from "lucide-react";
import useRazorpay from "@/hooks/useRazorpay";
import { useToast } from "@/hooks/use-toast";

// Add Razorpay to the window type
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Define the props this component accepts
interface DonationFormProps {
  initialAmount?: number;
  onPaymentStart?: () => void; // This is the key to fixing the Razorpay conflict
}

export function DonationForm({ initialAmount, onPaymentStart }: DonationFormProps) {
  const [amount, setAmount] = useState(initialAmount?.toString() || "");
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const isRazorpayLoaded = useRazorpay();
  const { toast } = useToast();

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  // This hook pre-fills the form if an initialAmount is provided
  useEffect(() => {
    if (initialAmount) {
      if (predefinedAmounts.includes(initialAmount)) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isRazorpayLoaded) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Payment gateway is not loaded. Please try again.",
      });
      setIsSubmitting(false);
      return;
    }

    const finalAmount = Number(customAmount) || Number(amount);
    if (!finalAmount || finalAmount <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const orderResponse = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount }),
      });

      if (!orderResponse.ok) throw new Error("Failed to create payment order.");
      const order = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Divya Bihar Mission",
        description: "Donation to support our cause",
        image: "/DBM-logo.png",
        order_id: order.id,
        handler: function (response: any) {
          toast({
            title: "Thank You! 🙏",
            description: "Your donation has been received successfully. A receipt will be sent to your email.",
          });
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        notes: { address: formData.address, message: formData.message },
        theme: { color: "#ea580c" },
        modal: {
          ondismiss: function() {
            // Re-enable our form button if the user closes the Razorpay modal
            setIsSubmitting(false);
          }
        }
      };
      
      // *** THE CRITICAL FIX FOR THE RAZORPAY CONFLICT ***
      // We notify the parent component (the modal) to close itself *right before* we open Razorpay.
      if (onPaymentStart) {
        onPaymentStart();
      }

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function (response: any){
        console.error("Payment failed:", response);
        toast({
          variant: "destructive",
          title: "Payment Failed",
          description: `Error: ${response.error.description}`,
        });
        setIsSubmitting(false); // Also re-enable on failure
      });

    } catch (error) {
      console.error("Payment process error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  const finalAmount = Number(customAmount) || Number(amount) || 0;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!initialAmount && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Make a Donation</h2>
            <p className="text-xl text-gray-600">Your contribution makes a world of difference.</p>
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center"><Shield className="w-5 h-5 mr-2 text-green-600" />Secure Donation Form</CardTitle>
                <CardDescription>All transactions are encrypted and secure.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Choose Donation Amount (INR)</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {predefinedAmounts.map((amt) => (
                        <Button key={amt} type="button" variant={amount === amt.toString() ? "default" : "outline"} onClick={() => { setAmount(amt.toString()); setCustomAmount(""); }} className={amount === amt.toString() ? "bg-orange-600 hover:bg-orange-700" : ""}>
                          ₹{amt.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="custom-amount" className="text-sm text-gray-600">Or Enter a Custom Amount</Label>
                      <Input id="custom-amount" type="number" placeholder="e.g., 1001" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} className="mt-1"/>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><Label htmlFor="name">Full Name *</Label><Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1" /></div>
                    <div><Label htmlFor="email">Email Address *</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" /></div>
                  </div>
                  <div><Label htmlFor="phone">Phone Number *</Label><Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className="mt-1" /></div>
                  <div><Label htmlFor="address">Address (for 80G certificate)</Label><Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} className="mt-1" rows={3} /></div>
                  <div><Label htmlFor="message">Message (Optional)</Label><Textarea id="message" name="message" placeholder="Share why you're supporting our mission..." className="mt-1" rows={3} value={formData.message} onChange={handleInputChange} /></div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required /><Label htmlFor="terms" className="text-sm leading-relaxed">I agree to the <a href="/terms" target="_blank" className="text-orange-600 hover:underline">Terms of Service</a> & <a href="/privacy" target="_blank" className="text-orange-600 hover:underline">Privacy Policy</a>*</Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg py-6" disabled={isSubmitting || finalAmount <= 0 || !isRazorpayLoaded}>
                    {isSubmitting ? (<><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>Processing...</>) : (<><Lock className="w-5 h-5 mr-2" />Donate ₹{finalAmount.toLocaleString()} Securely</>)}
                  </Button>
                  {!isRazorpayLoaded && <p className="text-xs text-center text-red-600 mt-2">Payment gateway is loading, please wait...</p>}
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="flex items-center"><Heart className="w-5 h-5 mr-2 text-red-600"/>Your Impact</CardTitle></CardHeader>
              <CardContent className="text-sm space-y-2 text-gray-700">
                <p><strong>₹500:</strong> Sponsors one student's educational materials for a month.</p>
                <p><strong>₹5,000:</strong> Supports a farmer training program on sustainable agriculture.</p>
                <p><strong>₹10,000:</strong> Helps fund a complete scholarship for a deserving student for one year.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-600" />Why Donate With Us?</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3"><div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div><div><div className="font-semibold text-sm">80G Tax Exemption</div><div className="text-xs text-gray-600">Get tax deduction</div></div></div>
                  <div className="flex items-start space-x-3"><div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div><div><div className="font-semibold text-sm">100% Transparency</div><div className="text-xs text-gray-600">Track your money's use</div></div></div>
                  <div className="flex items-start space-x-3"><div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div><div><div className="font-semibold text-sm">Direct Impact</div><div className="text-xs text-gray-600">95% goes to programs</div></div></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}