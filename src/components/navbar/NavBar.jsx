/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import Image from 'next/image'
import { Link } from 'react-scroll'
import ogi from '../../../public/ogi.jpg'

export default function NavBar() {
  return (
    <section>
      <nav className='h-50 w-screen  dark:bg-slate-600 flex justify-between items-center'>
        <div className='items-row w-screen p-3 flex'>
          <div className='flex gap-4 pl-4 flex-none items-end'>
            <Image src={ogi} width={35} height={35} className='rounded-full' />
            <Link to='me' spy={true} smooth={true} duration={500} className='text-2xl font-extrabold dark:text-slate-300'>Oğuzhan Gökcekoca</Link>
          </div>
          <div className='flex gap-4 flex-grow justify-end'>
            <ul className='flex gap-28 pr-24 font-extrabold dark:text-slate-300'>
              <li className='text-lg'><Link to='about' spy={true} smooth={true} duration={500}>About</Link></li>
              <li className='text-lg'><Link to='more' spy={true} smooth={true} duration={500}>More</Link></li>
              <li className='text-lg'><Link to='contact' spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>
          <div className='text-3xl flex gap-8 flex-none dark:text-slate-400'>
            <a href='https://www.linkedin.com/in/oğuzhan-gökcekoca-442802250/'><AiFillLinkedin /></a>
            <a href='https://github.com/oguzhangkckc'><AiFillGithub /></a>
            <a href='mailto:ogokcekoca@gmail.com'><AiFillMail /></a>
            <a href='https://www.instagram.com/oguzhangokcekoca/'><AiFillInstagram /></a>
          </div>
        </div>
      </nav>
    </section>
  )
}
