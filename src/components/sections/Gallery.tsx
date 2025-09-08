'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { ArtworkModal } from '@/components/artwork/ArtworkModal';
import { artworks, categories, type Artwork } from '@/data/artworks';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const handleViewDetails = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleInquire = (artwork: Artwork) => {
    // This would typically open a contact form or redirect to inquiry page
    console.log('Inquiry for:', artwork.title);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-lg">
            Sacred Collections 🎨
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Browse by Heart
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each original work tells a story of faith, hope, and the eternal connection between the physical and spiritual realms. 
              Discover pieces that speak to your soul.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 text-sm font-medium transition-all ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground sacred-glow' 
                  : 'border-secondary text-secondary hover:bg-secondary/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Section */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Work</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {artworks.filter(artwork => artwork.featured).map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No artworks found in this collection yet. 
              <br />
              New pieces are added regularly as they are completed.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 border-secondary text-secondary hover:bg-secondary/10"
              onClick={() => setSelectedCategory('all')}
            >
              View All Collections
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-muted/50 rounded-2xl p-12">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient">
              Don&apos;t See What Speaks to Your Heart?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every piece is one-of-one, but new works are born from prayer and inspiration. 
              Commission a sacred piece for your special moment or space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 sacred-glow px-8">
                Explore Commissions 💝
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8">
                Join Studio Updates 📝
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onInquire={handleInquire}
      />
    </section>
  );
}