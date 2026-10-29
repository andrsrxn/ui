import { PREFERENCES } from '@andrsrxn/constants/preferences'

const safeValue = (value: number): number => (Number.isFinite(value) ? value : 0)

export const formatNumber = (value: number) => {
  const cleanValue = safeValue(value)

  return new Intl.NumberFormat(PREFERENCES.locale, {
    style: 'decimal',
    useGrouping: true,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(cleanValue)
}

export const formatCurrency = (value: number): string => {
  const cleanValue = safeValue(value)

  return new Intl.NumberFormat(PREFERENCES.locale, {
    currency: PREFERENCES.currency,
    currencySign: 'accounting',
    style: 'currency',
    currencyDisplay: 'code',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cleanValue)
}
