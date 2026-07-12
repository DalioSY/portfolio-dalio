'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, CodeXml, Edit, CreditCard, } from 'lucide-react';

const menuItems = [
  { name: 'Tecnologias', href: '/tecnologia', icon: CodeXml },
  { name: 'Sobre', href: '/sobre', icon: User },
  { name: 'Projetos', href: '/projetos', icon: CreditCard },
  { name: 'Contato', href: '/contato', icon: Edit },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed z-30 bg-background backdrop-blur-md max-sm:bottom-0 max-sm:left-0 max-sm:w-full sm:top-20 sm:left-0 sm:h-[calc(100vh-5rem)] sm:w-64 mb-5 sm:mb-0">
      <nav className="h-full">
        <ul className="flex justify-around p-3 sm:flex-col sm:gap-2 sm:justify-start">
          {menuItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 
                    ${isActive
                      ? 'bg-primary-gradient text-white shadow-lg'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:block">{name}</span>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100 sm:hidden">
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}