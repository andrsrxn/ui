import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguNjQyIDQuNDQxdjUuMDU0aDEuODVhLjcwOC43MDggMCAwIDEgMCAxLjQxNWgtMS44NXYyLjQ3NWgxLjg1YS43MDguNzA4IDAgMSAxIDAgMS40MTVoLTEuODV2NC4xOWMwIDEuMTU0LTEuNDg1IDEuNjIyLTIuMTQ2LjY3N2wtMy40LTQuODY3SDYuNzczdjQuMjc4YS43MDguNzA4IDAgMCAxLTEuNDE2IDBWMTQuOGgtMS44NWEuNzA4LjcwOCAwIDEgMSAwLTEuNDE1aDEuODVWMTAuOTFoLTEuODVhLjcwOC43MDggMCAwIDEgMC0xLjQxNWgxLjg1VjUuMDAzYzAtMS4xNiAxLjQ5LTEuNjE1IDIuMTQ2LS42NzVsMy42MSA1LjE2N2g2LjExM1Y0LjQ0YS43MDguNzA4IDAgMSAxIDEuNDE1IDBabS02LjUzOCA2LjQ3aDUuMTIzdjIuNDc0aC0zLjM5NGwtMS43My0yLjQ3NVptLjAwMyAyLjQ3NC0xLjczLTIuNDc1SDYuNzc0djIuNDc1aDUuMzMzWm0yLjcxNSAxLjQxNSAyLjQwNSAzLjQ0MXYtMy40NGgtMi40MDVaTTkuMzg4IDkuNDk1SDYuNzc0VjUuNzUzbDIuNjE0IDMuNzQyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
 */
export const IconCurrencyNgn: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fillRule='evenodd'
        d='M18.642 4.441v5.054h1.85a.708.708 0 0 1 0 1.415h-1.85v2.475h1.85a.708.708 0 1 1 0 1.415h-1.85v4.19c0 1.154-1.485 1.622-2.146.677l-3.4-4.867H6.773v4.278a.708.708 0 0 1-1.416 0V14.8h-1.85a.708.708 0 1 1 0-1.415h1.85V10.91h-1.85a.708.708 0 0 1 0-1.415h1.85V5.003c0-1.16 1.49-1.615 2.146-.675l3.61 5.167h6.113V4.44a.708.708 0 1 1 1.415 0Zm-6.538 6.47h5.123v2.474h-3.394l-1.73-2.475Zm.003 2.474-1.73-2.475H6.774v2.475h5.333Zm2.715 1.415 2.405 3.441v-3.44h-2.405ZM9.388 9.495H6.774V5.753l2.614 3.742Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
