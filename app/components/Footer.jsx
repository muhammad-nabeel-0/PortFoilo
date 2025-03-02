import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'


const Footer = ({isDarkMode}) => {
return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode? assets.my_dark_logo:assets.my_logo} alt='' className='w-40 mx-auto mb-2'/>
            <div className='flex items-center gap-2 w-max mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            <a href="mailto:nabeelgaming786yt@gmail" target='_blank' m >
            nabeelgaming786yt@gmail.com
            </a>
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p className='hover:text-blue-600 duration-300 cursor-pointer'> © 2025 M Nabeel. | All rights reserved.</p>
           
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li className='hover:text-blue-600 duration-300'><a target='_blank' href="">GitHub</a></li>
                <li className='hover:text-blue-600 duration-300'><a target='_blank' href="">LinkedIn</a></li>
                <li className='hover:text-blue-600 duration-300'><a target='_blank' href="">Twitter</a></li>
                
            </ul>
            
        </div>
    </div>
)
}

export default Footer
