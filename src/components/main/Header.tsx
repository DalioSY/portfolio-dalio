import {
  House,
  Slash,
  User,
  CodeXml,
  Settings,
  ChevronDown,
  CreditCard,
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ModeToggle } from '../mode.toggle';

export function Header() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className='w-screen p-4 fixed bottom-0 flex items-center justify-center gap-7 bg-background bg-opacity-50'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/' className='flex flex-col items-center'>
              <House />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='/main' className='flex flex-col items-center'>
              <CodeXml />
              Principal
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/main/sobre'
              className='flex flex-col items-center'
            >
              <User />
              Sobre
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/main/projetos'
              className='flex flex-col items-center'
            >
              <CreditCard />
              Projetos
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href='/main/configuracoes'
              className='flex flex-col items-center'
            >
              <Settings />
              Config.
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ModeToggle />
    </>
  );
}
