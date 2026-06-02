import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEyLjg3MiAxNy4yNDFoNC42NmEyLjkxMSAyLjkxMSAwIDAgMCAuNTU1LTUuNzcgNS4yNDEgNS4yNDEgMCAwIDAtNS4yMTUtNC43MTJWMTcuMjRaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik01LjE3NiAxNy4yNDF2LTYuOTg4YS43MDguNzA4IDAgMSAxIDEuNDE2IDB2Ni45ODhhLjcwOC43MDggMCAwIDEtMS40MTYgMFptMi4zMyAwdi03LjU3YS43MDkuNzA5IDAgMCAxIDEuNDE2IDB2Ny41N2EuNzA4LjcwOCAwIDAgMS0xLjQxNyAwWm0yLjMyOSAwdi05LjlhLjcwOS43MDkgMCAwIDEgMS40MTYgMHY5LjlhLjcwOC43MDggMCAwIDEtMS40MTYgMFptMy4wMzctMTEuMTlhNS45NSA1Ljk1IDAgMCAxIDUuODQ4IDQuODU4IDMuNjIxIDMuNjIxIDAgMCAxLTEuMTg5IDcuMDRoLTQuNjU4YS43MDguNzA4IDAgMCAxIDAtMS40MTZoNC42NThhMi4yMDUgMi4yMDUgMCAwIDAgLjQyMi00LjM2Ny43MDkuNzA5IDAgMCAxLS41Ny0uNjI0IDQuNTMzIDQuNTMzIDAgMCAwLTQuNTEtNC4wNzUuNzA4LjcwOCAwIDEgMSAwLTEuNDE2Wk0yLjg0NyAxNS40OTRWMTJhLjcwOS43MDkgMCAwIDEgMS40MTcgMHYzLjQ5NGEuNzA4LjcwOCAwIDEgMS0xLjQxNyAwWiIvPjwvc3ZnPg==)
 */
export const IconLogoSoundcloud: Icon = ({ className, ...props }) => {
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
        d='M12.872 17.241h4.66a2.911 2.911 0 0 0 .555-5.77 5.241 5.241 0 0 0-5.215-4.712V17.24Z'
        opacity='.2'
      />
      <path d='M5.176 17.241v-6.988a.708.708 0 1 1 1.416 0v6.988a.708.708 0 0 1-1.416 0Zm2.33 0v-7.57a.709.709 0 0 1 1.416 0v7.57a.708.708 0 0 1-1.417 0Zm2.329 0v-9.9a.709.709 0 0 1 1.416 0v9.9a.708.708 0 0 1-1.416 0Zm3.037-11.19a5.95 5.95 0 0 1 5.848 4.858 3.621 3.621 0 0 1-1.189 7.04h-4.658a.708.708 0 0 1 0-1.416h4.658a2.205 2.205 0 0 0 .422-4.367.709.709 0 0 1-.57-.624 4.533 4.533 0 0 0-4.51-4.075.708.708 0 1 1 0-1.416ZM2.847 15.494V12a.709.709 0 0 1 1.417 0v3.494a.708.708 0 1 1-1.417 0Z' />
    </svg>
  )
}
