import { describe, it, expect } from 'vitest'
import { cn } from '../../src/lib/utils/theme'

describe('theme utils — cn()', () => {
  // ─── Basic tailwind-merge behavior ────────────────────────────────
  describe('core clsx + tailwind-merge', () => {
    it('concatenates non-conflicting classes', () => {
      expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
    })

    it('resolves conflicting standard utilities (last wins)', () => {
      expect(cn('px-2 py-1', 'p-4')).toBe('p-4')
    })

    it('handles conditional objects from clsx', () => {
      expect(cn('bg-red-500', { 'text-white': true, hidden: false })).toBe('bg-red-500 text-white')
    })

    it('strips falsy values (undefined, null, false)', () => {
      expect(cn('font-bold', undefined, null, false, 'text-sm')).toBe('font-bold text-sm')
    })

    it('resolves conflicting text-size with standard values', () => {
      expect(cn('text-lg', 'text-sm')).toBe('text-sm')
    })
  })

  // ─── Custom spacing ───────────────────────────────────────────────
  describe('extended spacing tokens', () => {
    it('merges icon spacing (p-icon-xs → p-icon-lg)', () => {
      expect(cn('p-icon-xs', 'p-icon-lg')).toBe('p-icon-lg')
    })

    it('merges icon spacing across sizes', () => {
      expect(cn('gap-icon-sm', 'gap-icon-2xl')).toBe('gap-icon-2xl')
    })

    it('merges icon-responsive spacing', () => {
      expect(cn('size-icon-base', 'size-icon-responsive')).toBe('size-icon-responsive')
    })

    it('merges named spacing scales (3xs → 7xl)', () => {
      expect(cn('p-xs', 'p-lg')).toBe('p-lg')
    })

    it('merges named spacing across axis shorthands', () => {
      expect(cn('px-sm py-md', 'p-xl')).toBe('p-xl')
    })

    it('resolves gap with custom spacing', () => {
      expect(cn('gap-2xs', 'gap-3xl')).toBe('gap-3xl')
    })

    it('resolves margin with custom spacing', () => {
      expect(cn('mt-sm', 'mt-2xl')).toBe('mt-2xl')
    })

    it('resolves width/height with icon spacing', () => {
      expect(cn('w-icon-3xl', 'w-icon-5xl')).toBe('w-icon-5xl')
    })
  })

  // ─── Custom font families ─────────────────────────────────────────
  describe('extended font families', () => {
    it('merges custom font-heading over font-body', () => {
      expect(cn('font-body', 'font-heading')).toBe('font-heading')
    })

    it('merges font-label over font-mono', () => {
      expect(cn('font-mono', 'font-label')).toBe('font-label')
    })

    it('merges font-inherit over any other font', () => {
      expect(cn('font-heading', 'font-inherit')).toBe('font-inherit')
    })

    it('merges standard font-sans with custom font-body', () => {
      expect(cn('font-sans', 'font-body')).toBe('font-body')
    })
  })

  // ─── Custom text / typography scales ──────────────────────────────
  describe('extended text (typography) scales', () => {
    it('merges body text sizes', () => {
      expect(cn('text-body-xs', 'text-body-lg')).toBe('text-body-lg')
    })

    it('merges body-inherit over body sizes', () => {
      expect(cn('text-body-sm', 'text-body-inherit')).toBe('text-body-inherit')
    })

    it('merges label text sizes', () => {
      expect(cn('text-label-sm', 'text-label-xl')).toBe('text-label-xl')
    })

    it('merges large label sizes (2xl–4xl)', () => {
      expect(cn('text-label-2xl', 'text-label-4xl')).toBe('text-label-4xl')
    })

    it('merges heading text sizes', () => {
      expect(cn('text-heading-6-sm', 'text-heading-3-base')).toBe('text-heading-3-base')
    })

    it('merges heading display sizes', () => {
      expect(cn('text-heading-2-display-sm', 'text-heading-1-display-base')).toBe(
        'text-heading-1-display-base'
      )
    })

    it('merges heading-1 sm/base variants', () => {
      expect(cn('text-heading-1-sm', 'text-heading-1-base')).toBe('text-heading-1-base')
    })

    it('merges heading-2-display sm/base variants', () => {
      expect(cn('text-heading-2-display-sm', 'text-heading-2-display-base')).toBe(
        'text-heading-2-display-base'
      )
    })

    it('merges custom text sizes with standard text sizes', () => {
      expect(cn('text-sm', 'text-body-base')).toBe('text-body-base')
    })

    it('merges across body and label categories', () => {
      expect(cn('text-body-lg', 'text-label-base')).toBe('text-label-base')
    })
  })

  // ─── Custom font-weight ───────────────────────────────────────────
  describe('extended font-weight', () => {
    it('merges custom font-regular with standard weights', () => {
      expect(cn('font-bold', 'font-regular')).toBe('font-regular')
    })

    it('merges font-regular with font-semibold', () => {
      expect(cn('font-regular', 'font-semibold')).toBe('font-semibold')
    })
  })

  // ─── Custom radius ────────────────────────────────────────────────
  describe('extended radius', () => {
    it('merges standard rounded-lg with custom rounded-base', () => {
      expect(cn('rounded-lg', 'rounded-base')).toBe('rounded-base')
    })

    it('merges custom rounded-base with rounded-full', () => {
      expect(cn('rounded-base', 'rounded-full')).toBe('rounded-full')
    })

    it('merges custom rounded-base with rounded-none', () => {
      expect(cn('rounded-base', 'rounded-none')).toBe('rounded-none')
    })
  })

  // ─── Custom shadows ───────────────────────────────────────────────
  describe('extended shadow', () => {
    it('merges shadow-base with shadow-lg', () => {
      expect(cn('shadow-base', 'shadow-lg')).toBe('shadow-lg')
    })

    it('merges shadow-xs with shadow-base', () => {
      expect(cn('shadow-xs', 'shadow-base')).toBe('shadow-base')
    })

    it('merges shadow-inner with shadow-none', () => {
      expect(cn('shadow-inner', 'shadow-none')).toBe('shadow-none')
    })

    it('merges shadow-base with shadow-xl', () => {
      expect(cn('shadow-base', 'shadow-xl')).toBe('shadow-xl')
    })
  })

  // ─── Custom drop-shadow ───────────────────────────────────────────
  describe('extended drop-shadow', () => {
    it('merges drop-shadow-base with drop-shadow-lg', () => {
      expect(cn('drop-shadow-base', 'drop-shadow-lg')).toBe('drop-shadow-lg')
    })

    it('merges drop-shadow-xs with drop-shadow-base', () => {
      expect(cn('drop-shadow-xs', 'drop-shadow-base')).toBe('drop-shadow-base')
    })
  })

  // ─── Custom text-shadow ───────────────────────────────────────────
  describe('extended text-shadow', () => {
    it('merges text-shadow-base with text-shadow-none', () => {
      expect(cn('text-shadow-base', 'text-shadow-none')).toBe('text-shadow-none')
    })
  })

  // ─── Custom leading (line-height) ─────────────────────────────────
  describe('extended leading', () => {
    it('merges leading-xs with leading-base', () => {
      expect(cn('leading-xs', 'leading-base')).toBe('leading-base')
    })

    it('merges leading-sm with leading-xs', () => {
      expect(cn('leading-sm', 'leading-xs')).toBe('leading-xs')
    })

    it('merges standard leading-none with custom leading-base', () => {
      expect(cn('leading-none', 'leading-base')).toBe('leading-base')
    })
  })

  // ─── Custom tracking (letter-spacing) ─────────────────────────────
  describe('extended tracking', () => {
    it('merges standard tracking-tight with custom tracking-heading', () => {
      expect(cn('tracking-tight', 'tracking-heading')).toBe('tracking-heading')
    })

    it('merges tracking-heading with tracking-normal', () => {
      expect(cn('tracking-heading', 'tracking-normal')).toBe('tracking-normal')
    })
  })

  // ─── Custom ease (timing functions) ───────────────────────────────
  describe('extended ease', () => {
    it('merges ease-base with ease-out', () => {
      expect(cn('ease-base', 'ease-out')).toBe('ease-out')
    })

    it('merges ease-elastic with ease-base', () => {
      expect(cn('ease-elastic', 'ease-base')).toBe('ease-base')
    })

    it('merges standard ease-in with custom ease-elastic', () => {
      expect(cn('ease-in', 'ease-elastic')).toBe('ease-elastic')
    })
  })

  // ─── Custom animate ───────────────────────────────────────────────
  describe('extended animate', () => {
    it('merges animate-collapsible-down with animate-collapsible-up', () => {
      expect(cn('animate-collapsible-down', 'animate-collapsible-up')).toBe(
        'animate-collapsible-up'
      )
    })

    it('merges animate-accordion-down with animate-accordion-up', () => {
      expect(cn('animate-accordion-down', 'animate-accordion-up')).toBe('animate-accordion-up')
    })

    it('merges animate-shake with animate-none', () => {
      expect(cn('animate-shake', 'animate-none')).toBe('animate-none')
    })

    it('merges animate-spin with custom animate-shake', () => {
      expect(cn('animate-spin', 'animate-shake')).toBe('animate-shake')
    })
  })

  // ─── Custom breakpoints ───────────────────────────────────────────
  describe('extended breakpoints as responsive prefixes', () => {
    it('keeps both when breakpoint prefixes differ', () => {
      expect(cn('mobile-sm:p-2', 'tablet:p-4')).toBe('mobile-sm:p-2 tablet:p-4')
    })

    it('merges same breakpoint conflicting utilities', () => {
      expect(cn('laptop:text-sm', 'laptop:text-lg')).toBe('laptop:text-lg')
    })

    it('merges custom breakpoint display', () => {
      expect(cn('display:hidden', 'display:block')).toBe('display:block')
    })

    it('merges desktop breakpoint with custom spacing', () => {
      expect(cn('desktop:p-xs', 'desktop:p-lg')).toBe('desktop:p-lg')
    })
  })

  // ─── Design system semantic colors from globals.css ───────────────
  describe('design system semantic color merging', () => {
    it('merges text colors (text-primary vs text-secondary)', () => {
      expect(cn('text-primary', 'text-secondary')).toBe('text-secondary')
    })

    it('merges bg-base with bg-surface', () => {
      expect(cn('bg-base', 'bg-surface')).toBe('bg-surface')
    })

    it('merges bg-brand-subtle with bg-brand', () => {
      expect(cn('bg-brand-subtle', 'bg-brand')).toBe('bg-brand')
    })

    it('merges feedback background colors', () => {
      expect(cn('bg-success', 'bg-danger')).toBe('bg-danger')
    })

    it('merges border-base with border-focus', () => {
      expect(cn('border-base', 'border-focus')).toBe('border-focus')
    })

    it('merges text-info with text-danger (feedback text)', () => {
      expect(cn('text-info', 'text-danger')).toBe('text-danger')
    })

    it('merges accent background with feedback background', () => {
      expect(cn('bg-accent-teal', 'bg-info')).toBe('bg-info')
    })

    it('merges brand palette colors', () => {
      expect(cn('bg-brand-500', 'bg-brand-700')).toBe('bg-brand-700')
    })

    it('merges neutral palette colors', () => {
      expect(cn('text-neutral-100', 'text-neutral-800')).toBe('text-neutral-800')
    })

    it('merges accent palette colors', () => {
      expect(cn('bg-accent-purple-600', 'bg-accent-purple-400')).toBe('bg-accent-purple-400')
    })
  })

  // ─── Complex real-world merging scenarios ─────────────────────────
  describe('complex real-world scenarios', () => {
    it('component base + variant override (button-like)', () => {
      const base = 'font-label text-label-sm px-md py-xs rounded-base bg-brand text-content'
      const override = 'bg-danger text-danger-content px-lg'
      expect(cn(base, override)).toBe(
        'font-label text-label-sm py-xs rounded-base bg-danger text-danger-content px-lg'
      )
    })

    it('typography preset + responsive overrides', () => {
      const preset = 'font-heading text-heading-3-sm tracking-heading leading-xs'
      const responsive = 'tablet:text-heading-3-base desktop:text-heading-2-base'
      expect(cn(preset, responsive)).toBe(
        'font-heading text-heading-3-sm tracking-heading leading-xs tablet:text-heading-3-base desktop:text-heading-2-base'
      )
    })

    it('animation base + override', () => {
      const base = 'animate-accordion-down ease-base'
      const override = 'animate-accordion-up ease-out'
      expect(cn(base, override)).toBe('animate-accordion-up ease-out')
    })

    it('shadow layering: base → elevated', () => {
      expect(cn('rounded-base shadow-xs', 'shadow-xl')).toBe('rounded-base shadow-xl')
    })

    it('spacing override from container level', () => {
      const card = 'p-md rounded-lg shadow-base'
      const compact = 'p-xs shadow-xs'
      expect(cn(card, compact)).toBe('rounded-lg p-xs shadow-xs')
    })

    it('icon sizing chain', () => {
      expect(cn('size-icon-sm', 'size-icon-base', 'size-icon-lg')).toBe('size-icon-lg')
    })

    it('conditional + custom tokens', () => {
      const isActive = true
      const isDisabled = false
      expect(
        cn(
          'bg-base text-primary font-body',
          // biome-ignore lint/nursery/noUnnecessaryConditions: for testing purposes
          isActive && 'bg-selected text-selected',
          // biome-ignore lint/nursery/noUnnecessaryConditions: for testing purposes
          isDisabled && 'pointer-events-none opacity-40'
        )
      ).toBe('font-body bg-selected text-selected')
    })

    it('preserves non-conflicting utilities alongside custom tokens', () => {
      expect(cn('gap-sm font-label text-label-base flex items-center')).toBe(
        'gap-sm font-label text-label-base flex items-center'
      )
    })
  })
})
