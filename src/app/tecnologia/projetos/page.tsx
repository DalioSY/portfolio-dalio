'use client';

import { Card } from '@/components/Card';
import { ProjectType } from '@/types/ProjectType';
import { useEffect, useState } from 'react';
import { getGitHubProjects } from '@/server/api';

export default function Projetos() {
  const [project, setProject] = useState<ProjectType[]>([]);

  useEffect(() => {
    async function getProjects() {
      const data = await getGitHubProjects();
      setProject(data);
    }
    getProjects();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 m-5 rounded-xl bg-background'>
      {project.map((item: ProjectType) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
}
