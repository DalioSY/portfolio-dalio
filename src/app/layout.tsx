import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio Next.js ',
  description: 'Meu mais novo portfólio',
  keywords: ['Next.js', 'React', 'Typescript', 'Tailwind', 'Full-stack'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-homeImg bg-cover bg-center size-full'>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
