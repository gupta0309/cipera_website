import React from "react";
import "../Styles/Footer.css";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../../assets/HomePage/logofooter.png"; // 🔥 your logo image

const Footer = ({id}) => {
  return (
    <footer id={id} className="cipera-footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          
          </div>

          <p>
            CIPERA is a decentralized Ethereum ecosystem for staking, referrals,
            and smart investments.
          </p>

          <span className="copyright">
            © 2026 CIPERA. All Rights Reserved.
          </span>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h3>Company</h3>
          <a href="#">Home</a>
          <a href="#about">About us</a>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h3>Resources</h3>
          <a href="#">Blogs</a>
          <a href="#">Podcasts</a>
          <a href="#">Books</a>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Contact us for more</h3>

          <div className="subscribe-box">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>

          <div className="social-icons">
            <FaLinkedinIn />
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>

          <p className="footer-bottom-text">
            Built on Ethereum | Powered by Community
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;