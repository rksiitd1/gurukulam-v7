import React from 'react';
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Volunteer",
  description: "Contribute your time and skills – on-site and remote volunteering opportunities.",
  openGraph: { images: ["/og-image.jpg"] },
}
import { VolunteerHero } from '@/components/volunteer/volunteer-hero';
import { WhyVolunteer } from '@/components/volunteer/why-volunteer';
import { VolunteerOpportunities } from '@/components/volunteer/volunteer-opportunities';
import { VolunteerSignup } from '@/components/volunteer/volunteer-signup';
// import { VolunteerTestimonials } from '@/components/volunteer/volunteer-testimonials';
import { VolunteerFAQ } from '@/components/volunteer/volunteer-faq';
import { CallToAction } from '@/components/call-to-action';

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <VolunteerHero />
      <WhyVolunteer />
      <VolunteerOpportunities />
      {/* <VolunteerTestimonials /> */}
      <VolunteerSignup />
      <VolunteerFAQ />
      <CallToAction />
    </main>
  );
}