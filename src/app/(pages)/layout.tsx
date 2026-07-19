import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Title } from '@/components/title';
import { Toaster } from "sonner";
import { ThemeProvider } from 'next-themes'
import { GitHubProvider } from "../../context/gitHubContext";

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
        <GitHubProvider>
          <Header />
          <div className=' sm:pl-64 pt-20 max-sm:pb-20 pb-5'>
            <Title />
            {children}
            <Toaster
              position="top-right"
              richColors
              closeButton
            />
          </div>
          <Sidebar />
          <Footer />
        </GitHubProvider>
      </ThemeProvider>
    </main>
  );
}
