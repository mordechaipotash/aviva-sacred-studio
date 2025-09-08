'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import type { Artwork } from '@/data/artworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (artwork: Artwork) => void;
}

export function ArtworkModal({ artwork, isOpen, onClose, onInquire }: ArtworkModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!artwork) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
        <div className="grid md:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
            <div className="space-y-6">
              <DialogHeader>
                <div className="space-y-3">
                  {artwork.hebrewTitle && (
                    <Badge variant="outline" className="font-hebrew text-lg px-4 py-2 bg-secondary/10 border-secondary text-secondary w-fit">
                      {artwork.hebrewTitle}
                    </Badge>
                  )}
                  
                  <DialogTitle className="text-3xl font-bold text-gradient leading-tight">
                    {artwork.title}
                  </DialogTitle>
                  
                  <div className="flex items-center gap-3">
                    <Badge variant={artwork.available ? "default" : "secondary"}>
                      {artwork.available ? "Available" : "Private Collection"}
                    </Badge>
                    {artwork.featured && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        Featured ✨
                      </Badge>
                    )}
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">The Story Behind</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {artwork.story}
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2">Medium</h5>
                    <p className="text-muted-foreground">{artwork.medium}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Dimensions</h5>
                    <p className="text-muted-foreground">{artwork.dimensions}</p>
                  </div>
                </div>

                {artwork.available && (
                  <>
                    <Separator />
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-primary">Investment Information</h5>
                      <p className="text-sm text-muted-foreground mb-3">
                        This original work is available for serious collectors. Each piece comes with a certificate of authenticity and detailed provenance.
                      </p>
                      <p className="text-lg font-semibold">{artwork.price}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t border-border">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Continue Browsing
              </Button>
              {artwork.available ? (
                <Button 
                  onClick={() => onInquire(artwork)}
                  className="flex-1 bg-primary hover:bg-primary/90 sacred-glow"
                >
                  Private Inquiry 💎
                </Button>
              ) : (
                <Button 
                  onClick={() => onInquire(artwork)}
                  variant="secondary"
                  className="flex-1"
                >
                  Commission Similar ✨
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}