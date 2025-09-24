// app/not-found.tsx
import Link from 'next/link';
import { Compass, Home, BookOpen, Heart, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-green-50 to-blue-50 py-12 px-4">
      <Card className="max-w-2xl w-full text-center shadow-2xl border-orange-200 bg-white/80 backdrop-blur-sm overflow-hidden">
        <CardHeader className="p-10">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Compass className="w-12 h-12 text-orange-500 animate-pulse" />
          </div>
          <Badge variant="outline" className="mb-2 border-orange-300 text-orange-600">404 Error</Badge>
          <CardTitle className="text-4xl font-bold text-gray-900">
            A Minor Detour on Your Journey
          </CardTitle>
          <p className="mt-2 text-2xl font-devanagari text-orange-700">
            पथ खो गया?
          </p>
        </CardHeader>
        <CardContent className="space-y-8 px-10 pb-10">
          <p className="text-lg text-gray-700">
            The page you are looking for might have been moved, renamed, or is taking a brief moment for reflection. Let's get you back on the right path.
          </p>
          
          <div className="border-t border-orange-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Here are some helpful links:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="h-auto py-3 flex-col">
                <Link href="/">
                  <Home className="w-6 h-6 mb-1 text-blue-500" />
                  <span>Home</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3 flex-col">
                <Link href="/about">
                  <Heart className="w-6 h-6 mb-1 text-red-500" />
                  <span>About Us</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3 flex-col">
                <Link href="/programs">
                  <BookOpen className="w-6 h-6 mb-1 text-green-500" />
                  <span>Our Programs</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3 flex-col">
                <Link href="/contact">
                  <Mail className="w-6 h-6 mb-1 text-purple-500" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}