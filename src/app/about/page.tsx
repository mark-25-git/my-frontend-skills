import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Teevent - Malaysia's University Merchandise Partner",
  description: "Teevent is Malaysia's trusted custom merchandise partner for university events. Real products, reliable delivery.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-12">
              Driven by <span className="text-primary italic">Events.</span> <br/>
              Built for <span className="text-primary italic">Organizers.</span>
            </h1>
            
            <div className="space-y-12 text-xl text-muted leading-relaxed font-body">
              <p>
                Teevent started with one goal — to make university events look as good as the effort that goes into them.
              </p>
              
              <p>
                We know what it's like to plan an event from scratch. The late nights, the budget approvals, the fear that the merchandise won't arrive in time. That's exactly why we exist.
              </p>
              
              <p className="p-8 rounded-3xl bg-surface border border-white/5 text-foreground font-display text-2xl italic">
                "We are a specialist merchandise partner for Malaysian universities. Not a generic printer. Not a middleman."
              </p>
              
              <p>
                A team that has supplied lanyards, ID cards, tees, and bags to some of the country's biggest student-led events — and we show up the same way every single time.
              </p>
            </div>

            <div className="mt-20 pt-20 border-t border-white/10 grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed">To be the default choice for every university committee in Malaysia looking for premium, reliable, and visually stunning event merchandise.</p>
              </div>
              <div>
                <h3 className="text-2xl font-display mb-4">Our Promise</h3>
                <p className="text-muted leading-relaxed">No placeholders. No generic advice. Just real products that build your brand and represent your event's hard work.</p>
              </div>
            </div>

            <div className="mt-24 text-center">
               <a 
                href="https://wa.me/your-number"
                className="bg-primary text-background font-bold px-12 py-5 rounded-full text-xl hover:scale-105 transition-transform"
              >
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
