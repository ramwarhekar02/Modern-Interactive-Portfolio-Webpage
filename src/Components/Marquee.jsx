import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {



  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full flex bg-[#004D43]'>
        <div className='overflow-hidden text-white rounded-t-xl'>
            <div className='flex leading-none border-t-2 mt-20 mb-20 border-b-2  border-gray-300'>
                <motion.h1
                    initial={{x:"0"}}
                    animate={{x:"-100%"}}
                    transition={{repeat: Infinity, ease:"linear", duration:10}}
                className='px-5 flex leading-none uppercase whitespace-nowrap font-bold text-[22vw] tracking-tighter'>
                    we are ochi
                </motion.h1>
                <motion.h1
                    initial={{x:"0"}}
                    animate={{x:"-100%"}}
                    transition={{repeat: Infinity, ease:"linear", duration:10}}
                className='px-5 flex leading-none uppercase whitespace-nowrap font-bold text-[22vw] tracking-tighter'>
                    we are ochi
                </motion.h1>
                <motion.h1
                    initial={{x:"0"}}
                    animate={{x:"-100%"}}
                    transition={{repeat: Infinity, ease:"linear", duration:10}}
                className='px-5 flex leading-none uppercase whitespace-nowrap font-bold text-[22vw] tracking-tighter'>
                    we are ochi
                </motion.h1>
            </div>
        </div>
    </div>
  )
}

export default Marquee