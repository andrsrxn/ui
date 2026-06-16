import { describe, it, expect } from 'vitest'
import { formatDate } from '../../src/lib/utils/dates'

describe('dates utils', () => {
  it('formats date to standard PP format without time and weekday', () => {
    const date = new Date('2023-01-01T12:00:00Z')
    const formatted = formatDate({ date, timeZone: 'America/New_York' })
    expect(formatted).toBe('Jan 1, 2023')
  })

  it('formats date including weekday', () => {
    const date = new Date('2023-01-01T12:00:00Z')
    const formatted = formatDate({ date, includeWeekDay: true, timeZone: 'America/New_York' })
    expect(formatted).toBe('Sunday, Jan 1, 2023')
  })

  it('formats date including time', () => {
    const date = new Date('2023-01-01T12:00:00Z')
    const formatted = formatDate({ date, includeTime: true, timeZone: 'America/New_York' })
    // In America/New_York (UTC-5), 12:00 UTC is 07:00 AM
    expect(formatted).toBe('Jan 1, 2023, 7:00 AM')
  })

  it('formats date including both weekday and time', () => {
    const date = new Date('2023-01-01T12:00:00Z')
    const formatted = formatDate({
      date,
      includeWeekDay: true,
      includeTime: true,
      timeZone: 'America/New_York',
    })
    expect(formatted).toBe('Sunday, Jan 1, 2023, 7:00 AM')
  })

  it('handles string input correctly', () => {
    const formatted = formatDate({ date: '2023-01-01T12:00:00Z', timeZone: 'America/New_York' })
    expect(formatted).toBe('Jan 1, 2023')
  })
})
