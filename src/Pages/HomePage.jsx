import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Directives/Header.jsx"
import Hero from "../Components/Homecomponent/S1Hero.jsx"
import About from "../Components/Homecomponent/S2About.jsx"
import Roadmap from "../Components/Homecomponent/S4Roadmap.jsx"
import UseCase from "../Components/Homecomponent/S3UseCase.jsx"



function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const { search } = location;
    const params = new URLSearchParams(search);
    const scrollToId = params.get("section");

    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        // Adding a slight timeout ensures the DOM is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
 <>
 <Header/>
 <Hero/>
 <About/>
 <UseCase/>
 <Roadmap/>
 </>
  );
}

export default HomePage;
