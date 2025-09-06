"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Lock, CheckCircle, Heart, IndianRupee, Loader2, BookOpen, GraduationCap, Home, Award } from "lucide-react";
import useRazorpay from "@/hooks/useRazorpay";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    pan: "",
    address: "",
    message: "",
  });

  const isRazorpayLoaded = useRazorpay();
  const { toast } = useToast();

  const predefinedAmounts = [
    { amount: 500, label: '₹500' },
    { amount: 2000, label: '₹2,000' },
    { amount: 5000, label: '₹5,000' },
    { amount: 10000, label: '₹10,000' },
    { amount: 25000, label: '₹25,000' },
    { amount: 100000, label: '₹1,00,000' }
  ];

  // This hook handles URL parameters and initial amount
  useEffect(() => {
    // Check for amount in URL parameters
    const searchParams = new URLSearchParams(window.location.search);
    const urlAmount = searchParams.get('amount');
    
    // Clear any previous selections
    setAmount("");
    setCustomAmount("");
    
    // Use URL amount if available, otherwise use the initialAmount prop
    const amountToUse = urlAmount ? parseInt(urlAmount, 10) : initialAmount;
    
    if (amountToUse) {
      const amountNum = Number(amountToUse);
      if (!isNaN(amountNum) && amountNum > 0) {
        // Check if this matches any predefined amount
        const matchingPredefined = predefinedAmounts.find(item => item.amount === amountNum);
        
        if (matchingPredefined) {
          // If it matches a predefined amount, select that button
          setAmount(amountNum.toString());
        } else {
          // Otherwise, fill the custom amount field
          setCustomAmount(amountNum.toString());
        }
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
        notes: { 
          address: formData.address, 
          message: formData.message,
          pan: formData.pan 
        },
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
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!initialAmount && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-devanagari">दान करें (Donate)</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your generous contribution will help us continue our mission of spreading knowledge and wisdom.
            </p>
          </motion.div>
        )}
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-amber-200" />
                  Secure Donation Form
                </h3>
                <p className="text-amber-100 text-sm mt-1">All transactions are 100% secure and encrypted</p>
              </div>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Amount */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium text-gray-800 mb-3 block">
                        Select Donation Amount (INR)
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {predefinedAmounts.map((item) => (
                          <motion.div 
                            key={item.amount}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full"
                          >
                            <Button
                              type="button"
                              variant={amount === item.amount.toString() ? 'default' : 'outline'}
                              onClick={() => { 
                                setAmount(item.amount.toString()); 
                                setCustomAmount(item.amount.toString());
                              }}
                              className={cn(
                                'w-full h-16 flex flex-col items-center justify-center transition-all duration-200',
                                amount === item.amount.toString() 
                                  ? 'bg-amber-600 hover:bg-amber-700 text-white border-amber-600' 
                                  : 'bg-white hover:bg-amber-50 border-gray-200 text-gray-800 hover:border-amber-400'
                              )}
                            >
                              <span className="text-lg font-medium">{item.label}</span>
                              {amount === item.amount.toString() && (
                                <span className="text-xs mt-1 opacity-90 flex items-center">
                                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                                  Selected
                                </span>
                              )}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Or enter a custom amount
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <IndianRupee className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount in INR"
                          value={customAmount}
                          onChange={(e) => { 
                            setCustomAmount(e.target.value); 
                            if (e.target.value) setAmount(''); 
                          }}
                          className="pl-10 h-12 text-base"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Your Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          required 
                          className="h-12"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-gray-700">Email Address <span className="text-red-500">*</span></Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          className="h-12"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required 
                        className="h-12"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="pan" className="text-gray-700">PAN Number <span className="text-sm text-gray-500">(for 80G tax exemption certificate)</span></Label>
                      <Input 
                        id="pan" 
                        name="pan" 
                        type="text" 
                        value={formData.pan} 
                        onChange={handleInputChange} 
                        className="h-12 uppercase"
                        placeholder="AAAAA0000A"
                        maxLength={10}
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        title="Please enter a valid PAN number (e.g., AAAAA9999A)"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="address" className="text-gray-700">Address <span className="text-sm text-gray-500">(for 80G tax exemption certificate)</span></Label>
                      <Textarea 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        className="min-h-[100px]"
                        placeholder="Your complete address with pincode"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-gray-700">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Share why you're supporting our mission..." 
                        className="min-h-[100px]" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-6 pt-2">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="terms" required className="h-4 w-4" />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <a href="/terms" target="_blank" className="text-amber-600 hover:underline font-medium">
                          Terms of Service
                        </a>{' '}
                        &{' '}
                        <a href="/privacy" target="_blank" className="text-amber-600 hover:underline font-medium">
                          Privacy Policy
                        </a>
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className={cn(
                          'w-full h-14 text-lg font-medium rounded-lg transition-all duration-300',
                          'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800',
                          'shadow-lg hover:shadow-xl hover:-translate-y-0.5',
                          (isSubmitting || finalAmount <= 0 || !isRazorpayLoaded) && 'opacity-80 cursor-not-allowed'
                        )}
                        disabled={isSubmitting || finalAmount <= 0 || !isRazorpayLoaded}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Lock className="w-5 h-5 mr-2" />
                            Donate ₹{finalAmount.toLocaleString('en-IN')}
                            <span className="ml-1 text-amber-100 text-sm font-normal">(Secure Payment)</span>
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {!isRazorpayLoaded && (
                      <div className="text-center py-2">
                        <p className="text-sm text-amber-700 bg-amber-50 px-3 py-1.5 rounded-md inline-flex items-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Payment gateway is loading, please wait...
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-center text-xs text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-1.5 text-green-500" />
                        <span>Secure SSL Encryption</span>
                      </div>
                      <div className="h-4 w-px bg-gray-200"></div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1.5 text-green-500" />
                        <span>Tax Exemption under 80G</span>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar - Your Impact Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Motivational Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Your Generosity Creates Ripples</h3>
              <p className="text-amber-100 text-sm mb-4">
                Every contribution, big or small, helps us build a better future. Here's what your donation can achieve:
              </p>
              <div className="flex items-center text-amber-200 text-sm">
                <Heart className="w-4 h-4 mr-1" />
                <span>100% of your donation goes directly to our programs</span>
              </div>
            </div>

            {/* Impact Cards - Matching call-to-action style */}
            <div className="space-y-4">
              {[
                {
                  amount: "₹500",
                  title: "Monthly Education",
                  description: "Sponsors one student for a month",
                  impact: "Monthly education support",
                  icon: <BookOpen className="w-5 h-5 text-amber-600" />
                },
                {
                  amount: "₹2,000",
                  title: "Learning Resources",
                  description: "Provides books and materials for 5 students",
                  impact: "Educational resources",
                  icon: <GraduationCap className="w-5 h-5 text-amber-600" />
                },
                {
                  amount: "₹5,000",
                  title: "Farmer Training",
                  description: "Supports a farmer training program",
                  impact: "Sustainable livelihood",
                  icon: <Home className="w-5 h-5 text-amber-600" />
                },
                {
                  amount: "₹10,000",
                  title: "Full Scholarship",
                  description: "Funds a complete scholarship for one year",
                  impact: "Full year education",
                  icon: <Award className="w-5 h-5 text-amber-600" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -2 }}
                  className={cn(
                    'bg-white/90 backdrop-blur-sm rounded-lg border p-4 shadow-sm hover:shadow-md transition-all cursor-pointer',
                    (amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, ''))
                      ? 'border-amber-400 bg-amber-50 ring-2 ring-amber-200/50'
                      : 'border-amber-100 hover:border-amber-200'
                  )}
                  onClick={() => {
                    const amountValue = parseInt(item.amount.replace(/[^0-9]/g, ''), 10);
                    // Always set the custom amount field
                    setCustomAmount(amountValue.toString());
                    // Also update the selected amount if it matches a predefined amount
                    const matchingPredefined = predefinedAmounts.find(a => a.amount === amountValue);
                    if (matchingPredefined) {
                      setAmount(amountValue.toString());
                    } else {
                      setAmount('');
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        'p-2 rounded-lg',
                        (amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, ''))
                          ? 'bg-amber-200 text-amber-800'
                          : 'bg-amber-100'
                      )}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-700">{item.amount}</div>
                      <div className={cn(
                        'text-xs font-medium px-2 py-0.5 rounded-full',
                        (amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, ''))
                          ? 'bg-amber-100 text-amber-800'
                          : 'text-amber-600'
                      )}>
                        {amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, '') ? 'Selected' : 'Select'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="bg-gray-50 border-gray-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-800">Tax Benefits</CardTitle>
                <CardDescription className="text-sm">
                  Your donation is eligible for 50% tax exemption under Section 80G of the Income Tax Act.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50">
                  Learn More About 80G
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}