import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <header>
        <nav className=' flex justify-between px-3'>
          <div>
            <Image src='/logo.png' width='150' height='80' alt='logo' />
          </div>
          <div className='pt-3 space-x-4'>
            <Link href='/'>
              <a className='text-green-500 text-2xl '>ABOUT</a>
            </Link>
            <Link href='/'>
              <a className='text-green-500 text-2xl '>SKILLS</a>
            </Link>
            <Link href='/'>
              <a className='text-green-500 text-2xl '>VALUES</a>
            </Link>
            <Link href='/'>
              <a className='text-green-500 text-2xl '>FUTURE</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
