// tarjeta individual para cada zapatilla
import { IconPlus } from '@tabler/icons-react';

export default function SneakerCard({ sneaker, onAgregar }) {
  // el precio ya esta calculado en CLP en la pagina de Home (para el lavado)
  const clpPrice = sneaker.price.toLocaleString('es-CL');

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full border border-gray-100">
      {/* Caja de la foto */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img 
          src={sneaker.thumbnail} 
          alt={sneaker.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-primary">
          Lavado: ${clpPrice}
        </div>
      </div>
      
      {/* Informacion de la zapatilla inferior */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-text-dark mb-1 line-clamp-1">{sneaker.title}</h3>
        <p className="text-[13px] text-text-light flex-grow mb-4 leading-relaxed">{sneaker.description}</p>
        
        {/* Boton para solicitar lavado */}
        <button 
          onClick={() => onAgregar(sneaker)}
          className="w-full bg-primary hover:bg-primary-dark text-white p-3 rounded-xl font-medium transition-all duration-300 flex justify-center items-center gap-2 transform active:scale-95 hover:shadow-md"
        >
          <IconPlus size={20} />
          <span>Encargar Lavado</span>
        </button>
      </div>
    </div>
  );
}
