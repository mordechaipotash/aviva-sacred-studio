'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const artworks = [
  { id: 1, image: 'https://picsum.photos/1920/1080?random=1' },
  { id: 2, image: 'https://picsum.photos/1920/1080?random=2' },
  { id: 3, image: 'https://picsum.photos/1920/1080?random=3' },
  { id: 4, image: 'https://picsum.photos/1920/1080?random=4' },
  { id: 5, image: 'https://picsum.photos/1920/1080?random=5' },
];

export function Hero() {
  return (
    <div className="fixed inset-0 w-full h-screen">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {artworks.map((artwork) => (
            <CarouselItem key={artwork.id} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={artwork.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Minimal navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {artworks.map((_, index) => (
            <div key={index} className="w-2 h-2 bg-white/50 rounded-full" />
          ))}
        </div>
      </Carousel>

      {/* Corner signature */}
      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-3xl font-light text-white tracking-wider">Aviva</h1>
      </div>

      {/* Aviva's core statement - subtle, bottom right */}
      <div className="absolute bottom-8 right-8 z-10 max-w-md">
        <p className="text-xs text-white/70 italic">
          &quot;At the core of my work is my faith in God. I see art as a way to connect the physical with the spiritual&quot;
        </p>
      </div>
    </div>
  );
}