import React from "react";
import "../Styles/Marquee.css";

import logo1 from "../../assets/HomePage/partner1.png";
import logo2 from "../../assets/HomePage/partner2.png";
import logo3 from "../../assets/HomePage/partner3.png";
import logo4 from "../../assets/HomePage/partner4.png";
import logo5 from "../../assets/HomePage/partner5.png";
import logo6 from "../../assets/HomePage/partner6.png";

const Marquee = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {/* duplicate for infinite effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div className="marquee-item" key={index}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;