'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { assets } from "@/assets/assets"

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      }
      else {
        setIsScroll(false);
      }
    })
  }, [])

  const sideMenuRef = useRef<HTMLUListElement | null>(null)

  const openMenu = () => {
    sideMenuRef.current?.style.setProperty('transform', 'translateX(-16rem)');
  }

  const closeMenu = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e?.preventDefault();
    sideMenuRef.current?.style.setProperty('transform', 'translateX(16rem)');
  }

  return (
    <>

      <nav className={`w-full fixed top-0 px-5 py-2 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 ${isScroll ? 'bg-white/50 shadow-sm backdrop-blur-lg' : ''}`}>
        <a href="#home">
          <div className='font-work font-bold text-3xl tracking-wider'>Srihas<span className='text-gray-600'>RC</span></div>
        </a>

        <ul className={`font-roboto hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full ${isScroll ? '' : 'bg-gray-50 bg-opacity-50 shadow-sm'}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-6'>

          <button className='cursor-pointer'>
            <Image src={assets.moon_icon} alt='' className='w-6' />
          </button>

          <a href='https://github.com/SrihasRC' target='_blank' className='font-roboto hidden lg:flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-full ml-3'>
            <Image src={assets.github_mark} alt='' className='w-6' />
            <div>GitHub</div>
          </a>

          <button onClick={openMenu} className='block md:hidden ml-3'>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>

        </div>
      </nav>

      {/* -- mobile menu -- */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 h-screen w-64 z-50 bg-rose-50 transition duration-500'>

        <button onClick={closeMenu} className='absolute top-6 right-6'>
          <Image src={assets.close_black} alt='' className='w-6' />
        </button>

        <li><a onClick={(e) => closeMenu(e)} href="#home">Home</a></li>
        <li><a onClick={(e) => closeMenu(e)} href="#about">About</a></li>
        <li><a onClick={(e) => closeMenu(e)} href="#skills">Skills</a></li>
        <li><a onClick={(e) => closeMenu(e)} href="#projects">Projects</a></li>
        <li><a onClick={(e) => closeMenu(e)} href="#contact">Contact</a></li>
      </ul>

    </>
  )
}

export default Navbar
