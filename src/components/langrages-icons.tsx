import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPrisma,
  SiSequelize,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
  SiAndroid,
  SiExpo,
  SiFastify,
} from 'react-icons/si';
import { AiFillCopy } from 'react-icons/ai';
import { FaGolang } from 'react-icons/fa6';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaYarn,
} from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

type LangragesIconsProps = {
  topic: string;
};

export function LangragesIcons({ topic }: LangragesIconsProps) {
  return (
    <>
      {topic === 'html' && <FaHtml5 className=' size-6 text-[#E5532D]' />}
      {topic === 'css' && <FaCss3Alt className=' size-6 text-[#2D53E5] ' />}
      {topic === 'javascript' && (
        <SiJavascript className=' size-6 text-[#F7E025] ' />
      )}
      {topic === 'typescript' && (
        <SiTypescript className=' size-6 text-[#377CC8] ' />
      )}
      {topic === 'nodejs' && <FaNodeJs className=' size-6 text-[#84C00B] ' />}
      {topic === 'express' && <SiExpress className=' size-6 text-[#7D55F2] ' />}
      {topic === 'yarn' && <FaYarn className=' size-6 text-[#3392BD] ' />}
      {topic === 'npm' && <FaNpm className=' size-6 text-[#CD3E3D] ' />}
      {topic === 'mui' && <SiMui className=' size-6 text-[#0883FF] ' />}
      {topic === 'zod' && <SiZod className=' size-6 text-[#365382] ' />}
      {topic === 'vite' && <SiVite className=' size-6 text-[#646CFF] ' />}
      {topic === 'expo' && <SiExpo className=' size-6 text-[#162244] ' />}
      {topic === 'github' && <FiGithub className=' size-6 text-[#4479C4] ' />}
      {topic === 'fastify' && <SiFastify className=' size-6 text-[#4E64C9] ' />}
      {topic === 'postgresql' && (
        <BiLogoPostgresql className=' size-6 text-[#396C94] ' />
      )}
      {topic === 'golang' && <FaGolang className=' size-6 text-[#08AFD8] ' />}
      {topic === 'reactnative' && (
        <FaReact className=' size-6 text-[#CD3E3D] ' />
      )}
      {topic === 'android' && <SiAndroid className=' size-6 text-[#A7C83F] ' />}
      {topic === 'shadcnui' && (
        <SiShadcnui className=' size-6 text-[#193b71] ' />
      )}
      {topic === 'prisma' && <SiPrisma className=' size-6 text-[#194055] ' />}
      {topic === 'nextjs' && (
        <SiNextdotjs className=' size-6 text-[#22324c] ' />
      )}
      {topic === 'readme' && <AiFillCopy className=' size-6 text-[#3392BD] ' />}
      {topic === 'vercel' && <SiVercel className=' size-6 text-[#243a5f] ' />}
      {topic === 'tailwindcss' && (
        <SiTailwindcss className=' size-6 text-[#3EBFF8] ' />
      )}
      {topic === 'styledcomponents' && (
        <SiStyledcomponents className=' size-6 text-[#DB7093] ' />
      )}
      {topic === 'mongodb' && <SiMongodb className=' size-6 text-[#55AD47] ' />}
      {topic === 'docker' && <FaDocker className=' size-6 text-[#119FED] ' />}
      {topic === 'sequelize' && (
        <SiSequelize className=' size-6 text-[#297DC0] ' />
      )}
      {topic === 'react' && <FaReact className=' size-6 text-[#66DBFB] ' />}
    </>
  );
}
