import { IconType } from "react-icons";

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
  SiMysql,
  SiGraphql,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

import { AiFillCopy } from "react-icons/ai";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

type Props = {
  value: string;
  className?: string;
};

export const icons: Record<
  string,
  {
    icon: IconType;
    color: string;
  }
> = {
  html: { icon: FaHtml5, color: "#E5532D" },
  css: { icon: FaCss3Alt, color: "#2D53E5" },
  javascript: { icon: SiJavascript, color: "#F7E025" },
  typescript: { icon: SiTypescript, color: "#377CC8" },
  nodejs: { icon: FaNodeJs, color: "#84C00B" },
  express: { icon: SiExpress, color: "#7D55F2" },
  yarn: { icon: FaYarn, color: "#3392BD" },
  npm: { icon: FaNpm, color: "#CD3E3D" },
  mui: { icon: SiMui, color: "#0883FF" },
  zod: { icon: SiZod, color: "#365382" },
  vite: { icon: SiVite, color: "#646CFF" },
  expo: { icon: SiExpo, color: "#162244" },
  github: { icon: FiGithub, color: "#4479C4" },
  fastify: { icon: SiFastify, color: "#4E64C9" },
  mysql: { icon: SiMysql, color: "#08668E" },
  graphql: { icon: SiGraphql, color: "#DE33A6" },
  php: { icon: SiPhp, color: "#474A8A" },
  laravel: { icon: SiLaravel, color: "#f05340" },
  postgresql: { icon: BiLogoPostgresql, color: "#396C94" },
  golang: { icon: FaGolang, color: "#08AFD8" },
  reactnative: { icon: FaReact, color: "#61DAFB" },
  android: { icon: SiAndroid, color: "#A7C83F" },
  shadcnui: { icon: SiShadcnui, color: "#193b71" },
  prisma: { icon: SiPrisma, color: "#194055" },
  nextjs: { icon: SiNextdotjs, color: "#22324c" },
  readme: { icon: AiFillCopy, color: "#3392BD" },
  vercel: { icon: SiVercel, color: "#243a5f" },
  tailwindcss: { icon: SiTailwindcss, color: "#3EBFF8" },
  styledcomponents: { icon: SiStyledcomponents, color: "#DB7093" },
  mongodb: { icon: SiMongodb, color: "#55AD47" },
  docker: { icon: FaDocker, color: "#119FED" },
  sequelize: { icon: SiSequelize, color: "#297DC0" },
  react: { icon: FaReact, color: "#66DBFB" },
};

export function LangragesIcons({ value, className = "size-6" }: Props) {
  const item = icons[value];

  if (!item) return null;

  const Icon = item.icon;

  return (
    <Icon
      className={className}
      style={{ color: item.color }}
    />
  );
}