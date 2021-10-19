import { Link as Scroll } from 'react-scroll';
import About from './about';
import { Self_introduction } from './Self-introduction';
import { Skill } from './skill';
import Image from 'next/image';
import Value from './Value';
export default function Layout() {
  {
    /* map関数で取り出してタグを生成する。 */
  }
  const navItem = ['about', 'skills', 'values', 'future', 'blog'];
  return (
    <div>
      <header>
        <nav className=' flex justify-between px-3'>
          <div>
            <Image src='/logo.png' width='150' height='80' alt='logo' />
          </div>
          {/* map関数で取り出してタグを生成する。 */}
          <div className='space-x-6 md:space-x-8 text-green-500 text-2xl pt-4'>
            {navItem.map((item, index) => {
              return (
                <Scroll
                  to={`${item}`}
                  className=' uppercase'
                  smooth={true}
                  duration={600}
                  key={index}
                  offset={-30}
                >
                  {item}
                </Scroll>
              );
            })}
          </div>
        </nav>
      </header>
      <main>
        <Self_introduction />
        <div id='about'>
          <About />
        </div>
        <div id='skills'>
          <Skill />
        </div>
        <div id='values'>
          <Value />
        </div>
      </main>
    </div>
  );
}
