'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Hover trigger area */}
      <div 
        className="fixed top-0 left-0 right-0 h-20 z-40"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-center h-16 space-x-12">
              <Link href="#gallery" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider">
                Collections
              </Link>
              <Link href="#artist" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider">
                Artist
              </Link>
              <Link href="#commission" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider">
                Commission
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}