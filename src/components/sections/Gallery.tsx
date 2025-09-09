'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { artworks } from '@/data/artworks-aviva';

export function Gallery() {
  return (
    <section id="gallery" className="relative min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <Dialog key={artwork.id}>
            <DialogTrigger asChild>
              <div 
                className="relative aspect-[4/5] cursor-pointer overflow-hidden group"
              >
                <Image
                  src={artwork.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl bg-white border-0 p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={artwork.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Aviva's description */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{artwork.title}</h3>
                    {artwork.hebrewTitle && (
                      <p className="text-lg text-gray-600 mb-4">{artwork.hebrewTitle}</p>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {artwork.description}
                  </p>
                  
                  {artwork.medium && (
                    <p className="text-xs text-gray-500 italic">
                      {artwork.medium}
                    </p>
                  )}
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    Inquire About This Piece
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}