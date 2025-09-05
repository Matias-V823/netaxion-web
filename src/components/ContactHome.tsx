import { FaCheckCircle, FaPaperPlane, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactHome = () => {
  return (
    <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-stretch bg-gradient-to-br from-slate-700 to-slate-800 py-8 px-6 sm:px-8 w-full max-w-6xl mx-auto rounded-xl shadow-2xl">
        <div className="text-white max-w-md lg:max-w-lg mb-10 lg:mb-0 lg:mr-8 flex flex-col justify-evenly h-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">¡Muchas gracias por elegirnos!</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
              <span>Atención rápida y personalizada</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
              <span>Resolvemos todas tus dudas</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
              <span>Soporte confiable y seguro</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
              <span>Asesoría sin compromiso</span>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FaLinkedin className="text-white w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FaFacebook className="text-white w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <FaInstagram className="text-white w-5 h-5" />
            </a>
          </div>
          <div className="mt-50">
            <img src="/img/logo.png" alt="Contacto" className="w-36 opacity-95" />
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 w-full max-w-xl border border-slate-700/50 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">Contacto</h2>
          <p className="text-center text-slate-300 mb-6 text-sm">
            ¿Tienes alguna pregunta o quieres saber más? ¡Contáctanos!
          </p>
          <form className="flex flex-col gap-5">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-slate-800/70 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-400"
                placeholder="Nombre completo"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-slate-800/70 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-400"
                placeholder="Correo electrónico"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-3 py-2 bg-slate-800/70 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-400"
                placeholder="Asunto"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 bg-slate-800/70 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-400 resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20 mt-2"
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