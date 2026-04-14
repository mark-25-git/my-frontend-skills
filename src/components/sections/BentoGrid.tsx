'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SafeImage } from '../ui/SafeImage';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Lanyards',
    description: 'Sublimation & Silk Screen',
    image: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Fses9.webp&w=3840&q=75',
    href: '/products/lanyards',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'ID Cards',
    description: 'Durable PVC Printing',
    image: '', // Placeholder-safe
    href: '/products/id-cards',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Cardholders',
    description: 'Waterproof Protection',
    image: '', // Placeholder-safe
    href: '/products/cardholders',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Custom Tees',
    description: 'Cotton & Microfiber',
    image: '', // Placeholder-safe
    href: '/products/tshirts',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Canvas Bags',
    description: 'Eco-friendly Totes',
    image: '', // Placeholder-safe
    href: '/products/canvas-bags',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Keychains',
    description: 'Acrylic & Stamped',
    image: '', // Placeholder-safe
    href: '/products/keychains',
    span: 'md:col-span-1 md:row-span-1',
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Everything your event needs.</h2>
          <p className="text-muted text-lg max-w-2xl">Six categories. One supplier. Zero compromise on quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[300px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-surface ${cat.span}`}
            >
              <Link href={cat.href} className="flex h-full w-full flex-col">
                <div className="relative flex-1 overflow-hidden">
                  <SafeImage
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-display text-foreground">{cat.title}</h3>
                    <p className="text-sm text-muted">{cat.description}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 group-hover:rotate-0 transform duration-300">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
