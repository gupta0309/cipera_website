import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../Styles/Header.css';
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-left">
    <img src={logo} className='logo'/>
        </div>

        <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
          {/* <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="/usecase">Use Cases</a></li>
            <li><a href="tokenomics">Tokenomics</a></li>
            <li><a href="/roadmap">Roadmap</a></li>
          </ul> */}
         <ul className="nav-menu">
  <li><HashLink smooth to="#hero" onClick={() => setIsMenuOpen(false)}>Home</HashLink></li>

  <li><HashLink smooth to="#about" onClick={() => setIsMenuOpen(false)}>About Us</HashLink></li>

  <li><HashLink smooth to="#usecase" onClick={() => setIsMenuOpen(false)}>Use Cases</HashLink></li>

  <li><HashLink smooth to="#tokenomics" onClick={() => setIsMenuOpen(false)}>Tokenomics</HashLink></li>

  <li><HashLink smooth to="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</HashLink></li>

  <li><HashLink smooth to="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</HashLink></li>
</ul>
          
          <div className="mobile-buttons">
            <button className="btn-buy">Buy Now</button>
            <button className="btn-whitepaper">Whitepaper</button>
          </div>
        </div>

        <div className="navbar-right">
          <div className="desktop-buttons">
            <button className="btn-buy">Buy Now</button>
            <button className="btn-whitepaper">Whitepaper</button>
          </div>
          
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;