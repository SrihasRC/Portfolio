import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { ThemeProps } from '../types'

const Footer: React.FC<ThemeProps> = (isDarkMode) => {
    return (
        <div className='w-11/12 mx-auto border-t-[2px] border-gray-300 flex flex-col gap-3 xl:mt-10'>
            <h2 className='text-center font-work text-2xl font-semibold pt-10 tracking-wider'>Srihas Reddy Challa</h2>
            <ul className='flex items-center justify-center gap-4 text-gray-700 dark:text-gray-300'>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="#home">Home</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="about">About</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="skills">Skills</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="projects">Projects</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="contact">Contact</a></li>
            </ul>
            <div className='flex items-center justify-center gap-4 pt-2'>
                <a href="https://linkedin.com/in/srihaschalla" target='_blank'><Image src={assets.linkedin} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="https://instagram.com/srihasreddy" target='_blank'><Image src={assets.insta_black} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="https://x.com/SrihasRC" target='_blank'><Image src={assets.x_black} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="https://github.com/SrihasRC" target='_blank'><Image src={assets.github_mark} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="mailto:challasrihasreddy@gmail.com"><Image src={assets.mail_black} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
            </div>
            <p className='text-center pb-6 mt-2'>© 2025 Srihas Reddy Challa. All Rights Reserved</p>
        </div>
    )
}

export default Footer
