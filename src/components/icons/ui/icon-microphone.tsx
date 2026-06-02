import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTguNjE3IDcuMDE2YTMuMzgzIDMuMzgzIDAgMCAxIDYuNzY2IDB2My45MTFhMy4zODMgMy4zODMgMCAwIDEtNi43NjYgMFY3LjAxNloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTUuNDY0IDExLjEyM1Y5LjU3YS43NS43NSAwIDAgMSAxLjUgMHYxLjU1M2E1LjAzNiA1LjAzNiAwIDAgMCAxMC4wNzIgMFY5LjU3YS43NS43NSAwIDAgMSAxLjUgMHYxLjU1M2E2LjUzNSA2LjUzNSAwIDAgMS01Ljc4NiA2LjQ5MXYyLjAxN2gxLjI5NWEuNzUuNzUgMCAwIDEgMCAxLjVoLTQuMDlhLjc1Ljc1IDAgMCAxIDAtMS41aDEuMjk1di0yLjAxN2E2LjUzNSA2LjUzNSAwIDAgMS01Ljc4Ni02LjQ5MVptOS4xNy00LjEwOGEyLjYzMyAyLjYzMyAwIDAgMC01LjI2NyAwdjMuOTEzYTIuNjM0IDIuNjM0IDAgMCAwIDUuMjY2IDBWNy4wMTRabTEuNSAzLjkxM2E0LjEzMyA0LjEzMyAwIDAgMS04LjI2NyAwVjcuMDE0YTQuMTM0IDQuMTM0IDAgMCAxIDguMjY2IDB2My45MTNaIi8+PC9zdmc+)
 */
export const IconMicrophone: Icon = ({ className, ...props }) => {
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
        d='M8.617 7.016a3.383 3.383 0 0 1 6.766 0v3.911a3.383 3.383 0 0 1-6.766 0V7.016Z'
        opacity='.2'
      />
      <path d='M5.464 11.123V9.57a.75.75 0 0 1 1.5 0v1.553a5.036 5.036 0 0 0 10.072 0V9.57a.75.75 0 0 1 1.5 0v1.553a6.535 6.535 0 0 1-5.786 6.491v2.017h1.295a.75.75 0 0 1 0 1.5h-4.09a.75.75 0 0 1 0-1.5h1.295v-2.017a6.535 6.535 0 0 1-5.786-6.491Zm9.17-4.108a2.633 2.633 0 0 0-5.267 0v3.913a2.634 2.634 0 0 0 5.266 0V7.014Zm1.5 3.913a4.133 4.133 0 0 1-8.267 0V7.014a4.134 4.134 0 0 1 8.266 0v3.913Z' />
    </svg>
  )
}
