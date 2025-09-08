import { GoCodeOfConduct, GoLightBulb, GoPeople } from "react-icons/go";

const infoCards = [
    {
        title: '¿Por qué elegirnos?',
        paragraph: 'Somos un grupo de ingenieros IT con amplia experiencia en el sector minería y manufactura. Nos destacamos por un alto nivel de compromiso e involucramiento en la gestión de servicio',
        style: 'pr-33',
        icon: GoLightBulb,
        position: 'left',
        color: 'from-blue-600 to-cyan-600',
        classRef: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
    },
    {
        title: 'Foco en el cliente',
        paragraph: 'Brindamos atención ejecutiva y venta consultiva orientada a resultados ágiles, medibles y acorde a necesidades de diversas exigencias. Entendemos el negocio y a nuestros clientes.',
        style: 'pl-33',
        icon: GoPeople,
        position: 'right',
        color: 'from-blue-600 to-cyan-400'
    },
    {
        title: 'Nuestras alianzas',
        paragraph: 'Fortalecemos nuestras alianzas estratégicas con los principales fabricantes de tecnología.',
        style: 'pr-33',
        icon: GoCodeOfConduct,
        position: 'left',
        color: 'from-blue-600 to-cyan-600',
        classRef: ''
    },
];

const AboutInfo = () => {
    return (
        <section className="min-h-screen relative py-20">
            <div className="absolute top-1/6 mx-20 mb-20 flex w-5xl px-6 gap-10">
                <div className="w-96">
                    <h2 className="text-4xl p-4 text-start">Nuestra forma de comunicar <span className="text-gray-400 font-light">valor</span></h2>
                </div>
                <div className="w-82 p-5 text-gray-700 font-light">
                    <p className="text-base">
                        Es parte de nuestro compromiso por acompañarte, entregar soluciones efectivas y estar presentes en cada
                        paso de tu desarrollo.
                    </p>
                </div>

            </div>
            <div className="relative">
                <div className="
                    pointer-events-none
                    absolute left-1/2 top-80 -translate-x-1/2
                    h-[115vh] w-px
                    bg-gradient-to-b from-transparent via-gray-600 to-transparent
                    "
                />
            </div>

            <div className="container mx-auto px-6 relative mt-96">
                {infoCards.map((card, index) => (
                    <div key={card.title} className="flex justify-center mb-20">
                        {card.position === 'left' && (
                            <>
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-33 cursor-pointer">
                                    <div className={`max-w-md p-8 rounded-2xl shadow-xl ${card.classRef} backdrop-blur-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-xl`}>
                                        <h3 className={"text-lg mb-4 " + (card.classRef ? 'text-white' : 'bg-gradient-to-r ' + card.color + ' bg-clip-text text-transparent')}>
                                            {card.title}
                                        </h3>
                                        <p className={`${card.classRef ? 'text-white/90' : 'text-gray-700'} font-light text-sm`}>
                                            {card.paragraph}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center">
                                    <div className="w-12 h-12 backdrop-blur-md rounded-full border-2 border-blue-500 shadow-lg flex items-center justify-center z-10">
                                        <card.icon className="text-center mx-auto text-2xl text-blue-500 cursor-pointer" />
                                    </div>
                                    <div className="absolute h-1 w-40 bg-blue-500 right-0 transform -translate-x-5"></div>
                                </div>

                                <div className="w-1/2"></div>
                            </>
                        )}

                        {card.position === 'right' && (
                            <>
                                <div className="w-1/2"></div>

                                <div className="relative flex items-center justify-center">
                                    <div className="w-12 h-12 backdrop-blur-lg rounded-full border-2 border-blue-500 shadow-lg flex items-center justify-center z-10">
                                        <card.icon className="text-center mx-auto text-2xl text-blue-500 cursor-pointer" />
                                    </div>
                                    <div className="absolute h-1 w-40 bg-blue-500 left-0 transform translate-x-5"></div>
                                </div>

                                <div className="w-1/2 pl-33">
                                    <div className="max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-xl cursor-pointer">
                                        <h3 className={"text-lg mb-4 " + (card.classRef ? 'text-white' : 'bg-gradient-to-r ' + card.color + ' bg-clip-text text-transparent')}>
                                            {card.title}
                                        </h3>
                                        <p className={`${card.classRef ? 'text-white/90' : 'text-gray-700'} font-light text-sm`}>
                                            {card.paragraph}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                <div>
                    <div className="flex flex-col items-center mt-50 mr-2">
                        <h2 className="text-center text-5xl p-10 text-zinc-800">
                            En NETaxion Chile estamos comprometidos con el <br />
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent font-light">
                                éxito de nuestros clientes
                            </span>
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutInfo;