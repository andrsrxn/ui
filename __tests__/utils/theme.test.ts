import { describe, it, expect } from 'vitest'
import { cn } from '../../src/lib/utils/theme'

describe('theme utils', () => {
  it('cn merges tailwind classes correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    expect(cn('px-2 py-1', 'p-4')).toBe('p-4')
    expect(cn('bg-red-500', { 'text-white': true, hidden: false })).toBe('bg-red-500 text-white')
    expect(cn('text-sm', undefined, null, false, 'font-bold')).toBe('text-sm font-bold')
  })
})
