/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='me' className={`${isScrolled ? 'text-teal-500 shadow-lg transition duration-300' : ''}`}>
      <div className='h-screen'>
        <div className='pt-36 rounded-full text-center flex flex-col items-center'>
          <h2 className={`text-4xl sm:text-3xl py-2 text-white ${isScrolled ? 'text-teal-500' : ''}`}>
            <span className='text-teal-500'>Hello</span>, I'm
          </h2>
          <h1 className={`text-7xl sm:text-5xl py-2 font-medium text-white ${isScrolled ? 'text-teal-500' : ''}`}>
            Oğuzhan Gökcekoca
          </h1>
          <h3 className={`text-2xl sm:text-lg py-2 text-white ${isScrolled ? 'text-teal-500' : ''}`}>
            I am a{' '}
            <span className='text-teal-500'>Software Engineering</span> student
            <span className='text-teal-500 font-extrabold'>.</span>
          </h3>
          <Link
            to='more'
            spy={true}
            smooth={true}
            duration={500}
            className={`bg-teal-500 text-white text-lg font-medium rounded-full px-8 py-3 mt-10 hover:bg-white hover:text-teal-500 transition duration-300 ${isScrolled ? 'border border-teal-500' : ''}`}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
