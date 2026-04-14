'use client';

import React from 'react';
import { SafeImage } from '../ui/SafeImage';

const logos = [
  { name: 'TEDx UTAR', src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Fclients%2F01-tedxutar.png&w=3840&q=75' },
  { name: 'AIESEC', src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Fclients%2F02-aiesec.png&w=3840&q=75' },
  { name: 'FMS', src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Fclients%2F03-fms-kl%26p.png&w=3840&q=75' },
  { name: 'Insight Ignition', src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Fclients%2F3-insight-ignition.png&w=3840&q=75' },
  { name: 'SES-IX', src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Fclients%2F7-ses9.png&w=3840&q=75' },
];

export const SocialProofBar = () => {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-muted mb-10">
          Trusted by Top University Events
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="relative h-8 w-32">
              <SafeImage
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
