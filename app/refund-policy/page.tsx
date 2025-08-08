import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Refund & Cancellation Policy for Divya Bihar Mission donations (non-profit trust). Donations are non-refundable except for errors.",
}

export default function RefundPolicyPage() {
  const updated = "2025-07-01"
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: {updated}</p>

      <p className="mb-6 text-gray-700">
        <strong>Divya Bihar Mission</strong> is a non-profit trust. All contributions made through our website are
        treated as voluntary donations supporting our charitable programs. As a general policy, donations are
        <strong> non-refundable</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Exceptions</h2>
      <p className="text-gray-700 mb-4">
        If you believe a donation was made in error (for example, duplicate transaction or incorrect amount), please
        contact us within <strong>48 hours</strong> of the transaction with the payment reference and details.
        Refunds, if approved, will be processed to the original payment method within <strong>7–10 working days</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How to Request a Refund</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Email: <a className="text-blue-600" href="mailto:divyabiharmission@gmail.com">divyabiharmission@gmail.com</a></li>
        <li>Phone: <a className="text-blue-600" href="tel:+919262536295">+91 92625 36295</a></li>
        <li>Provide: donor name, date/time, amount, payment reference (Razorpay order/payment id), and reason.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Chargebacks</h2>
      <p className="text-gray-700 mb-4">
        If a chargeback/dispute is raised, we will provide documentation (receipt, logs) to our payment gateway and
        issuing bank as required.
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


