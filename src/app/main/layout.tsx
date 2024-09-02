import { Header } from '@/components/main/Header';
import { Title } from '@/components/main/Title';
import { ThemeProvider } from '@/components/theme.provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-mainImg bg-cover bg-opacity-80 h-52'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Title />
          {children}
          <Header />
        </ThemeProvider>
      </body>
    </html>
  );
}
