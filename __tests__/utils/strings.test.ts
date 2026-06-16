import { describe, it, expect } from 'vitest'
import { capitalizeFirstLetter, capitalizeAllWords } from '../../src/lib/utils/strings'

describe('strings utils', () => {
  it('capitalizeFirstLetter capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
    expect(capitalizeFirstLetter('world')).toBe('World')
    expect(capitalizeFirstLetter('')).toBe('')
  })

  it('capitalizeAllWords capitalizes the first letter of all words', () => {
    expect(capitalizeAllWords('hello world')).toBe('Hello World')
    expect(capitalizeAllWords('this is a test')).toBe('This Is A Test')
    expect(capitalizeAllWords('')).toBe('')
  })
})
