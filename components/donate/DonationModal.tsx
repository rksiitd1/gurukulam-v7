"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DonationForm } from "@/components/donate/donation-form";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export function DonationModal({ isOpen, onClose, initialAmount }: DonationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0">
        {/* We'll let the DonationForm handle its own padding and structure */}
        <DonationForm initialAmount={initialAmount} />
      </DialogContent>
    </Dialog>
  );
}