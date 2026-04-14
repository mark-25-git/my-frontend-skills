import { productData } from '../data';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { SafeImage } from '@/components/ui/SafeImage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const product = productData[category];
  
  if (!product) return {};

  return {
    title: `${product.title} - Teevent Malaysia`,
    description: product.headline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { category } = await params;
  const product = productData[category];

  if (!product) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-surface border border-white/5">
              <SafeImage
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <nav className="flex gap-2 text-primary uppercase text-xs font-bold tracking-widest mb-8">
                <a href="/">Home</a>
                <span>/</span>
                <span className="text-muted">Products</span>
              </nav>
              
              <h1 className="text-4xl md:text-6xl font-display mb-8">
                {product.headline}
              </h1>
              
              <p className="text-xl text-muted leading-relaxed mb-12 font-body">
                {product.body}
              </p>
              
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-surface border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted mb-1">Status</p>
                    <p className="font-bold">Available for Bulk Order</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                </div>
                
                <a 
                  href="https://wa.me/your-number"
                  className="w-full flex items-center justify-center bg-primary text-background font-bold px-8 py-5 rounded-full text-lg hover:scale-[1.02] transition-transform"
                >
                  Get a quote on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
