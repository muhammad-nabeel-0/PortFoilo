import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4 text-center mx-auto w-11/12 max-w-3xl capitalize '>
        <motion.div
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8,type:'spring',stiffness:100}}
        >
        <Image src={assets.profile_img} alt='' 
      className='rounded-full w-32' />
        </motion.div>
      <motion.h3
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6,delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi I'm Nabeel Munir <Image src={assets.hand_icon} alt='' className='w-6'/ ></motion.h3>
        <motion.h1
        initial={{y:-30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.5}}
         className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend web developer in pakistan.
        </motion.h1>
        <motion.p
          initial={{x:40,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.6,delay:0.7}}
         className=' max-w-2xl mx-auto font-Ovo '>
            Hi Friends My name is M Nabeel, I am a Frontend Developer from Pakistan.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
              initial={{y:30,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.6,delay:1}}
             href="#contact"
            className='px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex items-center gap-2 group dark:bg-transparent '
            
            >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4 group-hover:translate-x-2 duration-300' /></motion.a>
            <motion.a 
              initial={{y:20,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.8,delay:1.4}}
            href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white'>My resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header
