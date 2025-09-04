"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DonateHero } from "@/components/donate/donate-hero";
import { DonationForm } from "@/components/donate/donation-form";
import { DonationModal } from "@/components/donate/DonationModal";
import { TaxBenefits } from "@/components/donate/tax-benefits";
import { CallToAction } from "@/components/call-to-action";

function DonatePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null); // Ref for the on-page form

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialAmount, setInitialAmount] = useState<number | undefined>();

  useEffect(() => {
    const amountParam = searchParams.get("amount");
    if (amountParam) {
      const parsedAmount = parseInt(amountParam, 10);
      if (!isNaN(parsedAmount)) {
        setInitialAmount(parsedAmount);
        setIsModalOpen(true);
      }
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Clean up the URL after the modal is closed for a better UX
    router.replace('/donate', { scroll: false });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      {/* The hero button now scrolls down to the on-page form */}
      <DonateHero onDonateClick={scrollToForm} />

      {/* The DonationForm is now a permanent part of the page */}
      <div ref={formRef}>
        <DonationForm />
      </div>

      <TaxBenefits />
      <CallToAction />

      {/* The modal is here, but only opens when triggered by the URL */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialAmount={initialAmount}
      />
    </div>
  );
}

export default function DonatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonatePageContent />
    </Suspense>
  );
}
