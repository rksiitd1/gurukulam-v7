"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, CheckCircle, Heart, User, Mail, Phone, IndianRupee, BookOpen, Sprout, Star, Award, Users, Building, Home } from "lucide-react";
import useRazorpay from "@/hooks/useRazorpay";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

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
      icon: <Award className="w-12 h-12 text-saffron-600" />, 
      text: "आपका उदार योगदान एक योग्य छात्र के लिए पूरी छात्रवृत्ति का फंड करेगा, उनके पूरे भविष्य को बदल देगा।", 
      englishText: "Your generous contribution will fund a complete scholarship for a deserving student, transforming their entire future.",
      highlight: "जीवन परिवर्तक प्रभाव • Life-Changing Impact",
      color: "from-saffron-50 via-orange-50 to-yellow-50 border-saffron-300"
    };
    if (finalAmount >= 5000) return { 
      icon: <Sprout className="w-12 h-12 text-emerald-600" />, 
      text: "आप किसानों को सतत कृषि प्रशिक्षण के साथ सशक्त बना रहे हैं जो पीढ़ियों को लाभान्वित करेगा।", 
      englishText: "You're empowering farmers with sustainable agriculture training that will benefit generations.",
      highlight: "समुदायिक सशक्तीकरण • Community Empowerment",
      color: "from-emerald-50 via-green-50 to-lime-50 border-emerald-300"
    };
    if (finalAmount >= 2000) return { 
      icon: <BookOpen className="w-12 h-12 text-blue-600" />, 
      text: "आप आवश्यक शिक्षा संसाधन प्रदान कर रहे हैं जो युवा मनों को बड़े सपने देखने के लिए प्रेरित करेंगे।", 
      englishText: "You're providing essential educational resources that will inspire young minds to dream bigger.",
      highlight: "शैक्षिक सहायता • Educational Support",
      color: "from-blue-50 via-sky-50 to-cyan-50 border-blue-300"
    };
    if (finalAmount >= 500) return { 
      icon: <Heart className="w-12 h-12 text-rose-600" />, 
      text: "आपकी दयालुता एक छात्र की पूरे महीने की शिक्षा यात्रा में सीधे सहायता करेगी।", 
      englishText: "Your kindness will directly support a student's learning journey for an entire month.",
      highlight: "प्रत्यक्ष प्रभाव • Direct Impact",
      color: "from-rose-50 via-pink-50 to-red-50 border-rose-300"
    };
    return { 
      icon: <Users className="w-12 h-12 text-indigo-600" />, 
      text: "हर योगदान मायने रखता है और सबसे सार्थक बदलाव के लिए उपयोग किया जाएगा।", 
      englishText: "Every contribution matters and will be channeled where it creates the most meaningful change.",
      highlight: "समुदायिक सहायता • Community Support",
      color: "from-indigo-50 via-purple-50 to-violet-50 border-indigo-300"
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
        handler: function (response: any) { toast({ title: "धन्यवाद! 🙏 Thank You!", description: "आपका दान सफलतापूर्वक प्राप्त हुआ। Your donation has been received successfully." }); },
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
    <section className="min-h-screen bg-gradient-to-br from-saffron-25 via-orange-25 to-red-25 relative overflow-hidden py-8">
      {/* Traditional Indian Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-40 h-40 bg-saffron-400 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-56 h-56 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Sanskrit/Hindi Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 text-6xl text-saffron-100 font-hindi opacity-20 rotate-12">ॐ</div>
        <div className="absolute bottom-20 right-12 text-4xl text-orange-100 font-hindi opacity-15 -rotate-12">गुरु</div>
        <div className="absolute top-1/2 right-8 text-5xl text-red-100 font-hindi opacity-20 rotate-45">सेवा</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {!initialAmount && (
          <div className="text-center mb-12">
            {/* Cultural Header */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron-100 via-orange-100 to-red-100 px-6 py-4 rounded-full mb-8 border-2 border-saffron-200 shadow-lg">
              <Sprout className="w-6 h-6 text-saffron-700" />
              <span className="text-saffron-800 font-bold text-lg font-hindi">दान धर्म • Donation Drive</span>
              <Sprout className="w-6 h-6 text-saffron-700" />
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="font-hindi text-saffron-700">दान से</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-600 via-orange-600 to-red-600">
                Transform Lives
              </span>
            </h1>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
              बिहार के ग्रामीण क्षेत्रों में शिक्षा, स्थायी कृषि और उद्यमिता के माध्यम से हमारे मिशन में शामिल हों
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Join our mission to empower rural Bihar through education, sustainable agriculture, and entrepreneurship
            </p>

            {/* Cultural Quote */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-saffron-200 shadow-lg">
              <p className="text-2xl font-hindi text-saffron-800 font-bold mb-2">
                "सेवा परमो धर्मः"
              </p>
              <p className="text-lg text-gray-700 italic">
                "Service is the highest virtue" - Ancient Indian Wisdom
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-8">
          {/* MAIN DONATION FORM - Enhanced with Cultural Elements */}
          <div className="lg:col-span-3">
            <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0 rounded-3xl overflow-hidden relative">
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-r from-saffron-200 via-orange-200 to-red-200 rounded-3xl p-[2px]">
                <div className="bg-white rounded-3xl h-full w-full"></div>
              </div>

              <div className="relative z-10">
                <CardHeader className="bg-gradient-to-r from-saffron-600 via-orange-600 to-red-600 text-white p-8 relative overflow-hidden">
                  {/* Traditional pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <CardTitle className="text-3xl font-bold flex items-center mb-2">
                      <Heart className="w-8 h-8 mr-4" />
                      <span className="font-hindi">आपका योगदान</span>
                    </CardTitle>
                    <p className="text-orange-100 text-xl opacity-90">Complete Your Sacred Donation</p>
                    <p className="text-orange-200 text-sm opacity-80 mt-2">सुरक्षित, तेज़, और पूरी तरह पारदर्शी</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 space-y-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* STEP 1: Amount Selection with Cultural Touch */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-saffron-500 to-orange-500 text-white rounded-full font-bold text-xl shadow-lg relative">
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
                          १
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">
                            <span className="font-hindi text-saffron-700">राशि चुनें</span> • Choose Amount
                          </h3>
                          <p className="text-gray-600">अपनी सामर्थ्य के अनुसार योगदान दें • Give as per your capacity</p>
                        </div>
                      </div>

                      <RadioGroup value={amount} onValueChange={(value) => { setAmount(value); setCustomAmount(""); }} className="grid grid-cols-2 gap-4">
                        {predefinedAmounts.map((amt, index) => (
                          <div key={amt} className="relative">
                            <RadioGroupItem value={amt} id={`amt-${amt}`} className="sr-only" />
                            <Label 
                              htmlFor={`amt-${amt}`} 
                              className={cn(
                                "flex flex-col items-center justify-center p-6 text-xl font-bold border-3 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden",
                                amount === amt 
                                  ? "bg-gradient-to-br from-saffron-500 via-orange-500 to-red-500 text-white border-saffron-600 shadow-2xl transform scale-105" 
                                  : "bg-white text-gray-700 border-saffron-200 hover:border-saffron-400 hover:bg-gradient-to-br hover:from-saffron-50 hover:to-orange-50 shadow-md"
                              )}
                            >
                              {/* Decorative corner */}
                              <div className={cn("absolute top-0 right-0 w-8 h-8 rounded-bl-2xl", 
                                amount === amt ? "bg-white/20" : "bg-saffron-100")}></div>
                              
                              <IndianRupee className={cn("w-7 h-7 mb-3", amount === amt ? "text-white" : "text-saffron-600")} />
                              ₹{parseInt(amt).toLocaleString('en-IN')}
                              
                              {/* Hindi numbers */}
                              <span className={cn("text-xs mt-1 font-hindi", amount === amt ? "text-orange-100" : "text-saffron-500")}>
                                {index === 0 && "पांच सौ"}{index === 1 && "दो हज़ार"}{index === 2 && "पांच हज़ार"}{index === 3 && "दस हज़ार"}
                              </span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      <div className="relative bg-gradient-to-r from-saffron-50 to-orange-50 p-4 rounded-2xl border-2 border-saffron-200">
                        <Label className="text-base font-bold text-saffron-800 mb-3 block flex items-center">
                          <Star className="w-5 h-5 mr-2" />
                          <span className="font-hindi">कस्टम राशि</span> • Custom Amount
                        </Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-saffron-600" />
                          <Input 
                            type="number" 
                            placeholder="अपनी पसंदीदा राशि दर्ज करें • Enter your preferred amount" 
                            value={customAmount} 
                            onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} 
                            className="pl-12 py-4 text-lg border-2 border-saffron-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-transparent via-saffron-200 to-transparent" />

                    {/* STEP 2: Personal Information with Cultural Elements */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold text-xl shadow-lg relative">
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></span>
                          २
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">
                            <span className="font-hindi text-blue-700">आपकी जानकारी</span> • Your Information
                          </h3>
                          <p className="text-gray-600">रसीद और अपडेट के लिए आवश्यक • Required for receipts and updates</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-base font-bold text-gray-800 flex items-center">
                            <User className="w-4 h-4 mr-2 text-saffron-600" />
                            <span className="font-hindi">पूरा नाम</span> • Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="आपका पूरा नाम • Enter your full name" 
                            className="py-4 text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-base font-bold text-gray-800 flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-saffron-600" />
                            <span className="font-hindi">फ़ोन नंबर</span> • Phone <span className="text-red-500">*</span>
                          </Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            required 
                            placeholder="आपका संपर्क नंबर • Your contact number" 
                            className="py-4 text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-bold text-gray-800 flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-saffron-600" />
                          <span className="font-hindi">ईमेल पता</span> • Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          required 
                          placeholder="your.email@example.com" 
                          className="py-4 text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-base font-bold text-gray-800 flex items-center">
                          <Home className="w-4 h-4 mr-2 text-saffron-600" />
                          <span className="font-hindi">पता</span> • Address (for 80G certificate)
                        </Label>
                        <Textarea 
                          id="address" 
                          name="address" 
                          value={formData.address} 
                          onChange={handleInputChange} 
                          placeholder="80G प्रमाणपत्र के लिए पूरा पता • Complete address for tax receipt" 
                          className="text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all duration-300 min-h-[100px] resize-none" 
                        />
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-transparent via-saffron-200 to-transparent" />

                    {/* STEP 3: Confirmation & Payment with Cultural Elements */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-xl shadow-lg relative">
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 rounded-full"></span>
                          ३
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-800">
                            <span className="font-hindi text-green-700">पुष्टि करें</span> • Confirm & Pay
                          </h3>
                          <p className="text-gray-600">अपना सुरक्षित दान पूरा करें • Complete your secure donation</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-saffron-50 via-orange-50 to-red-50 p-6 rounded-2xl border-2 border-saffron-200 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-saffron-200 rounded-full opacity-30"></div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 bg-orange-200 rounded-full opacity-30"></div>
                        
                        <div className="flex items-center justify-between mb-4 relative z-10">
                          <span className="text-xl font-bold text-saffron-800 font-hindi">दान राशि:</span>
                          <div className="text-right">
                            <span className="text-4xl font-bold text-saffron-700">₹{finalAmount.toLocaleString('en-IN')}</span>
                            <div className="text-sm text-saffron-600 font-hindi">
                              {finalAmount >= 10000 && "दस हज़ार से अधिक"}
                              {finalAmount >= 5000 && finalAmount < 10000 && "पांच हज़ार से अधिक"}  
                              {finalAmount >= 2000 && finalAmount < 5000 && "दो हज़ार से अधिक"}
                              {finalAmount >= 500 && finalAmount < 2000 && "पांच सौ से अधिक"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-saffron-600">
                          <span>Processing Fee:</span>
                          <span className="text-green-600 font-bold">₹0 (हम वहन करते हैं! • We cover it!)</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <Checkbox id="terms" required className="mt-1" />
                        <Label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                          मैं <a href="/terms" target="_blank" className="text-saffron-600 hover:text-saffron-800 underline font-bold">नियम व शर्तों</a> और <a href="/privacy" target="_blank" className="text-saffron-600 hover:text-saffron-800 underline font-bold">गोपनीयता नीति</a> से सहमत हूं। • 
                          I agree to the <a href="/terms" target="_blank" className="text-saffron-600 hover:text-saffron-800 underline font-bold">Terms of Service</a> and <a href="/privacy" target="_blank" className="text-saffron-600 hover:text-saffron-800 underline font-bold">Privacy Policy</a>
                          <span className="text-red-500 text-lg">*</span>
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-saffron-600 via-orange-600 to-red-600 hover:from-saffron-700 hover:via-orange-700 hover:to-red-700 text-white text-xl font-bold py-6 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                        disabled={isSubmitting || finalAmount <= 0 || !isRazorpayLoaded}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        
                        <div className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-7 w-7 border-b-3 border-white mr-3"></div>
                              <span className="font-hindi">प्रक्रिया जारी है...</span> • Processing Your Donation...
                            </>
                          ) : (
                            <>
                              <Lock className="w-7 h-7 mr-3" />
                              <span className="font-hindi">₹{finalAmount.toLocaleString('en-IN')} दान करें</span> • 
                              Donate ₹{finalAmount.toLocaleString('en-IN')} Securely
                            </>
                          )}
                        </div>
                      </Button>

                      {!isRazorpayLoaded && (
                        <div className="text-center p-3 bg-amber-50 border border-amber-300 rounded-xl">
                          <p className="text-sm text-amber-700 font-hindi mb-1">पेमेंट गेटवे लोड हो रहा है...</p>
                          <p className="text-xs text-amber-600">Payment gateway is loading, please wait...</p>
                        </div>
                      )}

                      <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 bg-white/60 p-3 rounded-xl">
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
              </div>
            </Card>
          </div>

          {/* IMPACT SIDEBAR - Enhanced with Cultural Elements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Impact Preview Card with Cultural Design */}
            <Card className={`shadow-2xl bg-gradient-to-br ${impactMessage.color} border-3 rounded-3xl overflow-hidden relative`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-3xl"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-amber-600" />
                  <span className="font-hindi">{impactMessage.highlight.split('•')[0]}</span>
                  <br />
                  <span className="text-lg">{impactMessage.highlight.split('•')[1]}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                  <p className="text-sm font-bold text-gray-600 mb-2 font-hindi">आपका योगदान • Your Contribution</p>
                  <p className="text-5xl font-bold text-gray-900 tracking-tighter mb-2">₹{finalAmount.toLocaleString('en-IN')}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-saffron-300 to-orange-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg">
                    <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-lg">
                      {impactMessage.icon}
                    </div>
                    <div>
                      <p className="text-base text-gray-800 leading-relaxed font-bold mb-2 font-hindi">
                        {impactMessage.text}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed italic">
                        {impactMessage.englishText}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators with Cultural Design */}
            <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-2 border-saffron-200 rounded-3xl relative overflow-hidden">
              {/* Decorative corner patterns */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-saffron-200 to-orange-200 rounded-br-2xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-200 to-red-200 rounded-tl-2xl"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <Sprout className="w-6 h-6 mr-3 text-saffron-600" />
                  <span className="font-hindi">हमारे साथ क्यों?</span> • Why Donate With Us?
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-2 border-green-200 hover:shadow-md transition-shadow">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-green-800 mb-1">
                      <span className="font-hindi">८०जी छूट</span> • 80G Tax Exemption
                    </div>
                    <div className="text-xs text-green-600">करों पर ५०% तक बचत • Save up to 50% on taxes</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200 hover:shadow-md transition-shadow">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-blue-800 mb-1">
                      <span className="font-hindi">१००% पारदर्शिता</span> • 100% Transparency
                    </div>
                    <div className="text-xs text-blue-600">अपने दान के प्रभाव को ट्रैक करें • Track your donation's impact</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-saffron-50 rounded-xl border-2 border-saffron-200 hover:shadow-md transition-shadow">
                  <Heart className="w-6 h-6 text-saffron-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-saffron-800 mb-1">
                      <span className="font-hindi">प्रत्यक्ष प्रभाव</span> • Direct Impact
                    </div>
                    <div className="text-xs text-saffron-600">९५% कार्यक्रमों में जाता है • 95% goes to programs</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border-2 border-purple-200 hover:shadow-md transition-shadow">
                  <Users className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-purple-800 mb-1">
                      <span className="font-hindi">नियमित अपडेट</span> • Regular Updates
                    </div>
                    <div className="text-xs text-purple-600">मासिक प्रगति रिपोर्ट • Monthly progress reports</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Message with Traditional Design */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl border-2 border-saffron-200 shadow-2xl relative overflow-hidden">
              {/* Traditional pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-saffron-400 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-orange-400 rounded-full"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="inline-block p-2 bg-gradient-to-r from-saffron-400 via-orange-400 to-red-400 rounded-full mb-4 shadow-xl">
                  <img 
                    src="/images/team/mukund.jpg" 
                    alt="Founder Mukund Agrawal" 
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover" 
                  />
                </div>
                
                <blockquote className="text-sm text-gray-700 leading-relaxed bg-white/80 p-5 rounded-2xl border border-saffron-200 backdrop-blur-sm shadow-lg mb-4">
                  <p className="font-hindi text-saffron-800 font-bold mb-2">
                    "हर योगदान, चाहे वो कितना भी छोटा हो, आशा की किरण है जो आत्मनिर्भर और समृद्ध बिहार की राह रोशन करती है।"
                  </p>
                  <p className="italic text-gray-600">
                    "Every contribution, regardless of its size, is a beacon of hope that lights up the path toward a self-reliant and prosperous Bihar."
                  </p>
                </blockquote>
                
                <div>
                  <p className="text-base font-bold text-gray-800 mb-1">
                    <span className="font-hindi text-saffron-700">श्री</span> Mukund Agrawal
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-hindi">संस्थापक</span> • Founder & CEO
                  </p>
                  <p className="text-xs text-saffron-600 mt-1 font-hindi">IIT Delhi, B.Tech</p>
                </div>
              </div>
            </div>

            {/* Cultural Quote Card */}
            <div className="bg-gradient-to-r from-saffron-100 via-orange-100 to-red-100 p-6 rounded-3xl border-2 border-saffron-300 shadow-xl relative overflow-hidden">
              {/* Om symbol as watermark */}
              <div className="absolute top-2 right-4 text-6xl text-saffron-200 font-hindi opacity-30">ॐ</div>
              
              <div className="text-center relative z-10">
                <p className="text-xl font-hindi text-saffron-800 font-bold mb-3">
                  "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः"
                </p>
                <p className="text-base text-gray-700 italic mb-2">
                  "Where women are honored, there the gods dwell"
                </p>
                <p className="text-sm text-saffron-600">
                  Our mission includes empowering women in rural Bihar through education and entrepreneurship
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cultural Elements */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 inline-flex items-center space-x-6 border-2 border-saffron-200 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-700 font-hindi">सुरक्षित • Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-saffron-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-700 font-hindi">तेज़ • Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-700 font-hindi">पारदर्शी • Transparent</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .font-hindi {
          font-family: 'Noto Sans Devanagari', 'Devanagari Sangam MN', sans-serif;
        }
        .border-3 {
          border-width: 3px;
        }
        .text-saffron-25 { color: #fffbeb; }
        .bg-saffron-25 { background-color: #fffbeb; }
        .text-saffron-50 { color: #fef7e3; }
        .bg-saffron-50 { background-color: #fef7e3; }
        .text-saffron-100 { color: #fde68a; }
        .bg-saffron-100 { background-color: #fde68a; }
        .text-saffron-200 { color: #fcd34d; }
        .bg-saffron-200 { background-color: #fcd34d; }
        .text-saffron-300 { color: #fbbf24; }
        .bg-saffron-300 { background-color: #fbbf24; }
        .text-saffron-400 { color: #f59e0b; }
        .bg-saffron-400 { background-color: #f59e0b; }
        .text-saffron-500 { color: #d97706; }
        .bg-saffron-500 { background-color: #d97706; }
        .text-saffron-600 { color: #b45309; }
        .bg-saffron-600 { background-color: #b45309; }
        .text-saffron-700 { color: #92400e; }
        .bg-saffron-700 { background-color: #92400e; }
        .text-saffron-800 { color: #78350f; }
        .bg-saffron-800 { background-color: #78350f; }
        .border-saffron-200 { border-color: #fcd34d; }
        .border-saffron-300 { border-color: #fbbf24; }
        .border-saffron-400 { border-color: #f59e0b; }
        .border-saffron-600 { border-color: #b45309; }
        .from-saffron-25 { --tw-gradient-from: #fffbeb; }
        .from-saffron-50 { --tw-gradient-from: #fef7e3; }
        .from-saffron-100 { --tw-gradient-from: #fde68a; }
        .from-saffron-200 { --tw-gradient-from: #fcd34d; }
        .from-saffron-300 { --tw-gradient-from: #fbbf24; }
        .from-saffron-400 { --tw-gradient-from: #f59e0b; }
        .from-saffron-500 { --tw-gradient-from: #d97706; }
        .from-saffron-600 { --tw-gradient-from: #b45309; }
        .to-saffron-50 { --tw-gradient-to: #fef7e3; }
        .via-saffron-100 { --tw-gradient-via: #fde68a; }
        .via-orange-25 { --tw-gradient-via: #fff7ed; }
        .via-orange-50 { --tw-gradient-via: #ffedd5; }
        .via-red-25 { --tw-gradient-via: #fef2f2; }
      `}</style>
    </section>
  );
}