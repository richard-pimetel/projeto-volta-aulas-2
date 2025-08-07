import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Aplicativo from './Aplicativo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aplicativo />
  </StrictMode>,
)