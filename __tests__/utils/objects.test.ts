import { describe, expect, it } from 'vitest'
import { deepMerge } from '../../src/lib/utils/objects'

describe('deepMerge', () => {
  it('returns a clone when source is undefined', () => {
    const target = {
      a: 1,
      nested: {
        b: 2,
      },
    }

    const result = deepMerge({
      target,
    })

    expect(result).toEqual(target)
    expect(result).not.toBe(target)
    expect(result.nested).not.toBe(target.nested)
  })

  it('overrides primitive values', () => {
    const result = deepMerge({
      target: {
        a: 1,
        b: 2,
      },
      source: {
        b: 10,
      },
    })

    expect(result).toEqual({
      a: 1,
      b: 10,
    })
  })

  it('deep merges nested objects', () => {
    const result = deepMerge({
      target: {
        user: {
          name: 'John',
          age: 30,
        },
      },
      source: {
        user: {
          age: 40,
        },
      },
    })

    expect(result).toEqual({
      user: {
        name: 'John',
        age: 40,
      },
    })
  })

  it('keeps target values when source omits them', () => {
    const result = deepMerge({
      target: {
        a: 1,
        b: 2,
      },
      source: {
        a: 10,
      },
    })

    expect(result).toEqual({
      a: 10,
      b: 2,
    })
  })

  it('ignores undefined values', () => {
    const result = deepMerge({
      target: {
        a: 1,
      },
      source: {
        a: undefined,
      },
    })

    expect(result).toEqual({
      a: 1,
    })
  })

  it('replaces arrays instead of merging them', () => {
    const result = deepMerge({
      target: {
        values: [1, 2, 3],
      },
      source: {
        values: [4],
      },
    })

    expect(result).toEqual({
      values: [4],
    })
  })

  it('does not mutate the target object', () => {
    const target = {
      nested: {
        value: 1,
      },
    }

    deepMerge({
      target,
      source: {
        nested: {
          value: 2,
        },
      },
    })

    expect(target).toEqual({
      nested: {
        value: 1,
      },
    })
  })

  it('does not mutate the source object', () => {
    const source = {
      nested: {
        value: 2,
      },
    }

    deepMerge({
      target: {
        nested: {
          value: 1,
        },
      },
      source,
    })

    expect(source).toEqual({
      nested: {
        value: 2,
      },
    })
  })
})
