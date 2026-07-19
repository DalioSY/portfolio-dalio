export default function Sobre() {
  return (
    <section className='p-5 m-5 bg-background rounded-xl'>
      <div className=' grid sm:grid-cols-3 grid-cols-1  '>
        <div className='sm:col-span-2 col-span-1'>
          <p className='text-sm'>
            Olá! Sou <b>Dalio S. Yamada,</b> Desenvolvedor Full Stack apaixonado por tecnologia e pela criação de soluções que geram impacto.
            <br />
            <br />
            Em 2024, realizei minha transição de carreira para a área de desenvolvimento de software. Desde então, venho construindo minha experiência por meio de projetos desafiadores e da atuação profissional no desenvolvimento de aplicações web, sempre buscando aprimorar minhas habilidades e acompanhar a evolução das tecnologias.
            <br />
            <br />
            Acredito que a tecnologia é uma ferramenta capaz de transformar ideias em soluções que resolvem problemas reais e agregam valor para pessoas e empresas. Por isso, procuro desenvolver aplicações modernas, escaláveis e de alta qualidade, priorizando código limpo, boas práticas de desenvolvimento, performance, acessibilidade e uma excelente experiência para o usuário.
            <br />
            <br />
            Ao longo da minha trajetória, aprendi que evolução profissional vai além do domínio técnico. Constância, disciplina, curiosidade e colaboração são valores que orientam meu trabalho diariamente. Gosto de compartilhar conhecimento, aprender com outras pessoas e contribuir para um ambiente de equipe produtivo e colaborativo.
            <br />
            <br />
            Como profissional, destaco-me pela organização, proatividade e comprometimento com a entrega de resultados. Estou sempre em busca de novos desafios que me permitam crescer, ampliar minha experiência e participar de projetos inovadores que façam a diferença.
            <br />
            <br />
            A tecnologia está em constante transformação, e acredito que aprender continuamente é essencial para acompanhar esse ritmo. Meu objetivo é evoluir como desenvolvedor, contribuir para produtos cada vez melhores e construir soluções eficientes, escaláveis e que gerem impacto positivo.
          </p>
        </div>
        <div className=' hidden sm:block m-5'>
          <img
            className='h-full w-full rounded-3xl border-4 border-cyan-500 '
            src='https://avatars.githubusercontent.com/u/152891031?v=4'
            alt='foto perfil'
          />
        </div>
      </div>
    </section>
  );
}
