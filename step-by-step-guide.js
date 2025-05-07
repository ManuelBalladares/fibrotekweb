const InstallationGuide = () => {
  const steps = [
    {
      step: 1,
      title: "Instalar Node.js",
      command: "",
      description: "Descargar e instalar Node.js versión 16+ desde nodejs.org",
      tip: "Verifica la instalación con 'node -v' en tu terminal"
    },
    {
      step: 2,
      title: "Crear carpeta del proyecto",
      command: "mkdir fibrotek-company && cd fibrotek-company",
      description: "Crear una carpeta para el proyecto y acceder a ella",
      tip: "Puedes hacerlo desde el explorador de archivos si prefieres"
    },
    {
      step: 3,
      title: "Iniciar proyecto React",
      command: "npx create-react-app .",
      description: "Crear la estructura base de React en la carpeta actual",
      tip: "El punto al final es importante, indica la carpeta actual"
    },
    {
      step: 4,
      title: "Instalar Tailwind CSS",
      command: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init",
      description: "Instalar Tailwind y sus dependencias necesarias",
      tip: "Esto creará el archivo tailwind.config.js"
    },
    {
      step: 5,
      title: "Configurar Tailwind",
      command: "",
      description: "Modificar tailwind.config.js para incluir nuestros archivos",
      tip: "Asegúrate de incluir './src//*.{js,jsx,ts,tsx}' en 'content'"
    },
    {
      step: 6,
      title: "Agregar directivas de Tailwind",
      command: "",
      description: "Agregar al inicio de src/index.css:\n@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      tip: "Esto importa los estilos de Tailwind"
    },
    {
      step: 7,
      title: "Abrir en VS Code",
      command: "code .",
      description: "Abrir el proyecto en VS Code desde la terminal",
      tip: "Asegúrate de tener VS Code instalado y en el PATH"
    },
    {
      step: 8,
      title: "Instalar extensiones recomendadas",
      command: "",
      description: "Buscar e instalar en VS Code:\n- ESLint\n- Prettier\n- Tailwind CSS IntelliSense",
      tip: "Reinicia VS Code después de instalar"
    },
    {
      step: 9,
      title: "Crear estructura de componentes",
      command: "mkdir src/components",
      description: "Crear la carpeta para nuestros componentes",
      tip: "Puedes hacerlo desde el explorador de VS Code"
    },
    {
      step: 10,
      title: "Copiar archivos de componentes",
      command: "",
      description: "Pegar los archivos proporcionados en src/components",
      tip: "Asegúrate de mantener la estructura de archivos"
    },
    {
      step: 11,
      title: "Iniciar el servidor de desarrollo",
      command: "npm start",
      description: "Ejecutar el proyecto en modo desarrollo",
      tip: "Se abrirá automáticamente en tu navegador"
    }
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#4b3f31] mb-8 text-center">
          Guía de Instalación Paso a Paso
        </h1>
        
        <div className="space-y-6">
          {steps.map((item) => (
            <div key={item.step} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#fcc515]">
              <div className="flex items-center mb-3">
                <div className="bg-[#4b3f31] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  {item.step}
                </div>
                <h2 className="text-xl font-bold text-[#4b3f31]">{item.title}</h2>
              </div>
              
              {item.command && (
                <div className="bg-[#4b3f31] text-[#fcc515] p-3 rounded mb-3 font-mono text-sm">
                  {item.command}
                </div>
              )}
              
              <p className="text-gray-700 mb-2">{item.description}</p>
              
              {item.tip && (
                <p className="text-sm text-[#fcc515] font-medium">
                  💡 Consejo: {item.tip}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#4b3f31] text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#fcc515]">¡Listo para comenzar!</h2>
          <p className="mb-4">Ahora tienes el proyecto configurado correctamente en VS Code.</p>
          <p>Recuerda que puedes ejecutar:</p>
          <div className="bg-black text-[#fcc515] p-3 rounded mt-2 font-mono text-sm">
            npm start
          </div>
          <p className="mt-4 text-sm">Para iniciar el servidor de desarrollo y ver tu proyecto en acción.</p>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;