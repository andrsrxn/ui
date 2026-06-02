import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PGNpcmNsZSBjeD0iMTguNTIzIiBjeT0iMTguNDYiIHI9IjEuNzk1IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xOS41NjcgMTguNDZhMS4wNDUgMS4wNDUgMCAxIDAtMi4wOSAwIDEuMDQ1IDEuMDQ1IDAgMCAwIDIuMDkgMFptLTYuODIyLjA0di02LjYyNGgtNy40OVYxOC41YS43NS43NSAwIDAgMS0xLjUgMFYzLjc1YS43NS43NSAwIDAgMSAxLjUgMHY2LjYyNmg3LjQ5VjMuNzVhLjc1Ljc1IDAgMCAxIDEuNSAwVjE4LjVhLjc1Ljc1IDAgMCAxLTEuNSAwWm04LjMyMi0uMDRhMi41NDUgMi41NDUgMCAwIDEtNS4wOSAwbC4wMDMtLjA1N2EuNzQ1Ljc0NSAwIDAgMS0uMDAyLS4wODZjLjAzLS42NTYuMjAyLTEuNjc3LjYyMi0yLjY5LjQxOC0xLjAwOCAxLjExNi0yLjA4NyAyLjI0Ny0yLjc0YS43NS43NSAwIDAgMSAuNzUgMS4zYy0uNjY2LjM4NC0xLjE1NiAxLjAzLTEuNTAxIDEuNzY3YTIuNTQ1IDIuNTQ1IDAgMCAxIDIuOTcyIDIuNTA3WiIvPjwvc3ZnPg==)
 */
export const IconTextHeading6: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <circle cx='18.523' cy='18.46' r='1.795' opacity='.2' />
      <path d='M19.567 18.46a1.045 1.045 0 1 0-2.09 0 1.045 1.045 0 0 0 2.09 0Zm-6.822.04v-6.624h-7.49V18.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0v6.626h7.49V3.75a.75.75 0 0 1 1.5 0V18.5a.75.75 0 0 1-1.5 0Zm8.322-.04a2.545 2.545 0 0 1-5.09 0l.003-.057a.745.745 0 0 1-.002-.086c.03-.656.202-1.677.622-2.69.418-1.008 1.116-2.087 2.247-2.74a.75.75 0 0 1 .75 1.3c-.666.384-1.156 1.03-1.501 1.767a2.545 2.545 0 0 1 2.972 2.507Z' />
    </svg>
  )
}
