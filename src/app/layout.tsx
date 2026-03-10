import type {Metadata} from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
