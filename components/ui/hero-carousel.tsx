'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the image directories and their corresponding images
// Updated to match files that actually exist under public/images
const HERO_IMAGES = {
  home: [
    '/images/hero/home/1.png',
    '/images/hero/home/2.png',
    '/images/hero/home/3.png',
    '/images/hero/home/4.png',
    '/images/hero/home/5.png',
  ],
  // About → use images from public/images/about
  about: [
    '/images/about/1.jpg',
    '/images/about/2.jpg',
    '/images/about/3.jpg',
    '/images/about/4.jpg',
    '/images/about/5.jpg',
  ],
  // Contact → use header images
  contact: [
    '/images/header/classroom.png',
    '/images/header/community-events.png',
    '/images/header/cultural-program.png',
    '/images/header/planting.png',
  ],
  // Programs overview → representative program images
  programs: [
    '/images/programs/gurukulam.jpg',
    '/images/programs/shri-classes.jpg',
    '/images/programs/udyamita.jpg',
    '/images/programs/agro-gaushala.jpg',
  ],
  // Gurukulam → available program + classroom images
  gurukulam: [
    '/images/programs/gurukulam.jpg',
    '/images/programs/gurukulam3.jpg',
    "/images/gallery/classroom/WhatsApp Image 2025-07-04 at 09.51.03_87f0d490.jpg",
  ],
  // Agriculture → use gallery images
  agriculture: [
    '/images/gallery/agriculture/1.jpg',
    '/images/gallery/agriculture/2.jpg',
    '/images/gallery/agriculture/3.jpg',
    '/images/gallery/agriculture/4.jpg',
    '/images/gallery/agriculture/5.jpg',
  ],
  // Shri Classes → program + classroom images
  'shri-classes': [
    '/images/programs/shri-classes.jpg',
    '/images/programs/shri-classes3.jpg',
    "/images/gallery/classroom/WhatsApp Image 2025-07-04 at 09.50.30_296ab7cd.jpg",
  ],
  // Udyamita → available program images
  udyamita: [
    '/images/programs/udyamita.jpg',
    '/images/programs/udyamita3.jpg',
  ],
} as const;

type ImageDir = keyof typeof HERO_IMAGES;

interface HeroCarouselProps {
  imageDir: ImageDir; // e.g., 'home', 'about', 'contact', 'programs'
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: 'contain' | 'cover';
  showOverlay?: boolean; // optional dark gradient overlay for cover-style displays
}

export function HeroCarousel({ imageDir, alt, className, priority = false, fit = 'contain', showOverlay = false }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>(['/placeholder.svg']);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  
  // Carousel settings
  const minSwipeDistance = 50;
  const autoScrollDelay = 4000; // 4 seconds
  const transitionSpeed = 300; // milliseconds

  useEffect(() => {
    // Set images based on the directory; fallback to home if not found
    const selectedImages = HERO_IMAGES[imageDir] || HERO_IMAGES.home;
    setImages(Array.isArray(selectedImages) ? [...selectedImages] : [selectedImages]);
    setIsLoading(false);
  }, [imageDir]);

  // Auto-scroll functionality
  useEffect(() => {
    if (images.length <= 1) return;
    
    const autoScroll = () => {
      if (!isTransitioning && !isDraggingRef.current) {
        handleSwipe('left');
      }
    };
    
    const timer = setInterval(autoScroll, autoScrollDelay);
    return () => clearInterval(timer);
  }, [images.length, isTransitioning]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setOffsetX(direction === 'left' ? -100 : 100);
    
    setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = direction === 'left' 
          ? (prevIndex + 1) % images.length 
          : (prevIndex - 1 + images.length) % images.length;
        return nextIndex;
      });
      
      setOffsetX(0);
      setTimeout(() => setIsTransitioning(false), 50);
    }, transitionSpeed);
  };
  
  const goToNext = () => handleSwipe('left');
  const goToPrevious = () => handleSwipe('right');
  
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    
    const touchX = e.touches[0].clientX;
    const diff = touchX - touchStartX;
    setOffsetX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = offsetX;
    if (Math.abs(diff) > minSwipeDistance) {
      handleSwipe(diff > 0 ? 'right' : 'left');
    } else {
      setOffsetX(0);
    }
    setTouchStartX(0);
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

  const getAdjacentIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div 
      className={cn("relative w-full overflow-hidden rounded-2xl shadow-2xl select-none touch-pan-y bg-gray-100", className)}
      ref={sliderRef}
    >
      <div 
        className="relative w-full h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={(e) => {
          isDraggingRef.current = true;
          setTouchStartX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (!isDraggingRef.current) return;
          setOffsetX(e.clientX - touchStartX);
        }}
        onMouseUp={() => {
          if (!isDraggingRef.current) return;
          isDraggingRef.current = false;
          
          if (offsetX > minSwipeDistance) {
            handleSwipe('right');
          } else if (offsetX < -minSwipeDistance) {
            handleSwipe('left');
          } else {
            setOffsetX(0);
          }
        }}
        onMouseLeave={() => {
          if (isDraggingRef.current) {
            isDraggingRef.current = false;
            setOffsetX(0);
          }
        }}
      >
      <div 
        className="flex w-full h-full transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        }}
      >
          {images.map((src, index) => (
            <div 
              key={index}
            className="relative h-full flex-shrink-0 min-w-full"
            >
            {fit === 'contain' ? (
              <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(18px)',
                  transform: 'scale(1.1)',
                }}
              />
            ) : null}
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                fill
                className={cn(fit === 'contain' ? 'object-contain' : 'object-cover', 'object-center')}
                priority={index === 0 && priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                onLoadingComplete={() => setIsLoading(false)}
                onError={(e) => {
                  console.error('Error loading image:', e);
                  e.currentTarget.src = '/placeholder.svg';
                }}
                draggable={false}
              />
            </div>
          ))}
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
      {showOverlay && fit === 'cover' ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      ) : null}
    </div>
  );
}
