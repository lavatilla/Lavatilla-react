// aca muestro un panel lateral para el carrito de lavados (CRUD UI)
import { IconX, IconTrash, IconPlus, IconMinus } from '@tabler/icons-react';

export default function OrderCart({ isOpen, onClose, orders, updateOrderQty, removeOrder }) {
  return (
    <>
      {/* Fondo oscuro detras del menu lateral */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel lateral derecho */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        {/* Cabecera del carrito */}
        <div className="p-5 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            Tus Encargos ({orders.reduce((acc, curr) => acc + curr.qty, 0)})
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-500">
            <IconX size={24} />
          </button>
        </div>

        {/* Lista de productos encargados */}
        <div className="flex-1 overflow-y-auto p-5">
          {orders.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>No tienes zapatillas para lavar aún.</p>
              <p className="text-sm mt-2">¡Añade modelos desde el catálogo!</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {orders.map(order => (
                <li key={order.id} className="flex gap-4 items-center bg-gray-50 p-3 rounded-lg border border-gray-100 relative group">
                  {/* DELETE: Boton borrar */}
                  <button 
                    onClick={() => removeOrder(order.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                  >
                    <IconTrash size={16} />
                  </button>

                  <img src={order.thumbnail} alt={order.title} className="w-16 h-16 object-contain bg-white rounded-md p-1 border" />
                  
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-sm line-clamp-1">{order.title}</h4>
                      <p className="text-xs text-gray-500">${(order.price).toLocaleString('es-CL')} c/u</p>
                      
                      {/* UPDATE: Controles de cantidad */}
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateOrderQty(order.id, order.qty - 1)}
                          className="p-1 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-700"
                          disabled={order.qty <= 1}
                        >
                          <IconMinus size={14} />
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{order.qty}</span>
                        <button 
                          onClick={() => updateOrderQty(order.id, order.qty + 1)}
                          className="p-1 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-700"
                        >
                          <IconPlus size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="font-bold text-primary pl-2">
                      ${(order.price * order.qty).toLocaleString('es-CL')}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pie del carrito */}
        {orders.length > 0 && (
          <div className="p-5 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Total Estimado:</span>
              <span className="text-2xl font-bold text-primary">
                ${orders.reduce((acc, order) => acc + (order.price * order.qty), 0).toLocaleString('es-CL')}
              </span>
            </div>
            <button className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-200">
              Confirmar Encargo
            </button>
          </div>
        )}
      </div>
    </>
  );
}
