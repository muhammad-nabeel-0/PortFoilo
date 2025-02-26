import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 z-10'>
    <h4 className='text-center mb-2 text-lg font-Ovo'>My PortFoilo</h4>
    <h2 className='text-center mb-2 text-5xl font-Ovo'>My Latest work</h2>
    <p className='max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12'>I am a Frontend Developer from Pakistan. I am working in Code Batch Company.</p>
  

    <div className='grid grid-cols-auto my-10 gap-5'>

    {workData.map((projects,index)=>(
        <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
        key={index} style={{backgroundImage: `url(${projects.bgImage})`}}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
                <h2 className='font-semibold'>{projects.title}</h2>
                <p className='text-sm text-gray-700'>{projects.description}</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='' className='w-5'/>
            </div>
            </div>
            
        </div>
    ))}
    </div>
    <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
        Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
    </a>
    </div>
  )
}

export default Work
