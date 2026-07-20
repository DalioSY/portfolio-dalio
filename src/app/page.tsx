'use client';

import { Particle } from '@/components/particle';
import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { useGitHub } from '@/context/gitHubContext';
import { LoadingScreen } from '@/components/loadingScreen';
export default function Home() {
  const { user, loading } = useGitHub();

  if (loading) return <LoadingScreen />;

  return (
    <div className='fixed h-screen w-screen p-5 flex items-center'>
      <Particle />
      <div className='h-screen flex flex-col justify-center p-5 gap-5 lg:p-14 '>
        <div>
          <h1 className='text-white font-black text text-5xl lg:text-7xl'>
            {user?.name}
          </h1>
          <span className='text-white font-light text-xs lg:text-xl'>
            {user?.bio}
          </span>
        </div>
        <p className='text-white font-normal text-sm sm:text-lg p-5 w-full lg:w-2/4'>
          Seja muito bem-vindo ao meu portfólio!
          <br />
          <br />
          Este projeto representa minha evolução como desenvolvedor e reúne os conhecimentos e tecnologias que mais utilizo atualmente. Cada detalhe foi desenvolvido com foco em performance, responsividade, acessibilidade e uma ótima experiência para o usuário.
          <br />
          <br />
          Sinta-se à vontade para explorar meus projetos, conhecer minha trajetória e entrar em contato. Será um prazer conversar com você!
        </p>
        <div className='flex items-start gap-5 m-5 '>
          <Link linkedin />
          <Link github />
        </div>

        <Button landingPage />
      </div>
    </div>
  );
}
