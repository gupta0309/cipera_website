import React from 'react';
import '../Styles/S1Hero.css';
import video from "../../assets/bg-video.mp4"
import coin1 from "../../assets/HomePage/coin1.png"
import coin2 from "../../assets/HomePage/coin2.png"
import coin3 from "../../assets/HomePage/coin4.png"
import coin4 from "../../assets/HomePage/coin3.png"
const Hero = () => {
  return (
    <section className="cpr-hero-section">
<div className="cpr-coins">
      <video className="cpr-video-bg" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>

      <div className="cpr-hero-radial-overlay">
  </div>
  <img src={coin1} className="coin coin-tl" alt="" />
  <img src={coin2} className="coin coin-bl" alt="" />
  <img src={coin3} className="coin coin-tr" alt="" />
  <img src={coin4} className="coin coin-br" alt="" />
</div>
      <div className="cpr-hero-content">
        <div className="cpr-badge-container">
          <span className="cpr-badge-text">CIPERA TOKEN</span>
        </div>

        <h1 className="cpr-main-title">
          Powering the <span className="cpr-italic-blue">Future</span> of  
          Decentralized Finance
        </h1>

        <p className="cpr-main-subtitle">
          The Future of Decentralized Ecosystem Investments. Built on Ethereum, powered by community.
        </p>

        <div className="cpr-button-group">
          <button className="cpr-btn-primary">Get Started</button>
          <button className="cpr-btn-secondary">Whitepaper</button>
        </div>

        <div className="cpr-stats-wrapper">
          <div className="cpr-stat-item">
            <h3 className="cpr-stat-value">100M CIP</h3>
            <p className="cpr-stat-label">Total Supply</p>
          </div>
          <div className="cpr-stat-item">
            <h3 className="cpr-stat-value">Ethereum</h3>
            <p className="cpr-stat-label">Network</p>
          </div>
          <div className="cpr-stat-item">
            <h3 className="cpr-stat-value">$0.01</h3>
            <p className="cpr-stat-label">Token Price</p>
          </div>
          <div className="cpr-stat-item">
            <h3 className="cpr-stat-value">Uniswap V3</h3>
            <p className="cpr-stat-label">DEX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;