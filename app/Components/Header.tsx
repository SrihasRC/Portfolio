import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
    return (
        <div id='home' className='h-screen flex flex-col gap-6 items-center justify-center pt-5'>
            <div>
                <Image src={assets.profile_pic} alt='' className='w-36 rounded-full hover:scale-105 transition duration-250' />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg md:text-xl'>Hello! I'm</h3>
                <h1 className='text-3xl md:text-5xl font-semibold'>Srihas Challa</h1>
            </div>
            <div>
                <h3 className='text-md md:text-xl px-7'>A Tech Enthusiast who enjoys building and exploring new technologies.</h3>
                <h3 className='text-md md:text-xl px-7'>I'm always learning, experimenting, and working on projects that interest me.</h3>

            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <a href="#contact" className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 bg-black rounded-full text-white hover:scale-105 transition duration-200'>
                    <div>contact me</div>
                    <Image src={assets.right_arrow_white} className='w-4 pt-0.5' alt='' />
                </a>
                <a href="/resume.pdf" download className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 rounded-full border border-gray-500 hover:scale-105 transition duration-200'>
                    <div>my resume</div>
                    <Image src={assets.download_icon} className='w-4 pt-0.5' alt='' />
                </a>
            </div>
            <div className='flex items-center justify-center gap-4 pt-2'>
                <a href="https://linkedin.com/in/srihaschalla" target='_blank'><Image src={assets.linkedin} alt='' className='w-8 hover:scale-125 transition duration-200' /></a>
                <a href="https://x.com/SrihasRC" target='_blank'><Image src={assets.x_black} alt='' className='w-8 hover:scale-125 transition duration-200' /></a>
                <a href="https://github.com/SrihasRC" target='_blank'><Image src={assets.github_mark} alt='' className='w-8 hover:scale-125 transition duration-200' /></a>
            </div>
        </div>
    )
}

export default Header
