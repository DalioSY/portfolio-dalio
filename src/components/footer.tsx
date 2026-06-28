export default function Footer() {
  return (
    <footer className='fixed bottom-0 z-40 w-full flex justify-center bg-background'>
      <p className='text-[8px] sm:text-sm '>
        &copy;{new Date().getFullYear()} Dalio S. Yamada
      </p>
    </footer>
  );
}
