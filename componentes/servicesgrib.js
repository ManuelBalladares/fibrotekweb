import React from 'react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Balnearios Premium',
      description: 'Diseño y construcción de complejos acuáticos con los más altos estándares de calidad.',
      icon: (
        <svg className="w-12 h-12 text-[#fcc515]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
        </svg>
      )
    },
    {
      title: 'Parques Infantiles',
      description: 'Espacios seguros y divertidos que estimulan la creatividad y actividad física.',
      icon: (
        <svg className="w-12 h-12 text-[#fcc515]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#4b3f31] mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para espacios acuáticos y áreas infantiles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#4b3f31]/10">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#4b3f31] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;