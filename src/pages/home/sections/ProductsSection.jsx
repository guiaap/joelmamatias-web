import Tag from "../../../components/ui/Tag.jsx";
import SectionTitle from "../../../components/ui/SectionTitle.jsx";
import { useState, useRef } from "react";
import { useInView } from "../../../hooks/useInView.js";
import { products } from "../../../data/products.js";

export default function ProductsSection() {

    const [index, setIndex] = useState(0);

    const carouselRef = useRef(null);

    const { ref, isVisible } = useInView();

    function scrollLeft() {
    
        if (index === 0) return;

            carouselRef.current.scrollBy({
            left: -320,
            behavior: "smooth"
            });
            
            setIndex(prev => prev - 1);
        }
    
        function scrollRight() {
    
        if (index === products.length - 1) return;
    
            carouselRef.current.scrollBy({
            left: 320,
            behavior: "smooth"
            });

            setIndex(prev => prev + 1);
        }

    return (

        <section id="products">

            <div className="max-w-(--container) mx-auto">

                <div className="
                    flex 
                    flex-col md:flex-row 
                    items-start md:items-center 
                    justify-between
                ">

                    <div>
                        <Tag
                            text="Loja"
                            color="--primary-brown"
                        />
                        <SectionTitle
                            text1="Produtos " text2="Digitais"
                        />
                    </div>

                    <p
                        ref={ref} 
                        className={`
                        max-w-(--container-extra-small)
                        transition-all duration-700
                        ${ isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0" }
                    `}>
                       E-books, templates e ferramentas prontas para uso, desenvolvidos por quem vive 
                       o dia a dia da gestão documental. 
                    </p>

                </div>

                <div
                    ref={carouselRef}
                    style={{ scrollbarWidth: "none"}}
                    className="
                        flex gap-5 md:gap-8 justify justify-between
                        p-4 pb-10
                        overflow-x-auto snap-x snap-mandatory 
                        scroll-smooth
                    ">

                </div>

            </div>

        </section>

    );
}