import type { Metadata } from 'next';
import { syne, manrope } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teevent - Custom Event Merchandise Malaysia',
  description: 'Premium custom lanyards, ID cards, keychains, T-shirts & canvas bags for Malaysian university events. Real products. Fast delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
