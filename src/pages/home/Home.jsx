import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import BlogSection from "./sections/BlogSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import ProductsSection from "./sections/ProductsSection.jsx";

export default function Home() {

    const location = useLocation();

    useEffect(() => {

      if (location.hash) {
        
        const el = document.querySelector(location.hash);
        if (el) { el.scrollIntoView({ behavior: "smooth" }); }
      }

    }, [location]);

    return (

        <div className="[&>section]:py-10 lg:[&>section]:py-15 [&>section]:px-5">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProductsSection />
          <BlogSection />
          <ContactSection />
        </div>
          
    );
}