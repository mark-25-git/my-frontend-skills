'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SafeImage } from '../ui/SafeImage';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display leading-[1.1] text-foreground mb-6">
              Your event deserves to <span className="text-primary italic">look this good.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed font-body">
              Custom merchandise for Malaysian university events. Lanyards, ID cards, keychains, tees, bags — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-background font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform active:scale-95">
                See What We Do
              </button>
              <button className="border border-white/10 bg-white/5 backdrop-blur-sm text-foreground font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors">
                Order via WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl overflow-hidden">
               <SafeImage
                src="https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Ftedxutar.webp&w=3840&q=75"
                alt="Premium Custom Lanyards"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>
            {/* Float Floating Micro-label */}
            <div className="absolute -bottom-6 -left-6 bg-surface-2 border border-border p-4 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <p className="text-xs font-bold tracking-widest uppercase text-muted">Trusted by 100+ Organizers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
