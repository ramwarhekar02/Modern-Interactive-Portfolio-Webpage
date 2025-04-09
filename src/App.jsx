import React from 'react'
import Navbar from './Components/Navbar'
import Headings from './Components/Headings'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Game from './Components/Game'
import Projects from './Components/Projects'
import Reviews from './Components/Reviews'
import Start from './Components/Start'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div>
      <Navbar />
      <Headings />
      <Marquee />
      <About />
      <Game />
      <Projects />
      <Reviews />
      <Start />
      <Footer />
    </div>
  )
}

export default App