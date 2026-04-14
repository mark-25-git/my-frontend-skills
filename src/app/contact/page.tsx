import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-[2.5rem] bg-surface border border-white/5">
            <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary">
              <MessageSquare className="h-10 w-10" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display mb-6">Let's talk branding.</h1>
            <p className="text-xl text-muted mb-12 font-body max-w-xl mx-auto">
              Our team is ready to help you plan your event merchandise. Skip the emails and get an instant response on WhatsApp.
            </p>
            
            <a 
              href="https://wa.me/your-number"
              className="inline-block bg-primary text-background font-bold px-12 py-5 rounded-full text-xl hover:scale-105 transition-transform"
            >
              Chat on WhatsApp
            </a>
            
            <div className="mt-12 pt-12 border-t border-white/5 space-y-2">
              <p className="text-sm text-muted uppercase tracking-[0.2em] font-bold">Location</p>
              <p className="text-foreground">Kuala Lumpur, Malaysia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
