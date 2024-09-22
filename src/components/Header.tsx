import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

export function Header() {
  return (
    <header className='h-20 fixed top-0 z-40 w-full p-3 flex items-center justify-between bg-background'>
      <div className='flex items-center gap-4'>
        <Avatar>
          <AvatarImage
            className='h-14 w-14 rounded-full border-primary'
            src='https://avatars.githubusercontent.com/u/152891031?v=4'
          />
          <AvatarFallback>foto perfil</AvatarFallback>
        </Avatar>
        <div>
          <h1 className='text-xl'>Dalio Shindi Yamada</h1>
          <span className='text-[8px] sm:text-sm '>
            Desenvolvimento Full Stack | Desenvolvedor Mobile
          </span>
        </div>
      </div>
      <div className='flex items-center justify-center gap-4 '>
        <a
          className=' p-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90 hover:rounded-full'
          href='https://www.linkedin.com/in/dalio-s-yamada/'
        >
          <FiLinkedin />
        </a>
        <a
          className=' p-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90 hover:rounded-full'
          href='https://github.com/DalioSY'
        >
          <FiGithub />
        </a>
      </div>
    </header>
  );
}
