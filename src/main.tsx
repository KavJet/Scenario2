import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import Demo from'./pages/Demo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Demo/>
  </StrictMode>,
)
