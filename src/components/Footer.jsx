// final de la pagina con creditos de estudiante
export default function Footer() {
  return (
    <footer className="bg-text-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">👟 LavaTillas</h3>
          <p className="text-gray-300">Cuidamos tus pasos, cuidamos el planeta.</p>
        </div>

        <div className="text-center text-sm text-gray-400 mt-6 pt-6 border-t border-gray-700 w-full max-w-md">
          {/* nota: este comentario sugiere una mejora asistida por IA (uso de Date para el año) */}
          <p>© {new Date().getFullYear()} LavaTillas. Todos los derechos reservados.</p>
          <p className="mt-2">Creado por <strong className="text-white">Bryan Castillo</strong>, estudiante de <a href="https://portal.inacap.cl/estudiantes" target="_blank" rel="noreferrer" className="text-accent hover:underline font-semibold">INACAP</a></p>
        </div>
      </div>
    </footer>
  );
}
