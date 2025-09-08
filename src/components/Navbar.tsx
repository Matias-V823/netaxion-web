const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <img
            src="/img/logo-white.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="text-gray-600 hover:text-gray-800 transition">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition">Política de Calidad</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition">Alcance</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition">Nosotros</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 transition">Servicios</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* <a href="#login" className="text-gray-300 hover:text-white transition">Login</a>
          <button className="bg-white text-slate-900 font-semibold py-2 px-5 rounded-full hover:bg-slate-200 transition">
            Sign up
          </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
