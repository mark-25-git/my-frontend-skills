'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display text-primary mb-6">Teevent</h3>
            <p className="text-muted max-w-sm leading-relaxed">
              Custom merchandise for university events across Malaysia. Premium quality. Visual first.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products/lanyards" className="text-muted hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/portfolio" className="text-muted hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-muted hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">WhatsApp</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Instagram</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-sm text-muted">© 2026 Teevent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
