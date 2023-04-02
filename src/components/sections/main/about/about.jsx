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
                <div className='flex flex-row'>
                    <div className='w-4/12 bg-teal-500 ml-32 mt-24 mb-2 rounded-3xl hidden md:block'>
                        <div className='flex flex-row pt-4 pl-16'>
                            <div>
                                <h4 className='text-xl pt-4 text-white font-extrabold'>Programming</h4>
                                <p className='pt-4 text-l text-slate-800 font-bold'>Html</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>Css</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>JavaScript</p>
                            </div>
                            <div className='pt-4 pl-28'>
                                <h4 className='text-xl text-white font-extrabold'>Tools</h4>
                                <p className='pt-3 text-l text-slate-800 font-bold'>React</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>React Native</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>Node.js</p>
                            </div>
                        </div>
                        <div className='flex flex-row pt-16 pl-16'>
                            <div>
                                <h4 className='text-xl pt-4 text-white font-extrabold'>Languages</h4>
                                <p className='pt-3 text-l text-slate-800 font-bold'>Turkish -Native</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>English -Advanced</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>German -Beginner</p>
                            </div>
                            <div className='pb-4 pl-28'>
                                <h4 className='text-xl pt-4 text-white font-extrabold'>Interest</h4>
                                <p className='pt-3 text-l text-slate-800 font-bold'>Football</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>Music</p>
                                <p className='pt-1 text-l text-slate-800 font-bold'>Video Games</p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-auto w-5/12'>
                        <div className='flex flex-col justify-end ml-auto'>
                            <div className='pt-16 pr-52'>
                                <h3 className='text-2xl text-white font-extrabold'>
                                    Let<span className='text-teal-500 px-2'>me</span>introduce myself<span className='text-teal-500 font-extrabold'>.</span>
                                </h3>
                            </div>
                            <div className='pr-16'>
                                <p className='text-l pt-4 text-gray-300 font-thin'>
                                    I'm Oğuzhan. I study at the Department of Software Engineering at the University of Fatih Sultan Mehmet Vakif University. Besides my study, I am also designing applications and websites. In my free time, I am trying to improve my problem solving skills, programming skills and knowledge by researching and learning.
                                </p>
                            </div>
                        </div>
                        <div className='ml-auto pt-8 pr-16'>
                            <h4 className='text-xl text-white font-bold'>
                                Fullname:
                            </h4>
                            <p className='text-l text-gray-300 font-thin'>Oğuzhan Gökcekoca</p>
                            <h4 className='text-xl pt-4 text-white font-bold'>
                                Location:
                            </h4>
                            <p className='text-l text-gray-300 font-thin'>Istanbul / Turkey</p>
                            <h4 className='text-xl pt-4 text-white font-bold'>
                                Github:
                            </h4>
                            <a href='https://github.com/oguzhangkckc' className='text-l text-gray-300 font-thin hover:text-teal-500 transition-colors duration-300'>https://github.com/oguzhangkckc</a>
                            <h4 className='text-xl pt-4 text-white font-bold'>
                                Email:
                            </h4>
                            <a href='mailto:ogokcekoca@gmail.com' className='text-l text-gray-300 font-thin hover:text-teal-500 transition-colors duration-300'>ogokcekoca@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}