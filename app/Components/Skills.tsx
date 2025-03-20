import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const Skills = () => {
  return (
    <div id='skills' className='min-h-screen w-11/12 pt-24 mx-auto'>

      <h2 className='text-center text-[40px] font-work font-semibold mb-12'>Skills</h2>

      <div className="w-11/12 md:w-3/4 mx-auto flex flex-col md:flex-row gap-10 flex-wrap">

        <div className="w-90 md:w-120 px-8 py-4 h-75 rounded-xl border border-gray-200 hover:-translate-y-2 transition duration-250 shadow-md bg-[#f6f6f6]">
          <h3 className='text-center text-lg font-roboto font-semibold text-gray-700 mb-4'>Programming Languages</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.python} alt=''  className='w-10'/>
              <p>Python</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center px-3 bg-white gap-1 border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.c} alt=''  className='w-8'/>
              <p>C</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center px-3 bg-white gap-1 border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.cpp} alt=''  className='w-8'/>
              <p>C++</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-1 py-1 pr-2 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.java} alt=''  className='w-10'/>
              <p>Java</p>
            </div>
          </div>
        </div>

        <div className="w-90 md:w-120 px-8 py-4 border border-gray-200 hover:-translate-y-2 transition duration-250 shadow-md rounded-xl bg-[#f6f6f6]">
          <h3 className='text-center text-lg font-roboto font-semibold text-gray-700 mb-4'>Frontend</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.html} alt=''  className='w-10'/>
              <p>Html</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.css} alt=''  className='w-10'/>
              <p>CSS</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.js} alt=''  className='w-10'/>
              <p>JavaScript</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.ts} alt=''  className='w-10'/>
              <p>TypeScript</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center gap-1 py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.tailwind} alt=''  className='w-10'/>
              <p>TailwindCSS</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center gap-1 py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.react} alt=''  className='w-8'/>
              <p>ReactJS</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center gap-1 pl-2 pr-4 py-2 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.next} alt=''  className='w-7'/>
              <p>NextJS</p>
            </div>
          </div>
        </div>

        <div className="w-90 md:w-120 px-8 py-4 h-75 border border-gray-200 hover:-translate-y-2 transition duration-250 shadow-md rounded-xl bg-[#f6f6f6]">
          <h3 className='text-center text-lg font-roboto font-semibold text-gray-700 mb-4'>Backend</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-3 gap-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.node} alt=''  className='w-10'/>
              <p>NodeJS</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-3 gap-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.express} alt=''  className='w-8'/>
              <p>Express</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-3 gap-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.mongo} alt=''  className='w-8'/>
              <p>MongoDB</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-1 gap-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.supabase} alt=''  className='w-10'/>
              <p>Supabase</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center pl-2 py-2 gap-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.clerk} alt=''  className='w-7'/>
              <p>Clerk</p>
            </div>
          </div>
        </div>

        <div className="w-90 md:w-120 px-8 py-4 h-75 rounded-xl border border-gray-200 hover:-translate-y-2 transition duration-250 shadow-md bg-[#f6f6f6]">
          <h3 className='text-center text-lg font-roboto font-semibold text-gray-700 mb-4'>Tools/Others</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center gap-1 py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.linux} alt=''  className='w-7'/>
              <p>Linux</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 gap-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.vscode} alt=''  className='w-7'/>
              <p>VS Code</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-1 gap-1 pl-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.git} alt=''  className='w-10'/>
              <p>Git</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center py-2 gap-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.github_mark} alt=''  className='w-8'/>
              <p>Github</p>
            </div>
            <div className='hover:scale-110 cursor-pointer transition duration-200 flex justify-center items-center gap-1 pl-2 py-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.postman} alt=''  className='w-8'/>
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
