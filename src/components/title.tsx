'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Title() {
  const pathname = usePathname();
  const [nav, setNav] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/tecnologia':
        setNav('Tecnologias');
        break;
      case '/sobre':
        setNav('Sobre');
        break;
      case '/linhaTempo':
        setNav('Linha do Tempo');
        break;
      case '/projetos':
        setNav('Projetos');
        break;

      case '/contato':
        setNav('Contato');
        break;
      default:
        setNav('hidden');
    }
  }, [pathname]);

  return (
    <div className='m-5'>
      <h1 className=' text-2xl sm:text-3xl text-white'>{nav}</h1>
      <div className='bg-primary-gradient h-[2px] sm:h-1'></div>
    </div>
  );
}
