import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Divya Bihar Mission (non-profit trust). We process donations via Razorpay and handle your data responsibly.",
}

export default function PrivacyPolicyPage() {
  const updated = "2025-07-01"
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: {updated}</p>

      <p className="mb-6 text-gray-700">
        This Privacy Policy describes how <strong>Divya Bihar Mission</strong>, a non-profit trust based in Raghopur,
        Supaul, Bihar, India ("we", "us", "our"), collects, uses, and protects your information when you visit our
        website and make donations or contact us. We are not a commercial business. We accept voluntary donations to
        support our charitable activities and issue receipts in accordance with applicable laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>
          <strong>Contact details</strong> such as your name, email address, and phone number when you fill forms or
          contact us.
        </li>
        <li>
          <strong>Donation details</strong> such as donation amount, currency, and limited billing information needed to
          generate a receipt and meet statutory requirements (e.g., 80G receipts).
        </li>
        <li>
          <strong>Payment processing data</strong> is handled by our payment gateway (e.g., Razorpay). We do not store
          your full card/UPI credentials on our servers.
        </li>
        <li>
          <strong>Technical data</strong> such as IP address and basic device/browser information for security and
          fraud-prevention.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>To process your donations and issue receipts.</li>
        <li>To communicate with you about our activities, acknowledgements, and updates (opt-out anytime).</li>
        <li>To comply with legal, accounting, and regulatory requirements.</li>
        <li>To protect our users and organization against fraud, abuse, or security incidents.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Sharing of Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell your personal information. We may share limited information with service providers strictly for
        processing payments (e.g., Razorpay), sending communications, or fulfilling legal obligations. These providers
        process your data under their own privacy policies and applicable laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Data Retention</h2>
      <p className="text-gray-700 mb-4">
        We retain donation and receipt records for periods required by law and for audit purposes. Other personal
        information is retained only as long as necessary for the purposes outlined above.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Security</h2>
      <p className="text-gray-700 mb-4">
        We use reasonable administrative and technical measures to protect your information. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Your Choices & Rights</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>You can opt out of non-essential communications at any time.</li>
        <li>You can request access, correction, or deletion of your personal information, subject to legal limits.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Grievance & Contact</h2>
      <p className="text-gray-700 mb-4">
        If you have questions or concerns about this policy or our data practices, please contact:
      </p>
      <div className="rounded-lg border p-4 text-gray-800">
        <p><strong>Divya Bihar Mission</strong></p>
        <p>Raghopur, Supaul District, Bihar 852111, India</p>
        <p>Phone: <a className="text-blue-600" href="tel:+919262536295">+91 92625 36295</a></p>
        <p>Email: <a className="text-blue-600" href="mailto:divyabiharmission@gmail.com">divyabiharmission@gmail.com</a></p>
        <p>Grievance Officer: <span className="text-gray-900">Mukund Agrawal</span></p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to This Policy</h2>
      <p className="text-gray-700">
        We may update this Privacy Policy from time to time. We encourage you to review it periodically for changes.
      </p>
    </main>
  )
}


