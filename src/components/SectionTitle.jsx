

export default function SectionTitle({text1, text2, color1, color2}) {

    return (

        <h2 className={`
        font-cormorant text-[clamp(2.5rem,5vw,4rem)]
        text-(${color1})
        mb-4
        `}>

            {text1}

            <span className={`text-(${color2}) italic`}>
                {text2}
            </span>

        </h2>
    )
}