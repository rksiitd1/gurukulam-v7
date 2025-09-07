"use client";

import { Suspense, useEffect, useState, useRef, lazy } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DonateHero } from "@/components/donate/donate-hero";
import { DonationForm } from "@/components/donate/donation-form";
// Lazy load heavy components
const DonationModal = lazy(() => import("@/components/donate/DonationModal").then(module => ({ default: module.DonationModal })));
const TaxBenefits = lazy(() => import("@/components/donate/tax-benefits").then(module => ({ default: module.TaxBenefits })));
const CallToAction = lazy(() => import("@/components/call-to-action").then(module => ({ default: module.CallToAction })));

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

      <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
        <TaxBenefits />
      </Suspense>
      <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
        <CallToAction />
      </Suspense>

      {/* The modal is here, but only opens when triggered by the URL */}
      {isModalOpen && (
        <Suspense fallback={<div>Loading payment form...</div>}>
          <DonationModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            initialAmount={initialAmount}
          />
        </Suspense>
      )}
    </div>
  );
}

export default function DonatePage() {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/DBM-logo.png" as="image" />
      <link rel="preload" href="/images/team/mukund.jpg" as="image" />
      <Suspense fallback={<div>Loading...</div>}>
        <DonatePageContent />
      </Suspense>
    </>
  );
}
