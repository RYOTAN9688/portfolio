import Image from 'next/image';

export default function Value() {
  return (
    <div className='font-bold'>
      <div className='flex flex-col items-center pt-16  '>
        <h1>価値観</h1>
        <p>VALUES</p>
      </div>
      <div className='flex justify-center space-x-5'>
        <div>
          <Image src='/value1.png' width='200' height='200' alt='価値観1' />
          <p>価値観1</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div>
          <Image src='/value2.png' width='200' height='200' alt='価値観2' />
          <p>価値観2</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div>
          <Image src='/value3.png' width='200' height='200' alt='価値観3' />
          <p>価値観3</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </div>
  );
}
