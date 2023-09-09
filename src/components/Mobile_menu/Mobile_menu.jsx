import React, { useState } from 'react'
import './Mobile_menu.css'

function Mobile_menu({toggler}) {
  

  const handleclick=()=>{
    toggler()
  }

  return (
    <div className='Mobile_menu'>

  
        <nav className="">
           <ul className="flex flex-col gap-6 text-[1.5rem] font-[400] text-center">
             <li><a onClick={handleclick} href="#Header" className="hover-text-effect-navbar">Home</a></li>
             <li><a onClick={handleclick} href="#Biography" className="hover-text-effect-navbar">biography</a></li>
             <li><a onClick={handleclick} href="#Repertoire" className="hover-text-effect-navbar">repertoire</a></li>
             <li><a onClick={handleclick} href="#Contact" className="hover-text-effect-navbar">contact</a></li>
           </ul>
       </nav>

       <div className="flex gap-6 text-[1.5rem]"> 
           <i class="fa-brands fa-facebook ease-in duration-300 hover:text-[rgb(206,179,105)]"></i>
           <i class="fa-brands fa-instagram ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
           <i class="fa-brands fa-dribbble ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
           <i class="fa-brands fa-linkedin ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
       </div>


    </div>
  )
}

export default Mobile_menu
