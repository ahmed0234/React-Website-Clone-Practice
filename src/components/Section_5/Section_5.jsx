import React, { useEffect, useRef } from 'react'
import './Section_5.css'
import {motion, useInView, useAnimation} from 'framer-motion'

function Section_5() {


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
    <div className='section_5 cantainer'>

        <motion.div ref={ref} 
        variants={reveal_variant}
        initial='hidden'
        animate={animation_1}
        className="section_5_wrapper flex flex-col gap-12 md:flex-row lg:gap-14 2xl:gap-16">

                <div className='mx-auto'>
                    <img src="https://websitedemos.net/theatre-artist-02/wp-content/uploads/sites/782/2021/03/theatre-artist-template-upcoming-event-img.jpg" alt="" />
                </div>

                <div className='flex flex-col gap-6 '>
                    <h2 className='color_2 font-semibold text-2xl'>Upcoming Show</h2>
                    <h1 className='cinzel text-4xl'>Risus etiam dui</h1>
                    <div className='flex flex-col gap-8'>
                        <h4 className=''>Ultricies nibh morbi amet fames in enim turpis aenean neque commodo nisi, tristique et nulla tellus.</h4>
                        <h1 className='cinzel color_2 text-3xl'>06/14 <br /><em className='textnormal text-center'>2021</em></h1>
                    </div>
                    <a href="#"><h2 className='section_buy inline-block pb-2 font-bold tracking-wide ease-in duration-300 hover:text-[#ffd761] '>Buy Tickets !</h2></a>
                </div>

        </motion.div>

      
    </div>
  )
}

export default Section_5
