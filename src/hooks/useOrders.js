// Aca le pedi a la IA que me ayudara a generar un custom hook para manejar 
// los encargos (Operaciones CRUD) y que no se borraran usando LocalStorage
import { useState, useEffect } from 'react';

export function useOrders() {
  const [orders, setOrders] = useState(() => {
    // Aca la IA me enseñó a hacer el READ: Leemos si ya hay pedidos guardados en LocalStorage al iniciar
    try {
      const item = window.localStorage.getItem('lavatillas_orders');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  // Guardamos en LocalStorage cada vez que la variable orders cambie
  useEffect(() => {
    window.localStorage.setItem('lavatillas_orders', JSON.stringify(orders));
  }, [orders]);

  // CREATE: Funcion para añadir una zapatilla a la lista de lavados (Encargos)
  const addOrder = (sneaker) => {
    setOrders((prev) => {
      // IA Tip: Validamos si ya existe para sumar la cantidad y no duplicarlo visualmente
      const existe = prev.find(item => item.id === sneaker.id);
      if (existe) {
        return prev.map(item => 
          item.id === sneaker.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...sneaker, qty: 1 }];
    });
    alert(`¡${sneaker.title} añadido a tus encargos!`);
  };

  // UPDATE: Funcion para actualizar la cantidad de zapatillas del mismo tipo
  const updateOrderQty = (id, newQty) => {
    if (newQty < 1) return; // evitar numeros negativos
    setOrders((prev) => prev.map(item => item.id === id ? { ...item, qty: newQty } : item));
  };

  // DELETE: Funcion para eliminar un encargo de la lista
  const removeOrder = (id) => {
    setOrders((prev) => prev.filter(item => item.id !== id));
  };

  return { orders, addOrder, updateOrderQty, removeOrder };
}
