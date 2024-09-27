import { IconCloudDemo } from '@/components/Icon-Cloud';
import { Particle } from '@/components/Particle';
import { Box, Github } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='fixed h-screen w-screen p-5 bg-[#000000c0]'>
      <Particle />
      <div className='flex flex-row items-center justify-end gap m-8  '>
        <div className='h-screen flex flex-col justify-center p-5 gap-8 lg:p-14 '>
          <div>
            <h1 className='text-white font-black text text-7xl'>
              Dalio Shindi Yamada
            </h1>
            <div className='text-white font-light text-7xl lg:text-xl'>
              <p className='text-3xl'>
                Desenvolvedor Full Stack | Desenvolvedor Mobile
              </p>
            </div>
          </div>
          <div>
            <div className=' flex items-center gap-2 text-3xl text-white pb-4'>
              <Github className='size-9' />
              <p>https://github.com/DalioSY</p>
            </div>
            <div className=' flex items-center gap-2 text-3xl text-white '>
              <Box className='size-9' />
              <p>https://portfolio-dalio.vercel.app/</p>
            </div>
          </div>
        </div>
        <IconCloudDemo />
      </div>
    </div>
  );
}
