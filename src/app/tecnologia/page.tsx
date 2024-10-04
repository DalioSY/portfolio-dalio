import { IconCloudDemo } from '@/components/Icon-Cloud';

export default function Tecnologia() {
  return (
    <main className='flex flex-col bg-background p-5 m-5 rounded-xl'>
      <h2 className='text-xl'>Tecnologias e Ferramentas:</h2>
      <div className='grid sm:grid-cols-2 grid-cols-1'>
        {/* <div>
          <h2>Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Styled Components</li>
            <li>Tailwind CSS</li>
            <li>Expo</li>
            <li>shadcn_ui</li>
            <li>Mui</li>
          </ul>

          <h2>Back-end</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Fastify</li>
            <li>Golang</li>
            <li>Prisma</li>
          </ul>

          <h2>Banco de Dados</h2>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>

          <h2>Ferramentas de DevOps/Deployment</h2>
          <ul>
            <li>Docker</li>
            <li>Amazon AWS</li>
            <li>Vercel</li>
          </ul>

          <h2>Ferramentas de Versionamento</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>

          <h2>IDEs/Editors</h2>
          <ul>
            <li>VS Code</li>
            <li>Android Studio</li>
          </ul>

          <h2>Design e Protótipos</h2>
          <ul>
            <li>Figma</li>
          </ul>

          <h2>Bibliotecas/Frameworks de Utilitários</h2>
          <ul>
            <li>Axios</li>
            <li>Zod</li>
          </ul>

          <h2>Linters e Formatadores</h2>
          <ul>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>Biome</li>
          </ul>

          <h2>Gerenciamento de Pacotes</h2>
          <ul>
            <li>npm</li>
            <li>Yarn</li>
          </ul>

          <h2>Ferramentas de Organização e Produtividade</h2>
          <ul>
            <li>Notion</li>
            <li>Obsidian</li>
          </ul>

          <h2>Redes Sociais e Comunicação</h2>
          <ul>
            <li>LinkedIn</li>
            <li>Discord</li>
          </ul>

          <h2>Sistema Operacional</h2>
          <ul>
            <li>Windows</li>
          </ul>
        </div> */}
        <p className='p-5'>
          HTML, Css, JavaScript, Typescript, React, Styled Components, React
          Native, Expo, Next.js, shadcn_ui, Tailwindcss, Node.js, Express,
          Fastify, Graphql, Golang, Prisma, Docker, AmazonAWS, PostgreSQL,
          MySQL, MongoDB, Vercel, Git, Github, VS Code, Android Studio, Figma,
          Axios, Eslint, Prettier, Biome, npm, Yarn, Mui, Zod, Notion, Obsidian,
          Linkedin, Discord, Windows
        </p>
        <div className='flex justify-center'>
          <IconCloudDemo />
        </div>
      </div>
    </main>
  );
}
