/** biome-ignore-all lint/style/noNonNullAssertion: api */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UIProvider } from '../src/components/providers/ui-provider'
import App from './app'
import '../src/styles.css'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <UIProvider dir='rtl'>
      <App />
    </UIProvider>
  </StrictMode>
)
