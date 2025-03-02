import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'


const Services = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='serives' className='w-full px-[12%] py-10 scroll-mt-20'>
    <motion.h4
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.3}}
    className='text-center mb-2 text-lg font-Ovo'>What I Offer</motion.h4>
    <motion.h2 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.5}}
    className='text-center mb-2 text-5xl font-Ovo'>My Serives</motion.h2>
    <motion.p 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.7}}
    className='max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12'>I am a Frontend Developer from Pakistan. I am working in Code Batch Company.</motion.p>
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6,delay:0.9}}
    className='grid grid-cols-auto gap-6 my-10 '>
        {serviceData.map(({icon,title,description,link},index)=>(
            <motion.div 
            initial={{opacity:0,y:-20}}
            whileHover={{scale:1.05}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.8}}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt={title} className='w-10' />
                <h2 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h2>
                <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image src={assets.right_arrow} alt='' className='w-5'/>
                </a>
            </motion.div>

        ))} 

    </motion.div>
    </motion.div>
  )
}

export default Services
