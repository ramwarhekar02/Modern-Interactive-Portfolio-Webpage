import { motion } from 'motion/react';
import { s } from 'motion/react-client';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import contentImage from "../Images/contentImage.jpg" 

const Headings = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full'>
        <div className='mx-14 my-20 font-[Founders_Grotesk_Bold]'>
            {["We create", "Eye opening", "Presentations"].map((item, index) => {
                return <div key={index} className='flex items-end'>
                    {index === 1 && (
                        <motion.div
                        initial={{width: 0}} 
                        animate={{width: "7.4vw"}}
                        transition={{ease : [0.76, 0, 0.24, 1], duration: 1}}
                        className='w-[7.4vw] h-[5.7vw] rounded-lg overflow-hidden'>
                            <img className='w-full h-full bg-cover' src={contentImage} alt="" />
                        </motion.div>)}
                    <h1 className='tracking-tighter leading-[6.7vw] uppercase font-bold text-[8vw]'>
                        {item}
                    </h1>
                </div>
            })}
        </div>
        <div className='border-t-2 border-gray-300 mt-32'>
            <div className=' px-14 py-5 flex justify-between'>
                {["For Public and Private Companies", "For the First Pitch of IPO"].map((item, index)=> { 
                        return <h5 key={index} className= {`${index === 1 && "px-32"}`}>{item}</h5>
                    })}
                <div className=' flex gap-2'>
                        <div className='text-[1vw] uppercase border-2 px-2 border-black  flex items-center rounded-2xl'>Start the project
                    </div>
                    <span>
                        <button className='border-2 border-black px-2 py-2 rounded-full'><GoArrowUpRight /></button>
                    </span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Headings