import { Hobby } from './Hobby';
import { Food } from './Food';
import { Personality } from './Personality';
function About() {
  return (
    <>
      <div className='px-32 '>
        <div className='flex flex-col items-center pt-6 space-x-3'>
          <p className='text-4xl font-bold text-green-500'>About</p>
          <p className='text-4xl font-bold'>自己紹介</p>
        </div>
        <div className='flex justify-between pt-10'>
          <Hobby />
          <Food />
          <Personality />
        </div>
      </div>
    </>
  );
}
export default About;
