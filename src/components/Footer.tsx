import { FaGlobe, FaTwitter, FaInstagram, FaLinkedin, FaBriefcase } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-zinc-800 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                <div>
                    <h2 className="text-2xl font-extrabold text-white">NETaxion</h2>
                    <p className="mt-2 text-sm font-medium text-gray-400">
                        En NETaxion Chile nos motiva formar y fortalecer alianzas con los principales fabricantes de tecnologías y servicios de TI manteniendo nuestro conocimiento actualizado y a su vez, proveer soluciones de extremo a extremo. 🚀
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Información</h3>
                    <ul className="space-y-2 font-medium text-sm text-gray-400">
                        <li>Av. Providencia #1650 - Oficina 801
                            Providencia, Santiago.</li>
                        <li>contacto@netaxion.cl</li>
                    </ul>
                    <div className="flex justify-center md:justify-start space-x-4 mt-3 text-xl text-gray-400">
                        <a href="#" aria-label="Sitio web" className="hover:text-white"><FaGlobe /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin /></a>
                        <a href="#" aria-label="LinkedIn Company" className="hover:text-white"><FaBriefcase /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Ubicación</h3>
                    <p className="text-sm font-medium text-gray-400 mb-2">Visítanos en nuestra oficina en Providencia</p>
                    <div className="w-full rounded-md overflow-hidden border border-zinc-800">
                        <iframe
                            title="Mapa - NETaxion Providencia"
                            src="https://www.google.com/maps?q=Av.+Providencia+1650+Providencia+Santiago&output=embed"
                            width="100%"
                            height="160"
                            className="block"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                    <p className="text-xs font-medium text-gray-500 mt-2">Horario: Lun - Vie 8:00 - 18:00</p>
                </div>
            </div>

            <div className="border-t border-zinc-800 font-light mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} NETaxion. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer
