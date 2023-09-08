import React, { useEffect, useRef } from 'react'
import './Section_2.css'
import {motion, useInView, useAnimation} from 'framer-motion'

function Section_2() {

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
    <div className='section_2 cantainer'>

        <motion.div ref={ref} 
        variants={reveal_variant}
        initial='hidden'
        animate={animation_1}
        className="grid grid-container gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-14">

            <div className="grid-1">
                <h1>1990</h1>
                <h2 className='font-semibold'>Vestibulum vitae mattis turpis fusce aliquam eu aliquam</h2>
                <h4>Non ut consequat hendrerit neque at</h4>
            </div>
            <div className="grid-2">
                <h1>1992</h1>
                <h2 className='font-semibold'>Praesent et lectus eleifend feugiat placerat</h2>
                <h4>Lorem et fermentum mauris vitae sit</h4>
            </div>
            <div className="grid-3">
                <h1>1997</h1>
                <h2 className='font-semibold'>Suspendisse rutrum consequat imperdiet tellus sed</h2>
                <h4>Pellentesque pulvinar ultrices morbi at</h4>
            </div>
            <div className="grid-4">
                <h1>2000</h1>
                <h2 className='font-semibold'>Imperdiet egestas justo nunc, nunc sed consequat</h2>
                <h4>Non ut consequat hendrerit neque at</h4>
            </div>
            <div className="grid-5">
                <h1>2005</h1>
                <h2 className='font-semibold'>Viverra luctus in habitant arcu placerat consectetur</h2>
                <h4>Lorem et fermentum mauris vitae sit</h4>
            </div>
            <div className="grid-6">
                <h1>2012</h1>
                <h2 className='font-semibold'>Velit lacus porttitor urna vitae</h2>
                <h4>Pellentesque pulvinar ultrices morbi at</h4>
            </div>






        </motion.div>
        
    </div>
  )
}

export default Section_2
