import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PagesProvider } from "./contexts/pagesCtx"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <PagesProvider>
      <App />
    </PagesProvider>
  </StrictMode>,
)
