'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<string[]>(['/placeholder.svg']);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  
  // Carousel settings
  const minSwipeDistance = 50;
  const autoScrollDelay = 4000; // 4 seconds
  const transitionSpeed = 300; // milliseconds

  useEffect(() => {
    // Set images based on the directory
    const selectedImages = HERO_IMAGES[imageDir] || ['/placeholder.svg'];
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
    
    const diff = touchEndX - touchStartX;
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        handleSwipe('right');
      } else {
        handleSwipe('left');
      }
    } else {
      setOffsetX(0);
    }
    
    setTouchStartX(0);
    setTouchEndX(0);
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
      className={cn("relative w-full overflow-hidden rounded-2xl shadow-2xl select-none touch-pan-y", className)}
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
            transform: `translateX(${offsetX}px)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, index) => (
            <div 
              key={index}
              className="relative w-full h-full flex-shrink-0"
              style={{
                transform: `translateX(${-currentIndex * 100}%)`,
                transition: isDraggingRef.current ? 'none' : `transform ${transitionSpeed}ms ease-in-out`,
              }}
            >
              <Image
                src={src}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-cover brightness-110 contrast-105"
                priority={index === 0 && priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                onLoadingComplete={() => setIsLoading(false)}
                onError={(e) => {
                  console.error('Error loading image:', e);
                  e.currentTarget.src = '/placeholder.svg';
                }}
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
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
