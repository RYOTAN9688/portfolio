import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout />
      <footer className='flex items-center justify-center w-full h-24 border-t'></footer>
    </div>
  );
}
