// aca iniciamos la aplicacion, importando nuestro archivo de estilos principal
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// nota de IA: StrictMode es una buena practica de React para encontrar bugs en desarrollo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
