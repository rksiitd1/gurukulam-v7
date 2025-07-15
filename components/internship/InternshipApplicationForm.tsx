// components/internship/InternshipApplicationForm.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DollarSign, Clock, Home, Info } from "lucide-react";

const InternshipApplicationForm = () => {
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
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
                  <Input id="college" type="text" placeholder="e.g., IIT Bombay" required />
                </div>
                <div>
                  <label htmlFor="grad-year" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                  <Input id="grad-year" type="number" placeholder="2026" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                </div>
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">GitHub / Portfolio</label>
                  <Input id="github" type="url" placeholder="https://github.com/..." required />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Preferred Mission/Role</label>
                <Select required>
                  <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tech for Impact Lead</SelectItem>
                    <SelectItem value="agri">Sustainable Agriculture Innovator</SelectItem>
                    <SelectItem value="data">Impact Measurement Analyst</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="problem-solving" className="block text-sm font-medium text-gray-700 mb-1">Describe a complex project or problem you've worked on. (Max 150 words)</label>
                <Textarea id="problem-solving" placeholder="Focus on the challenge, your approach, and the outcome." rows={4} required />
              </div>
              <div>
                <label htmlFor="why-us" className="block text-sm font-medium text-gray-700 mb-1">This internship involves working in a resource-constrained rural environment. Why does this challenge appeal to you? (Max 150 words)</label>
                <Textarea id="why-us" placeholder="Be specific about your motivation and resilience." rows={4} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold text-lg py-4">Submit Application</Button>
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
                    <h4 className="font-semibold">Duration</h4>
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

export default InternshipApplicationForm;