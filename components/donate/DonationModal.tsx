"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DonationForm } from "@/components/donate/donation-form";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export function DonationModal({ isOpen, onClose, initialAmount }: DonationModalProps) {

  // This is the key function to fix the Razorpay z-index issue.
  // We pass this down to the DonationForm, which calls it right before opening Razorpay.
  const handlePaymentStart = () => {
    onClose(); // This closes our modal, removing it from the screen.
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0" 
        onInteractOutside={(e) => e.preventDefault()} // Prevents closing on overlay click during payment
      >
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold">Make a Donation</DialogTitle>
          <DialogDescription>
            Your contribution will directly support our mission in rural Bihar. Thank you for your generosity.
          </DialogDescription>
        </DialogHeader>
        {/* The key here is overflow-y-auto, which makes the content scrollable */}
        <div className="flex-1 overflow-y-auto">
          <DonationForm 
            initialAmount={initialAmount}
            onPaymentStart={handlePaymentStart} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}