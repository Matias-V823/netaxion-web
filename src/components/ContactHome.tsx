import { FaCheckCircle, FaPaperPlane, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactHome = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col lg:flex-row justify-between items-stretch py-8 px-6 sm:px-8 w-full max-w-6xl mx-auto">
        <div className="text-gray-700 max-w-md lg:max-w-lg mb-10 lg:mb-0 lg:mr-8 flex flex-col justify-evenly h-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-600">Razones para contactarnos</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span className="font-light">Atención rápida y personalizada</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span className="font-light">Resolvemos todas tus dudas</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span className="font-light">Soporte confiable y seguro</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span className="font-light">Asesoría sin compromiso</span>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-gray-100 hover:bg-blue-50 transition">
              <FaLinkedin className="text-blue-600 w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-gray-100 hover:bg-blue-50 transition">
              <FaFacebook className="text-blue-600 w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-gray-100 hover:bg-blue-50 transition">
              <FaInstagram className="text-blue-600 w-5 h-5" />
            </a>
          </div>
          <div className="mt-10">
            <img src="/img/logo.png" alt="Contacto" className="w-36 opacity-90" />
          </div>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 w-full max-w-xl border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-2">Contacto</h2>
          <p className="text-center text-gray-600 mb-6 text-sm font-light">
            ¿Tienes alguna pregunta o quieres saber más? ¡Contáctanos!
          </p>
          <form className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 font-light"
                placeholder="Nombre completo"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 font-light"
                placeholder="Correo electrónico"
              />
            </div>

            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 font-light"
                placeholder="Asunto"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 resize-none font-light"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg mt-2 cursor-pointer w-full"
            >
              <FaPaperPlane className="text-sm" />
              <span>Enviar mensaje</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactHome;