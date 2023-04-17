import React, {useEffect} from 'react';
import uni from "../icons/uni.png";
import compound from "../icons/cpnd.png";
import aave from "../icons/aave.png";
import btc from "../icons/btc.png";
import busd from "../icons/busd.png";
import usdc from "../icons/circle.png";
import usdt from "../icons/tether.png";
import sushi from "../icons/sushi.png";
import curve from "../icons/curve.png";
import eth from "../icons/eth.png";
import frax from "../icons/frax.png";
import dai from "../icons/dai.png";
import matic from "../icons/matic.png";
import balancer from "../icons/balancer.png";
import dodo from "../icons/dodo.png";
import bancor from "../icons/bancor.png";
import mstable from "../icons/mstable.png";
import lido from "../icons/lido.png";
import synthetix from "../icons/synthetix.png";
import kyber from "../icons/kyberswap.png";
import cryptocom from "../icons/cryptocom.png";
import shiba from "../icons/shiba.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion} from "framer-motion";

import "./About.css";


function About() {
  useEffect(() => {
    AOS.init({duration:850});
  }, []);
  return (
    <section id="about" className="about-section">
      <div className="container">
      <h2 className="about-heading" data-aos="zoom-in-up">About dBridge</h2>
        <div className="about-content" data-aos="fade-up">
          <p className="about-text">
            dBridge allows you to find the best conversion rates for your tokens among all your favorite decentralized exchanges. <br></br>We query data from 0x's Swap API and display this information in a easily consumable way.
          </p>
          <div className="companies-supported" data-aos="zoom-in-up">
            <h2 className="about-heading">Exchanges We Support</h2>
            <div className="company-logos">
              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" data-aos = "zoom-in" src = {uni} alt = "uni logo"/>
                <p className = "text">Uniswap</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {cryptocom} data-aos = "zoom-in" alt = "aave logo"/>
                <p className = "text" data-aos = "zoom-in">Crypto.com</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {curve} data-aos = "zoom-in" alt = "compound logo"/>
                <p className = "text" data-aos = "zoom-in">Curve</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {balancer} data-aos = "zoom-in" alt = "dydx logo"/>
                <p className = "text" data-aos = "zoom-in">Balancer</p>
              </motion.div>
            </div>
            <div className="company-logos" data-aos="fade-up">


              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {sushi} data-aos = "zoom-in" alt = "sushi logo"/>
                <p className = "text" data-aos = "zoom-in">SushiSwap</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {dodo} data-aos = "zoom-in" alt = "curve logo"/>
                <p className = "text" data-aos = "zoom-in">Dodo</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {synthetix} data-aos = "zoom-in" alt = "dydx logo"/>
                <p className = "text" data-aos = "zoom-in">Synthetix</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {kyber} data-aos = "zoom-in" alt = "dydx logo"/>
                <p className = "text" data-aos = "zoom-in">Kyber</p>
              </motion.div>
    
              
            </div>

            <div className="company-logos" data-aos="fade-up">


              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {lido} data-aos = "zoom-in" alt = "sushi logo"/>
                <p className = "text" data-aos = "zoom-in">Lido</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {shiba} data-aos = "zoom-in" alt = "curve logo"/>
                <p className = "text" data-aos = "zoom-in">ShibaSwap</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {bancor} data-aos = "zoom-in" alt = "dydx logo"/>
                <p className = "text" data-aos = "zoom-in">Bancor</p>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }}>
                <img className="company-logo" src = {mstable} data-aos = "zoom-in" alt = "pancake logo"/>
                <p className = "text" data-aos = "zoom-in">MStable</p>
              </motion.div>
              
            </div>
          </div>
          </div>
        </div>
        
    

     <div className="container">
        
        <div className="companies-supported" data-aos="zoom-in-up">
          <h2 className="about-heading">Tokens We Support</h2>
          <div className="company-logos" data-aos="fade-up">

            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {btc} data-aos = "zoom-in" alt = "btc logo"/>
              <p className = "text" data-aos = "zoom-in">BTC</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {eth} data-aos = "zoom-in" alt = "eth logo"/>
              <p className = "text" data-aos = "zoom-in">ETH</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {usdc} data-aos = "zoom-in" alt = "usdc logo"/>
              <p className = "text" data-aos = "zoom-in">USDC</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {usdt} data-aos = "zoom-in" alt = "usdt logo"/>
              <p className = "text" data-aos = "zoom-in">USDT</p>
            </motion.div>
          </div>
          
          <div className="company-logos">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {busd} data-aos = "zoom-in" alt = "busd logo"/>
              <p className = "text" data-aos = "zoom-in">BUSD</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {frax} data-aos = "zoom-in" alt = "frax logo"/>
              <p className = "text" data-aos = "zoom-in">FRAX</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {dai} data-aos = "zoom-in" alt = "dai logo"/>
              <p className = "text" data-aos = "zoom-in">DAI</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="company-logo" src = {matic} data-aos = "zoom-in" alt = "polygon logo"/>
              <p className = "text" data-aos = "zoom-in">MATIC</p>
            </motion.div>
          </div>
        </div>
        <p className = "text" data-aos = "fade-in"> and many more! </p>
      </div>


    </section>

  );
}

export default About;
