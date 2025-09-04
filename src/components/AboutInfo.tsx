import { GoCodeOfConduct, GoLightBulb, GoPeople } from "react-icons/go";

const infoCards = [
    {
        title: '¿Por qué elegirnos?',
        paragraph: 'Somos un grupo de ingenieros IT con amplia experiencia en el sector minería y manufactura. Nos destacamos por un alto nivel de compromiso e involucramiento en la gestión de servicio',
        style: 'pr-33',
        icon: GoLightBulb,
        position: 'left',
        color: 'from-blue-600 to-cyan-600'
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
        color: 'from-blue-600 to-cyan-600'
    },
];

const AboutInfo = () => {
    return (
        <section className="min-h-screen relative py-20">
            <div className="relative">
                <div className="
                    pointer-events-none
                    absolute left-1/2 top-80 -translate-x-1/2
                    h-[115vh] w-px
                    bg-gradient-to-b from-transparent via-gray-600 to-transparent
                    "
                />
            </div>

            <div className="container mx-auto px-6 relative z-50 mt-96">
                {infoCards.map((card, index) => (
                    <div key={index} className="flex justify-center mb-20">
                        {card.position === 'left' && (
                            <>
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-33 z-10">
                                    <div className="max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-slate-600/30 transition-all duration-300 hover:shadow-2xl hover:bg-slate-900/60 hover:backdrop-blur-xl">
                                        <h3 className={`text-lg font-extrabold mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-base">
                                            {card.paragraph}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center">
                                    <div className="w-12 h-12 backdrop-blur-2xl rounded-full border-2 border-gray-700 shadow-lg flex items-center justify-center z-50">
                                        <card.icon className="text-center mx-auto text-2xl text-gray-500" />
                                    </div>
                                    <div className="absolute h-1 w-40 bg-blue-500 right-0 transform -translate-x-5 z-10"></div>
                                </div>

                                <div className="w-1/2"></div>
                            </>
                        )}

                        {card.position === 'right' && (
                            <>
                                <div className="w-1/2"></div>

                                <div className="relative flex items-center justify-center">
                                    <div className="w-12 h-12 backdrop-blur-2xl rounded-full border-2 border-gray-700 shadow-lg z-50 flex items-center justify-center">
                                        <card.icon className="text-center mx-auto text-2xl text-gray-500" />
                                    </div>
                                    <div className="absolute h-1 w-40 bg-blue-500 left-0 transform translate-x-5 z-10"></div>
                                </div>

                                <div className="w-1/2 pl-33 z-10">
                                    <div className="max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-slate-600/30 transition-all duration-300 hover:shadow-2xl hover:bg-slate-900/60 hover:backdrop-blur-xl">
                                        <h3 className={`text-lg font-extrabold mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-base">
                                            {card.paragraph}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
                <div>
                    <svg className="block absolute top-0 left-0 right-0 w-full z-0" width="1793" height="1269" viewBox="0 0 1793 1269" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-090d977d=""><path d="M752.613 0.717285L787.634 201.189C794.351 239.643 797.729 278.606 797.729 317.642L797.729 1268.54M649.493 0.717285L704.366 138.145C736.239 217.969 752.613 303.135 752.613 389.088L752.614 1268.54M572.153 0.717285L630.175 111.432C680.966 208.35 707.498 316.138 707.498 425.558L707.498 1268.54M505.862 0.717285L564.392 97.2923C628.492 203.058 662.383 324.367 662.383 448.041L662.383 1268.54M452.46 0.717285L511.009 92.4655C580.401 201.205 617.268 327.512 617.268 456.507L617.268 1268.54M407.345 0.717285L465.894 92.4655C535.286 201.205 572.153 327.512 572.153 456.507L572.153 1268.54M362.23 0.717285L420.779 92.4655C490.17 201.205 527.038 327.512 527.038 456.507L527.038 1268.54M317.115 0.717285L375.664 92.4655C445.055 201.205 481.923 327.512 481.923 456.507L481.923 1268.54M272 0.717285L330.549 92.4655C399.94 201.205 436.808 327.512 436.808 456.507L436.808 1268.54M226.885 0.717285L285.433 92.4655C354.825 201.205 391.693 327.512 391.693 456.507L391.693 1268.54M181.77 0.717285L240.318 92.4655C309.71 201.205 346.578 327.512 346.578 456.507L346.578 1268.54M136.655 0.717285L195.203 92.4655C264.595 201.205 301.463 327.512 301.463 456.507L301.463 1268.54M91.5395 0.717285L150.088 92.4655C219.48 201.205 256.348 327.512 256.348 456.507L256.348 1268.54M46.4244 0.717285L104.973 92.4655C174.365 201.205 211.233 327.512 211.233 456.507L211.233 1268.54M1.30933 0.717285L59.8581 92.4655C129.25 201.205 166.117 327.512 166.117 456.507L166.117 1268.54M1040.8 0.717285L1005.78 201.189C999.06 239.643 995.683 278.606 995.683 317.642V1268.54M1143.92 0.717285L1089.04 138.145C1057.17 217.969 1040.8 303.135 1040.8 389.088V1268.54M1221.26 0.717285L1163.24 111.432C1112.45 208.35 1085.91 316.138 1085.91 425.558V1268.54M1287.55 0.717285L1229.02 97.2923C1164.92 203.058 1131.03 324.367 1131.03 448.041V1268.54M1340.95 0.717285L1282.4 92.4655C1213.01 201.205 1176.14 327.512 1176.14 456.507V1268.54M1386.07 0.717285L1327.52 92.4655C1258.13 201.205 1221.26 327.512 1221.26 456.507V1268.54M1431.18 0.717285L1372.63 92.4655C1303.24 201.205 1266.37 327.512 1266.37 456.507V1268.54M1476.3 0.717285L1417.75 92.4655C1348.36 201.205 1311.49 327.512 1311.49 456.507V1268.54M1521.41 0.717285L1462.86 92.4655C1393.47 201.205 1356.6 327.512 1356.6 456.507V1268.54M1566.53 0.717285L1507.98 92.4655C1438.59 201.205 1401.72 327.512 1401.72 456.507V1268.54M1611.64 0.717285L1553.09 92.4655C1483.7 201.205 1446.83 327.512 1446.83 456.507V1268.54M1656.76 0.717285L1598.21 92.4655C1528.82 201.205 1491.95 327.512 1491.95 456.507V1268.54M1701.87 0.717285L1643.32 92.4655C1573.93 201.205 1537.06 327.512 1537.06 456.507V1268.54M1746.99 0.717285L1688.44 92.4655C1619.05 201.205 1582.18 327.512 1582.18 456.507V1268.54M1792.1 0.717285L1733.55 92.4655C1664.16 201.205 1627.29 327.512 1627.29 456.507V1268.54M968.061 0.717335L950.567 258.978V1268.54M893.943 0.717285L893.943 1268.54M824.89 0.717285L842.843 258.978L842.843 1268.54" stroke="url(#linear-sponsor-lines)" data-v-090d977d=""></path><defs data-v-090d977d=""><linearGradient id="linear-sponsor-lines" x1="0" y1="0" x2="0" y2="1200" gradientUnits="userSpaceOnUse" data-v-090d977d=""><stop offset="0.1" stop-color="#1b1c20" stop-opacity="0" data-v-090d977d=""></stop><stop offset="0.35" stop-color="#1b1c20" data-v-090d977d=""></stop><stop offset="0.55" stop-color="#1b1c20" stop-opacity="0.2" data-v-090d977d=""></stop><stop offset="0.6" stop-color="#1b1c20" stop-opacity="0.2" data-v-090d977d=""></stop><stop offset="0.7" stop-color="#1b1c20" data-v-090d977d=""></stop><stop offset="1" stop-color="#1b1c20" stop-opacity="0" data-v-090d977d=""></stop></linearGradient></defs></svg>
                    <div className="flex flex-col items-center mt-50 mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="61"
                            viewBox="0 0 70 61"
                            fill="none"
                            className="overflow-visible"
                        >
                            <path
                                d="M38.5 0.772V60.522M22.63 60.773V38.791C22.63 25.378 17.368 12.516 8 3.032M54.37 60.773V38.791C54.37 25.378 59.633 12.516 69 3.032"
                                stroke="url(#linear-gradient-bg-lines)"
                                strokeWidth="2"
                            />

                            <g>
                                <path
                                    d="M22.63 80.773V38.791C22.63 25.378 17.368 12.516 8 3.032L-20 -20"
                                    stroke="url(#glow_gradient)"
                                    strokeWidth="1.2"
                                    mask="url(#glow_mask)"
                                    className="svg-path"
                                />
                                <circle
                                    cx="21.44"
                                    cy="27.82"
                                    r="3"
                                    fill="#9fe6fd"
                                    className="circle-dot"
                                />

                                <defs>
                                    <mask id="glow_mask">
                                        <path
                                            d="M22.63 80.773V38.791C22.63 25.378 17.368 12.516 8 3.032L-20 -20"
                                            fill="black"
                                        />
                                        <circle cx="21.44" cy="27.82" r="30" fill="white" />
                                    </mask>

                                    <radialGradient
                                        id="glow_gradient"
                                        cx="21.44"
                                        cy="27.82"
                                        r="30"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0%" stopColor="#41D1FF" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#41D1FF" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </g>

                            <defs>
                                <linearGradient
                                    id="linear-gradient-bg-lines"
                                    x1="38.5"
                                    y1="0.772"
                                    x2="38.5"
                                    y2="60.773"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#404040" stopOpacity="0" />
                                    <stop offset="0.5" stopColor="#737373" />
                                    <stop offset="1" stopColor="#404040" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <h2 className="text-center font-extrabold text-4xl p-10 border border-gray-800 text-gray-300 rounded-lg shadow-lg">
                            En NETaxion Chile estamos comprometidos con el <br />
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
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