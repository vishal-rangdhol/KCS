import type { Metadata } from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'KCS | Immersive Storytelling',
  description: 'Experience the vision of Kandhugule Consultancy Services through a premium narrative journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
