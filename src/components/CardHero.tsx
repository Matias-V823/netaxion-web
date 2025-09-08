type CardHeroProp = {
    title: string
    path: string
    paragraph: string
}

const CardHero = ({ title, path, paragraph }: CardHeroProp) => {
    return (
        <div className="flex flex-col overflow-hidden h-[25rem] w-[20%]">
            <h2 className="text-lg text-start text-gray-700 py-4">{title}</h2>

            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={path}
                    alt="imagen-hero"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <p className="text-sm text-justify font-light text-gray-700 p-4">{paragraph}</p>
        </div>

    )
}

export default CardHero;