

export default function SectionTag({text, color = "--primary-gold"}) {

    return (
        <div className="flex items-center gap-2">
            <div className={`h-[1px] w-[20px] bg-(${color})`} />

            <p className={`
                font-dm
                text-(${color}) uppercase 
                text-[clamp(0.7rem,1vw,0.8rem)] 
                tracking-widest`
            }>
                {text}
            </p>
        </div>
    )

}