/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai'
import Image from 'next/image'
import { Link } from 'react-scroll'
import ogi from '../../../public/ogi.jpg'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className={`w-screen fixed top-0 z-50 ${isScrolled ? "bg-white shadow-lg transition duration-300" : ""
        }`}
    >
      <nav className='items-row w-screen p-3 flex'>
        <div className='flex gap-4 pl-4 flex-none items-end'>
          <Image src={ogi} width={35} height={35} className='rounded-full' />
          <Link to='me' spy={true} smooth={true} duration={500} className='text-2xl font-extrabold dark:text-slate-300 hover:text-teal-500 transition-colors duration-300'>Oğuzhan Gökcekoca</Link>
        </div>
        <div className='flex gap-4 flex-grow justify-end'>
          <ul className='flex gap-28 pr-24 mt-2 font-extrabold dark:text-slate-300'>
            <li className={`text-lg`}>
              <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-teal-500 transition-colors duration-300'>
                About
              </Link>
            </li>
            <li className={`text-lg`}>
              <Link to='more' spy={true} smooth={true} duration={500} className='hover:text-teal-500 transition-colors duration-300'>
                More
              </Link>
            </li>
            <li className={`text-lg`}>
              <Link to='contact' spy={true} smooth={true} duration={500} className='hover:text-teal-500 transition-colors duration-300'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-3xl flex gap-8 mt-2 flex-none dark:text-slate-400 '>
          <a href='https://www.linkedin.com/in/oğuzhan-gökcekoca-442802250/' className='hover:text-teal-500 transition-colors duration-300'>
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/oguzhangkckc' className='hover:text-teal-500 transition-colors duration-300'>
            <AiFillGithub />
          </a>
          <a href='mailto:ogokcekoca@gmail.com' className='hover:text-teal-500 transition-colors duration-300'>
            <AiFillMail />
          </a>
          <a href='https://www.instagram.com/oguzhangokcekoca/' className='hover:text-teal-500 transition-colors duration-300'>
            <AiFillInstagram />
          </a>
        </div>
      </nav>
    </section>
  )
}
