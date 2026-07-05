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
      case '/projetos':
        setNav('Projetos');
        break;
      case '/sobre':
        setNav('Sobre');
        break;
      default:
        setNav('hidden');
    }
  }, [pathname]);

  return (
    <div className='m-5'>
      <h1 className='text-3xl text-white'>{nav}</h1>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-1'></div>
    </div>
  );
}
