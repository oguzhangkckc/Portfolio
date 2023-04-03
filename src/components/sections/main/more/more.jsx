/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function More() {
  return (
    <section id='more'>
      <div className='h-screen'>
        <div className='flex justify-end pr-8 sm:pr-20'>
          <h2 className='text-slate-400 text-4xl pt-32 sm:text-6xl font-extrabold'>
            More<span className='text-teal-500 text-6xl sm:text-8xl font-extrabold'>.</span>
          </h2>
        </div>
        <div>
          <h2 className='text-white pl-4 sm:pl-40 font-extrabold text-xl sm:text-2xl pt-4'>
            More about<span className='text-teal-500 px-2'>my</span>career<span className='text-teal-500 text-2xl sm:text-3xl font-extrabold'>.</span>
          </h2>
          <div className='flex flex-wrap justify-center pt-8 sm:pt-16'>
            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 rounded-md p-4 sm:p-10 shadow-lg bg-gray-800 hover:bg-gray-700'>
              <h3 className='text-teal-500 font-extrabold mb-2 sm:mb-4'>Education</h3>
              <p className='text-white text-base sm:text-xl'>BSc in Software Engineering</p>
              <p className='text-white font-thin text-sm sm:text-base'>Fatih Sultan Mehmet Vakif University</p>
              <p className='text-white font-thin text-sm sm:text-base'>2021 - 2026</p>
              <p className='text-white font-thin text-sm sm:text-base'>Related Coursework: Algorithms & Complexity, Data Structures, Operating Systems.</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 rounded-md p-4 sm:p-10 shadow-lg bg-gray-800 hover:bg-gray-700'>
              <h3 className='text-teal-500 font-extrabold mb-2 sm:mb-4'>Work Experience</h3>
              <p className='text-white text-base sm:text-xl'>I don't have any work experience yet.</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 rounded-md p-4 sm:p-10 shadow-lg bg-gray-800 hover:bg-gray-700'>
              <h3 className='text-teal-500 font-extrabold mb-2 sm:mb-4'>Projects</h3>
              <p className='text-white text-base sm:text-xl'>You can check my projects on my GitHub.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
