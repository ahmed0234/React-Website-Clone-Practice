import React, { useEffect, useRef } from "react";
import "./Section.css";
import { motion, spring, useAnimation } from 'framer-motion'
import { useInView } from "framer-motion";




function Section() {

  const ref=useRef(null)

  const inView=useInView(ref, {once:true})

  
  const animation_1=useAnimation();

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
    <div className="Section_1 cantainer">

      <motion.h1
      variants={reveal_variant}
      initial='hidden'
      animate={animation_1}
      className="text-2xl text-[#fecd45] mb-[3rem]">Biography & Awards</motion.h1>

      <div ref={ref} className="flex flex-col lg:flex-row gap-[8em] xl:gap-[10em] ">
        <div>
          <motion.p
          variants={reveal_variant}
          initial='hidden'
          animate={animation_1}
          className="section_1_subtext ">
            One of the greates contemporary theatre actor
          </motion.p>
        </div>

        <motion.div 
        variants={reveal_variant}
        initial='hidden'
          animate={animation_1}>
          <p className="">
            Neque facilisis a, faucibus orci orci nulla eget dictumst congue
            interdum etiam aliquam lobortis egestas pretium porttitor eget
            gravida urna, cursus imperdiet in arcu.
          </p>
          <br />
          <p className="">
            Turpis elementum, ultrices dui maecenas quisque cras dui sed
            porttitor aliquam morbi libero egestas lacus sed.
          </p>
          <br />
          <p className="">
            Commodo sit arcu curabitur egestas metus, dictum lectus vulputate
            sed pharetra nisl, sed eget pellentesque magna porttitor sed in
            maecenas maecenas rhoncus neque imperdiet eget bibendum malesuada
            enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam
            egestas viverra.
          </p>
          <br />
          <motion.h3 
          whileHover={{scale:1.1, }}
          className="section_1_readmore_text uppercase cursor-pointer">read more !</motion.h3>
        </motion.div>
      </div>
    </div>
  );
}

export default Section;
