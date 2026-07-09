// aca defino el contenedor principal de la aplicacion
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OrderCart from './components/OrderCart';
import { useOrders } from './hooks/useOrders';

function App() {
  // Estado para controlar si el carrito lateral esta abierto o cerrado
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Extraigo las funciones y variables de mi custom hook de pedidos
  const { orders, addOrder, updateOrderQty, removeOrder } = useOrders();
  
  // Calculamos la cantidad total de zapatillas encargadas (IA Tip: reduce es genial para esto)
  const totalItems = orders.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <BrowserRouter>
      {/* Drawer del carrito */}
      <OrderCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        orders={orders}
        updateOrderQty={updateOrderQty}
        removeOrder={removeOrder}
      />

      <div className="min-h-screen flex flex-col bg-bg-light">
        <Header 
          ordersCount={totalItems} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        
        <main className="flex-grow">
          {/* Rutas de navegacion. Pasamos la funcion addOrder a Home */}
          <Routes>
            <Route path="/" element={<Home onAgregar={addOrder} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
