import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
    <h2 className='text-center mb-2 text-5xl font-Ovo'>Get in touch</h2>
    <p className='max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12'>Welcome to my web development portfoilo! Explore a collection of projects showcasing my exprestise in front-end development.</p>
    <form className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8 font-Ovo'>
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md' type="text" placeholder='Enter your name' required />
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md' type="email" placeholder='Enter your email' required />
        </div>
            <textarea className='w-full p-3  resize-none outline-none border-[0.5px] border-gray-400 bg-white rounded-md' rows="6" placeholder='Enter your Message'required 
           ></textarea>
        <button  className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>Submit now
        <Image src={assets.right_arrow_white} alt='' className='w-5' />
        </button>
    </form>
    </div>
  )
}

export default Contact
