import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { ThemeProps } from '../types'

const Header: React.FC<ThemeProps> = ({isDarkMode}) => {
    return (
        <div id='home' className='h-screen flex flex-col gap-6 items-center justify-center pt-5'>
            <div>
                <Image src={assets.profile_pic} alt='' className='w-36 rounded-full hover:scale-105 transition duration-250 border-3 border-gray-800 dark:border-gray-300' />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg md:text-xl'>Hello! I'm</h3>
                <h1 className='text-3xl md:text-5xl font-semibold tracking-wider'>Srihas Challa</h1>
            </div>
            <div>
                <h3 className='text-md md:text-xl px-7'>A Tech Enthusiast who enjoys building and exploring new technologies.</h3>
                <h3 className='text-md md:text-xl px-7'>I'm always learning, experimenting, and working on projects that interest me.</h3>

            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <a href="#contact" className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 bg-black rounded-full text-white hover:scale-105 transition duration-200 dark:bg-white dark:text-black'>
                    <div>contact me</div>
                    <Image src={assets.right_arrow_white} className='w-4 pt-0.5 dark:invert' alt='' />
                </a>
                <a href="/resume.pdf" download className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 rounded-full border-2 border-gray-500 hover:scale-105 transition duration-200 dark:border-gray-300'>
                    <div>my resume</div>
                    <Image src={assets.download_icon} className='w-4 pt-0.5 dark:invert' alt='' />
                </a>
            </div>
            <div className='flex items-center justify-center gap-4 pt-2'>
                <a href="https://linkedin.com/in/srihaschalla" target='_blank'><Image src={assets.linkedin} alt='' className='w-8 hover:scale-125 transition duration-200 dark:invert' /></a>
                <a href="https://github.com/SrihasRC" target='_blank'><Image src={assets.github_mark} alt='' className='w-8 hover:scale-125 transition duration-200 dark:invert' /></a>
            </div>
        </div>
    )
}

export default Header
