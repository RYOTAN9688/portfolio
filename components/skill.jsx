import Image from 'next/image';

export const Skill = () => {
  return (
    <div className='flex justify-center pt-14 px-36 '>
      <Image className='flex-1' src='/skill.png' width='300' height='300' alt='スキル' />
      <div className='md:container mx-auto'>
        <div className='flex space-x-4 text-center'>
          <p className='text-green-500  text-3xl'>SKiLLS</p>
          <h1 className='font-bold text-3xl '>スキル</h1>
        </div>
        <p className='flex-1 text-center'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        </p>
      </div>
    </div>
  );
};
