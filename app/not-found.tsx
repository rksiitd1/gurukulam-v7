// app/not-found.tsx
'use client'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Compass, Home, BookOpen, Heart, Mail, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function NotFound() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (event.clientX - centerX) / (rect.width / 2);
    const percentY = (event.clientY - centerY) / (rect.height / 2);
    const maxTilt = 6;
    setTilt({ rx: -percentY * maxTilt, ry: percentX * maxTilt });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-50 via-green-50 to-blue-50 py-12 px-4 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-10 -left-10 h-60 w-60 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute top-10 -right-10 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 h-64 w-64 rounded-full bg-green-200/50 blur-3xl" />
      </div>
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-2xl w-full text-center shadow-2xl border-orange-200 bg-white/80 backdrop-blur-md overflow-hidden transition-transform duration-300 hover:shadow-orange-200/80 hover:-translate-y-1 will-change-transform"
        style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      >
        <CardHeader className="p-10">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_var(--tw-rotate),theme(colors.orange.300),theme(colors.blue.300),theme(colors.green.300),theme(colors.orange.300))] animate-spin [animation-duration:5s] blur-[2px] opacity-60" />
            <div className="relative w-full h-full bg-orange-100 rounded-full flex items-center justify-center shadow-inner">
              <Compass className="w-12 h-12 text-orange-500" />
            </div>
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
          <form action="/blog/search" className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              ref={searchRef}
              name="q"
              placeholder="Search articles and pages... (press / to focus)"
              className="pl-10 pr-4 h-11 bg-white/70 border-orange-200 focus-visible:ring-orange-400"
            />
          </form>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200/60">
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button asChild variant="secondary" className="backdrop-blur hover:shadow-md">
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>

          <div className="border-t border-orange-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Here are some helpful links:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button asChild variant="outline" className="h-auto py-3 flex-col transition hover:-translate-y-0.5">
                <Link href="/">
                  <Home className="w-6 h-6 mb-1 text-blue-500" />
                  <span>Home</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3 flex-col transition hover:-translate-y-0.5">
                <Link href="/about">
                  <Heart className="w-6 h-6 mb-1 text-red-500" />
                  <span>About Us</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3 flex-col transition hover:-translate-y-0.5">
                <Link href="/programs">
                  <BookOpen className="w-6 h-6 mb-1 text-green-500" />
                  <span>Our Programs</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-3 flex-col transition hover:-translate-y-0.5">
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