'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { artworks } from '@/data/artworks-aviva';

export default function Portfolio() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-xl font-light">Aviva · Private Collection</h1>
          <button 
            onClick={() => router.push('/')}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>

      {/* Gallery with generous spacing */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {artworks.slice(0, 6).map((artwork) => (
            <div key={artwork.id} className="space-y-4">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={artwork.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-light">{artwork.title}</h3>
                {artwork.hebrewTitle && (
                  <p className="text-sm text-gray-600">{artwork.hebrewTitle}</p>
                )}
                <p className="text-xs text-gray-500">{artwork.medium}</p>
                
                <div className="pt-4">
                  <Button 
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Inquire About This Piece
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for more */}
        <div className="mt-24 text-center border-t border-gray-200 pt-16">
          <p className="text-sm text-gray-600 mb-6">
            To discuss acquisition or commission opportunities
          </p>
          <Button className="bg-black hover:bg-gray-900 text-white px-8">
            Schedule Private Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}