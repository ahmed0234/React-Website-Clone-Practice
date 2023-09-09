import React, { useEffect, useRef } from 'react'
import './Footer.css'
import {motion, useInView, useAnimation} from 'framer-motion'

function Footer() {
  const ref=useRef(null)

  const inView=useInView(ref, {once:false})

  const animation_1=useAnimation()

  useEffect(()=>{
      if (inView){
          animation_1.start({
            y:0,
            opacity:1,
            transition:{
              type:'spring',
              duration:4,
              bounce:0.3,
            }
          })
      }
      
    },[inView])

  const reveal_variant={
      hidden:{
        y:160,
        opacity:0
      }
  }
  return (
    <div className='Footer cantainer'>

        <motion.div ref={ref} 
        variants={reveal_variant}
        initial='hidden'
        animate={animation_1}
        className="footer_wrapper flex flex-col items-center  gap-10 md:flex-row md:justify-between ">

            <h1 className='cinzel text-5xl font-semibold'>Ahmed <br /> Hassan</h1>

            <nav className=''>
                <ul className="flex flex-col text-center gap-8 text-[1rem] font-[600] md:flex-row">
                <li><a href="#" className="hover-text-effect-navbar">Home</a></li>
                <li><a href="#" className="hover-text-effect-navbar">biography</a></li>
                <li><a href="#" className="hover-text-effect-navbar">repertoire</a></li>
                <li><a href="#" className="hover-text-effect-navbar">contact</a></li>
                </ul>
            </nav>

            <div className="flex gap-5 text-2xl "> 
            <i class="fa-brands fa-facebook ease-in duration-300 hover:text-[rgb(206,179,105)]"></i>
            <i class="fa-brands fa-instagram ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
            <i class="fa-brands fa-dribbble ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
            <i class="fa-brands fa-linkedin ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
        </div>

        </motion.div>

      
    </div>
  )
}

export default Footer
