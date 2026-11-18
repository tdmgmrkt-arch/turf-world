import type { Metadata } from 'next';
import { Montserrat, Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProviderWrapper } from '@/components/providers/cart-provider-wrapper';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Turf World - High Quality Artificial Turf',
  description: 'Your source for premium artificial grass and turf. SoCal\'s #1 Turf Supplier with 16 years of excellence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProviderWrapper>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  );
}
