// aca recorro la lista de zapatillas que me llega de la api
import SneakerCard from './SneakerCard';

export default function SneakerList({ zapatillas, onAgregar, page, setPage, totalPages }) {
  if (!zapatillas || zapatillas.length === 0) {
    return (
      <div className="text-center py-20 flex justify-center items-center">
        {/* IA Tip: Feedback visual simple si la API demora */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="ml-4 text-text-light text-lg">Cargando catálogo...</p>
      </div>
    );
  }

  return (
    <section id="catalogo" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">¿Qué Zapatilla quieres lavar?</h2>
        <p className="text-text-light max-w-2xl mx-auto">Selecciona tu modelo para añadirlo a tus encargos. ¡Nosotros hacemos la magia!</p>
      </div>
      
      {/* grilla usando css grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {zapatillas.map(sneaker => (
          <SneakerCard 
            key={sneaker.id} 
            sneaker={sneaker} 
            onAgregar={onAgregar}
          />
        ))}
      </div>

      {/* Controles de Paginacion solicitados en el feedback */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12 bg-white p-4 rounded-full shadow-sm max-w-md mx-auto border border-gray-100">
          <button 
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Anterior
          </button>
          <span className="font-bold text-primary">
            Página {page} de {totalPages}
          </span>
          <button 
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}
