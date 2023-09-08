import React, { useEffect, useRef } from 'react'
import './Section_4.css'
import {motion, useInView, useAnimation} from 'framer-motion'

function Section_4() {

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
    <div className='section_4 cantainer'>

        <motion.div
        ref={ref}
        variants={reveal_variant}
        initial='hidden'
        animate={animation_1}
        className="section_4_wrapper flex flex-col gap-12 lg:flex-row lg:gap-36 xl:gap-44 2xl:gap-52">

            <div className='1st-col '>
                <h1 className='color'>Tours</h1>
            </div>

            <div className='snd-col'>

                <div><h1 className='cinzel text-4xl '>William Gillbert has perform at the world’s leading theatre</h1></div>

                <div className='flex flex-col gap-6 mt-[4rem]'>
                    <div><h1 className='cinzel text-[#ffd761] text-3xl'>1992</h1></div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-3xl cinzel font-[400]'>Aliquam sapien sit volutpat</h1>
                        <h2 className=''>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-6 mt-[4rem]'>
                    <div><h1 className='cinzel text-[#ffd761] text-3xl'>1997</h1></div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-3xl cinzel font-[400]'>Le nunc neque</h1>
                        <h2 className=''>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</h2>
                    </div>
                </div>


                <div className='flex flex-col gap-6 mt-[4rem]'>
                    <div><h1 className='cinzel text-[#ffd761] text-3xl'>2000</h1></div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-3xl cinzel font-[400]'>Facilisi egestas urna</h1>
                        <h2 className=''>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-6 mt-[4rem]'>
                    <div><h1 className='cinzel text-[#ffd761] text-3xl'>2003</h1></div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-3xl cinzel font-[400]'>Scelerisque arcu diam faucibus</h1>
                        <h2 className=''>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</h2>
                    </div>
                </div>

                <div className='flex flex-col gap-6 mt-[4rem]'>
                    <div><h1 className='cinzel text-[#ffd761] text-3xl'>2011</h1></div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-3xl cinzel font-[400]'>Elit pharetra dignissim</h1>
                        <h2 className=''>Dignissim egestas congue dolor netus nec eu, ut quis aliquam phasellus eu lectus arcu eget tellus commodo eleifend augue mattis sed.</h2>
                    </div>
                </div>

            </div>

        </motion.div>


    </div>
    
  )
}

export default Section_4
