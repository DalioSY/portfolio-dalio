import { IconCloudDemo } from '@/components/Icon-Cloud';

export default function Tecnologia() {
  return (
    <main className='flex flex-col bg-background p-5 m-5 rounded-xl'>
      <h2 className='text-xl'>Possuo conhecimentos em:</h2>
      <div className='grid sm:grid-cols-2 grid-cols-1'>
        <p className='p-5'>
          HTML, Css, JavaScript, Typescript, React, Styled Components React
          Native, Expo, Next.js, shadcn_ui Tailwindcss, Node.js, Express,
          Fastify, Golang, Prisma, Docker, AmazonAWS, PostgreSQL, MongoDB,
          Firebase, Vercel, Git, Github, VS Code, Android Studio, Figma, Axios,
          Eslint, Prettier, Biome, npm, Yarn, Mui, Zod, notion, obsidian,
          notion, linkedin, discord, windows
        </p>
        <div className='flex justify-center'>
          <IconCloudDemo />
        </div>
      </div>
    </main>
  );
}
