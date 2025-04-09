import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full bg-[#CDEA68] rounded-xl'>
        <div className='mx-14 pt-28 mr-32'>
            <div className='text-[4vw] tracking-tighter leading-none'>
                <span>
                Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
                </span>
            </div>
        </div>
        <div className='flex border-t-[1px] py-6 border-gray-500 mt-28'>
            <div className='w-1/2 px-14 leading-loose'>
                <div className='text-[3vw] font-semibold'>
                    Our Approach:
                </div>
                    <button className='gap-5 flex items-center bg-black uppercase border-2 rounded-full px-7 tracking-tighter py-2 text-white whitespace-nowrap border-black text-[1.3vw]'>
                            Read More 
                        <div className='border-2 rounded-full p-1'><GoArrowUpRight /></div>
                    </button>
            </div>
            <div className='mb-14 w-[45vw] h-[60vh] rounded-xl bg-[#aac155]'>
            </div>
        </div>
    </div>
  )
}

export default About