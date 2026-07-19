'use client';

import { useGitHub } from "@/context/gitHubContext";

export function Footer() {
  const { user } = useGitHub();
  return (
    <footer className='fixed bottom-0 z-40 w-full flex justify-center bg-background'>
      <p className=' text-xs sm:text-sm text-muted-foreground '>
        &copy;{new Date().getFullYear()} - {user?.name}
      </p>
    </footer>
  );
}
