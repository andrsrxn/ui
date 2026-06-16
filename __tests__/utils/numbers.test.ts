import { describe, it, expect } from 'vitest'
import {
  formatNumber,
  formatCurrency,
  formatPercent,
  formatUnit,
  formatCompact,
  formatRange,
} from '../../src/lib/utils/numbers'

describe('numbers utils', () => {
  it('formatNumber formats decimal numbers', () => {
    expect(formatNumber(1234.56, { locale: 'en-US' })).toBe('1,234.56')
  })

  it('formatCurrency formats currency', () => {
    expect(formatCurrency(1234.56, { currency: 'USD', locale: 'en-US' })).toBe('$1,234.56')
    expect(formatCurrency(1234.56, { currency: 'EUR', locale: 'en-US' })).toBe('€1,234.56')
  })

  it('formatPercent formats percentages', () => {
    expect(formatPercent(50, { locale: 'en-US' })).toBe('50%')
    expect(formatPercent(5.5, { locale: 'en-US' })).toBe('5.5%')
  })

  it('formatUnit formats numbers with units', () => {
    expect(formatUnit(10, { unit: 'liter', locale: 'en-US' })).toBe('10 L')
  })

  it('formatCompact formats large numbers compactly', () => {
    expect(formatCompact(1200, { locale: 'en-US' })).toBe('1.2K')
    expect(formatCompact(1_500_000, { locale: 'en-US' })).toBe('1.5M')
  })

  it('formatRange formats number ranges', () => {
    expect(formatRange(10, 20, { locale: 'en-US' })).toBe('10–20')
  })
})
