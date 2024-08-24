import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio Next.js ',
  description: 'Generated by create next app',
  keywords: [
    'Next.js',
    'Next',
    'Typescript',
    'Javacript',
    'React',
    'Tailwind',
    'Full-stack',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-home bg-cover bg-center h-screen w-screen'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
