import React, { useEffect, useRef } from 'react'
import './Repertoire.css'
import {motion, useInView, useAnimation} from 'framer-motion'

function Repertoire() {

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
     className='Repertoire_section cantainer '>

        <div className='text-center'>
            <h2 className='text-[#ffd761] font-bold text-xl tracking-wide mb-6'>Repertoire</h2>
            <h5 className='repertoire_subtext text-2xl cinzel'>William Gillbert has over <br />fourty roles in his <br />repertoire</h5>
        </div>

        <div className='flex flex-col flex-wrap items-center justify-center pt-20 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-16 2xl:gap-20'>
            <div className='responsive_repertoite flex flex-col gap-4 w-[300px] xs:w-[400px] md:w-[100%]'>
                <img src="https://websitedemos.net/theatre-artist-02/wp-content/uploads/sites/782/2021/03/theatre-artist-template-repertoire-img-1.jpg" alt="" className='w-[100%] h-[100%]'/>
                <h4 className='pt-2'>Tempor odio condimentum</h4>
                <h2 className='cinzel'>As Etiam Mauris in Augue Eleifend Porttitor</h2>
            </div>

            <div className='responsive_repertoite flex flex-col gap-4 w-[300px] xs:w-[400px] md:w-[100%]'>
                <img src="https://websitedemos.net/theatre-artist-02/wp-content/uploads/sites/782/2021/03/theatre-artist-template-repertoire-img-1.jpg" alt="" className='w-[100%] h-[100%]'/>
                <h4 className='pt-2'>In adipiscing purus urna</h4>
                <h2 className='cinzel'>As Purus Mauris in Aliquam Est Pretium</h2>
            </div>

            <div className='responsive_repertoite flex flex-col gap-4 w-[300px] xs:w-[400px] md:w-[100%]'>
                <img src="https://websitedemos.net/theatre-artist-02/wp-content/uploads/sites/782/2021/03/theatre-artist-template-repertoire-img-3.jpg" alt="" className='w-[100%] h-[100%]'/>
                <h4 className='pt-2'>Fermentum vel faucibus</h4>
                <h2 className='cinzel '>As Velit in Magna Justo</h2>
            </div>

        </div>
    
        
    </motion.div>
  )
}

export default Repertoire
