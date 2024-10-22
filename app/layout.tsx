import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import ReduxProvider from '@/providers/ReduxProvider';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: 'Mimosa | Home',
  description: 'Mimosa is a beauty parler and spa website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(baiJamjuree.className, 'bg-white text-black antialiased')}
      >
        <ReduxProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
