// components/blog/NewsletterConfirmationModal.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MailCheck } from "lucide-react";

interface NewsletterConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterConfirmationModal({ isOpen, onClose }: NewsletterConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md text-center p-8">
        <DialogHeader className="space-y-4">
          <MailCheck className="mx-auto h-12 w-12 text-orange-500" />
          <DialogTitle className="text-2xl font-bold text-orange-600">
            Thank You for Subscribing!
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600 leading-relaxed">
            You are now subscribed to the Divya Bihar Mission newsletter. Look for inspiring stories and updates from our mission in your inbox.
            <br/><br/>
            If you do not find the email from us in the Primary Inbox, please check the Promotions or Spam folder.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}