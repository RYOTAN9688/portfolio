import Image from 'next/image';

export const Food = () => {
  return (
    <div>
      <Image
        className='flex-1'
        src='/about-2.png'
        width='200'
        height='200'
        alt='好きな食べ物について'
      />
      <p className='flex-1 font-bold text-center'>好きな食べ物</p>
      <p className='flex-1'>基本的になんでも好きですが、お肉が出ると大喜びします🍖</p>
    </div>
  );
};
