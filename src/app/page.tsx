import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <BentoGrid />
      <Testimonials />
      <section className="py-24 bg-primary text-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-6">Ready to make your event unforgettable?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium opacity-90">
            Send us a message. We will handle everything else.
          </p>
          <a 
            href="https://wa.me/your-number"
            className="inline-block bg-background text-primary font-bold px-12 py-5 rounded-full text-xl hover:scale-105 transition-transform"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
