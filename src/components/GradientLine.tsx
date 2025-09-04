const GradientLine = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <div className="absolute left-1/2 top-80 transform -translate-x-1/2 h-[70%] flex justify-center">
        <svg
          width="4"
          height="100%"
          viewBox="0 0 4 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M2 0V100%"
            stroke="url(#line-gradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1" stopColor="#4B5563" stopOpacity="0" />
              <stop offset="0.35" stopColor="#4B5563" />
              <stop offset="0.55" stopColor="#4B5563" stopOpacity="0.2" />
              <stop offset="0.6" stopColor="#4B5563" stopOpacity="0.2" />
              <stop offset="0.7" stopColor="#4B5563" />
              <stop offset="1" stopColor="#4B5563" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default GradientLine;