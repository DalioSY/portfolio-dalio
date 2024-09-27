import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import Title from '@/components/Title';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme.provider';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='bg-mainImg bg-cover bg-center size-full min-h-screen'>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <div className=' sm:pl-44 pt-20 max-sm:pb-20 pb-5'>
          <Title />
          {children}
        </div>
        <Navbar />
        <Footer />
      </ThemeProvider>
      <Link
        href='https://wa.me/5511990085502'
        className=' fixed bottom-24 sm:bottom-5 right-5 '
        target='_blank'
      >
        <FaWhatsapp className='size-8 text-[#25D366] hover:scale-110 active:scale-90' />
      </Link>
    </main>
  );
}
