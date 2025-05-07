import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      name: 'React',
      description: 'Biblioteca JavaScript para construir interfaces de usuario',
      purpose: 'Estructura de componentes y gestión de estado'
    },
    {
      name: 'JavaScript (ES6+)',
      description: 'Lenguaje de programación principal',
      purpose: 'Lógica de la aplicación y funcionalidades'
    },
    {
      name: 'Tailwind CSS',
      description: 'Framework de utilidades CSS',
      purpose: 'Estilizado moderno y responsive'
    },
    {
      name: 'HTML5',
      description: 'Lenguaje de marcado estándar',
      purpose: 'Estructura base de los componentes'
    }
  ];

  return (
    <div className="py-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#4b3f31] mb-8 text-center">Tecnologías Utilizadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-[#4b3f31]/10">
              <h3 className="text-xl font-bold text-[#4b3f31] mb-2">{tech.name}</h3>
              <p className="text-gray-600 mb-3">{tech.description}</p>
              <p className="text-sm text-[#fcc515] font-medium">{tech.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

// DONE