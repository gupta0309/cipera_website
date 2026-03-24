import React from "react";
import "../Styles/S2About.css";
import aboutImg from "../../assets/HomePage/About.png";
import mission from "../../assets/HomePage/vision.png";
import vision from "../../assets/HomePage/mission.png";


const AboutCipera = () => {
  return (
    <section className="cipera-about-section">
      <div className="cipera-about-container">

        <div className="cipera-about-left">
          <div className="cipera-image-wrapper">
            <img src={aboutImg} alt="about" />
          </div>
        </div>

        <div className="cipera-about-right">
          <span className="cipera-about-tag">ABOUT</span>

          <h1 className="cipera-about-title">
            What is <span>CIPERA</span>?
          </h1>

          <p className="cipera-about-desc">
            CIPERA is a utility-driven ERC-20 token created to deliver real use cases
            within a scalable and secure blockchain ecosystem. It combines technology,
            transparency, and user participation to create a platform where value is
            not just traded — but created.
          </p>

          <div className="cipera-about-cards">
            <div className="cipera-card-box">
              <div className="cipera-card-icon"><img src={mission} alt="mission"/></div>
              <h3>Our Mission</h3>
              <p>
                To build a decentralized ecosystem that empowers users with financial
                tools, passive earning opportunities, and transparent systems.
              </p>
            </div>

            <div className="cipera-card-box">
              <div className="cipera-card-icon"><img src={vision} alt="vision"/></div>
              <h3>Our Vision</h3>
              <p>
                To become a leading utility token in the DeFi space by delivering
                real-world applications and sustainable growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCipera;