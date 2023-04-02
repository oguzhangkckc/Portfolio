/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import { Link } from 'react-scroll';
import ogi from '../../images/ogi.png';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-3 flex items-center justify-between ${
        isScrolled ? 'bg-white shadow-lg transition duration-300' : ''
      }`}
    >
      <div className="flex items-center gap-4 pl-4">
        <Image src={ogi} width={35} height={35} className="rounded-full" />
        <Link to="me" spy={true} smooth={true} duration={500} className="text-2xl font-extrabold dark:text-slate-300 hover:text-teal-500 transition-colors duration-300">
          Oğuzhan Gökcekoca
        </Link>
      </div>

      <ul className="flex items-center gap-8 font-extrabold dark:text-slate-300">
        <li>
          <Link to="about" spy={true} smooth={true} duration={500} className="text-lg hover:text-teal-500 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="more" spy={true} smooth={true} duration={500} className="text-lg hover:text-teal-500 transition-colors duration-300">
            More
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500} className="text-lg hover:text-teal-500 transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-8 text-3xl dark:text-slate-400">
        <a href="https://www.linkedin.com/in/oğuzhan-gökcekoca-442802250/" className="hover:text-teal-500 transition-colors duration-300">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/oguzhangkckc" className="hover:text-teal-500 transition-colors duration-300">
          <AiFillGithub />
        </a>
        <a href="mailto:ogokcekoca@gmail.com" className="hover:text-teal-500 transition-colors duration-300">
          <AiFillMail />
        </a>
        <a href="https://www.instagram.com/oguzhangokcekoca/" className="hover:text-teal-500 transition-colors duration-300">
          <AiFillInstagram />
        </a>
      </div>
    </nav>
  );
}