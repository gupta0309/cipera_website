import React from 'react';
import '../Styles/S1Hero.css';
import video from "../../assets/bg-video.mp4"
const Hero = () => {
  return (
    <section className="cpr-hero-section">
      <video className="cpr-video-bg" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>

      <div className="cpr-hero-radial-overlay"></div>

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