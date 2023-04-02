/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function More() {
  return (
    <section id='more'>
      <div className='h-screen'>
        <div className='flex pt-32 justify-end pr-20'>
          <h2 className='text-slate-400 text-6xl flex-row font-extrabold'>
            More<span className='text-teal-500 text-8xl font-extrabold'>.</span>
          </h2>
        </div>
        <div>
          <h2 className='text-white pl-40 font-extrabold text-2xl pt-4'>
            More about<span className='text-teal-500 px-2'>my</span>career<span className='text-teal-500 text-3xl font-extrabold'>.</span>
          </h2>
          <div className='flex flex-wrap justify-center pt-16'>
            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 rounded-md p-10 shadow-lg bg-gray-800 hover:bg-gray-700'>
              <h3 className='text-teal-500 font-extrabold mb-4'>Education</h3>
              <p className='text-white text-xl'>BSc in Software Engineering</p>
              <p className='text-white font-thin'>Fatih Sultan Mehmet Vakif University</p>
              <p className='text-white font-thin'>2021 - 2026</p>
              <p className='text-white font-thin'>Related Coursework: Algorithms & Complexity, Data Structures, Operating Systems.</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 rounded-md p-10 shadow-lg bg-gray-800 hover:bg-gray-700'>
              <h3 className='text-teal-500 font-extrabold mb-4'>Work Experience</h3>
              <p className='text-white text-xl'>I don't have any work experience yet.</p>
            </div>
            <div className='flex flex-col items-center justify-center w-full sm:w-1/2 rounded-md p-10 shadow-lg bg-gray-800 hover:bg-gray-700'>
              <h3 className='text-teal-500 font-extrabold mb-4'>Projects</h3>
              <p className='text-white text-xl'>You can check my projects in my Github.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
