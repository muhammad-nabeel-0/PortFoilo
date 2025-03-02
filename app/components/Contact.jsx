import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'


const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cd5515d4-5906-462b-a134-a24e05777c65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}} 
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
    <motion.h4 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.3}} 
    className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
    <motion.h2 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.5}} 
    
    className='text-center mb-2 text-5xl font-Ovo'>Get in touch</motion.h2>
    <motion.p 
    initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.7}} 
    className='max-w-2xl mx-auto font-Ovo text-center mt-5 mb-12'>Welcome to my web development portfoilo! Explore a collection of projects showcasing my exprestise in front-end development.</motion.p>
    <motion.form
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.9}}  
    onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8 font-Ovo'>
            <motion.input 
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6,delay:1.1}} 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md dark:bg-darkHover dark:border-white/90 ' type="text" placeholder='Enter your name' required name='name' />
            <motion.input
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6,delay:1.2}}  
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 bg-white rounded-md  dark:bg-darkHover dark:border-white/90' type="email" placeholder='Enter your email' required name='email' />
        </div>
            <motion.textarea 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,delay:1.3}} 
             className='w-full p-3  resize-none outline-none border-[0.5px] border-gray-400 bg-white rounded-md  dark:bg-darkHover dark:border-white/90' rows="6" placeholder='Enter your Message'required name='message'
           ></motion.textarea>
        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}} 
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:border-[0.5px] dark:hover:bg-darkHover dark:bg-transparent' type='submit'>Submit now
        <Image src={assets.right_arrow_white} alt='' className='w-5' />
        </motion.button>
        <p className='mt-4'>{result}</p>
    </motion.form>
    </motion.div>
  )
}

export default Contact
