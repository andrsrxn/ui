/** biome-ignore-all lint/style/noNonNullAssertion: api */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { UIProvider } from './components/providers/ui-provider'
import './globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UIProvider dir='rtl'>
      <App />
    </UIProvider>
  </StrictMode>
)
