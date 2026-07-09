import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { Button } from './button';

export function Header() {
  return (
    <header className='h-20 fixed top-0 z-40 w-full p-3 flex items-center justify-between bg-background'>
      <div className='flex items-center gap-1 sm:gap-4'>
        <img
          className='h-14 w-14 rounded-full border-2 sm:border-4 border-cyan-500'
          src='https://avatars.githubusercontent.com/u/152891031?v=4'
          alt='foto perfil'
        />
        <div>
          <h1 className="sm:text-2xl font-bold bg-primary-gradient bg-clip-text text-transparent">Dalio S. Yamada</h1>
          <span className='text-xs sm:text-sm text-muted-foreground'>
            Developer Full Stack
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center gap-1 sm:gap-4 '>
        <a
          className='text-muted-foreground p-2 hover:bg-primary-gradient hover:text-white active:scale-90 hover:rounded-full'
          href='https://www.linkedin.com/in/dalio-s-yamada/'
        >
          <FiLinkedin className='h-5 w-5' />
        </a>
        <a
          className='text-muted-foreground p-2 hover:bg-primary-gradient hover:text-white active:scale-90 hover:rounded-full'
          href='https://github.com/DalioSY'
        >
          <FiGithub className='h-5 w-5' />
        </a>
        <Button themeDark />
      </div>
    </header>
  );
}
