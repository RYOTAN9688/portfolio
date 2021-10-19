import Image from 'next/image';
export const Personality = () => {
  return (
    <div className=''>
      <Image src='/about-3.png' width='200' height='200' alt='性格' />
      <p className='font-bold text-center'>性格</p>
      <p>
        人とお話することが好きです！ 初対面の人とも仲良くなることが得意なので気軽にお話しましょう！
      </p>
    </div>
  );
};
