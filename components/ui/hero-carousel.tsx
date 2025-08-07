'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the image directories and their corresponding images
const HERO_IMAGES = {
  home: [
    '/images/hero/home/1.png',
    '/images/hero/home/2.png',
    '/images/hero/home/3.png',
    '/images/hero/home/4.png',
    '/images/hero/home/5.png',
  ],
  about: [
    '/images/hero/about/1.jpg',
    '/images/hero/about/2.jpg',
    '/images/hero/about/3.jpg',
  ],
  contact: [
    '/images/hero/contact/1.jpg',
    '/images/hero/contact/2.jpg',
    '/images/hero/contact/3.jpg',
  ],
  programs: [
    '/images/hero/programs/1.jpg',
    '/images/hero/programs/2.jpg',
    '/images/hero/programs/3.jpg',
  ],
  gurukulam: [
    '/images/hero/gurukulam/1.jpg',
    '/images/hero/gurukulam/2.jpg',
    '/images/hero/gurukulam/3.jpg',
  ],
  agriculture: [
    '/images/hero/agriculture/1.jpg',
    '/images/hero/agriculture/2.jpg',
    '/images/hero/agriculture/3.jpg',
  ],
  'shri-classes': [
    '/images/hero/shri-classes/1.jpg',
    '/images/hero/shri-classes/2.jpg',
    '/images/hero/shri-classes/3.jpg',
  ],
  udyamita: [
    '/images/hero/udyamita/1.jpg',
    '/images/hero/udyamita/2.jpg',
    '/images/hero/udyamita/3.jpg',
  ],
} as const;

type ImageDir = keyof typeof HERO_IMAGES;

interface HeroCarouselProps {
  imageDir: ImageDir; // e.g., 'home', 'about', 'contact', 'programs'
  alt: string;
  className?: string;
  priority?: boolean;
}

export function HeroCarousel({ imageDir, alt, className, priority = false }: HeroCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>(['/placeholder.svg']);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Minimum swipe distance (in pixels) to trigger slide change
  const minSwipeDistance = 50;
  const transitionDuration = 500; // Duration of slide transition in milliseconds

  useEffect(() => {
    // Set images based on the directory
    const selectedImages = HERO_IMAGES[imageDir] || ['/placeholder.svg'];
    setImages(Array.isArray(selectedImages) ? [...selectedImages] : [selectedImages]);
    setIsLoading(false);
  }, [imageDir]);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Changed from 5000ms to 6000ms for 6-second auto-scroll

    return () => clearInterval(timer);
  }, [images.length]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // Reset transition state after animation completes
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!touchStart || touchEnd === null) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (isLoading) {
    return (
      <div className={cn("bg-gray-200 animate-pulse w-full", className)} />
    );
  }

  if (images.length === 0) {
    return (
      <div className={cn("bg-gray-200 flex items-center justify-center w-full", className)}>
        <span className="text-gray-500">No images found</span>
      </div>
    );
  }

  return (
    <div 
      className={cn("relative w-full overflow-hidden rounded-2xl shadow-2xl select-none touch-pan-y", className)}
      ref={sliderRef}
    >
      {/* Image container with smooth transitions */}
      <div 
        className="relative w-full h-full touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTransitionEnd={handleTransitionEnd}
      >
        <div 
          className="relative w-full h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: touchEnd !== null && touchStart !== null 
              ? `translateX(${touchEnd - touchStart}px)`
              : 'none',
          }}
        >
          <Image
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={alt}
            fill
            className="object-cover brightness-110 contrast-105"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            onLoadingComplete={() => setIsLoading(false)}
            onError={(e) => {
              console.error('Error loading image:', e);
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        
        {/* Navigation Arrows - Hidden on mobile, visible on md+ */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white w-8 h-8 items-center justify-center rounded-full transition-all duration-200 transform hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white w-8 h-8 items-center justify-center rounded-full transition-all duration-200 transform hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </>
        )}
        
        {/* Navigation Dots removed as per user request */}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
