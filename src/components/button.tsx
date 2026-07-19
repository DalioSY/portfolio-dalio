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
          className="text-muted-foreground relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-primary-gradient hover:text-white"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      )}

      {landingPage && (
        <button
          type='button'
          className='ml-5 text-center w-1/3 p-2 rounded-full  bg-background hover:bg-primary-gradient hover:text-white active:scale-90'
          onClick={() => router.push('/tecnologia')}>
          Get Start
        </button>
      )}
    </>
  )
}