import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
    image: StaticImageData;
    title: string;
    desc: string;
    techStack: StaticImageData[];
    liveSite?: string;
    codeLink?: string;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, desc, techStack, liveSite, codeLink }) => {
    const defSite = "https://github.com/SrihasRC";
    return (
        <div className='w-80 min-h-127 bg-[#f6f6f694] dark:bg-[#202020] border border-gray-200 dark:border-black rounded-xl px-4 py-6 flex flex-col justify-between hover:-translate-y-1.5 duration-200 shadow-md'>
            <Image src={image} alt='' className='rounded-xl' />
            <h3 className='mt-6 text-2xl'>{title}</h3>
            <p className='leading-6 mt-1 text-gray-700 dark:text-gray-400'>{desc}</p>
            <div className='mt-4 flex gap-2'>
                {techStack.map((tech, index)=>(
                    <Image 
                        key={index}
                        src={tech} 
                        alt='' 
                        className='w-10 p-2 border-[0.5px] border-gray-300 dark:bg-darkBg dark:border-black rounded-sm hover:scale-105 duration-200' />
                ))}
            </div>
            <div className='flex gap-6 mt-6 justify-center mb-6'>
                <a href={codeLink || defSite} target='_blank' className='bg-[#0000005d] text-white px-5 hover:scale-105 py-1.5 rounded-xl hover:bg-[#000000af] duration-200'>View Code</a>
                <a href={liveSite || defSite} target='_blank' className='bg-[#0000005d] text-white px-5 hover:scale-105 py-1.5 rounded-xl hover:bg-[#000000af] duration-200'>Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectCard
