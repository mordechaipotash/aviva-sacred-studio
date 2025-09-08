'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import type { Artwork } from '@/data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  onViewDetails: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork, onViewDetails }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="gallery-card group cursor-pointer overflow-hidden border-2 border-transparent hover:border-secondary/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(artwork)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Featured Badge */}
          {artwork.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-secondary text-secondary-foreground sacred-glow">
                Featured ✨
              </Badge>
            </div>
          )}
          
          {/* Availability Status */}
          <div className="absolute top-4 right-4">
            <Badge variant={artwork.available ? "default" : "secondary"}>
              {artwork.available ? "Available" : "Collected"}
            </Badge>
          </div>

          {/* Hover Content */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}>
            <div className="space-y-3">
              {artwork.hebrewTitle && (
                <p className="font-hebrew text-secondary text-lg">{artwork.hebrewTitle}</p>
              )}
              
              <h3 className="text-xl font-bold">{artwork.title}</h3>
              
              <p className="text-sm text-gray-200 line-clamp-2">{artwork.description}</p>
              
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-gray-300">
                  <p>{artwork.medium}</p>
                  <p>{artwork.dimensions}</p>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="bg-secondary/90 hover:bg-secondary text-secondary-foreground sacred-glow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails(artwork);
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card Footer - Always Visible */}
        <div className="p-4 bg-card">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              {artwork.hebrewTitle && (
                <p className="font-hebrew text-secondary text-sm">{artwork.hebrewTitle}</p>
              )}
              <h4 className="font-semibold text-lg leading-tight">{artwork.title}</h4>
              <p className="text-sm text-muted-foreground">{artwork.medium}</p>
            </div>
            
            <div className="text-right ml-4">
              <p className="text-sm font-medium text-primary">{artwork.price}</p>
              {!artwork.available && (
                <p className="text-xs text-muted-foreground">Private Collection</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}