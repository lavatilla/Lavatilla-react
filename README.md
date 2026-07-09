# 👟 Lavatillas App — Servicio de Lavado de Zapatillas

Aplicación web SPA desarrollada con **React + Vite** que muestra un catálogo de zapatillas para un servicio de encargo de limpieza usando la **Platzi Fake Store API**.

---

## ✨ Funcionalidades

- **Catálogo Inteligente** — Muestra zapatillas descargadas con fotos reales desde API.
- **Carrito de Encargos** — Panel lateral (CRUD) que maneja tu orden y detecta duplicados.
- **Suma de Totales** — Cálculos al vuelo de subtotales por par y total estimado.
- **Favoritos/Memoria** — Administra y protege tus lavados gracias a persistencia por LocalStorage.
- **Paginación** — Navega entre botones de páginas para descubrir racimos de zapatillas.
- **Responsive** — Diseño 100% adaptable a teléfonos celulares, tablets y computadora de escritorio.

---

## 🛡️ Seguridad y Buenas Prácticas

Esta aplicación protege sus comunicaciones manejando cabeceras de red explícitas y control de flujo:

| Cabecera | Valor | Propósito |
|---|---|---|
| **Accept** | `application/json` | Enforces exact data formatting from source |
| **Content-Type** | `application/json` | Previene inyección de scripts externos en tráfico |

> Además, todas las llamadas a la API externa se hacen con validación de errores mediante bloques aislados `try/catch` manejando `async/await`. Cuenta con un **filtro estricto** local que elude la visualización de datos basura comunes que usuarios falsos insertan en la API pública.

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 18 | Librería central de Interfaz de Usuario |
| **Vite** | 5 | Bundler de ultra velocidad |
| **Tailwind CSS** | 3.4 | Sistema de grillas y colores corporativos |
| **@tabler/icons**| — | Iconografía vectorial libre de bloqueos |
| **Platzi API** | v1 | Repositorio remoto centralizado |
| **LocalStorage** | — | Motor de datos (Navegador) |

---

## 📦 Instalación y uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/lavatilla/Lavatilla-react.git
cd Lavatilla-react

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo (abre tu navegador automáticamente)
npm run dev

# 4. Compilar formato rápido para producción
npm run build
```

---

## 📁 Estructura del proyecto

```text
Lavatilla-react/
├── index.html               # Head Tags y contenedor Root
├── tailwind.config.js       # Colores primarios y secundarios de marca
├── public/                  # Íconos 
├── src/
│   ├── main.jsx             # Punto de entrada Strict Mode
│   ├── App.jsx              # Gestor global y controlador del Off-canvas
│   ├── index.css            # Tipografía Outfit y Base de Tailwind
│   ├── hooks/
│   │   └── useOrders.js     # 🔥 Hook de CRUD para Memoria (LocalStorage)
│   ├── components/
│   │   ├── Header.jsx       # Interfaz superior y control
│   │   ├── HeroCarousel.jsx # Portada rotativa condicional
│   │   ├── Features.jsx     # Info corporativa
│   │   ├── SneakerList.jsx  # Rejilla de zapatillas y Paginador
│   │   ├── SneakerCard.jsx  # Control unitario por calzado
│   │   └── OrderCart.jsx    # Componente modal del carrito y matemáticas
│   └── pages/
│       └── Home.jsx         # Orquestador del Fetch y filtros
```

---

## 🔌 API — Fake Store (Platzi)

Endpoints empleados para levantar el ecosistema:

| Endpoint | Propósito |
|---|---|
| `/api/v1/products/?categoryId=4` | Ficha universal de Categoría Calzado |

---

## 👨‍💻 Autor

**Bryan Castillo** — Estudiante Analista Programador INACAP

---

## 📄 Licencia

Este proyecto es puramente educativo y fue desarrollado como evaluación técnica del módulo **Desarrollo de Aplicaciones Web SPA con React**.
