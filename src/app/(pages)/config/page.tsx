import { Button } from '@/components/ui/button';

export default function Config() {
  return (
    <div className=' m-20 p-5 flex flex-col items-center justify-center bg-background rounded-xl'>
      <div className='flex items-center gap-5'>
        <p>Tema: Claro/Escuro</p>
        <Button themeDark />
      </div>
    </div>
  );
}
