'use client';

import { House, User, CodeXml, Settings, CreditCard } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const navigation = usePathname();

  return (
    <nav className=' fixed max-sm:bottom-0 max-sm:w-full z-30 bg-background p-3 bg-opacity-50 sm:h-full sm:top-20'>
      <Breadcrumb>
        <BreadcrumbList className=' flex items-start justify-center sm:gap-4 sm:flex-col '>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/'
              className={`flex flex-col items-center rounded-full p-2 sm:flex-row sm:gap-4 sm:px-5 ${
                navigation === '/'
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : ''
              } `}
            >
              <House />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/tecnologia'
              className={`flex flex-col items-center rounded-full p-2 sm:flex-row sm:gap-4 sm:px-5 ${
                navigation === '/tecnologia'
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : ''
              } `}
            >
              <CodeXml />
              Tecnologia
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/tecnologia/sobre'
              className={`flex flex-col items-center rounded-full p-2 sm:flex-row sm:gap-4 sm:px-5 ${
                navigation === '/tecnologia/sobre'
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : ''
              }`}
            >
              <User />
              Sobre
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/tecnologia/projetos'
              className={`flex flex-col items-center rounded-full p-2 sm:flex-row sm:gap-4 sm:px-5 ${
                navigation === '/tecnologia/projetos'
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : ''
              }`}
            >
              <CreditCard />
              Projetos
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/tecnologia/config'
              className={`flex flex-col items-center rounded-full p-2 sm:flex-row sm:gap-4 sm:px-5 ${
                navigation === '/tecnologia/config'
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : ''
              }`}
            >
              <Settings />
              Config.
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}
