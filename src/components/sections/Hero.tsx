'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    title: 'Jerusalem of Gold',
    hebrewTitle: 'ירושלים של זהב',
    description: 'Where sacred meets canvas - each piece a prayer, every brushstroke a blessing.',
    image: 'https://picsum.photos/800/600?random=7',
    type: 'featured'
  },
  {
    id: 2,
    title: 'Welcome to My Sacred Studio',
    description: 'Original mixed-media works that bridge ancient wisdom with contemporary expression.',
    image: 'https://picsum.photos/800/600?random=7',
    type: 'welcome'
  },
  {
    id: 3,
    title: 'Into His Protection',
    hebrewTitle: 'עמוד האש',
    description: 'Contemporary Jewish art for collectors who understand that beauty and meaning are inseparable.',
    image: 'https://picsum.photos/800/600?random=7',
    type: 'artwork'
  }
];

export function Hero() {

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-12">
                  {/* Content */}
                  <div className="space-y-8 text-center lg:text-left">
                    {slide.hebrewTitle && (
                      <Badge variant="outline" className="font-hebrew text-lg px-4 py-2 bg-secondary/10 border-secondary text-secondary">
                        {slide.hebrewTitle}
                      </Badge>
                    )}
                    
                    <div className="space-y-6">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight">
                        {slide.title}
                      </h1>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg sacred-glow">
                        Browse by Heart 🎨
                      </Button>
                      <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg">
                        Commission Sacred Art 💝
                      </Button>
                    </div>

                    {slide.type === 'welcome' && (
                      <div className="pt-8 border-t border-muted">
                        <p className="text-sm text-muted-foreground italic">
                          &quot;At the core of my work is my faith in God. I see art as a way to connect the physical with the spiritual.&quot;
                        </p>
                        <p className="text-sm text-muted-foreground font-medium mt-2">— Aviva, Artist</p>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <Card className="overflow-hidden sacred-glow border-2 border-secondary/20">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 border-secondary text-secondary hover:bg-secondary/10" />
            <CarouselNext className="relative inset-0 translate-y-0 border-secondary text-secondary hover:bg-secondary/10" />
          </div>
        </Carousel>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}