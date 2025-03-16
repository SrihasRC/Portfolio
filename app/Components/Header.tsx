import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
    return (
        <div id='home' className='h-screen flex flex-col gap-6 items-center justify-center'>
            <div>
                <Image src={assets.profile_pic} alt='' className='w-32 rounded-full' />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg md:text-xl'>Hello! I'm</h3>
                <h1 className='text-3xl md:text-5xl font-semibold'>Srihas Challa</h1>
                <h2 className='text-xl md:text-2xl'>Tech Enthusiast</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <a href="#contact" className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 bg-black rounded-full text-white'>
                    <div>contact me</div>
                    <Image src={assets.right_arrow_white} className='w-4 pt-0.5' alt='' />
                </a>
                <a href="/resume.pdf" download className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 rounded-full border border-gray-500'>
                    <div>my resume</div>
                    <Image src={assets.download_icon} className='w-4 pt-0.5' alt='' />
                </a>
            </div>
            <div className='flex items-center justify-center gap-4 pt-2'>
                <a href="https://linkedin.com/in/srihaschalla" target='_blank'><Image src={assets.linkedin} alt='' className='w-8' /></a>
                <a href="https://x.com/SrihasRC" target='_blank'><Image src={assets.x_black} alt='' className='w-8' /></a>
                <a href="https://github.com/SrihasRC" target='_blank'><Image src={assets.github_mark} alt='' className='w-8' /></a>
            </div>
        </div>
    )
}

export default Header
