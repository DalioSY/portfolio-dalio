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
    <div className="flex flex-row sm:flex-col gap-4 p-3 sm:p-4 rounded border bg-background">
      {/* Imagem */}
      <div className="w-24 h-24 sm:w-full sm:h-28 flex-shrink-0 flex items-center justify-center">
        <img
          src={`https://raw.githubusercontent.com/DalioSY/${item.name}/${branch}/img/git-1.png`}
          alt="foto projeto"
          className="w-full h-full object-cover sm:object-contain rounded"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-between flex-1 h-24 sm:h-auto overflow-hidden">
        <div>
          <div className="flex flex-row items-center justify-between gap-[3px] sm:gap-1">
            <h1 className="text-xs sm:text-base font-semibold truncate">
              {item.name.toUpperCase()}
            </h1>
            <div className="sm:hidden flex items-center justify-between gap-2">
              <a
                className="flex items-center gap-1 text-sm border bg-background rounded-full py-1 px-3 hover:bg-primary-gradient hover:text-white active:scale-90"
                href={item.html_url}
                target="_blank"
              >
                <Github className="h-4 w-4" />
              </a>

              {item.homepage && (
                <a
                  className="flex items-center gap-1 text-sm border bg-background rounded-full py-1 px-3 hover:bg-primary-gradient hover:text-white active:scale-90"
                  href={item.homepage}
                  target="_blank"
                >
                  <GlobeIcon className="h-4 w-4" />
                </a>
              )}
            </div>

          </div>
          <div className="bg-primary-gradient h-[1px] my-1"></div>

          <div className="flex flex-row-reverse sm:flex-col justify-between ">
            <div className="min-w-16 flex flex-col sm:flex-row items-end sm:items-center justify-between mt-1">
              <div>
                <p className="text-[10px] sm:text-xs">
                  {formatDate(item.created_at)}
                </p>
                <p className="text-[10px] sm:text-xs">
                  {formatDate(item.updated_at)}
                </p>
              </div>
              <span className="flex items-center gap-1 text-[10px] sm:text-xs">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                {item.stargazers_count}
              </span>
            </div>

            <div className="w-full">
              <p className="text-[10px] sm:text-xs line-clamp-2 mt-1">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
                {item.topics.map((value, index) => (
                  <span key={index} className="scale-75 sm:scale-100">
                    <LangragesIcons value={value} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-between mt-2">
          <a
            className="flex items-center gap-1 text-sm border bg-background rounded-full py-1 px-3 hover:bg-primary-gradient hover:text-white active:scale-90"
            href={item.html_url}
            target="_blank"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>

          {item.homepage && (
            <a
              className="flex items-center gap-1 text-sm border bg-background rounded-full py-1 px-3 hover:bg-primary-gradient hover:text-white active:scale-90"
              href={item.homepage}
              target="_blank"
            >
              <GlobeIcon className="h-5 w-5" />
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
