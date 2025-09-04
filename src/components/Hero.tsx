import CardHero from "./CardHero";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
                <div className="absolute top-40 -right-40 w-[30rem] h-[30rem] bg-indigo-600 rounded-full blur-[150px]"></div>
            </div>

            <div className="relative z-10 min-w-8xl">
                <h1 className="text-2xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-2">
                    Passion for Excellence <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        NETaxion
                    </span>
                </h1>
                <div className="mb-10 max-w-2xl flex flex-col justify-center text-center items-center mx-auto font-bold">
                    <p className="text-xl  text-gray-600">
                        Especialistas en IT para minería y manufactura.
                    </p>
                    <p className="text-xl text-blue-200">
                        Compromiso, experiencia e innovación en cada proyecto.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-full hover:bg-slate-200 transition-all duration-300 cursor-pointer">
                        Saber más
                    </button>
                    <button className="bg-slate-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-crosshair">
                        Contactar
                    </button>
                </div>
            </div>

            {/* <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-row justify-between items-center z-10 min-w-[90rem] px-4 gap-5">
                    <CardHero
                        title="Tecnología Operacional"
                        path="img/hero3d.png"
                        paragraph="Soluciones IT-OT basadas en estándares de la industria, garantizando soluciones que cumplen con tus necesidades y expectativas."
                    />
                    <CardHero
                        title="Investigación y Desarrollo"
                        path="img/hero-code.png"
                        paragraph="Soluciones tecnológicas para obtención de datos, integración y transformación de información clave para la toma de decisiones técnicas."
                    />
                    <CardHero
                        title="Continuidad Operacional"
                        path="img/hero-report.png"
                        paragraph="Disponibilidad y Rendimiento de infraestructura IT que tu negocio necesita con un servicio integral para tus objetivos."
                    />
                    <CardHero
                        title="Productos"
                        path="img/hero-products.png"
                        paragraph="Nuestras estrechas alianzas nos permiten acceder a niveles de soporte directo, beneficios en costos y tiempos de entrega."
                    />
            </div> */}
        </section>
    );
};

export default Hero;