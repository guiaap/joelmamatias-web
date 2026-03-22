import SectionTag from "./SectionTag.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { services } from "../data/services.js";

export function ServiceCard({number, image, alt, title, list}) {

    return (  

        <div className="
            flex flex-col gap-3
            px-5 pt-1 pb-5
            border-[0.25px] border-(--transparent-gold)
            bg-[#ffffff09] 
            transtion-all duration-300

            after:content-['']
            after:absolute after:bottom-0 after:left-0
            after:h-0.5 after:w-0
            after:bg-(--primary-gold) 
            after:transition-all after:duration-500

            hover:bg-[#c9a96e15]
            hover:-translate-y-2
            hover:after:w-full
        ">

            <div className="flex items-center justify-between  ">

                <img 
                    src={image} 
                    alt={alt} 
                    className="h-20 w-20"
                />

                <span className="
                    font-cormorant 
                    text-[#ffffff27]
                    text-[5rem]
                ">
                    {number}
                </span>

            </div>

            <h3 className="text-(--white) font-cormorant text-[1.5rem]">
                {title}
            </h3>

            <ul className="
                text-(--transparent-white-smooth) text-[1rem]
                [&>li]:flex [&>li]:items-center [&>li]:gap-4
                [&>li]:before:inline-block
                [&>li]:before:content-[''] [&>li]:before:h-1 [&>li]:before:w-1
                [&>li]:before:rounded-full
                [&>li]:before:bg-(--primary-gold) 
            ">
                {list.map((item, index) => ( 
                    <li key={index}>{item}</li> 
                ))}
            </ul>
        </div>

    );
}

export default function ServicesSection() {

    return (

        <section 
            id="services"
            className="
                bg-(--primary-brown)
                after:content-['']
                after:absolute after:inset-0
                bg-[radial-gradient(ellipse_80%_60%_at_10%_50%,rgba(201,169,110,0.08)_0%,transparent_60%),repeating-linear-gradient(0deg,transparent,transparent_79px,rgba(255,255,255,0.02)_80px),repeating-linear-gradient(90deg,transparent,transparent_79px,rgba(255,255,255,0.02)_80px)]
            ">

            <div className="max-w-(--container) mx-auto">

                <div className="
                    flex flex-col items-start justify-between
                    md:flex-row md:items-center
                ">
                    <div>
                        <SectionTag text="O que faço" />
                        <SectionTitle
                            text1="Áreas de " text2="atuação"
                            color1="--white" color2="--primary-gold"
                        />
                    </div>

                    <p className="
                        text-(--transparent-white-smooth)
                        max-w-(--container-extra-small)
                    ">
                        Soluções integradas para empresas que buscam excelência operacional, 
                        conformidade legal e gestão eficiente de pessoas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            number={String(index + 1).padStart(2, '0')}
                            image={service.image}
                            alt={service.alt}
                            title={service.title}
                            list={service.list}
                        />
                    ))}
                </div>

            </div>

        </section>

    );
}