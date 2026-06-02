/** biome-ignore-all lint/style/noNonNullAssertion: api */
import '@fontsource/fira-sans/300.css'
import '@fontsource/fira-sans/400.css'
import '@fontsource/fira-sans/600.css'
import '@fontsource/fira-sans/700.css'
import '@fontsource/fira-mono/400.css'
import '@fontsource/fira-mono/500.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
