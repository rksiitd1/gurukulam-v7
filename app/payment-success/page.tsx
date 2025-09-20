// app/payment-success/page.tsx
import Link from 'next/link';
import { CheckCircle, Home, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <Card className="max-w-lg w-full text-center shadow-2xl border-green-200 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">
            Thank You for Your Donation!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-700">
            Your generous contribution has been received successfully. Your support is invaluable to our mission of transforming rural Bihar.
          </p>
          <p className="font-devanagari text-xl text-green-700">
            आपके उदार दान के लिए धन्यवाद!
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600">
              An 80G tax exemption receipt will be sent to your registered email address shortly. If you have any questions, please feel free to contact us.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/programs">
                <Heart className="w-5 h-5 mr-2" />
                See Your Impact
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}