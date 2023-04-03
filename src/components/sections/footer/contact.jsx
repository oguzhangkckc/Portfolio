import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <section id='contact'>
      <div className='bg-gray-700'>
        <div className='h-300 flex'>
          <div className='flex flex-col justify-start'>
            <h2 className='text-white text-4xl md:text-6xl lg:text-6xl pl-10 font-extrabold'>
              Contact<span className='text-teal-500 text-8xl font-extrabold'>.</span>
            </h2>
              <p className='text-white text-lg md:text-2xl lg:text-2xl pt-10 pl-10'>
                <span className='text-teal-500'>Feel free to contact me</span> for any questions or suggestions
                <span className='text-teal-500 font-extrabold'>.</span>
              </p>
          </div> 
          <div className='flex gap-5 flex-col ml-auto pt-16 pr-10 lg:flex-row lg:justify-end'>
            <div className='flex items-center text-white text-lg md:text-2xl lg:text-3xl font-bold hover:text-teal-500 transition-colors duration-300'>
              <AiFillMail className='mr-2' />
              <a href='mailto:ogokcekoca@gmail.com'>Mail</a>
            </div>
            <div className='flex items-center text-white text-lg md:text-2xl lg:text-3xl font-bold hover:text-teal-500 transition-colors duration-300'>
              <AiFillLinkedin className='mr-2' />
              <a href='https://www.linkedin.com/in/oğuzhan-gökcekoca-442802250/'>LinkedIn</a>
            </div>
            <div className='flex items-center text-white text-lg md:text-2xl lg:text-3xl font-bold hover:text-teal-500 transition-colors duration-300'>
              <AiFillGithub className='mr-2' />
              <a href='https://github.com/oguzhangkckc'>Github</a>
            </div>
            <div className='flex items-center text-white text-lg md:text-2xl lg:text-3xl font-bold hover:text-teal-500 transition-colors duration-300'>
              <AiFillInstagram className='mr-2' />
              <a href='https://www.instagram.com/oguzhangokcekoca/'>Instagram</a>
            </div>
          </div>
        </div>
        <hr className='border-1 border-gray-500 mx-10 my-5' />
        <div className='flex justify-center pb-3'>
          <p className='text-gray-500 text-sm'>&copy; 2023 Oğuzhan Gökcekoca</p>
        </div>
      </div>
    </section>
  );
}
