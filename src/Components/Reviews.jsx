import React from 'react'

const Reviews = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen'>
        <div className='flex mt-48 gap-6'>
            <div className='relative w-1/2 h-[50vh] flex items-center justify-center ml-16 rounded-xl mt-20 bg-[#004D43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute border-2 px-3 rounded-full left-5 bottom-6 uppercase text-white'>
                    @2019-2022
                </button>
            </div>
            <div className='flex gap-6 justify-between w-1/2 h-[50vh] mr-16 mt-20'>
                <div className='relative w-1/2 h-[50vh] flex items-center justify-center rounded-xl bg-[#212121]'>
                    <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute border-2 px-3 rounded-full left-5 bottom-6 uppercase text-white'>
                        Rating 5.0 ON Clutch
                    </button>
                </div>
                <div className='relative w-1/2 h-[50vh] flex items-center justify-center rounded-xl bg-[#212121]'>
                    <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute border-2 px-3 rounded-full left-5 bottom-6 uppercase text-white'>
                        business bootcamp alumni
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews