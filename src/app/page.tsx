'use client';

import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Gallery } from '@/components/sections/Gallery';
import { ArtistProfile } from '@/components/sections/ArtistProfile';
import { StudioNotes } from '@/components/sections/StudioNotes';
import { Commissions } from '@/components/sections/Commissions';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <ArtistProfile />
      <StudioNotes />
      <Commissions />
      <Footer />
    </main>
  );
}