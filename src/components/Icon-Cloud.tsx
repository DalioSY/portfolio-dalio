'use client';

import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  'typescript',
  'javascript',
  'react',
  'android',
  'html5',
  'css3',
  'express',
  'prisma',
  'amazonaws',
  'postgresql',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'figma',
  'fastify',
  'axios',
  'expo',
  'eslint',
  'tailwindcss',
  'nextdotjs',
  'nodedotjs',
  'npm',
  'mui',
  'biome',
  'yarn',
  'zod',
  'prettier',
  'mongodb',
  'obsidian',
  'notion',
  'linkedin',
  'discord',
  'windows',
  'shadcnui',
  'styledcomponents',
  'vite',
  'go',
  'mysql',
  'graphql',
  'php',
  'laravel',
  'postman',
  'firebase',
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return <IconCloud images={images} />
}

