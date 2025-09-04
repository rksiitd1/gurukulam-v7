"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DonateHero } from "@/components/donate/donate-hero";
import { DonationModal } from "@/components/donate/DonationModal";
import { TaxBenefits } from "@/components/donate/tax-benefits";
import { CallToAction } from "@/components/call-to-action";

// A wrapper component is needed to use useSearchParams within a Client Component
function DonatePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
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
    // Optional: Clean up the URL when the modal is closed for a cleaner UX
    router.replace('/donate', { scroll: false });
  };
  
  const handleOpenModal = (amount?: number) => {
    setInitialAmount(amount);
    setIsModalOpen(true);
  }

  return (
    <div className="min-h-screen">
      {/* Pass the handleOpenModal function to the hero component */}
      <DonateHero onDonateClick={() => handleOpenModal()} />
      <TaxBenefits />
      <CallToAction />

      <DonationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialAmount={initialAmount}
      />
    </div>
  );
}

// The main export uses Suspense for better performance with search params
export default function DonatePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonatePageContent />
    </Suspense>
  );
}