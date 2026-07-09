// Aca recupero la seccion de 'Caracteristicas' del proyecto original pero en formato React
import { IconClock, IconWashMachine, IconLeaf } from '@tabler/icons-react';

export default function Features() {
  const features = [
    {
      icon: <IconClock className="text-accent mb-4" size={48} />,
      title: "Servicio Rápido",
      desc: "Entregamos tus zapatillas listas para usar en menos de 24 horas."
    },
    {
      icon: <IconWashMachine className="text-accent mb-4" size={48} />,
      title: "Maquinaria Top",
      desc: "Tecnología avanzada que elimina manchas difíciles sin dañar el calzado."
    },
    {
      icon: <IconLeaf className="text-accent mb-4" size={48} />,
      title: "Productos Eco",
      desc: "Jabones biodegradables que cuidan las fibras y protegen el medio ambiente."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">¿Por qué elegir LavaTillas?</h2>
          <p className="text-text-light text-lg">Limpieza profunda con conciencia ecológica garantizada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-bg-light p-10 rounded-2xl text-center shadow-sm hover:shadow-lg transition-transform hover:-translate-y-2 duration-300 border border-gray-100">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
