import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import LifeCounter from './components/LifeCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeCounter />
  </StrictMode>,
)
