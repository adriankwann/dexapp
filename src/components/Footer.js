import React, {useEffect} from "react";
import "./Footer.css";
import logo from "../icons/dbridge.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <div id = "foot" className="footer-container" data-aos = "fade-up">
      <div className="footer-heading" data-aos = "fade-in">
      <div className="logofoot">
        <img src={logo} alt="Your Logo" />
      </div>
        <p>&copy; 2023 dBridge. All rights reserved.</p>
        <p>Project by Adrian Kwan.</p>
      </div>
      <div className="contact-form" data-aos = "fade-in">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
