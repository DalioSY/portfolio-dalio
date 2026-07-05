import { IconCloudDemo } from '@/components/icon-Cloud';

export default function Tecnologia() {
  return (
    <section className='flex flex-col bg-background p-5 m-5 rounded-xl'>
      <h2 className='text-xl'>Tecnologias e Ferramentas:</h2>
      <div className='grid sm:grid-cols-2 grid-cols-1'>
        <p className='p-5'>
          HTML, Css, JavaScript, Typescript, React, Styled Components, React
          Native, Expo, Next.js, shadcn_ui, Tailwindcss, Node.js, Express,
          Fastify, Graphql, PHP, Laravel, Firebase Golang, Prisma, Docker, AmazonAWS, PostgreSQL,
          MySQL, MongoDB, Vercel, Git, Github, VS Code, Android Studio, Figma,
          Axios, Eslint, Prettier, Biome, npm, Yarn, Mui, Zod, Notion, Obsidian,
          Linkedin, Discord, Windows.
        </p>
        <IconCloudDemo />
      </div>
    </section>
  );
}
