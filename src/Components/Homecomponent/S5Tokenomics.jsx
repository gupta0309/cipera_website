import React from "react";
import "../Styles/S5Tokenomics.css";
import { FaCircle } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import tokenomics from "../../assets/HomePage/Tokenomcs.png"
import { useState } from "react";
const Tokenomics = ({id}) => {
  const [copied, setCopied] = useState(false);

const handleCopy = () => {
  navigator.clipboard.writeText("0x7B2dE45Fa9c3D1A6bE8f0123456789AbCdE12345");
  
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <section id={id} className="tokenomics-section">
      <div className="tokenomics-container">

        {/* Title */}
        <div className="tokenomics-header">
          <span className="badge">TOKENOMICS</span>
          <h2>
            The <span className="blue-text">CIPERA</span> Token Economy
          </h2>
        </div>

        {/* Content */}
        <div className="tokenomics-content">

          {/* Left - Chart */}
          <div className="tokenomics-chart">
            <div className="chart-circle">
              <img src={tokenomics} alt="token chart" />
            </div>

<div className="chart-legend">
  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon eco" />
      <span>Ecosystem Development</span>
    </div>
    <span className="percent">25%</span>
  </div>

  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon marketing" />
      <span>Marketing & Growth</span>
    </div>
    <span className="percent">18%</span>
  </div>

  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon referral" />
      <span>Referral Incentives</span>
    </div>
    <span className="percent">10%</span>
  </div>

  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon partnership" />
      <span>Strategic Partnerships</span>
    </div>
    <span className="percent">5%</span>
  </div>

  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon liquidity" />
      <span>Liquidity Pool</span>
    </div>
    <span className="percent">20%</span>
  </div>

  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon staking" />
      <span>Staking Rewards</span>
    </div>
    <span className="percent">15%</span>
  </div>

  <div className="legend-item">
    <div className="legend-row">
      <FaCircle className="icon team" />
      <span>Team & Advisory</span>
    </div>
    <span className="percent">7%</span>
  </div>
</div>
          </div>

          {/* Right - Details */}
          <div className="tokenomics-details">
            <h3>Token <span className="details-text">Details</span></h3>
            <p>
              The CIPERA token is designed with a sustainable and transparent
              token economy that prioritizes community ownership and long-term growth.
            </p>

           <div className="token-info">

  <div className="row">
    <div className="box left">Token Name</div>
    <div className="line"></div>
    <div className="box right">CIPERA</div>
  </div>

  <div className="row">
    <div className="box left">Ticker</div>
    <div className="line"></div>
    <div className="box right">CIP</div>
  </div>

  <div className="row">
    <div className="box left">Total Supply</div>
    <div className="line"></div>
    <div className="box right">100,000,000</div>
  </div>

  <div className="row">
    <div className="box left">Network</div>
    <div className="line"></div>
    <div className="box right">ERC-20</div>
  </div>

  <div className="row">
    <div className="box left">Initial Price</div>
    <div className="line"></div>
    <div className="box right">$0.01</div>
  </div>

</div>

<div className="contract-section">
  <h3>Contract Address</h3>

  <div className="contract-box">
    <code>0x7B2dE45Fa9c3D1A6bE8f0123456789AbCdE12345</code>
   <button className="copy-btn" onClick={handleCopy}>
  {copied ? "Copied!" : <FiCopy />}
</button>
  </div>
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tokenomics;