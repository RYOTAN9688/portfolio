import Image from 'next/image';
export const Hobby = () => {
  return (
    <div className='flex items-center space-x-56'>
      <div>
        <Image className='flex-1' src='/about-1.png' width='200' height='200' alt='趣味について' />
        <p className='flex-1 font-bold text-center '>趣味</p>
        <p className='flex-1'>フェスが趣味です！早くコロナが落ち着いて夏フェスに行きたいです！</p>
      </div>
    </div>
  );
};
