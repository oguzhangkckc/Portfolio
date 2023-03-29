/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function About() {
    return (
        <section id='about'>
            <div className='h-screen '>
                <div className='flex justify-start'>
                    <h2 className='text-slate-400 text-6xl pl-20 pt-32 font-extrabold'>
                        About<span className='text-teal-500 text-8xl font-extrabold'>.</span>
                    </h2>
                </div>
                <div>
                    <h3 className='text-2xl pt-16 pr-52 flex justify-end text-white font-extrabold'>
                        Let<span className='text-teal-500 px-2'>me</span> introduce myself<span className='text-teal-500 font-extrabold'>.</span>
                    </h3>
                    <div className='w-5/12 ml-auto pr-16'>
                    <p className='text-l pt-4 text-gray-300 font-thin'>
                        I'm Oğuzhan. I study at the Department of Software Engineering at the University of Fatih Sultan Mehmet Vakif University. Besides my study, I am also designing applications and websites. In my free time, I am trying to improve my problem solving skills, programming skills and knowledge by researching and learning.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
