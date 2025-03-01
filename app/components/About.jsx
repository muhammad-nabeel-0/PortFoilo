import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introducation</h4>
        <h2 className='text-center mb-2 text-5xl font-Ovo'>About Me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' 
                className='w-full rounded-3xl cursor-pointer hover:scale-105 duration-300'/>
            </div>
            <div className='flex-1'>
                <p className='mb-4 px-6 lg:px-0'>Hello Guy's my name is muhammad Nabeel. I am Frontend Developer. I am working Code Batch in 4 Months.Throught my career, I have the privilege of collaborating with prestiagious organizations,contributing to their success and growth. Belive Our Success</p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description},index)=>(
                        <li className='border-[1px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black hover:-z-[-2px dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' 
                        key={index} >
                            <Image className='w-7 mt-3 ' src={isDarkMode? iconDark:icon} alt={title}/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white '>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='font-Ovo my-6 text-gray-700 dark:text-white'>Tools I use </h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool,index)=>(
                        <li className='flex items-center justify-center w-12 sm:14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-2 duration-300' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default About
