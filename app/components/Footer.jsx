import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.new_logo} alt='' className='w-36 mx-auto mb-2'/>
            <div className='flex items-center gap-2 w-max mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            nabeelgaming786yt@gmail.com
            </div>
        </div>
        <div>
            <p> © 2025 M Nabeel. | All rights reserved.</p>
            <ul>
                <li><a href="">GitHub</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </div>
        
    </div>
)
}

export default Footer
