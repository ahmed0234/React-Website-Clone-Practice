import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion';

function Header() {

  


  return (
   

        <div className='Header h-[100vh] w-full flex flex-col'>
            <Navbar />
            <div className=' mt-auto p-0 m-0 '>
                <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='header-bottom-text uppercase text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl'>william gilbert</motion.h1>
            </div>
            <div className='mb-4'>
              <a href="#">
                <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='uppercase text-center font-semibold'>Scroll Down</motion.h1>
              </a>
            </div>
        </div>

   
  )
}

export default Header


