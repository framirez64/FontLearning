import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IkeaScheme from './Practice1/Practice1'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IkeaScheme />
  </StrictMode>,
)
