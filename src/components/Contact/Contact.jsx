import React, { useEffect, useRef } from 'react'
import './Contact.css'
import {motion, useInView, useAnimation} from 'framer-motion'

function Contact() {
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
    <motion.div ref={ref} 
      variants={reveal_variant}
        initial='hidden'
        animate={animation_1}
    className='contact cantainer barder' id='Contact'>

            <h1 className='text-center uppercase text-[#ffd761] text-xl'>stay updated!</h1>
            <h2 className='text-center uppercase cinzel text-3xl mt-6 mb-6'>SUBSCRIBE TO MY SHOW<br /> UPDATES</h2>

            <form className='flex  items-center justify-center'>
                <div className='flex flex-col gap-6 items-centern justify-center md:flex-row'> 
                    <div className='flex items-center justify-center'>
                         <input type="email" placeholder='Email Address' className='py-1 px-8 rounded-2xl'/>

                    </div>
                    <button className='border-2 border-white uppercase py-3 px-6 duration-200 ease-in hover:bg-white hover:text-black'>subscribe</button>
                </div>
            </form>
      
    </motion.div>
  )
}

export default Contact
