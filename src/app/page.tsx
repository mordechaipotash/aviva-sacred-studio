'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { artworks } from '@/data/artworks-aviva';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showInquireButton, setShowInquireButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const currentArtwork = artworks[currentIndex];

  useEffect(() => {
    // Hide welcome screen after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset states when artwork changes
    setShowText(false);
    setShowInquireButton(false);
    setShowNextButton(false);
    setImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    // Show text immediately after image loads
    if (imageLoaded) {
      setShowText(true);
      
      // Show inquire button after 1.5 seconds
      setTimeout(() => {
        setShowInquireButton(true);
      }, 1500);
      
      // Show next button after 3.5 seconds (1.5 + 2 more)
      setTimeout(() => {
        setShowNextButton(true);
      }, 3500);
    }
  }, [imageLoaded, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const handleInquire = () => {
    // Handle inquiry - could open email or form
    window.location.href = `mailto:contact@avivasacredstudio.com?subject=Inquiry: ${currentArtwork.title}`;
  };

  if (showWelcome) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-2xl text-center space-y-6 animate-fade-up">
          <h1 className="text-4xl font-light tracking-wide text-gray-800">
            Hi, I&apos;m Aviva
          </h1>
          <p className="text-lg font-light text-gray-600 leading-relaxed">
            Welcome to my gallery
          </p>
          <p className="text-base font-light text-gray-500 leading-relaxed max-w-lg mx-auto">
            After many years of creative expression, I&apos;ve been crafting sacred art that speaks to the soul. Each piece is a journey of faith, color, and divine inspiration.
          </p>
          <div className="pt-8">
            <div className="w-16 h-px bg-gray-300 mx-auto animate-pulse"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Artwork */}
        <div className="relative aspect-[4/5] w-full max-w-xl mx-auto">
          <div className="absolute inset-0 border border-gray-300">
            <Image
              src={currentArtwork.image}
              alt=""
              fill
              className="object-cover"
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* Text side */}
        <div className="space-y-8 max-w-md">
          {/* Title - always visible */}
          <div className="space-y-2">
            <h1 className="text-3xl font-light">{currentArtwork.title}</h1>
            {currentArtwork.hebrewTitle && (
              <p className="text-xl text-gray-500">{currentArtwork.hebrewTitle}</p>
            )}
            {currentArtwork.medium && (
              <p className="text-sm text-gray-400">{currentArtwork.medium}</p>
            )}
          </div>

          {/* Text in elegant bordered box */}
          {showText && (
            <div className="min-h-[250px] border border-gray-200 rounded-sm p-8 animate-fade-up">
              <p className="font-handwritten text-gray-700">
                {currentArtwork.description}
              </p>
            </div>
          )}

          {/* Elegant buttons */}
          <div className="space-y-3">
            {showInquireButton && (
              <button 
                onClick={handleInquire}
                className="w-full py-3.5 text-sm font-light tracking-[0.2em] border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-700 animate-fade-up-gentle"
              >
                INQUIRE
              </button>
            )}
            {showNextButton && (
              <button 
                onClick={handleNext}
                className="w-full py-3 text-xs font-light tracking-[0.15em] text-gray-400 hover:text-gray-600 border border-gray-300 rounded-full hover:border-gray-400 transition-all duration-700 animate-fade-up-gentle"
              >
                VIEW NEXT PIECE
              </button>
            )}
          </div>

          {/* Progress indicator */}
          <div className="flex space-x-1">
            {artworks.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 flex-1 transition-all duration-500 ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}