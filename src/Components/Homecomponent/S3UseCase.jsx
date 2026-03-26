import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Styles/S3Usecase.css";
import usecaseone from "../../assets/HomePage/usecase1.jpg";
import usecasetwo from "../../assets/HomePage/usecase2.jpg";
import usecasethree from "../../assets/HomePage/usecase3.jpg";
import usecasefour from "../../assets/HomePage/usecase4.jpg";
import usecasefifth from "../../assets/HomePage/usecase5.jpg";

const useCases = [
  { title: "Ecosystem Investment", img: usecaseone, desc: " Participate in CIPERA’s growth by holding and using CIP tokens, creating long-term value for users and the ecosystem." },
  { title: "Staking & Vesting", img: usecasetwo, desc: " Lock tokens to earn rewards while reducing supply and promoting long-term stability." },
  { title: "Referral Rewards", img: usecasethree, desc: " Earn incentives by inviting new users, with rewards distributed automatically via smart contracts." },
  { title: "Governance Utility", img: usecasefour, desc: " CIP holders can vote on key decisions, shaping the future of the ecosystem." },
  { title: "Liquidity Participation", img: usecasefifth, desc: " Provide liquidity to earn rewards while supporting smooth and stable trading." },
];

const CiperaCarousel = ({id}) => {
  const trackRef = useRef(null);
  const displayData = [...useCases, ...useCases, ...useCases];

 useEffect(() => {
  const track = trackRef.current;

  // 📱 MOBILE MODE
  if (window.innerWidth <= 768) {
    let scrollAmount = 0;

   const slide = () => {
  // 🔥 agar koi card active hai → slide mat karo
  if (track.querySelector(".vortex-uc-card-wrapper.active")) return;

  const card = track.querySelector(".vortex-uc-card-wrapper");
  if (!card) return;

  const cardWidth = card.offsetWidth + 30;

  scrollAmount += cardWidth;

  if (scrollAmount >= track.scrollWidth - track.parentElement.clientWidth) {
    scrollAmount = 0;
  }

  track.parentElement.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
};

    const interval = setInterval(slide, 2500);

    return () => clearInterval(interval);
  }

  // 💻 DESKTOP GSAP
  const cards = gsap.utils.toArray(".vortex-uc-card-wrapper");
  const cardWidth = 270;
  const totalWidth = cardWidth * useCases.length;

  const loop = gsap.to(track, {
    x: `-=${totalWidth}`,
    duration: 30,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });

  const tickerFunc = () => {
    cards.forEach((card) => {
      const cardInner = card.querySelector(".vortex-uc-card-inner");

      const isFlipped =
        card.matches(":hover") || card.classList.contains("active");

      if (isFlipped) {
        gsap.set(cardInner, { clearProps: "transform" });
        return;
      }

      const rect = card.getBoundingClientRect();
      const screenCenter = window.innerWidth / 2;
      const cardCenter = rect.left + rect.width / 2;
      const progress = (cardCenter - screenCenter) / screenCenter;

      gsap.set(cardInner, {
        rotateY: progress * -45,
        scale: 0.85 + Math.abs(progress) * 0.35,
      });
    });
  };

  gsap.ticker.add(tickerFunc);

  return () => {
    loop.kill();
    gsap.ticker.remove(tickerFunc);
  };
}, []);

  return (
    <section id={id} className="vortex-uc-container">
      <div className="vortex-uc-header">
        <span className="vortex-uc-pill">USE CASES</span>
        <h1>Use Cases of <span className="vortex-uc-blue-text">CIPERA</span></h1>
      </div>

      <div className="vortex-uc-viewport">
        <div className="vortex-uc-track" ref={trackRef}>
          {displayData.map((item, index) => (
<div
  className="vortex-uc-card-wrapper"
  key={index}
onClick={(e) => {
  if (window.innerWidth <= 768) {
    const allCards = document.querySelectorAll(".vortex-uc-card-wrapper");

    allCards.forEach(card => {
      if (card !== e.currentTarget) {
        card.classList.remove("active");
      }
    });

    e.currentTarget.classList.toggle("active");
  }
}}
>
              <div className="vortex-uc-card-inner">
                <div className="vortex-uc-card-face vortex-uc-front" style={{ backgroundImage: `url(${item.img})` }}>
                  <div className="vortex-uc-overlay"><h3>{item.title}</h3></div>
                </div>
                <div className="vortex-uc-card-face vortex-uc-back" style={{ backgroundImage: `url(${item.img})` }}>
                  <div className="vortex-uc-overlay-back">
                    <div className="vortex-uc-content-container">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CiperaCarousel;