'use client';

import { Button } from './button';
import { useGitHub } from "@/context/gitHubContext";
import { LoadingScreen } from './loadingScreen';

export function Header() {
  const { user, loading } = useGitHub();

  if (loading) return <LoadingScreen />;
  return (
    <header className='h-20 fixed top-0 z-40 w-full p-3 flex items-center justify-between bg-background'>
      <div className='w-[90%] flex items-center gap-2 sm:gap-4'>
        <img
          className='h-14 w-14 rounded-full border-2 sm:border-4 border-cyan-500'
          src={user?.avatar_url}
          alt='foto perfil'
        />
        <div>
          <h1 className=" text-xl sm:text-2xl font-bold bg-primary-gradient bg-clip-text text-transparent">{user?.name}</h1>
          <span className="text-xs sm:text-sm text-muted-foreground truncate">{user?.bio}</span>
        </div>
      </div>
      <div className='w-[10%] flex items-center justify-center gap-1 sm:gap-4 '>
        <Button themeDark />
      </div>
    </header>
  );
}
