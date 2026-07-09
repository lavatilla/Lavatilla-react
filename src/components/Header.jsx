import { IconMenu2, IconShoppingCart } from '@tabler/icons-react';

export default function Header({ ordersCount = 0, onOpenCart }) {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-primary">👟 LavaTillas</h1>
      </div>

      <nav className="hidden md:flex gap-8">
        {/* estos son enlaces vacios por ahora pero mantendran el estilo de tu proyecto anterior */}
        <a href="/" className="font-semibold text-text-dark hover:text-primary transition-colors">Inicio</a>
        <a href="#catalogo" className="font-semibold text-text-dark hover:text-primary transition-colors">Catálogo</a>
      </nav>

      <div className="flex items-center gap-4">
        {/* boton para ver los encargos (abre el OrderCart) */}
        <button 
          onClick={onOpenCart}
          className="relative flex items-center justify-center p-2 text-primary hover:bg-gray-100 rounded-full transition"
        >
          <IconShoppingCart size={24} />
          {/* mostramos la cantidad de zapatillas pedidas si hay mas de 0 */}
          {ordersCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
              {ordersCount}
            </span>
          )}
        </button>

        {/* boton de menu solo visible en movil (Responsive) */}
        <button className="md:hidden p-2 text-primary">
          <IconMenu2 size={24} />
        </button>
      </div>
    </header>
  );
}
