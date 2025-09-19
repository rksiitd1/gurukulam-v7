"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Shield, Lock, CheckCircle, Heart, IndianRupee, Loader2, BookOpen, GraduationCap, Home, Award } from "lucide-react";
import useRazorpay from "@/hooks/useRazorpay";
import { useToast } from "@/hooks/use-toast";
import { motion, useReducedMotion } from "framer-motion";
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

  const { isLoaded: isRazorpayLoaded, loadRazorpay } = useRazorpay();
  const { toast } = useToast();
  const shouldReduceMotion = useReducedMotion();

  const predefinedAmounts = useMemo(() => [
    { amount: 500, label: '₹500' },
    { amount: 2000, label: '₹2,000' },
    { amount: 5000, label: '₹5,000' },
    { amount: 10000, label: '₹10,000' },
    { amount: 25000, label: '₹25,000' },
    { amount: 100000, label: '₹1,00,000' }
  ], []);

  // This hook handles URL parameters and initial amount
  useEffect(() => {
    // Check for amount in URL parameters
    const searchParams = new URLSearchParams(window.location.search);
    const urlAmount = searchParams.get('amount');
    
    // Use URL amount if available, otherwise use the initialAmount prop
    const amountToUse = urlAmount ? parseInt(urlAmount, 10) : initialAmount;
    
    if (amountToUse) {
      const amountNum = Number(amountToUse);
      if (!isNaN(amountNum) && amountNum > 0) {
        // Always set the custom amount when coming from URL
        setCustomAmount(amountNum.toString());
        // Also update the selected amount if it matches a predefined amount
        const amountExists = predefinedAmounts.some(item => item.amount === amountNum);
        if (amountExists) {
          setAmount(amountNum.toString());
        } else {
          setAmount("");
        }
      }
    }
  }, [initialAmount]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Convert PAN to uppercase, but not other fields
    const processedValue = name === 'pan' ? value.toUpperCase() : value;
    setFormData(prev => ({ ...prev, [name]: processedValue }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Load Razorpay SDK if not already loaded
    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Payment gateway could not be loaded. Please try again.",
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
        body: JSON.stringify({ 
          amount: finalAmount,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          pan: formData.pan,
          address: formData.address
        }),
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

  const finalAmount = useMemo(() => Number(customAmount) || Number(amount) || 0, [customAmount, amount]);

  return (
    <section className="py-6 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        {!initialAmount && (
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-devanagari">दान करें (Donate)</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Your generous contribution will help us continue our mission of spreading knowledge and wisdom.
            </p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-start">
          {/* Main Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.2, duration: 0.5 }}
          >
            <Card className="shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 px-4 sm:px-6 py-4 sm:py-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Secure Donation Form
                      </h3>
                      <p className="text-orange-100 text-xs sm:text-sm mt-0.5">100% secure & encrypted transactions</p>
                    </div>
                  </div>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Image 
                      src="/DBM-logo.png" 
                      alt="Divya Bihar Mission Logo" 
                      width={36} 
                      height={36}
                      className="object-contain"
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Donation Amount */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <Label className="text-base sm:text-lg font-semibold text-gray-900 mb-3 block">
                        Select Donation Amount (INR)
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-3">
                        {predefinedAmounts.map((item) => (
                          <motion.div 
                            key={item.amount}
                            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
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
                                'w-full h-12 sm:h-16 flex flex-col items-center justify-center transition-all duration-200 text-base sm:text-lg relative rounded-sm border-2 font-bold tracking-wide',
                                amount === item.amount.toString() 
                                  ? 'bg-orange-600 hover:bg-orange-700 text-white border-orange-600 shadow-lg' 
                                  : 'bg-white hover:bg-orange-50 border-gray-400 text-gray-900 hover:border-orange-500 hover:shadow-md'
                              )}
                            >
                              <span className={cn(
                                "truncate",
                                amount === item.amount.toString() ? "font-black" : "font-bold"
                              )}>{item.label}</span>
                              {amount === item.amount.toString() && (
                                <span className="absolute top-1 right-1">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </span>
                              )}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="custom-amount" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
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
                          className="pl-10 h-10 sm:h-12 text-sm sm:text-base"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-2">Your Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm sm:text-base text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          required 
                          className="h-10 sm:h-12 text-sm sm:text-base"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-sm sm:text-base text-gray-700">Email Address <span className="text-red-500">*</span></Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          className="h-10 sm:h-12 text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm sm:text-base text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
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
                      <Label htmlFor="pan" className="text-sm sm:text-base text-gray-700">PAN Number <span className="text-xs sm:text-sm text-gray-500">(for 80G tax exemption certificate)</span></Label>
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
                      <Label htmlFor="address" className="text-sm sm:text-base text-gray-700">Address <span className="text-xs sm:text-sm text-gray-500">(for 80G tax exemption certificate)</span></Label>
                      <Textarea 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                        placeholder="Your complete address with pincode"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message" className="text-sm sm:text-base text-gray-700">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Share why you're supporting our mission..." 
                        className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>

                  {/* Terms and Submit */}
                  <div className="space-y-4 sm:space-y-6 pt-2">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="terms" required className="h-4 w-4" />
                      <Label htmlFor="terms" className="text-xs sm:text-sm text-gray-600">
                        I agree to the{' '}
                        <a href="/terms" target="_blank" className="text-orange-600 hover:underline font-medium">
                          Terms of Service
                        </a>{' '}
                        &{' '}
                        <a href="/privacy" target="_blank" className="text-orange-600 hover:underline font-medium">
                          Privacy Policy
                        </a>
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.01 }} whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className={cn(
                          'w-full h-12 sm:h-14 text-sm sm:text-lg font-medium rounded-lg transition-all duration-300',
                          'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
                          'shadow-lg hover:shadow-xl hover:-translate-y-0.5',
                          (isSubmitting || finalAmount <= 0) && 'opacity-80 cursor-not-allowed'
                        )}
                        disabled={isSubmitting || finalAmount <= 0}
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
                            <span className="ml-1 text-orange-100 text-xs sm:text-sm font-normal hidden sm:inline">(Secure Payment)</span>
                          </>
                        )}
                      </Button>
                    </motion.div>


                    <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 space-x-2 sm:space-x-4">
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
            className="space-y-6 hidden lg:block"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.3, duration: 0.5 }}
          >
            {/* Motivational Header */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white hidden lg:block">
              <h3 className="text-xl font-bold mb-2">Your Generosity Creates Ripples</h3>
              <p className="text-orange-100 text-sm mb-4">
                Every contribution, big or small, helps us build a better future.
              </p>
              <div className="flex items-center text-orange-200 text-sm">
                <Heart className="w-4 h-4 mr-1" />
                <span>100% of your donation goes directly to our programs</span>
              </div>
            </div>

            {/* Impact Cards - Matching call-to-action style */}
            <div className="space-y-4 hidden lg:block">
              {useMemo(() => [
                {
                  amount: "₹500",
                  title: "Monthly Education",
                  description: "Sponsors one student for a month",
                  impact: "Monthly education support",
                  icon: <BookOpen className="w-5 h-5 text-orange-600" />
                },
                {
                  amount: "₹2,000",
                  title: "Learning Resources",
                  description: "Provides books and materials for 5 students",
                  impact: "Educational resources",
                  icon: <GraduationCap className="w-5 h-5 text-orange-600" />
                },
                {
                  amount: "₹5,000",
                  title: "Farmer Training",
                  description: "Supports a farmer training program",
                  impact: "Sustainable livelihood",
                  icon: <Home className="w-5 h-5 text-orange-600" />
                },
                {
                  amount: "₹10,000",
                  title: "Full Scholarship",
                  description: "Funds a complete scholarship for one year",
                  impact: "Full year education",
                  icon: <Award className="w-5 h-5 text-orange-600" />
                }
              ], []).map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  className={cn(
                    'bg-white/90 backdrop-blur-sm rounded-lg border p-3 sm:p-4 shadow-sm hover:shadow-md transition-all cursor-pointer',
                    (amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, ''))
                      ? 'border-orange-400 bg-orange-50 ring-2 ring-orange-200/50'
                      : 'border-orange-100 hover:border-orange-200'
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
                  <div className="flex items-start space-x-3">
                    <div className={cn(
                      'p-2 rounded-lg flex-shrink-0',
                      (amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, ''))
                        ? 'bg-orange-200 text-orange-800'
                        : 'bg-orange-100'
                    )}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <div className="text-sm sm:text-lg font-bold text-orange-700">{item.amount}</div>
                          <div className={cn(
                            'text-xs font-medium px-1.5 py-0.5 rounded-full',
                            (amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, ''))
                              ? 'bg-orange-100 text-orange-800'
                              : 'text-orange-600'
                          )}>
                            {amount === item.amount.replace(/[^0-9]/g, '') || customAmount === item.amount.replace(/[^0-9]/g, '') ? '✓' : 'Select'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tax Benefits */}
            <Card className="bg-gradient-to-b from-orange-50 to-white border-2 border-orange-100 rounded-xl shadow-sm mb-6 overflow-hidden hidden lg:block">
              <div className="p-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Tax Benefits</h3>
                    <p className="text-sm text-gray-600 mt-1">50% tax exemption under Section 80G</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Founder's Message */}
            <Card className="border-2 border-orange-100 rounded-xl overflow-hidden">
              <div className="p-5 bg-white">
                {/* Quote */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mb-4">
                  <p className="text-sm text-gray-700 italic">
                    "Every contribution, regardless of its size, is a beacon of hope that lights up the path toward a self-reliant and prosperous Bihar — and through it, a stronger Bharata. Your trust in our mission is deeply valued."
                  </p>
                </div>
                
                {/* Founder Info */}
                <div className="flex items-center space-x-3">
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <Image 
                      src="/images/team/golusir.jpg" 
                      alt="Mukund Agrawal" 
                      fill 
                      className="rounded-full object-cover border-2 border-orange-200"
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Mukund Agrawal</h4>
                    <p className="text-sm text-orange-700">Founder & Acharya</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Founder's Message - Mobile Only */}
        <div className="lg:hidden mt-8">
          <Card className="border-2 border-orange-100 rounded-xl overflow-hidden">
            <div className="p-5 bg-white">
              {/* Quote */}
              <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-orange-400 mb-4">
                <p className="text-xs sm:text-sm text-gray-700 italic">
                  "Every contribution, regardless of its size, is a beacon of hope that lights up the path toward a self-reliant and prosperous Bihar — and through it, a stronger Bharata. Your trust in our mission is deeply valued."
                </p>
              </div>
              
              {/* Founder Info */}
              <div className="flex items-center space-x-3">
                <div className="relative h-14 w-14 flex-shrink-0">
                  <Image 
                    src="/images/team/golusir.jpg" 
                    alt="Mukund Agrawal" 
                    fill 
                    className="rounded-full object-cover border-2 border-orange-200"
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-gray-800">Mukund Agrawal</h4>
                  <p className="text-xs sm:text-sm text-orange-700">Founder & Acharya</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}