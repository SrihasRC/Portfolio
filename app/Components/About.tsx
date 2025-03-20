import React from 'react'

const About = () => {
  return (
    <div id='about' className='min-h-screen w-11/12 mx-auto flex flex-col justify-center items-center'>

      <h2 className='text-center text-[40px] font-work font-semibold xl:mb-10'>About me</h2>

      <div className='flex flex-col md:flex-row gap-16 justify-center items-center'>
        <div className='flex gap-6 mt-6 flex-col md:max-w-3xl'>
          <div className='font-roboto text-md leading-7'>
            <p>I'm a tech enthusiast who loves exploring different fields and building things that interest me. While I’ve explored web development, I’m still figuring out my primary path and enjoying the learning process along the way. I’m curious by nature and always looking for opportunities to expand my knowledge, take on new challenges, and experiment with ideas that push me forward.</p>
          </div>

          <div className='font-roboto text-md leading-7'>
            <p>I started my tech journey with web development, building projects and exploring modern frameworks. Along the way, I got into backend basics—working with databases, APIs, and authentication. While I enjoy building for the web, I’m also curious about other fields like cybersecurity and AI. I’ve tinkered with Linux too, customizing it, using the CLI, and trying out different tools. Right now, I’m diving deeper into backend development while keeping an open mind about where my interests will take me next.</p>
          </div>

        </div>
        <ul>
          <li className='flex gap-4 pb-6 relative items-baseline'>
            <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-600'>
              <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="bi bi-circle-fill fill-gray-600">
                <circle r="6" cx="6" cy="6" />
              </svg>
            </div>
            <div className='text-sm text-gray-700'>
              <p className='text-black font-semibold pb-1'>Vellore Institute of Technology, Chennai</p>
              <p>B.Tech CSE - Ai&R</p>
              <p>2023 - Present</p>
            </div>
          </li>
          <li className='flex gap-4 pb-6 relative items-baseline'>
            <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-600'>
              <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="bi bi-circle-fill fill-gray-600">
                <circle r="6" cx="6" cy="6" />
              </svg>
            </div>
            <div className='text-sm text-gray-700'>
              <p className='text-black font-semibold pb-1'>Resonance, Hyderabad</p>
              <p>MPC</p>
              <p>2021 - 2023</p>
            </div>
          </li>
          <li className='flex gap-4 pb-6 relative items-baseline'>
            <div>
              <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="bi bi-circle-fill fill-gray-600">
                <circle r="6" cx="6" cy="6" />
              </svg>
            </div>
            <div className='text-sm text-gray-700'>
              <p className='text-black font-semibold pb-1'>Delhi Public School, Warangal</p>
              <p>CBSE</p>
              <p>2014 - 2021</p>
            </div>
          </li>
        </ul>
        <div>

        </div>
      </div>
    </div>
  )
}

export default About
