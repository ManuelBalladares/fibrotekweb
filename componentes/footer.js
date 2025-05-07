import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4b3f31] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#fcc515]">FIBROTEK COMPANY</h3>
            <p className="text-gray-300">
              Especialistas en construcción de balnearios y parques infantiles desde 2005.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fcc515]">Contacto</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Av. Principal 123, Ciudad</p>
              <p>Tel: +1 234 567 890</p>
              <p>Email: info@fibrotek.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#fcc515]">Horario</h4>
            <p className="text-gray-300">Lunes a Viernes: 9am - 6pm</p>
            <p className="text-gray-300">Sábados: 10am - 2pm</p>
          </div>
        </div>
        <div className="border-t border-[#fcc515]/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Fibrotek Company. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// DONE