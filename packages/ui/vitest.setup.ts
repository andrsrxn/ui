import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { afterEach, expect } from 'vitest'

afterEach(() => {
  cleanup()
})

expect.extend({
  toHaveNoInlineStyles(received: HTMLElement) {
    const elementsWithStyle = received.querySelectorAll('[style]')
    const pass = elementsWithStyle.length === 0
    return {
      pass,
      message: () =>
        pass
          ? 'Expected element to have inline styles'
          : `Found ${elementsWithStyle.length} element(s) with inline styles:\n` +
            Array.from(elementsWithStyle)
              .map(el => ` - <${el.tagName.toLowerCase()} style="${el.getAttribute('style')}">`)
              .join('\n'),
    }
  },
})
