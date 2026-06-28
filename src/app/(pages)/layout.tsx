import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import Title from '@/components/Title';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme.provider';

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
    </main>
  );
}
