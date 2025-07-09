import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Professional Services - Your Business Partner',
  description: 'One-stop solution for web development, mobile apps, design, and digital marketing services.',
  keywords: 'web development, mobile apps, digital marketing, professional services',
  authors: [{ name: 'Adalabs' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AdaLabs- Your Business Partner',
    description: 'One-stop solution for web development, mobile apps, design, and digital marketing services.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        {children}
        <Toaster /> 
      </body>
    </html>
  );
}
