

export default function SectionTag({text, color = "--primary-gold"}) {

    return (
        
        <div>
            
            <p className={`
                flex items-center gap-2
                font-dm font-medium
                text-[clamp(0.7rem,1vw,0.8rem)]
                text-(${color}) 
                uppercase 
                tracking-widest

                before:content-['']
                before:inline-block
                before:w-5 before:h-px
                before:bg-(--primary-brown)
                before:bg-(${color})
            `}>
                {text}
            </p>
        </div>
    )
}