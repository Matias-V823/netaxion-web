import { MdWorkHistory } from "react-icons/md";

const Presentation = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-[80%] mx-auto">
        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(100px,_auto)]">
          <div className="col-span-12 md:col-span-8 md:row-span-2 bg-gradient-to-br from-[#07090e] to-slate-900 rounded-2xl shadow-2xl p-8 flex flex-col gap-8 relative overflow-hidden font-family-general">
            <div className="w-full rounded-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/w1SHz16noQ4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">
                Descubre más sobre nuestros proyectos
              </h1>
              <p className="text-sm text-blue-100 leading-relaxed font-light">
                Tenemos un equipo colaborativo que busca permanentemente la
                excelencia, innovación y la mejora continua del Sistema de Gestión
                de Calidad mediante la capacitación, certificación y
                especialización de nuestro principal capital: Las personas.
              </p>
              <button className="bg-[#121f3a] text-xs md:text-sm text-white font-semibold py-2 px-5 mt-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-fit flex items-center gap-2 cursor-pointer">
                <MdWorkHistory className="text-lg" />
                Saber más
              </button>
            </div>
          </div>

          <div className="col-span-4 border bg-sky-600/90 border-gray-800 rounded-2xl min-h-[10rem] shadow-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="flex flex-row items-center text-center gap-5">
              <h2 className="text-9xl font-family-zentry-regular font-extrabold text-zinc-950 drop-shadow-md flex items-center">
                11 <span className="text-5xl ml-1">+</span>
              </h2>
              <p className="text-base text-slate-300 font-extrabold mt-2">
                Años de experiencia en el área de la mineria y
                manufactura
              </p>
            </div>

          </div>
          <div className="col-span-4  border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden">
            <img
              src="img/hero-1.png"
              alt=""
              className="h-auto object-cover"
            />
            <div className="absolute top-10 flex flex-col items-center font-family-general">
              <h3 className="text-slate-300">Conoce más sobre NCRAS PRO</h3>
              <img src="img/mockup_ncras.png" alt="" />
              <button className="px-4 py-2  rounded-xl cursor-pointer bg-slate-800 text-white text-xs">
                Saber más
              </button>
            </div>
          </div>

          <div className="col-span-4  border border-gray-800 rounded-2xl shadow-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">

            <h2 className="text-xl font-extrabold mb-2 font-family-general">Servicios</h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light font-family-general">
              En NETaxion, ofrecemos soluciones integrales en Servicios OT y IT
            </p>

            <svg
              width="352"
              height="166"
              viewBox="0 0 402 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="">
                <rect
                  x="-20"
                  y="40.0947"
                  width="154"
                  height="94"
                  rx="16.2078"
                  fill="#131B27"
                />
                <image
                  href="/img/logo.png"
                  x="2"
                  y="22"
                  width="120"
                  height="120"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>

              <path
                className="connector"
                opacity="0.25"
                d="M133.5 84.5H164M164 84.5V58.5C164 52.4249 168.925 47.5 175 47.5H193.5M164 84.5V108C164 114.075 168.925 119 175 119H193.5"
                stroke="#A3A3A3"
              ></path>

              <g className="client" filter="url(#filter-client)">
                <g clip-path="url(#clip-client)">
                  <rect
                    className="client__bg"
                    x="193"
                    y="20"
                    width="182"
                    height="54"
                    fill="url(#linear-client-bg)"
                    fill-opacity="0.1"
                  ></rect>
                  <g className="client__glow" filter="url(#filter-client-glow)">
                    <rect
                      x="213"
                      y="41.5342"
                      width="12"
                      height="12"
                      rx="1"
                      fill="#FF430A"
                    ></rect>
                  </g>
                  <rect
                    className="client__indicator"
                    x="212.777"
                    y="41.5338"
                    width="12"
                    height="12"
                    rx="1"
                    fill="#FF430A"
                  ></rect>
                </g>
                <rect
                  className="client__border"
                  x="193.507"
                  y="22.507"
                  width="180.986"
                  height="50.0537"
                  rx="11.661"
                  stroke="#737373"
                  stroke-opacity="0.3"
                  stroke-width="1.014"
                ></rect>
              </g>
              <text
                className="client-text"
                x="236"
                y="53"
                fill="#E5E5E5"
              >
                Servicios OT
              </text>

              <g className="server" filter="url(#filter-server)">
                <g clip-path="url(#clip-server)">
                  <rect
                    className="server__bg"
                    x="193"
                    y="90"
                    width="186"
                    height="54"
                    fill="url(#linear-server-bg)"
                    fill-opacity="0.1"
                  ></rect>
                  <g className="server__glow" filter="url(#filter-server-glow)">
                    <circle
                      cx="218.933"
                      cy="117.534"
                      r="5.93296"
                      fill="#4C84FF"
                    ></circle>
                  </g>
                  <rect
                    className="server__indicator"
                    x="212.777"
                    y="111.74"
                    width="12"
                    height="12"
                    rx="1"
                    fill="#4C84FF"
                  ></rect>
                </g>
                <rect
                  x="193.507"
                  y="92.7135"
                  width="181.402"
                  height="50.0537"
                  rx="11.661"
                  stroke="#737373"
                  stroke-opacity="0.3"
                  stroke-width="1.014"
                ></rect>
              </g>
              <text
                className="server-text"
                x="236"
                y="122"
                fill="#E5E5E5"
              >
                Servicios IT
              </text>

              <defs>
                <filter
                  id="filter-client"
                  x="193"
                  y="22"
                  width="182"
                  height="55.0677"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_6"></feBlend>
                </filter>

                <filter
                  id="filter-client-glow"
                  x="203"
                  y="31.5342"
                  width="32"
                  height="32"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1_6"></feGaussianBlur>
                </filter>

                <filter
                  id="filter-server"
                  x="193"
                  y="92.2065"
                  width="182.416"
                  height="55.0677"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_6"></feBlend>
                </filter>

                <filter
                  id="filter-server-glow"
                  x="203"
                  y="101.601"
                  width="31.8659"
                  height="31.8659"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1_6"></feGaussianBlur>
                </filter>

                <linearGradient
                  id="linear-ot-it-bg"
                  x1="30"
                  y1="31.0947"
                  x2="134"
                  y2="135.095"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A3A3A"></stop>
                  <stop offset="1" stop-color="#1E1E1E"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-client-bg"
                  x1="193"
                  y1="47"
                  x2="375"
                  y2="47"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE358"></stop>
                  <stop offset="1" stop-color="#FFE358" stop-opacity="0"></stop>
                </linearGradient>

                <linearGradient
                  id="linear-server-bg"
                  x1="193"
                  y1="117"
                  x2="379"
                  y2="117"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4C84FF"></stop>
                  <stop offset="1" stop-color="#4C84FF" stop-opacity="0"></stop>
                </linearGradient>

                <clipPath id="clip-client">
                  <rect
                    x="193"
                    y="22"
                    width="182"
                    height="51.0677"
                    rx="12.168"
                    fill="white"
                  ></rect>
                </clipPath>

                <clipPath id="clip-server">
                  <rect
                    x="193"
                    y="92.2065"
                    width="182.416"
                    height="51.0677"
                    rx="12.168"
                    fill="white"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="bg-orange-400/80 col-span-8 rounded-lg p-4">
            <div className="flex flex-row items-center gap-4">
              <img
                src="/img/hero-4.png"
                alt="Producto NETaxion"
                className="w-74 rounded-md shadow-md object-cover max-h-36"
              />

              <div className="w-1/2 text-white">
                <h3 className="text-xl font-semibold mt-2">NCRAS PRO — Integración OT/IT</h3>
                <p className="text-slate-100 mt-1 text-xs">Conecta PLCs y planta con analítica en la nube: menos paros y datos accionables.</p>

                <div className="mt-3 flex gap-2">
                  <button className="bg-slate-900 text-white px-3 py-1 rounded-md text-xs shadow-sm hover:bg-slate-800 transition">Ver caso</button>
                  <button className="bg-white text-orange-600 px-3 py-1 rounded-md text-xs shadow-sm">Solicitar demo</button>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Integración OT</div>
                      <div className="text-[10px] text-slate-200">PLC, SCADA</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Seguridad</div>
                      <div className="text-[10px] text-slate-200">Hardening</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Cloud</div>
                      <div className="text-[10px] text-slate-200">Dashboards</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Soporte</div>
                      <div className="text-[10px] text-slate-200">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-4">
              <div className="flex gap-2">
                <div className="p-2 bg-white/5 rounded-lg text-center">
                  <div className="text-lg font-bold">11+</div>
                  <div className="text-[11px] text-slate-200">Años</div>
                </div>
                <div className="p-2 bg-white/5 rounded-lg text-center">
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-[11px] text-slate-200">Satisfacción</div>
                </div>
                <div className="p-2 bg-white/5 rounded-lg text-center">
                  <div className="text-lg font-bold">35%</div>
                  <div className="text-[11px] text-slate-200">Menos paros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
