import { MdWorkHistory } from "react-icons/md";

const Presentation = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-[80%] mx-auto">
        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(100px,_auto)]">
          <div className="col-span-12 md:col-span-8 md:row-span-2 bg-gradient-to-br from-[#07090e] to-slate-900 rounded-2xl p-8 flex flex-col gap-8 relative overflow-hidden">
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
              <h1 className="text-3xl text-gray-200">
                Descubre más sobre nuestros proyectos
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
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

          <div className="col-span-4 border bg-sky-500 border-gray-200 rounded-2xl min-h-[10rem] p-8 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="flex flex-row items-center text-center gap-5">
              <h2 className="text-9xl font-family-zentry-regular font-extrabold text-zinc-950 flex items-center">
                11 <span className="text-5xl ml-1">+</span>
              </h2>
              <p className="text-base text-gray-50 font-light mt-2">
                Años de experiencia en el área de la mineria y
                manufactura
              </p>
            </div>

          </div>
          <div className="col-span-4  border border-gray-200 rounded-2xl  relative overflow-hidden">
            <img
              src="img/hero-1.png"
              alt=""
              className="h-auto object-cover"
            />
            <div className="absolute top-10 flex flex-col items-center">
              <h3 className="text-gray-200">Conoce más sobre NCRAS PRO</h3>
              <img src="img/mockup_ncras.png" alt="" />
              <button className="px-4 py-2  rounded-xl cursor-pointer bg-slate-800 text-white text-xs">
                Saber más
              </button>
            </div>
          </div>

          <div className="col-span-4  border border-gray-300 rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">

            <h2 className="text-xl text-gray-600 font-extrabold mb-2">Servicios</h2>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              En NETaxion, ofrecemos soluciones integrales en Servicios OT y IT
            </p>

            <svg
              className="w-full max-h-36 mx-auto"
              viewBox="-70 0 472 166"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="">
                <rect
                  x="-52"
                  y="40.0947"
                  width="184"
                  height="94"
                  rx="16.2078"
                  fill="#131B27"
                />
                <image
                  href="/img/logo.png"
                  x="-20"
                  y="22"
                  width="120"
                  height="120"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>

              <path
                className="connector"
                d="M133.5 84.5H164M164 84.5V58.5C164 52.4249 168.925 47.5 175 47.5H193.5M164 84.5V108C164 114.075 168.925 119 175 119H193.5"
                stroke="#94A3B8"
                strokeOpacity="0.5"
                strokeWidth="1"
              ></path>

              <g className="client" filter="url(#filter-client)">
                <g clipPath="url(#clip-client)">
                  <rect
                    className="client__bg"
                    x="193"
                    y="20"
                    width="182"
                    height="54"
                    fill="url(#linear-client-bg)"
                    fillOpacity="0.1"
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
                  strokeOpacity="0.3"
                  strokeWidth="1.014"
                ></rect>
              </g>
              <text
                className="client-text"
                x="236"
                y="53"
                fill="#787878"
              >
                Servicios OT
              </text>

              <g className="server" filter="url(#filter-server)">
                <g clipPath="url(#clip-server)">
                  <rect
                    className="server__bg"
                    x="193"
                    y="90"
                    width="186"
                    height="84"
                    fill="url(#linear-server-bg)"
                    fillOpacity="0.1"
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
                  strokeOpacity="0.3"
                  strokeWidth="1.014"
                ></rect>
              </g>
              <text
                className="server-text"
                x="236"
                y="122"
                fill="#787878"
              >
                Servicios IT
              </text>
            </svg>
          </div>
          <div className="bg-orange-400/90 col-span-8 rounded-lg p-4">
            <div className="flex flex-row items-center gap-4">
              <img
                src="/img/hero-4.png"
                alt="Producto NETaxion"
                className="w-74 rounded-md object-cover max-h-36"
              />

              <div className="w-1/2 text-white">
                <h3 className="text-xl font-semibold mt-2">NCRAS PRO — Integración OT/IT</h3>
                <p className="text-gray-100 font-light mt-1 text-xs">Conecta PLCs y planta con analítica en la nube: menos paros y datos accionables.</p>

                <div className="mt-3 flex gap-2">
                  <button className="bg-slate-900 text-white px-3 py-1 rounded-md text-xs shadow-sm hover:bg-slate-800 transition">Ver caso</button>
                  <button className="bg-white text-orange-600 px-3 py-1 rounded-md text-xs shadow-sm">Solicitar demo</button>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Integración OT</div>
                      <div className="text-[10px] text-gray-600">PLC, SCADA</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Seguridad</div>
                      <div className="text-[10px] text-gray-600">Hardening</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Cloud</div>
                      <div className="text-[10px] text-gray-600">Dashboards</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-1 bg-white/5 rounded-md">
                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.2"/></svg>
                    <div>
                      <div className="text-xs font-medium">Soporte</div>
                      <div className="text-[10px] text-gray-600">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 mt-4">
              <div className="flex gap-2">
                <div className="p-2 bg-white/5 rounded-lg text-center">
                  <div className="text-lg font-bold">11+</div>
                  <div className="text-[11px] text-gray-100">Años</div>
                </div>
                <div className="p-2 bg-white/5 rounded-lg text-center">
                  <div className="text-lg font-bold">98%</div>
                  <div className="text-[11px] text-gray-100">Satisfacción</div>
                </div>
                <div className="p-2 bg-white/5 rounded-lg text-center">
                  <div className="text-lg font-bold">35%</div>
                  <div className="text-[11px] text-gray-100">Menos paros</div>
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
