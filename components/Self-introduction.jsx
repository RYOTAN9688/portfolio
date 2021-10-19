import Image from 'next/image';
export const Self_introduction = () => {
  return (
    <>
      <div className='bg-green-500 flex justify-between min-w-full'>
        <div className='flex flex-col pl-52 pt-28 '>
          <h1 className='text-white text-6xl pt-10'>My Portfolio</h1>
          <h2 className='text-white text-4xl'>Please take a look</h2>
        </div>
        <Image src='/hero.png' width='400' height='400' alt='Main logo' />
      </div>
    </>
  );
};
