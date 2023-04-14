import React, {useEffect} from 'react';
import styles from './HeroSection.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import block from "../icons/vec.png";
import {motion} from "framer-motion";
import fin from "../icons/fin.png";
import bar from "../icons/bar.png";
import swap from "../icons/swap.png";


function HeroSection() {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <header className={styles.heroSection}>
     
  
      <div className={styles.heroContent} data-aos = "fade-up">
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            The 
            Ultimate<br/>
            DeFi <span>Data Hub</span>
          </h1>
        </div>
        <a href = "/tool"><motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.9 }} className={styles.ctaButton}>Get Started</motion.button></a>
      </div>
      <motion.div animate={{scale: [1, 1.05]}}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"}}>
        <img className = {styles.ani} data-aos = "fade-up" aos-duration = "2500" src = {block} alt = "animation"/>
      </motion.div>
      
      <motion.div animate={{scale: [1, 1.05]}}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"}}>
        <img className = {styles.ani2} data-aos = "fade-up" aos-duration = "2700" src = {fin} alt = "animation"/>
      </motion.div>

      <motion.div animate={{scale: [1, 1.05], x: [0, 10], rotate: [-1, 2]}}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"}}>
        <img className = {styles.ani3} data-aos = "fade-up" aos-duration = "2700" src = {bar} alt = "animation"/>
      </motion.div>

      <motion.div animate={{scale: [1, 1.05],  rotate: [-2, 1]}}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"}}>
        <img className = {styles.ani4} data-aos = "fade-up" aos-duration = "2700" src = {swap} alt = "animation"/>
      </motion.div>

    </header>
  );
}

export default HeroSection;