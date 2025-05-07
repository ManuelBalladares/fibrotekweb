import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#4b3f31] to-[#2a241d] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fcc515] mb-2">FIBROTEK COMPANY</h1>
          <div className="w-24 h-2 bg-[#fcc515] mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Innovación en <span className="text-[#fcc515]">espacios acuáticos</span>
          </h2>
        </div>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Balnearios premium, parques infantiles seguros y accesorios de calidad
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-[#fcc515] text-[#4b3f31] font-bold rounded-lg hover:bg-[#e6b413] transition-colors">
            Nuestros Proyectos
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#4b3f31] transition-colors">
            Contacto
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;