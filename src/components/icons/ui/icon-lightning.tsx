import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0ibTYuMjIyIDEyLjI5OCA2Ljc5LTguNTY3Yy4zMzItLjQxNy45OTktLjA5Ny44OC40MjJMMTIuNTggOS44ODZhLjUuNSAwIDAgMCAuNDg3LjYxMmg0LjQ4M2EuNS41IDAgMCAxIC4zOTEuODExbC03LjExNiA4LjkyYy0uMzM0LjQxOC0xLjAwNC4wOS0uODc3LS40MzFsMS40OC02LjA3MWEuNS41IDAgMCAwLS40ODUtLjYxOUg2LjYxNGEuNS41IDAgMCAxLS4zOTItLjgxWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTIuNTA1IDMuMTczYy44NS0uOSAyLjQwNi0uMTEgMi4xMTkgMS4xNDdMMTMuMzggOS43NDhoNC4xN2MxLjA0NyAwIDEuNjMgMS4yMS45NzcgMi4wM2wtNy4xMTcgOC45MThjLS44MzUgMS4wNDctMi41MDkuMjI1LTIuMTkyLTEuMDc2bDEuNDA2LTUuNzYyaC00LjAxYy0xLjA0NSAwLTEuNjI5LTEuMjA3LS45OC0yLjAyNmw2Ljc5MS04LjU2Ny4wOC0uMDkyWm0tNS4zNzQgOS4xODVoMy44MTJjLjgxIDAgMS40MDcuNzYgMS4yMTUgMS41NDZsLTEuMjEzIDQuOTcgNi4wODYtNy42MjZoLTMuOTY0YTEuMjUgMS4yNSAwIDAgMS0xLjIxOS0xLjUzbDEuMDY2LTQuNjU1LTUuNzgzIDcuMjk1WiIvPjwvc3ZnPg==)
 */
export const IconLightning: Icon = ({ className, ...props }) => {
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
        d='m6.222 12.298 6.79-8.567c.332-.417.999-.097.88.422L12.58 9.886a.5.5 0 0 0 .487.612h4.483a.5.5 0 0 1 .391.811l-7.116 8.92c-.334.418-1.004.09-.877-.431l1.48-6.071a.5.5 0 0 0-.485-.619H6.614a.5.5 0 0 1-.392-.81Z'
        opacity='.2'
      />
      <path d='M12.505 3.173c.85-.9 2.406-.11 2.119 1.147L13.38 9.748h4.17c1.047 0 1.63 1.21.977 2.03l-7.117 8.918c-.835 1.047-2.509.225-2.192-1.076l1.406-5.762h-4.01c-1.045 0-1.629-1.207-.98-2.026l6.791-8.567.08-.092Zm-5.374 9.185h3.812c.81 0 1.407.76 1.215 1.546l-1.213 4.97 6.086-7.626h-3.964a1.25 1.25 0 0 1-1.219-1.53l1.066-4.655-5.783 7.295Z' />
    </svg>
  )
}
