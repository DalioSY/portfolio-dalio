import { Particle } from '@/components/Particle';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className='fixed h-screen w-screen p-5 flex items-center
     '
    >
      <Particle />
      <div className='h-screen flex flex-col justify-center p-5 gap-10 lg:p-14 '>
        <div>
          <h1 className='text-white font-black text text-5xl lg:text-7xl'>
            Dalio Shindi Yamada
          </h1>
          <span className='text-white font-light text-xs lg:text-xl'>
            Desenvolvedor Full Stack | Desenvolvedor Mobile
          </span>
        </div>
        <p className='text-white font-normal text-lg p-5 w-full lg:w-2/4'>
          Seja muito bem-vindo ao meu mais novo portfólio! Utilizei meus
          conhecimentos mais recentes e me desafiei a criar aplicações da
          maneira que acredito ser a melhor.
        </p>
        <Link
          href='/tecnologia'
          className='ml-5 text-center w-1/3 p-2 rounded-full  bg-background hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
        >
          Get Start
        </Link>
      </div>
    </div>
  );
}
