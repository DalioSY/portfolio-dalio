import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Sobre() {
  return (
    <section className='p-5 m-5 bg-background rounded-xl'>
      <div className=' grid sm:grid-cols-3 grid-cols-1  '>
        <div className='sm:col-span-2 col-span-1'>
          <p className='text-sm'>
            Olá! Meu nome é <b>Dalio S. Yamada</b> e sou Desenvolvedor Full Stack. Em 2024, realizei minha transição de carreira para a área de tecnologia e, desde então, venho construindo minha experiência por meio de projetos desafiadores e da atuação profissional no desenvolvimento de aplicações web.
            <br />
            <br />
            Meu principal objetivo é utilizar a tecnologia para criar soluções que resolvam problemas reais e gerem valor para pessoas e empresas. Ao longo da minha jornada, aprendi que constância, dedicação e resiliência são fundamentais para evoluir como profissional, e busco constantemente novos desafios que ampliem meus conhecimentos e fortaleçam minhas habilidades técnicas.
            <br />
            <br />
            Tenho compromisso com a entrega de soluções de qualidade, priorizando código limpo, boas práticas de desenvolvimento e uma experiência positiva para os usuários. Além das competências técnicas, destaco-me pela organização, proatividade e facilidade para trabalhar em equipe, sempre valorizando a comunicação, a colaboração e a troca de conhecimentos para alcançar os melhores resultados.
            <br />
            <br />
            Acredito que a tecnologia está em constante evolução e, por isso, mantenho uma rotina contínua de estudos para acompanhar as novas tendências e ferramentas do mercado. Meu objetivo é crescer profissionalmente, contribuir para projetos inovadores e gerar impacto positivo por meio de soluções eficientes, escaláveis e bem estruturadas.
          </p>
        </div>
        <div>
          <div className='w-1/3 flex flex-col items-start gap-5 m-5 '>
            <a
              className='flex items-center gap-4 border bg-background px-5 rounded-full hover:bg-primary-gradient hover:text-white active:scale-90'
              href='https://www.linkedin.com/in/dalio-s-yamada/'
            >
              <FiLinkedin />
              Linkedin
            </a>
            <a
              className='flex items-center gap-4 border bg-background px-5 rounded-full hover:bg-primary-gradient hover:text-white active:scale-90'
              href='https://github.com/DalioSY'
            >
              <FiGithub />
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
