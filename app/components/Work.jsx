import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'


const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20 z-10'>
    <motion.h4 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.3}}
    className='text-center mb-2 text-lg font-Ovo'>My PortFoilo</motion.h4>
    <motion.h2 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.5}}
    className='text-center mb-2 text-5xl font-Ovo'>My Latest work</motion.h2>
    <motion.p 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.7}}
    className='max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12'>I am a Frontend Developer from Pakistan. I am working in Code Batch Company.</motion.p>
  

    <motion.div 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.9}}
    className='grid grid-cols-auto my-10 gap-5 dark:text-black'>

    {workData.map((projects,index)=>(
        <motion.div
            initial={{opacity:0,y:-20}}
            whileHover={{scale:1.05}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.8}}
        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
        key={index} style={{backgroundImage: `url(${projects.bgImage})`}}>
            <div
            className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
                <h2 className='font-semibold'>{projects.title}</h2>
                <p className='text-sm text-gray-700'>{projects.description}</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='' className='w-5'/>
            </div>
            </div>
            
        </motion.div>
    ))}
    </motion.div>
    <motion.a 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:1.1,duration:0.5}}
    href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:hover:bg-darkHover dark:text-white dark:hover:border-white'>
        Show more <Image src={isDarkMode?assets.right_arrow_bold_dark :assets.right_arrow_bold} alt='Right arrow' className='w-4' />
    </motion.a>
    </motion.div>
  )
}

export default Work
