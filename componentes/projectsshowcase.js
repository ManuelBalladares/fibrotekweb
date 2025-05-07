import React from 'react';

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'Balneario Las Olas',
      description: 'Complejo acuático de lujo con piscinas infinitas y spa',
      image: 'bg-blue-500',
      category: 'Balnearios'
    },
    {
      title: 'Parque Acuático Infantil',
      description: 'Zona de juegos acuáticos para niños con toboganes temáticos',
      image: 'bg-green-500',
      category: 'Parques Infantiles'
    },
    {
      title: 'Club de Piscinas El Dorado',
      description: 'Remodelación completa con accesorios premium',
      image: 'bg-yellow-500',
      category: 'Accesorios'
    },
    {
      title: 'Escuela Infantil Happy Kids',
      description: 'Área de juegos exterior con equipamiento seguro',
      image: 'bg-red-500',
      category: 'Equipamiento'
    }
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de nuestros trabajos más destacados
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl h-96">
              <div className={`absolute inset-0 ${project.image} transition-transform duration-500 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="relative h-full flex flex-col justify-end p-8">
                <span className="text-sm text-yellow-300 mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;