'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroCarouselProps {
  imageDir: string; // e.g., 'home', 'about', 'contact', 'programs'
  alt: string;
  className?: string;
  priority?: boolean;
}

export function HeroCarousel({ imageDir, alt, className, priority = false }: HeroCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically import all images from the specified directory
    const importImages = async () => {
      try {
        // This will be handled by Next.js at build time
        const context = require.context(
          '@/../public/images/hero',
          false,
          /\.(png|jpg|jpeg|webp|avif)$/
        );
        
        // Filter images by directory
        const imageFiles = context
          .keys()
          .filter((key) => key.startsWith(`./${imageDir}/`))
          .map((key) => key.replace('./', '/images/hero/'));
        
        setImages(imageFiles);
      } catch (error) {
        console.error('Error loading hero images:', error);
        setImages(['/placeholder.svg']);
      } finally {
        setIsLoading(false);
      }
    };

    importImages();
  }, [imageDir]);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (isLoading) {
    return (
      <div className={cn("bg-gray-200 animate-pulse w-full h-64 sm:h-80 lg:h-96", className)} />
    );
  }

  if (images.length === 0) {
    return (
      <div className={cn("bg-gray-200 flex items-center justify-center w-full h-64 sm:h-80 lg:h-96", className)}>
        <span className="text-gray-500">No images found</span>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl", className)}>
      {/* Current Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentImageIndex]}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-1000"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        
        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
