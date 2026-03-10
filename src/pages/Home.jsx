import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";

export default function Home() {

const location = useLocation();

  useEffect(() => {

    if (location.hash) {

      const el = document.querySelector(location.hash);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

  }, [location]);

    return (

        <>
          <HeroSection />
          <AboutSection />
        </>
    );
}