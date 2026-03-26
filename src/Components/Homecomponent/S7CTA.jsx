import React from "react";
import "../Styles/S7CTA.css";
import bgVideo from "../../assets/HomePage/bg-cta.mp4"; // 🔥 your video file

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-box">

          {/* 🔥 Background Video */}
          <video
            className="cta-video"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* 🔥 Overlay */}
          <div className="cta-overlay"></div>

          {/* 🔥 Content */}
          <div className="cta-content">
            <h2>
              Join the <span>CIPERA</span> Revolution Today
            </h2>

            <p className="cta-subtext">
              Be part of a next-generation decentralized ecosystem built for growth,
              rewards, and financial empowerment.
            </p>

            <button className="cta-btn">Buy CIP Token</button>

            <p className="cta-footer">
              Start your journey today and become part of a rapidly growing global community.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;