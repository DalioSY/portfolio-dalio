import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export function Title() {
  return (
    <main className='p-5 flex items-center gap-4'>
      <Avatar>
        <AvatarImage
          className='h-14 w-14 rounded-full border-spacing-2 border-primary'
          src='https://avatars.githubusercontent.com/u/152891031?v=4'
          alt='foto perfil'
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h1 className='text-xl'>Dalio Shindi Yamada</h1>
        <span className='text-[8px] '>
          Desenvolvimento Full Statf | Desenvolvedor Mobile
        </span>
      </div>
    </main>
  );
}
