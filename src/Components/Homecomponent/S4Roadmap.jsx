import React, { useRef, useEffect, useState } from 'react';
import '../../Components/Styles/S4Roadmap.css';

const Roadmap = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const roadmapData = [
    {
      q: "Q1 2026",
      phase: "Phase 1 — Project Foundation",
      items: ["Project concept & ecosystem planning", "Tokenomics design", "Smart contract architecture", "Branding, logo & graphics creation", "Website design & UI development"],
      status: "completed"
    },
    {
      q: "Q2 2026",
      phase: "Phase 2 — Development",
      items: ["ERC-20 Token smart contract development", "Vesting smart contract integration", "Referral smart contract logic", "Telegram investment bot development", "Admin dashboard development"],
      status: "active"
    },
    {
      q: "Q3 2026",
      phase: "Phase 3 — Launch Preparation",
      items: ["Whitepaper creation", "Smart contract audit", "PinkSale launch setup", "Liquidity pool configuration", "Token listing preparation"],
      status: "upcoming"
    },
    {
      q: "Q4 2026",
      phase: "Phase 4 — Ecosystem Expansion",
      items: ["Staking platform launch", "Governance DAO implementation", "Strategic partnerships", "Cross-chain bridge development"],
      status: "upcoming"
    },
    {
      q: "Q1 2027",
      phase: "Phase 5 — Global Scaling",
      items: ["Tier 1 CEX listings", "Mobile App release (iOS/Android)", "Real-world utility integration", "Community grants program"],
      status: "upcoming"
    }
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 5) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualScroll = (direction) => {
    const offset = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="cpr-roadmap-section" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="cpr-roadmap-header">
        <span className="cpr-roadmap-badge">ROADMAP</span>
        <h2 className="cpr-roadmap-title">The <span className="cpr-highlight">CIPERA</span> Evolution Plan</h2>
      </div>

      <div className="cpr-roadmap-viewport">
        <button className="cpr-nav-btn cpr-prev" onClick={() => handleManualScroll('left')}><i class="fa-solid fa-chevron-left"></i></button>
        
        <div className="cpr-roadmap-container" ref={scrollRef}>
          {roadmapData.map((item, index) => (
            <div className="cpr-roadmap-card" key={index}>
              <div className="cpr-card-line">
                <div className={`cpr-dot ${item.status === 'active' ? 'cpr-pulse' : ''}`}></div>
              </div>
              <span className="cpr-q-text"><i className="fa-solid fa-circle" style={{ fontSize: "8px",position:"relative", left:"-32px", top:"-5px" }}></i> {item.q}</span>
              <h3 className="cpr-phase-title">{item.phase}</h3>
              <ul className="cpr-item-list">
                {item.items.map((li, i) => (
                  <li key={i}> {li}</li>
                ))}
              </ul>
              <div className="cpr-bottom-indicator">
                 <div className={`cpr-path-dot ${item.status === 'completed' ? 'cpr-done' : ''}`}>
                    {item.status === 'completed' && <span><i class="fa-solid fa-check"></i></span>}
                 </div>
              </div>
            </div>
          ))}
        </div>

        <button className="cpr-nav-btn cpr-next" onClick={() => handleManualScroll('right')}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
          <path d="M0 32.0657C142.222 -7.93433 248.889 -7.93433 320 32.0657C391.111 72.0657 479.278 72.0657 621.5 32.0657C763.722 -7.93433 888.889 -7.93433 960 32.0657C1031.11 72.0657 1137.78 72.0657 1280 32.0657" stroke="url(#cpr-gradient)" strokeWidth="4" strokeLinecap="round"/>

      <div className="cpr-svg-wrapper">
        <svg width="100%" height="65" viewBox="0 0 1280 65" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 32.0657C142.222 -7.93433 248.889 -7.93433 320 32.0657C391.111 72.0657 479.278 72.0657 621.5 32.0657C763.722 -7.93433 888.889 -7.93433 960 32.0657C1031.11 72.0657 1137.78 72.0657 1280 32.0657" stroke="url(#cpr-gradient)" strokeWidth="4" strokeLinecap="round"/>
          <defs>
            <linearGradient id="cpr-gradient" x1="0" y1="2.06567" x2="1280" y2="2.06567" gradientUnits="userSpaceOnUse">
              <stop stopColor="#587FFF"/><stop offset="0.25" stopColor="#587FFF"/><stop offset="0.5" stopColor="#3632FF"/><stop offset="0.75" stopColor="#155DFC"/><stop offset="1" stopColor="#155dfc"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Roadmap;