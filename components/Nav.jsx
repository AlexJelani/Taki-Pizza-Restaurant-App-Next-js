import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import logo from '../public/img/logo.png';
import Modal from './Modal';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
      <div className="w-full shadow-md shadow-black-300 bg-red-500 fixed top-0 left-0 right-0 z-10 h-12 md:h-16 2xl:h-20">
        <div className="justify-between md:justify-evenly 2xl:justify-around 2xl:mr-20 flex px-4 mr-5 mx-auto lg:max-w-7xl md:items-center md:px-8 h-10">
          <div className="flex items-center">
            <a href="tel:090-1862-1728">
              <AiOutlinePhone size={40} className="text-white mr-2 mt-3 transform rotate-180" /> {/* Phone icon with margin top */}
            </a>
            <a href="tel:090-1862-1728">
              <h1 className='text-white font-medium text-2xl 2xl:text-3xl 2xl:mt-10 hover:scale-110 duration-200 md:mt-5'>090-1862-1728</h1>
            </a>
          </div>
          <div className="hidden md:block">
            <Image src={logo} width={70} alt='logo' className="md:mt-5 hover:scale-110 duration-200 2xl:mt-10"/>
          </div>

          <div>
            <ul className='hidden md:flex text-white text-sm md:text-base 2xl:text-xl uppercase md:mt-5 2xl:mt-10'>
              <li className='hover:scale-110 duration-200'>
                <a href='#main'>Home</a>
              </li>
              <li className='ml-10 hover:scale-110 duration-200'>
                <a href='#about'>About</a>
              </li>
              <li className='ml-10 hover:scale-110 duration-200'>
                <a href='#menu'>Menu</a>
              </li>
              <li className='ml-10 hover:scale-110 duration-200'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>

            {/* Hamburger Icon */}
            <div className='md:hidden flex mt-3 text-white'>
              <div
                  className='md:hidden ml-2 hover:scale-105 duration-200 '
                  onClick={handleNav}><AiOutlineMenu size={25}/>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
            className={
              nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }>
          {/* Side Drawer Menu */}
          <div
              className={
                nav
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-red-500 p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              }>
            <div>
              <div className='flex w-full items-center justify-between'>
                <div
                    onClick={handleNav}
                    className='rounded-full bg-slate-400 shadow-lg shadow-stone-500 p-3 cursor-pointer text-white'>
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase text-white'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  <a href='#main'>Home</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  <a href='#about'>About</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  <a href='#menu'>Menu</a>
                </li>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
              <div className='pt-20'>
                <p className='uppercase tracking-widest text-white'>
                  Stay in Touch</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%] text-white'>
                  <Link href='https://twitter.com/?lang=en' target="_blank">
                    <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full bg-slate-400 shadow-lg shadow-stone-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsTwitter />
                    </div>
                  </Link>
                  <Link href='https://www.facebook.com/' target="_blank">
                    <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full bg-slate-400 shadow-lg shadow-stone-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFacebook />
                    </div>
                  </Link>
                  <Link href='https://www.instagram.com/' target="_blank">
                    <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full bg-slate-400 shadow-lg shadow-stone-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsInstagram />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
