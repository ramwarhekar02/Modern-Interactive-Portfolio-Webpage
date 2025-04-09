import React from 'react'

const Projects = () => {
  return (
    <div className='w-full rounded-xl'>
        <div className='mx-16 mt-28'>
            <h1 className='text-[3.5vw]'>Featured Projects</h1>
        </div>
        <div className='w-full border-t-[1px] mt-12 border-gray-300'>
            <div className='flex mt-12 px-14 gap-10'>
                <div className='w-1/2'>
                    <h4 className='uppercase px-2 mb-4'>Cardboard Spaceship</h4>
                    <div className='hover:scale-[95%] transition-[.1]'>
                        <img className='w-full h-full bg-cover rounded-md' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                    <div className='flex mt-5 gap-2'>
                        <button className='border-2 border-zinc-600 text-black hover:bg-black hover:text-white uppercase px-4 py-1 font-semibold rounded-full'>Branded Template</button>
                        <button className='border-2 border-zinc-600 text-black hover:bg-black hover:text-white uppercase px-4 py-1 font-semibold rounded-full'>Sales deck</button>
                        <button className='border-2 border-zinc-600 text-black hover:bg-black hover:text-white uppercase px-4 py-1 font-semibold rounded-full'>social media template</button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h4 className='uppercase px-2 mb-4'>ah2 and matt horn</h4>
                    <div className='hover:scale-[95%] transition-all duration-75'>
                        <img className='w-full h-full bg-cover rounded-md' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                    </div>
                    <div className='flex mt-5 gap-2'>
                        <button className='border-2 border-zinc-600 text-black hover:bg-black hover:text-white uppercase px-4 py-1 font-semibold rounded-full'>pitch</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects