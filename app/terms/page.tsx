import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for Divya Bihar Mission (non-profit trust). Donations are voluntary contributions and are generally non-refundable.",
}

export default function TermsPage() {
  const updated = "2025-07-01"
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-gray-600 mb-8">Last updated: {updated}</p>

      <p className="mb-6 text-gray-700">
        Welcome to <strong>Divya Bihar Mission</strong>. We are a non-profit trust dedicated to education and rural
        development. By accessing our website, engaging with our programs, or making a donation, you agree to these
        Terms & Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Nature of Our Services</h2>
      <p className="text-gray-700 mb-4">
        We are not a commercial business. We do not sell goods or services on this website. All payments collected via
        our donation forms are voluntary contributions to support our charitable activities.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Donations and Receipts</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Donations may be eligible for tax benefits as per applicable law (e.g., 80G), subject to fulfillment of statutory conditions.</li>
        <li>Electronic receipts will be issued to the donor’s email address provided at the time of donation.</li>
        <li>Please ensure accurate information to avoid delays in receipt issuance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Refund & Cancellation Policy</h2>
      <p className="text-gray-700 mb-4">
        Donations are generally <strong>non-refundable</strong>. However, if a donation was made by error or an incorrect
        amount was entered, please contact us within 48 hours at
        <a className="text-blue-600 ml-1" href="mailto:divyabiharmission@gmail.com">divyabiharmission@gmail.com</a>
        or call <a className="text-blue-600" href="tel:+919262536295">+91 92625 36295</a>. We will review genuine
        cases and process refunds at our discretion. Refunds, if approved, will be made to the original payment method
        within 7–10 working days.
      </p>
      <p className="text-gray-700 mb-4">
        For convenience and Razorpay verification, this policy is also available here: <Link className="text-blue-600" href="/refund-policy">Refund & Cancellation Policy</Link>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Payment Processing</h2>
      <p className="text-gray-700 mb-4">
        We use secure third-party payment gateways (e.g., Razorpay). Your card/UPI details are processed by the gateway
        and not stored on our servers. All transactions are subject to the gateway’s terms and applicable banking/UPI
        rules.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Content and Intellectual Property</h2>
      <p className="text-gray-700 mb-4">
        Website content is owned by Divya Bihar Mission unless stated otherwise. You may reference our content for
        non-commercial purposes with attribution. Do not misuse, misrepresent, or deface the content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        The website is provided on an "as is" basis. While we strive for accuracy, we do not guarantee error-free or
        uninterrupted access. We are not liable for indirect, incidental, or consequential damages arising from site use.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Governing Law</h2>
      <p className="text-gray-700 mb-4">
        These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of competent
        courts in Bihar, India.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
      <div className="rounded-lg border p-4 text-gray-800">
        <p><strong>Divya Bihar Mission</strong></p>
        <p>Raghopur, Supaul District, Bihar 852111, India</p>
        <p>Phone: <a className="text-blue-600" href="tel:+919262536295">+91 92625 36295</a></p>
        <p>Email: <a className="text-blue-600" href="mailto:divyabiharmission@gmail.com">divyabiharmission@gmail.com</a></p>
      </div>
    </main>
  )
}


