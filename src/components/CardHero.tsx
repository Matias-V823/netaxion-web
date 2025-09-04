// CardHero.tsx
type CardHeroProp = {
    title: string
    path: string
    paragraph: string
}

const CardHero = ({title, path, paragraph} : CardHeroProp) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-slate-800 bg-slate-900 h-[25rem] w-[80%]">
        <div>
            <h2 className="text-sm font-extrabold text-gray-300 py-4">{title}</h2>
        </div>
        <div className="h-96 overflow-hidden"> 
            <img 
                src={path} 
                alt="imagen-hero" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-xs text-slate-300 mt-auto">{paragraph}</p>
        </div>
    </div>
  )
}

export default CardHero;