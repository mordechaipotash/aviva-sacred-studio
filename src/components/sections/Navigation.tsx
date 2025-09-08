'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#collections', label: 'Collections', icon: '🎨' },
    { href: '#artist', label: 'The Artist', icon: '👩‍🎨' },
    { href: '#commissions', label: 'Sacred Commissions', icon: '💎' },
    { href: '#studio-notes', label: 'Studio Notes', icon: '📝' },
    { href: '#contact', label: 'Connect', icon: '🤝' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center sacred-glow">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Sacred Studio</h2>
              <p className="text-xs text-muted-foreground -mt-1">by Aviva</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary/10">
              Investment Inquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="outline" size="sm" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                  Investment Inquiry
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}