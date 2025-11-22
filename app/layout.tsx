import type { Metadata } from 'next';
import { ShopProvider } from '@/context/ShopContext';
import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shopper - Your Fashion Destination',
  description: 'Discover the latest fashion trends for men, women, and kids at Shopper.',
  keywords: ['fashion', 'clothing', 'shopping', 'men', 'women', 'kids'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
