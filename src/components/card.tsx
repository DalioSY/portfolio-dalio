import { ProjectType } from '@/types/ProjectType';
import { Github, GlobeIcon, Star } from 'lucide-react';
import formatDate from '../utils/formatData';

import { LangragesIcons } from './langrages-icons';

type ProjectProps = {
  item: ProjectType;
};

export function Card({ item }: ProjectProps) {
  const branch = item.default_branch
  return (
    <div className='flex flex-col justify-between p-4 gap-3 rounded border bg-background'>
      <div className='w-full h-28 flex items-center justify-center'>
        <img
          src={`https://raw.githubusercontent.com/DalioSY/${item.name}/${branch}/img/git-1.png`}
          alt='foto projeto'
          className='h-full w-auto'
        />
      </div>
      <div>
        <h1>{item.name.toUpperCase()} </h1>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[1px]'></div>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-xs'> {formatDate(item.created_at)} </p>
          <p className='text-xs'> {formatDate(item.updated_at)} </p>
        </div>
        <span className='flex'>
          <Star /> {item.stargazers_count}
        </span>
      </div>
      <div className='max-h-13 overflow-hidden'>
        <p className='text-xs'>{item.description} </p>
      </div>
      <div className=' grid grid-cols-7 gap-2'>
        {item.topics.map((topic, index) => (
          <span key={index}>
            <LangragesIcons topic={topic} />
          </span>
        ))}
      </div>
      <div className='flex items-center justify-between '>
        <a
          className=' flex items-center gap-1 text-ms border bg-background rounded-full py-1 px-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90'
          href={item.html_url}
          target='_blank'
        >
          <Github className='h-5 w-5' />
          GitHub
        </a>
        <a
          className={` flex items-center gap-1 text-ms border bg-background rounded-full py-1 px-3 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white active:scale-90 
            ${item.homepage === null ? 'hidden' : 'item.homepage'} 
            ${item.homepage === '' ? 'hidden' : 'item.homepage'}
            `}
          href={item.homepage}
          target='_blank'
        >
          <GlobeIcon className='h-5 w-5' />
          Deploy
        </a>
      </div>
    </div>
  );
}
