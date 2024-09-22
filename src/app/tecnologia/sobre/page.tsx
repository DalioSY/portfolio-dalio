import { BiLogoGmail } from 'react-icons/bi';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Sobre() {
  return (
    <div className='p-5 m-5 bg-background rounded-xl'>
      <div className='mb-4'>
        <h1 className='text-xl'>Dalio Shindi Yamada</h1>
        <span>Desenvolvimento Full Statf | Desenvolvedor Mobile</span>
      </div>
      <div className=' grid sm:grid-cols-2 grid-cols-1  '>
        <div>
          <div className='flex flex-col items-start gap-5 m-5 '>
            <a
              className='flex items-center gap-4 border bg-background px-5 rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
              href='https://www.linkedin.com/in/dalio-s-yamada/'
            >
              <FiLinkedin />
              Linkedin
            </a>
            <a
              className='flex items-center gap-4 border bg-background px-5 rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
              href='https://github.com/DalioSY'
            >
              <FiGithub />
              GitHub
            </a>
            <a
              className='flex items-center gap-4 border bg-background px-5 rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
              href='mailto:dalioyamada@gmail.com'
            >
              <BiLogoGmail />
              E-mail
            </a>
            <a
              className='flex items-center gap-4 border  bg-background px-5 rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
              href='https://wa.me/5511990085502'
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <p className='text-sm'>
            Olá, meu nome é Dalio Shindi Yamada, tenho 39 anos e estou em
            transição de carreira para me tornar um Desenvolvedor Full Stack.
            <br />
            <br />
            Meu objetivo é ajudar as pessoas de maneira eficiente, utilizando a
            tecnologia para resolver problemas e superar desafios. Ao longo da
            minha jornada, aprendi a valorizar a constância e a resiliência,
            buscando sempre me desafiar em projetos que exigem o domínio de
            novas tecnologias.
            <br />
            <br />
            Minha maior satisfação é concluir cada projeto com a plena
            satisfação dos clientes, entregando soluções que superam suas
            expectativas. No dia a dia, destaco-me por minhas habilidades
            interpessoais, organização e proatividade. Em projetos
            colaborativos, enfrentei desafios por meio de comunicação eficaz e
            trabalho em equipe, valorizando a diversidade de ideias e
            colaborando para alcançar objetivos comuns.
            <br />
            <br />
            Acredito no aprendizado contínuo e me mantenho atualizado com as
            últimas tendências do mercado, sempre buscando aprimorar minhas
            habilidades e evoluir como profissional. Estou em busca de
            oportunidades que me permitam aplicar minhas competências em um
            ambiente profissional, contribuindo para o crescimento da empresa e
            meu desenvolvimento como desenvolvedor.
          </p>
        </div>
      </div>
    </div>
  );
}
