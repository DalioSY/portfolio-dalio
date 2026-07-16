import { IconCloudDemo } from '@/components/icon-Cloud';
import { IconCloud } from '@/components/iconCloud';

import {
  Github,
  Database,
  Code,
  Globe,
  Monitor,
  Cpu,
  Cloud,
  Layers,
} from "lucide-react";

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
        <IconCloud
          icons={[
            {
              id: "1",
              icon: <Github className="w-10 h-10 text-white" />,
            },
            {
              id: "2",
              icon: <Database className="w-10 h-10 text-cyan-400" />,
            },
            {
              id: "3",
              icon: <Code className="w-10 h-10 text-green-400" />,
            },
            {
              id: "4",
              icon: <Cloud className="w-10 h-10 text-blue-400" />,
            },
            {
              id: "5",
              icon: <Monitor className="w-10 h-10 text-pink-400" />,
            },
            {
              id: "6",
              icon: <Layers className="w-10 h-10 text-yellow-300" />,
            },
            {
              id: "7",
              icon: <Cpu className="w-10 h-10 text-red-400" />,
            },
            {
              id: "8",
              icon: <Globe className="w-10 h-10 text-indigo-400" />,
            },
          ]}
        />
      </div>
    </section>
  );
}
