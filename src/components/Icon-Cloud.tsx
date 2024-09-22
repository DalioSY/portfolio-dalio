'use client';

import IconCloud from '@/components/magicui/icon-cloud';

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
];

export function IconCloudDemo() {
  return (
    <div className=' size-full max-w-[32rem] flex items-center justify-center overflow-hidden'>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
