'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#collections', label: 'Collections' },
    { href: '#artist', label: 'The Artist' },
    { href: '#commissions', label: 'Commissions' },
    { href: '#studio-notes', label: 'Studio Notes' },
  ];

  const legalLinks = [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/authenticity', label: 'Certificate of Authenticity' },
  ];

  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center sacred-glow">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">Sacred Studio</h3>
                <p className="text-sm text-muted-foreground">by Aviva</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Contemporary Jewish art where ancient wisdom meets modern expression. 
                Each original piece is created through prayer, crafted with mastery, 
                and offered as a bridge between the physical and spiritual realms.
              </p>
              
              <div className="flex items-center space-x-2 text-sm">
                <Badge variant="outline" className="text-xs">Original Works Only</Badge>
                <Badge variant="outline" className="text-xs">No Prints</Badge>
                <Badge variant="outline" className="text-xs">Certificate of Authenticity</Badge>
              </div>
            </div>

            {/* Studio Quote */}
            <Card className="bg-muted/50 border-secondary/20">
              <CardContent className="p-4">
                <blockquote className="text-sm italic text-muted-foreground leading-relaxed">
                  "Art has been central to my life from the beginning—a gift I've nurtured through 
                  faith and formal training. Each piece connects the physical with the spiritual."
                </blockquote>
                <p className="text-xs text-muted-foreground mt-2 font-medium">— Aviva</p>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Explore</h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Separator />

            <div className="space-y-3">
              <h5 className="font-semibold text-sm">Connect</h5>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start border-secondary/30 text-secondary hover:bg-secondary/10">
                  Investment Inquiries
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-secondary/30 text-secondary hover:bg-secondary/10">
                  Studio Updates
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-secondary/30 text-secondary hover:bg-secondary/10">
                  Commission Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Contact & Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Sacred Studio</h4>
            
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <h5 className="font-semibold">Investment Range</h5>
                <p className="text-muted-foreground">$1,200 - $8,000 USD</p>
                <p className="text-xs text-muted-foreground italic">Original works only • No prints or reproductions</p>
              </div>

              <div className="space-y-2">
                <h5 className="font-semibold">Commission Timeline</h5>
                <p className="text-muted-foreground">4-16 weeks</p>
                <p className="text-xs text-muted-foreground italic">Depending on size and complexity</p>
              </div>

              <div className="space-y-2">
                <h5 className="font-semibold">Mediums</h5>
                <p className="text-muted-foreground">Oil, acrylic, mixed media, gold leaf</p>
                <p className="text-xs text-muted-foreground italic">Experimental layering techniques</p>
              </div>
            </div>

            {/* Recognition */}
            <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
              <CardContent className="p-4 space-y-2">
                <h5 className="font-semibold text-sm text-primary">Recognition</h5>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>🏆 Competition winner before formal training</p>
                  <p>🎓 Four years at Start Art School</p>
                  <p>🎨 Contemporary Jewish art specialist</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sacred Studio by Aviva. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Original artworks are unique, one-of-one creations.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Sacred Blessing */}
        <div className="mt-8 pt-8 border-t border-muted text-center">
          <p className="text-sm text-muted-foreground font-hebrew mb-2">
            ברוך השם
          </p>
          <p className="text-xs text-muted-foreground italic">
            May each piece bring blessing, beauty, and sacred light to its home.
          </p>
        </div>
      </div>
    </footer>
  );
}