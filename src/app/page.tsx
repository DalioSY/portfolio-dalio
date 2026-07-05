'use client';

import { Particle } from '@/components/particle';
import { Button } from '@/components/button';
export default function Home() {

  return (
    <div className='fixed h-screen w-screen p-5 flex items-center'>
      <Particle />
      <div className='h-screen flex flex-col justify-center p-5 gap-5 lg:p-14 '>
        <div>
          <h1 className='text-white font-black text text-5xl lg:text-7xl'>
            Dalio S. Yamada
          </h1>
          <span className='text-white font-light text-xs lg:text-xl'>
            Full Stack  Developer
          </span>
        </div>
        <p className='text-white font-normal text-lg p-5 w-full lg:w-2/4'>
          Seja muito bem-vindo ao meu mais novo portfólio! Utilizei meus
          conhecimentos mais recentes e me desafiei a criar aplicações da
          maneira que acredito ser a melhor.
        </p>

        <Button landingPage />
      </div>
    </div>
  );
}
