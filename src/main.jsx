import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'  //can't import as a variable 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
