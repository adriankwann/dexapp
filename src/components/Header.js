import React from 'react';
import {motion} from "framer-motion";
import "./Header.css";
import dbridgelogo from "../icons/dbridge.png";


function Header() {
  return (
    <div className = "header">
    
      <nav>
      <div className="logo">
        <a href = "/"><img src= {dbridgelogo} alt="Your Logo" /></a>
      </div>
        <ul>
          <li><a href = "/"><motion.button whileHover = {{scale: [1, 1.2]}}>Home</motion.button></a></li>
          <li><a href = "/#about"><motion.button whileHover = {{scale: [1, 1.2]}}>About</motion.button></a></li>
          <li><a href = "#foot"><motion.button whileHover = {{scale: [1, 1.2]}}>Contact</motion.button></a></li>
          
          <li><a href = "https://github.com/adriankwann/dexapp" target="_blank"><motion.button whileHover = {{scale: [1, 1.2]}}>Github</motion.button></a></li>
          
        </ul>
        
      </nav>
    </div>
  );
}

export default Header;
