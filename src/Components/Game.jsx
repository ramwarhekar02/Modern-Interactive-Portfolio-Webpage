import React, { useEffect, useState } from 'react'

function Game() {
  
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
    <div>
      <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
          <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div  data-scroll data-scroll-section data-scroll-speed=".1" className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
              <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center overflow-hidden'>
                <div style={{transform: `rotate(${rotate}deg)`}} className='w-full h-8'>
                  <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                </div>
              </div>
            </div>
            <div  data-scroll data-scroll-section data-scroll-speed=".1" className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
              <div className='w-2/3 h-2/3 bg-black rounded-full flex items-center justify-center'>
                <div style={{transform: `rotate(${rotate}deg)`}} className='w-full h-8'>
                  <div className='w-[2vw] h-[2vw] bg-white rounded-full'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
