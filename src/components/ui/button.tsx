'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

interface ButtonProps {
  landingPage?: boolean;
  themeDark?: boolean;
}

export function Button({ landingPage, themeDark }: ButtonProps) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <>
      {themeDark && (
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:border"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      )}
      
      {landingPage && (
        <button
          type='button'
          className='ml-5 text-center w-1/3 p-2 rounded-full  bg-background hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
          onClick={() => router.push('/tecnologia')}>
          Start
        </button>
      )}
    </>
  )
}