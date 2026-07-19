import { IconCloud } from '@/components/iconCloud';
import { icons } from '@/components/langrages-icons';
import { useMemo } from 'react';

export default function Tecnologia() {
  const iconNames = useMemo(() => Object.keys(icons), []);
  return (
    <section className='flex flex-col gap-1 bg-background p-5 m-5 rounded-xl'>
      <h2 className='text-xl'>Tecnologias e Ferramentas:</h2>
      <div className='grid sm:grid-cols-2 grid-cols-1 items-center sm:items-start'>
        <div className='flex flex-row flex-wrap gap-1'>
          {iconNames.map((iconName, index) => (
            <p key={index} className={`capitalize`}>{iconNames[index]},</p>
          ))}
        </div>
        <IconCloud />
      </div>
    </section>
  );
}
