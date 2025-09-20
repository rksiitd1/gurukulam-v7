// app/payment-failure/page.tsx
import Link from 'next/link';
import { XCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentFailurePage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-red-50 py-12 px-4">
      <Card className="max-w-lg w-full text-center shadow-lg border-red-200">
        <CardHeader>
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">
            Payment Verification Failed
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-700">
            There was an issue verifying your payment. If you believe the payment was successful, please contact us for assistance.
          </p>
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}