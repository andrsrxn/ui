import { describe, expect, it, vi, afterEach } from 'vitest'
import { slugify } from '../../src/lib/utils/strings'

describe('slugify', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('creates a slug from plain text', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('trims leading and trailing spaces', () => {
    expect(slugify('   Hello World   ')).toBe('hello-world')
  })

  it('collapses multiple spaces into a single hyphen', () => {
    expect(slugify('Hello     World')).toBe('hello-world')
  })

  it('removes punctuation', () => {
    expect(slugify('Hello, World!')).toBe('hello-world')
  })

  it('collapses multiple hyphens', () => {
    expect(slugify('hello---world')).toBe('hello-world')
  })

  it('removes leading and trailing hyphens', () => {
    expect(slugify('  --hello-world--  ')).toBe('hello-world')
  })

  it('removes accents', () => {
    expect(slugify('ÁÉÍÓÚ')).toBe('aeiou')
  })

  it('replaces german special characters', () => {
    expect(slugify('ä ö ü ß')).toBe('ae-oe-ue-ss')
  })

  it('replaces spanish ñ', () => {
    expect(slugify('niño')).toBe('nino')
  })

  it('replaces french ligatures', () => {
    expect(slugify('œuvre æther')).toBe('oeuvre-aether')
  })

  it('returns a fallback slug when text is empty', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123_456_789)

    expect(slugify('')).toMatch(/^[a-z0-9]{7}$/u)
  })

  it('returns a prefixed fallback when slug becomes empty', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.123_456_789)

    expect(slugify('!!!')).toMatch(/^slug-[a-z0-9]{7}$/u)
  })
})
