import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { SafeImage } from '@/components/ui/SafeImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teevent Portfolio - Real Events, Real Merchandise',
  description: 'See how Malaysian universities and student clubs brought their events to life with Teevent merchandise.',
};

const gallery = [
  { src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Ftedxutar.webp&w=3840&q=75', title: 'TEDx UTAR' },
  { src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Fses9.webp&w=3840&q=75', title: 'SES-IX Event' },
  { src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Finsight-ignition.webp&w=3840&q=75', title: 'Insight Ignition' },
  { src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Ffms_1.webp&w=3840&q=75', title: 'FMS-KL&P' },
  { src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Fses9_2.webp&w=3840&q=75', title: 'SES-IX Close-up' },
  { src: 'https://www.teevent.my/_next/image?url=%2Fimages%2Flanyard-showcase%2Fses9_3.webp&w=3840&q=75', title: 'Service Details' },
];

export default function PortfolioPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-display mb-6">Real events. <br/> <span className="text-primary italic">Real merchandise.</span></h1>
            <p className="text-xl text-muted max-w-2xl mx-auto font-body">
              Every photo you see was produced by Teevent for a real Malaysian university event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-surface aspect-square border border-white/5">
                <SafeImage
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <p className="text-white font-display text-2xl">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-3xl bg-surface-2/30 border border-white/5 text-center">
            <h2 className="text-3xl font-display mb-6">Your event is next — talk to us</h2>
            <a 
              href="https://wa.me/your-number"
              className="inline-block bg-primary text-background font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
