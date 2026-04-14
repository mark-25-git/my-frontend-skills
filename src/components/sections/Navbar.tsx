'use client';

import React from 'react';
import Link from 'next/link';
import { SafeImage } from '../ui/SafeImage';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-24">
              <SafeImage
                src="https://www.teevent.my/_next/image?url=%2Fimages%2Flogo%2Fteevent-logo.png&w=384&q=75"
                alt="Teevent Logo"
                fill
                className="brightness-0 invert priority"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/products/lanyards" className="text-sm font-medium text-muted hover:text-primary transition-colors">Products</Link>
            <Link href="/portfolio" className="text-sm font-medium text-muted hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/about" className="text-sm font-medium text-muted hover:text-primary transition-colors">About</Link>
          </div>

          <Link
            href="https://wa.me/your-number"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-background hover:scale-105 transition-transform"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};
