// components/internship/InternshipApplicationForm.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DollarSign, Clock, Home, Info, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function InternshipApplicationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    gradYear: '',
    linkedin: '',
    portfolio: '',
    role: '',
    problemSolving: '',
    whyUs: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/internship/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong.');
      }

      toast({
        title: "Application Submitted! 🎉",
        description: "Thank you for your interest. We have received your application and will be in touch soon.",
      });
      // Reset form
      setFormData({
        fullName: '', email: '', college: '', gradYear: '',
        linkedin: '', portfolio: '', role: '', problemSolving: '', whyUs: ''
      });

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: (error as Error).message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Apply to Join the Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We are looking for individuals with skill, passion, and resilience. If you believe you are a fit, we want to hear from you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="fullName" type="text" placeholder="Your Name" value={formData.fullName} onChange={handleInputChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
                  <Input id="college" type="text" placeholder="e.g., IIT Bombay" value={formData.college} onChange={handleInputChange} required />
                </div>
                <div>
                  <label htmlFor="gradYear" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                  <Input id="gradYear" type="number" placeholder="2026" value={formData.gradYear} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." value={formData.linkedin} onChange={handleInputChange} />
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">GitHub / Portfolio</label>
                  <Input id="portfolio" type="url" placeholder="https://github.com/..." value={formData.portfolio} onChange={handleInputChange} />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Preferred Mission/Role</label>
                <Select value={formData.role} onValueChange={handleRoleChange} required>
                  <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tech for Impact Lead">Tech for Impact Lead</SelectItem>
                    <SelectItem value="Sustainable Agriculture Innovator">Sustainable Agriculture Innovator</SelectItem>
                    <SelectItem value="Impact Measurement Analyst">Impact Measurement Analyst</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="problemSolving" className="block text-sm font-medium text-gray-700 mb-1">Describe a complex project or problem you've worked on. (Max 150 words)</label>
                <Textarea id="problemSolving" placeholder="Focus on the challenge, your approach, and the outcome." rows={4} value={formData.problemSolving} onChange={handleInputChange} required />
              </div>
              <div>
                <label htmlFor="whyUs" className="block text-sm font-medium text-gray-700 mb-1">This internship involves working in a resource-constrained rural environment. Why does this challenge appeal to you? (Max 150 words)</label>
                <Textarea id="whyUs" placeholder="Be specific about your motivation and resilience." rows={4} value={formData.whyUs} onChange={handleInputChange} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold text-lg py-4" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...</>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>
          </div>
          {/* Logistics Section */}
          <div className="sticky top-24">
             <Alert className="bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200">
              <Info className="h-5 w-5 text-orange-600" />
              <AlertTitle className="text-xl font-bold text-orange-800">Internship Logistics</AlertTitle>
              <AlertDescription className="mt-4 space-y-4 text-orange-900">
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Stipend</h4>
                    <p>A modest stipend will be provided to cover basic living expenses.</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">
                      Durations
                    </h4>
                    <p>8-12 weeks, flexible based on academic calendar (typically May-July).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Location & Accommodation</h4>
                    <p>The internship is based at our campus in Raghopur, Bihar. Clean, simple, and safe on-campus accommodation and food will be provided.</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-orange-300/50">
                   <p className="text-sm">This is an intense, immersive experience. We seek candidates who are adaptable, self-motivated, and driven by a desire to learn and contribute.</p>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </section>
  );
};