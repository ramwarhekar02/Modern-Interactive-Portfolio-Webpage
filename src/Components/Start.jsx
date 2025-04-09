import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Start() {
  
    let [rotate, setRotate] = useState(0)
  
    useEffect(()=> { 
      window.addEventListener("mousemove",(e)=> { 
        let mouseX = e.clientX;
        let mouseY = e.clientY;
  
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;
  
        var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle-180)
      })
    })

  return (
    <>
        <div  data-scroll data-scroll-section data-scroll-speed="-.1" className='relative w-full py-32 -mt-16 flex justify-center items-center bg-[#CDEA68]'>
            <div className='uppercase text-[13vw] tracking-tighter font-semibold leading-none text-center'>
                <h1>Ready</h1>
                <h1>to start</h1>
                <h1>the project?</h1>
            </div>
            <div className='absolute flex gap-10 '>
                <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center overflow-hidden'>
                    <div style={{transform: `rotate(${rotate}deg)`}} className='w-full h-8'>
                        <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                    </div>
                </div>
                </div>
                <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center'>
                    <div style={{transform: `rotate(${rotate}deg)`}} className='w-full h-8'>
                    <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div  data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full flex items-center justify-center py-10 mt-6 bg-[#CDEA68]'>
            <div className=''>
                <button className='gap-5 flex items-center bg-black uppercase border-2 rounded-full px-7 tracking-tighter py-4 text-white whitespace-nowrap border-black text-[1vw]'>
                        Start the project
                    <div className='border-2 rounded-full p-1'><GoArrowUpRight /></div>
                </button>
                <button className='gap-5 mt-10 flex items-center bg-transparent text-black uppercase border-2 rounded-full px-7 tracking-tighter py-3 text-semibold whitespace-nowrap border-black text-[1vw]'>
                        hello@ochi.design
                    <div className='border-2 rounded-full border-transparent p-1'><GoArrowUpRight /></div>
                </button>
            </div>
        </div>
</>
  )
}

export default Start