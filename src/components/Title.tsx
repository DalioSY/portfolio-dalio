'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Title() {
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
      case '/config':
        setNav('Configurações');
        break;
      default:
        setNav('hidden');
    }
  }, [pathname]);

  return (
    <div className='m-5 text-white'>
      <h1 className='text-3xl'>{nav}</h1>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-1'></div>
    </div>
  );
}
