import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen pt-22'>
      <h2 className='text-center text-[40px] font-work font-semibold mb-12'>Projects</h2>

      <div className='w-11/12 md:w-3/4 flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 mx-auto'>

        <ProjectCard
          image={assets.secshare}
          title='Secure Share'
          desc='A secure, browser-based P2P file-sharing app using WebRTC, AES encryption, and SHA-256 verification—ensuring private, server-free, real-time transfers.'
          techStack={[
            assets.react,
            assets.tailwind,
            assets.js
          ]}
          codeLink='https://github.com/SrihasRC/blockchain-based-file-transfer'
          liveSite='https://secureshare11.netlify.app/' />

        <ProjectCard
          image={assets.netmv}
          title='NetMovies'
          desc='A simple and intuitive movie listing app using the TMDB API, displaying movies along with their ratings, language, and release year.'
          techStack={[
            assets.react,
            assets.tailwind,
            assets.js
          ]}
          codeLink='https://github.com/SrihasRC/NetMovies' />

        <ProjectCard
          image={assets.spotifycl}
          title='Spotify Web Clone'
          desc='A Spotify web clone that plays songs directly from local files without a backend, built using HTML, CSS, and JavaScript.'
          techStack={[
            assets.html,
            assets.css,
            assets.js
          ]}
          codeLink='https://github.com/SrihasRC/Spotify-Web-Clone' />

      </div>
    </div>
  )
}

export default Projects
