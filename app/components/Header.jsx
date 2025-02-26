import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () =>{

    
    
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4 text-center mx-auto w-11/12 max-w-3xl capitalize'>
        <div>
        <Image src={assets.profile_img} alt='' 
      className='rounded-full w-32' />
        </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi I'm Nabeel Munir <Image src={assets.hand_icon} alt='' className='w-6'/ > </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend web developer in pakistan.
        </h1>
        <p className=' max-w-2xl mx-auto font-Ovo '>
            Hi Friends My name is M Nabeel, I am a Frontend Developer from Pakistan.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border rounded-full bg-black text-white border-gray-500 flex items-center gap-2 '
            
            >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 '>My resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
