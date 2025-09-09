'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Rotating featured pieces
const featuredWorks = [
  {
    image: 'https://picsum.photos/1200/900?random=41',
    title: 'Jerusalem of Gold',
    hebrewTitle: 'ירושלים של זהב',
    medium: 'Oil, pastel, acrylic, gold leaf',
    year: '2024'
  },
  {
    image: 'https://picsum.photos/1200/900?random=42',
    title: 'Into His Protection',
    hebrewTitle: 'עמוד האש',
    medium: 'Oil and acrylic',
    year: '2024'
  },
  {
    image: 'https://picsum.photos/1200/900?random=43',
    title: 'Gold in the Cracks',
    hebrewTitle: 'זָהָב בַּסְּדָקִים',
    medium: 'Mixed media with gold leaf',
    year: '2024'
  }
];

export function FeaturedPiece() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const featured = featuredWorks[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsImageLoaded(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredWorks.length);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-100/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Featured artwork with fade transition */}
          <div className="relative aspect-[4/5] w-full max-w-2xl mx-auto lg:mx-0 group">
            <div className={`absolute inset-0 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover"
                priority
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            
            {/* Elegant frame effect on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-300 transition-all duration-700 pointer-events-none" />
            <div className="absolute -inset-2 border border-transparent group-hover:border-gray-200 transition-all duration-700 delay-100 pointer-events-none" />
            
            {/* Progress indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
              {featuredWorks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsImageLoaded(false);
                    setTimeout(() => setCurrentIndex(index), 300);
                  }}
                  className={`h-1 transition-all duration-500 ${
                    index === currentIndex ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content with refined typography */}
          <div className="space-y-8 max-w-md mx-auto lg:mx-0">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <p className="text-xs text-gray-400 tracking-[0.3em] uppercase animate-fade-up">
                  Currently Featured
                </p>
              </div>
              
              <div className="overflow-hidden">
                <h1 className="text-4xl font-extralight animate-fade-up animation-delay-100">
                  {featured.title}
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-2xl text-gray-500 font-light animate-fade-up animation-delay-200">
                  {featured.hebrewTitle}
                </p>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-sm text-gray-400 animate-fade-up animation-delay-300">
                  {featured.medium} · {featured.year}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              
              <div className="space-y-4">
                <h2 className="text-sm font-light tracking-wider text-gray-600">Private Collection</h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Aviva&apos;s complete portfolio of original works, each piece a unique expression of faith and artistry.
                </p>
              </div>

              <Button 
                className="w-full bg-black hover:bg-gray-900 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                onClick={() => window.location.href = '/portfolio'}
              >
                Enter Gallery
              </Button>
              
              <button 
                className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => window.location.href = '#artist'}
              >
                Learn About the Artist
              </button>
            </div>

            <div className="pt-8">
              <p className="text-[10px] text-gray-400 italic leading-relaxed">
                &quot;At the core of my work is my faith in God. I see art as a way to connect the physical with the spiritual.&quot;
              </p>
              <p className="text-[10px] text-gray-400 mt-2">— Aviva, Jerusalem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}