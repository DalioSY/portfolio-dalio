import { Particle } from '@/components/main/Particle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='fixed h-screen w-screen p-5 flex items-center '>
      <Particle />
      <div className='w-full p-5 lg:p-14'>
        <h1 className='text-white font-black text text-5xl lg:text-7xl'>
          Dalio Shindi Yamada
        </h1>
        <span className='text-white font-light text-xs lg:text-xl'>
          Desenvolvedor Full Stack | Desenvolvedor Mobile
        </span>
        <p className='text-white font-normal text-base p-5 w-full lg:w-2/4'>
          Seja muito bem-vindo ao meu mais novo portfólio! Utilizei meus
          conhecimentos mais recentes e me desafiei a criar aplicações da
          maneira que acredito ser a melhor.
        </p>
        <Button className=' text-black bg-white ml-5 pl-10 pr-10 border-none hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90 '>
          Get Start
        </Button>
        <Link
          className=' text-black bg-white p-2 ml-5 pl-10 pr-10 rounded hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white'
          href='/main'
        >
          Get Start
        </Link>
      </div>
    </main>
  );
}
