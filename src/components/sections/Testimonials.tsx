'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    text: "Teevent made our TEDx merchandise process so much smoother. High quality and actually delivered on time.",
    name: "Aisha Rahman",
    org: "TEDx Organizer",
  },
  {
    text: "Best lanyard supplier in Malaysia for students. The Canva design integration is a lifesaver.",
    name: "Jason Lim",
    org: "AIESEC Committee",
  },
  {
    text: "Reliable, trustable, and professional. We order our orientation packs from them every year.",
    name: "Sarah Teh",
    org: "Student Council Member",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-surface-2/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-16">What organisers say.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-surface border border-white/5 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/80 mb-6 font-body leading-relaxed italic">
                "{rev.text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{rev.name}</p>
                <p className="text-sm text-primary">{rev.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
