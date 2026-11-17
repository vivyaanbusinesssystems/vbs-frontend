import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css' // <-- This imports all your Tailwind v4 styles and utilities

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Pages are prerendered at build time (scripts/prerender.mjs). If the page already has content, attach to it
// (hydrate); otherwise (dev server, or a page that was not prerendered) render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
