'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function ArtistProfile() {
  return (
    <section id="artist" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative w-full aspect-[4/5]">
            <Image
              src="https://picsum.photos/400/500?random=99"
              alt=""
              fill
              className="object-cover grayscale"
            />
          </div>
          
          {/* Aviva's exact words */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-light tracking-wider mb-2">Aviva</h2>
              <p className="text-sm text-gray-600">Jerusalem</p>
            </div>
            
            {/* Her exact bio from WhatsApp */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                I have always had a love and natural talent for art, winning various competitions even before formally studying for four years at Start Art School. Art has been a central part of my life, a gift I have nurtured and developed over the years.
              </p>
              <p>
                I work with a wide range of mediums—oil, acrylic, spray paint, watercolor, oil pastels, gold leaf, inks, charcoal, and colored pencils—often layering materials to create texture, depth, and richness. My creative process is experimental and expressive, guided by emotion and a search for meaning.
              </p>
              <p>
                At the core of my work is my faith in God. I see art as a way to connect the physical with the spiritual, and I strive to let my pieces reflect both inner emotions and a higher sense of purpose. Through color, texture, and form, I aim to create work that not only expresses my own feelings but also resonates with others on a soulful level.
              </p>
            </div>
            
            {/* Contact */}
            <Button 
              variant="outline" 
              className="border-gray-400 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}