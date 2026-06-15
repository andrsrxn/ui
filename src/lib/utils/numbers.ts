import type { Currency } from '../constants/geo'

type CompactDisplay = Intl.NumberFormatOptions['compactDisplay']
type CurrencyDisplay = Intl.NumberFormatOptions['currencyDisplay']
type UnitDisplay = Intl.NumberFormatOptions['unitDisplay']
type SignDisplay = Intl.NumberFormatOptions['signDisplay']
type RoundingMode = Intl.NumberFormatOptions['roundingMode']

interface BaseOptions {
  locale?: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  minimumIntegerDigits?: number
  minimumSignificantDigits?: number
  maximumSignificantDigits?: number
  signDisplay?: SignDisplay
  roundingMode?: RoundingMode
  useGrouping?: boolean
}

export interface DecimalOptions extends BaseOptions {
  compact?: CompactDisplay
}

export interface CurrencyOptions extends BaseOptions {
  currency: Currency
  currencyDisplay?: CurrencyDisplay
  compact?: CompactDisplay
}

export interface PercentOptions extends BaseOptions {}

export interface UnitOptions extends BaseOptions {
  unit: string
  unitDisplay?: UnitDisplay
  compact?: CompactDisplay
}

export interface RangeOptions extends BaseOptions {
  compact?: CompactDisplay
}

const MAX_PERCENT = 100

const buildIntlOptions = (
  style: Intl.NumberFormatOptions['style'],
  options: BaseOptions & {
    currency?: string
    currencyDisplay?: CurrencyDisplay
    unit?: string
    unitDisplay?: UnitDisplay
    compact?: CompactDisplay
  }
): Intl.NumberFormatOptions => ({
  style,
  useGrouping: options.useGrouping ?? true,
  signDisplay: options.signDisplay ?? 'auto',
  roundingMode: options.roundingMode ?? 'halfExpand',
  ...(options.currency && {
    currency: options.currency,
    currencyDisplay: options.currencyDisplay ?? 'symbol',
  }),
  ...(options.unit && { unit: options.unit, unitDisplay: options.unitDisplay ?? 'short' }),
  ...(options.compact && { notation: 'compact', compactDisplay: options.compact }),
  ...(options.minimumFractionDigits !== undefined && {
    minimumFractionDigits: options.minimumFractionDigits,
  }),
  ...(options.maximumFractionDigits !== undefined && {
    maximumFractionDigits: options.maximumFractionDigits,
  }),
  ...(options.minimumIntegerDigits !== undefined && {
    minimumIntegerDigits: options.minimumIntegerDigits,
  }),
  ...(options.minimumSignificantDigits !== undefined && {
    minimumSignificantDigits: options.minimumSignificantDigits,
  }),
  ...(options.maximumSignificantDigits !== undefined && {
    maximumSignificantDigits: options.maximumSignificantDigits,
  }),
})

const safeValue = (value: number): number => (Number.isFinite(value) ? value : 0)

const fmt = ({
  value,
  locale,
  intlOpts,
}: {
  value: number
  locale?: string
  intlOpts: Intl.NumberFormatOptions
}) => {
  try {
    return new Intl.NumberFormat(locale, intlOpts).format(safeValue(value))
  } catch {
    return new Intl.NumberFormat('en-US', intlOpts).format(safeValue(value))
  }
}

export const formatNumber = (value: number, options: DecimalOptions = {}): string =>
  fmt({
    value: safeValue(value),
    locale: options.locale,
    intlOpts: buildIntlOptions('decimal', options),
  })

export const formatCurrency = (value: number, options: CurrencyOptions): string =>
  fmt({
    value: safeValue(value),
    locale: options.locale,
    intlOpts: buildIntlOptions('currency', {
      ...options,
      minimumFractionDigits: options.minimumFractionDigits ?? 2,
      maximumFractionDigits: options.maximumFractionDigits ?? 2,
    }),
  })

export const formatPercent = (value: number, options: PercentOptions = {}): string =>
  fmt({
    value: safeValue(value / MAX_PERCENT),
    locale: options.locale,
    intlOpts: buildIntlOptions('percent', {
      ...options,
      minimumFractionDigits: options.minimumFractionDigits ?? 0,
      maximumFractionDigits: options.maximumFractionDigits ?? 2,
    }),
  })

export const formatUnit = (value: number, options: UnitOptions): string =>
  fmt({
    value: safeValue(value),
    locale: options.locale,
    intlOpts: buildIntlOptions('unit', options),
  })

export const formatCompact = (value: number, options: DecimalOptions = {}): string =>
  fmt({
    value: safeValue(value),
    locale: options.locale,
    intlOpts: buildIntlOptions('decimal', { ...options, compact: options.compact ?? 'short' }),
  })

export const formatRange = (start: number, end: number, options: RangeOptions = {}): string =>
  new Intl.NumberFormat(options.locale, buildIntlOptions('decimal', options)).formatRange(
    safeValue(start),
    safeValue(end)
  )
