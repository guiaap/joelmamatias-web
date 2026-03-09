import { useEffect, useState } from "react";

import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const images = [banner1, banner2, banner3]

export default function HeroSection() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() =>  {
            
            setIndex(prev => (prev + 1) % images.length)

        }, 4000)

        return () => clearInterval(interval);

    }, []);


    return (

        <section id="start"
        className="relative h-screen overflow-hidden">
            {images.map((img, i) => (

                <div key={i} 
                className={`
                    absolute inset-0
                    bg-center bg-cover
                    transition-opacity duration-1000
                    ${i === index ? "opacity-100" : "opacity-0"}
                `}
                style={{ backgroundImage: `url(${img})` }}
                >
                </div>
            ))}
        </section>
    )
}