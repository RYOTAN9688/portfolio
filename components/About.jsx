import Image from 'next/image';
export const About = () => {
  return (
    <>
      <div>
        <div className='flex justify-center pt-6'>
          <p className='text-4xl font-bold'>About</p>
          <p className='text-3xl'>自己紹介</p>
        </div>
        <div className='flex justify-center space-x-56'>
          <div className='flex'>
            <Image src='/about-1.png' width='200' height='200' alt='趣味について' />
            <p className='font-bold '>趣味</p>
            <p>フェスが趣味です！早くコロナが落ち着いて夏フェスに行きたいです！</p>
          </div>
          <div>
            <Image src='/about-2.png' width='200' height='200' alt='好きな食べ物について' />
            <p className='font-bold'>好きな食べ物</p>
            <p>基本的になんでも好きですが、お肉が出ると大喜びします🍖</p>
          </div>
          <div>
            <Image src='/about-3.png' width='200' height='200' alt='性格' />
            <p className='font-bold'>性格</p>
            <p>
              人とお話することが好きです！
              初対面の人とも仲良くなることが得意なので気軽にお話しましょう！
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
