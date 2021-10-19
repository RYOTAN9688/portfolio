import Head from 'next/head';
import Image from 'next/image';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Self_introduction } from '../components/Self-introduction';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <Self_introduction />
        <About />
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        ></a>
      </footer>
    </div>
  );
}
