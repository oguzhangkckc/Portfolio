/* eslint-disable react/no-unescaped-entities */
import React from 'react'

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
                    <div className='flex flex-row gap-20 justify-center pt-16'>
                        <h3 className='text-teal-500 font-extrabold'>
                            Education
                        </h3>
                        <h3 className='text-teal-500 font-extrabold'>
                            Work Experience
                        </h3>
                        <h3 className='text-teal-500 font-extrabold'>
                            Projects
                        </h3>
                    </div>
                    <div className='w-6/12 mt-10 mx-auto p-5  bg-teal-500 rounded-xl'>
                        <div className='flex justify-start flex-col'>
                            <p className='flex justify-start text-white text-xl'>BSc in Software Engineering<span className='text-white px-1'>at</span><span className='font-bold'>Fatih Sultan Mehmet Vakif University.</span></p>
                            <p className='flex justify-start text-white font-thin'>2021 - 2026</p>
                            <p className='flex justify-start text-white font-thin'>Related Coursework: Algorithms & Complexity, Data Structures, Operating Systems.</p>
                        </div>
                    </div>
                    <div className='w-6/12 mt-10 mx-auto p-5  bg-teal-500 rounded-xl'>
                        <div className='flex justify-start flex-col'>
                            <p className='flex justify-start text-white text-xl'>I dont' have any work experience yet.</p>
                        </div>
                    </div>
                    <div className='w-6/12 mt-10 mx-auto p-5  bg-teal-500 rounded-xl'>
                        <div className='flex justify-start flex-col'>
                            <p className='flex justify-start text-white text-xl'>You can check my projects in my Github.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
