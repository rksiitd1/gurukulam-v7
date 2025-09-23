// components/blog/newsletter.tsx
"use client";

import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { NewsletterConfirmationModal } from "./NewsletterConfirmationModal"; // <-- Import the new modal

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- State to control the modal
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ variant: "destructive", title: "Please enter an email address." });
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      // --- THE KEY CHANGE ---
      // Instead of a toast, we now open the modal on success.
      setIsModalOpen(true);
      setEmail(""); // Clear the input field

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: (error as Error).message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-orange-600 to-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected with Our Mission</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get inspiring stories, program updates, and educational insights delivered to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-orange-200 focus:bg-white/20"
              />
              <Button type="submit" className="bg-white text-orange-600 hover:bg-orange-50 px-6" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-orange-200 mt-3">Join our subscribers. No spam, unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      {/* --- This renders our new modal when isModalOpen is true --- */}
      <NewsletterConfirmationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}