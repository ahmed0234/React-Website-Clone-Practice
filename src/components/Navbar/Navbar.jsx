import React, { useEffect, useRef, useState } from "react";
import Mobile_menu from "../Mobile_menu/Mobile_menu";
import { motion } from 'framer-motion';
import "./Navbar.css";
import "./Responsive.css";

function Navbar() {
  const [toggle, settoggle]=useState(false)


  const toggler=()=>{
    settoggle(!toggle)
  }
  




  return (
    
      
       <motion.div 
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       className="Navbar flex items-center justify-between px-4 py-6 capitalize relative">

       <h1  className="headerlogo text-2xl cinzel">Ahmed Hassan</h1>

       <nav className="hidden lg:block">
           <ul className="flex gap-8 text-[1rem] font-[600]">
             <li><a href="#Header" className="hover-text-effect-navbar">Home</a></li>
             <li><a href="#Biography" className="hover-text-effect-navbar">biography</a></li>
             <li><a href="#Repertoire" className="hover-text-effect-navbar">repertoire</a></li>
             <li><a href="#Contact" className="hover-text-effect-navbar">contact</a></li>
           </ul>
       </nav>

       <div className="gap-5 text-2xl hidden lg:flex"> 
           <i class="fa-brands fa-facebook ease-in duration-300 hover:text-[rgb(206,179,105)]"></i>
           <i class="fa-brands fa-instagram ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
           <i class="fa-brands fa-dribbble ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
           <i class="fa-brands fa-linkedin ease-in duration-300 hover:text-[rgb(228,203,134)]"></i>
       </div>

       <div className="lg:hidden z-10">
           <button onClick={()=>settoggle(!toggle)} className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
             <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
             </svg>
         </button>
       </div>

       {toggle && <Mobile_menu toggler={toggler}/>}

   </motion.div>

    
   
  );
}

export default Navbar;
