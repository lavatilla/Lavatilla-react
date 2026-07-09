// aca creo el Hero que es la portada inicial de la web
import { useState, useEffect } from 'react';

export default function HeroCarousel({ zapatillas }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // IA Tip: UseEffect para rotar imagenes automaticamente cada 5 segundos
  useEffect(() => {
    if (!zapatillas || zapatillas.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.min(zapatillas.length, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, [zapatillas]);

  // Si no hay zapatillas aun cargadas, mostramos algo base
  const bgImage = zapatillas && zapatillas.length > 0 
    ? zapatillas[currentIndex].thumbnail 
    : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff';

  return (
    <div className="relative w-full h-[60vh] bg-gray-900 overflow-hidden flex items-center justify-center">
      {/* Fondo dinamico (Carrusel) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Contenido superpuesto */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Lava<span className="text-accent">Tillas</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light mb-8">
          Tus zapatillas como nuevas. Calidad profesional sin dañar.
        </p>
        <a href="#catalogo" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:-translate-y-1 shadow-lg">
          Ver Catálogo
        </a>
      </div>
    </div>
  );
}
