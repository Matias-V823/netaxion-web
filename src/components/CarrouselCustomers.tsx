import { useEffect, useRef, useState } from 'react';

const FrameworkCarousel = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Datos de frameworks con sus colores de resplandor
  const frameworks = [
    { name: "Vitest", href: "https://vitest.dev/", glowColor: "#fac52b", icon: "vitest" },
    { name: "React", href: "https://react.dev/", glowColor: "#00d6fd", icon: "react" },
    { name: "Angular", href: "https://angular.dev/", glowColor: "#e03237", icon: "angular" },
    { name: "Vue", href: "https://vuejs.org/", glowColor: "#40b782", icon: "vue" },
    { name: "Solid", href: "https://www.solidjs.com/", glowColor: "#75b2df", icon: "solid" },
    { name: "Svelte", href: "https://svelte.dev/", glowColor: "#fd3e00", icon: "svelte" },
    { name: "Preact", href: "https://preactjs.com/", glowColor: "#673ab8", icon: "preact" },
    { name: "Astro", href: "https://astro.build", glowColor: "#FFFFFF", icon: "astro" },
    { name: "Remix", href: "https://remix.run/", glowColor: "#3991fd", icon: "remix" },
    { name: "Nuxt", href: "https://nuxt.com", glowColor: "#00da81", icon: "nuxt" },
    { name: "Qwik", href: "https://qwik.dev/", glowColor: "#18b5f4", icon: "qwik" },
    { name: "Redwood", href: "https://redwoodjs.com/", glowColor: "#be4622", icon: "redwood" },
    { name: "Analog", href: "https://analogjs.org/", glowColor: "#c10f2e", icon: "analog" },
    { name: "Playwright", href: "https://playwright.dev/", glowColor: "#d45247", icon: "playwright" },
    { name: "Storybook", href: "https://storybook.js.org/", glowColor: "#fd4684", icon: "storybook" },
    { name: "Marko", href: "https://markojs.com/", glowColor: "#de2a87", icon: "marko" },
    { name: "Laravel", href: "https://laravel.com/", glowColor: "#eb4432", icon: "laravel" },
    { name: "AdonisJS", href: "https://adonisjs.com/", glowColor: "#5a45ff", icon: "adonisjs" },
    { name: "EmberJS", href: "https://emberjs.com/", glowColor: "#e04e39", icon: "ember" },
    { name: "Hono", href: "https://hono.dev/", glowColor: "#ff5c13", icon: "hono" }
  ];

  // Función para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const position = scrollTop / (scrollHeight - clientHeight);
        setScrollPosition(position);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Componente para cada tarjeta de framework
  const FrameworkCard = ({ framework, index }) => (
    <a
      href={framework.href}
      target="_blank"
      rel="noopener"
      className="framework-card active group relative flex items-center justify-center p-4 rounded-xl bg-[#0E1117] border border-white/10 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:scale-105 hover:border-white/20"
      style={{ '--glow-color': framework.glowColor }}
      data-v-e60b63ec=""
    >
      {/* Efecto de resplandor al hacer hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
        style={{
          background: `radial-gradient(60% 60% at 50% 50%, ${framework.glowColor}33 0%, transparent 70%)`,
        }}
      />
      
      {/* Placeholder para el icono (deberías reemplazar con SVG reales) */}
      <div 
        className="w-8 h-8 rounded-md bg-gray-600 flex items-center justify-center text-white font-bold text-xs"
        style={{
          background: `linear-gradient(135deg, ${framework.glowColor}, ${framework.glowColor}80)`
        }}
      >
        {framework.name.charAt(0)}
      </div>
    </a>
  );

  return (
    <div className="relative w-full bg-[#1b1b1f] py-16 overflow-hidden">
      {/* Efectos de difuminado en los bordes */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#1b1b1f] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1b1b1f] to-transparent z-10"></div>
      
      {/* Título */}
      <h2 className="text-center text-2xl font-semibold text-white/90 mb-12 px-4">
        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Powering your favorite frameworks and tools
        </span>
      </h2>

      {/* Contenedor principal con la estructura específica */}
      <div 
        ref={containerRef}
        className="frameworks-container relative overflow-y-auto h-96 mx-auto max-w-6xl px-4"
        data-v-1415722a=""
      >
        {/* Filas de frameworks con efecto parallax */}
        <div 
          className="framework-row grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-4 transition-transform duration-300"
          style={{ 
            transform: `translate3d(0, ${scrollPosition * 20}px, 0)`,
          }}
          data-v-1415722a=""
        >
          {frameworks.slice(0, 7).map((framework, index) => (
            <FrameworkCard key={framework.name} framework={framework} index={index} />
          ))}
        </div>

        <div 
          className="framework-row grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-4 transition-transform duration-300"
          style={{ 
            transform: `translate3d(0, ${scrollPosition * 15}px, 0)`,
          }}
          data-v-1415722a=""
        >
          {frameworks.slice(7, 14).map((framework, index) => (
            <FrameworkCard key={framework.name} framework={framework} index={index} />
          ))}
        </div>

        <div 
          className="framework-row grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 transition-transform duration-300"
          style={{ 
            transform: `translate3d(0, ${scrollPosition * 10}px, 0)`,
          }}
          data-v-1415722a=""
        >
          {frameworks.slice(14).map((framework, index) => (
            <FrameworkCard key={framework.name} framework={framework} index={index} />
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <p className="text-center text-sm text-white/50 mt-6">
        Scroll to explore more frameworks
      </p>
    </div>
  );
};

export default FrameworkCarousel;