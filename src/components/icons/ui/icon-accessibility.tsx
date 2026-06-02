import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE0LjE2IDUuODRhMi4xNiAyLjE2IDAgMSAxLTQuMzIgMCAyLjE2IDIuMTYgMCAwIDEgNC4zMiAwWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTEuMjUgMTQuNTYzdi0yLjIxOGMwLS41LS4yOTktLjk1Mi0uNzU5LTEuMTQ5TDUuNzA1IDkuMTUxYS43NS43NSAwIDAgMSAuNTktMS4zNzlsNC43ODUgMi4wNDVjLjM1NS4xNTIuNjY1LjM3My45Mi42NDQuMjU1LS4yNy41NjUtLjQ5Mi45Mi0uNjQ0bDQuNzg1LTIuMDQ1YS43NS43NSAwIDAgMSAuNTkgMS4zOGwtNC43ODYgMi4wNDRhMS4yNSAxLjI1IDAgMCAwLS43NTkgMS4xNXYyLjIxN2MwIC4yNjUuMDg1LjUyMy4yNDEuNzM3bDMuNDEgNC42NjhhLjc1Ljc1IDAgMSAxLTEuMjEuODg0TDEyIDE2LjQ4NmwtMy4xOSA0LjM2NmEuNzUxLjc1MSAwIDAgMS0xLjIxMS0uODg0bDMuNDEtNC42NjhhMS4yNSAxLjI1IDAgMCAwIC4yNDEtLjczN1ptMi4xNi04LjcyMmExLjQxIDEuNDEgMCAxIDAtMi44MiAwIDEuNDEgMS40MSAwIDAgMCAyLjgyIDBabTEuNSAwYTIuOTEgMi45MSAwIDEgMS01LjgyLS4wMDIgMi45MSAyLjkxIDAgMCAxIDUuODIuMDAyWiIvPjwvc3ZnPg==)
 */
export const IconAccessibility: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M14.16 5.84a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0Z' opacity='.2' />
      <path d='M11.25 14.563v-2.218c0-.5-.299-.952-.759-1.149L5.705 9.151a.75.75 0 0 1 .59-1.379l4.785 2.045c.355.152.665.373.92.644.255-.27.565-.492.92-.644l4.785-2.045a.75.75 0 0 1 .59 1.38l-4.786 2.044a1.25 1.25 0 0 0-.759 1.15v2.217c0 .265.085.523.241.737l3.41 4.668a.75.75 0 1 1-1.21.884L12 16.486l-3.19 4.366a.751.751 0 0 1-1.211-.884l3.41-4.668a1.25 1.25 0 0 0 .241-.737Zm2.16-8.722a1.41 1.41 0 1 0-2.82 0 1.41 1.41 0 0 0 2.82 0Zm1.5 0a2.91 2.91 0 1 1-5.82-.002 2.91 2.91 0 0 1 5.82.002Z' />
    </svg>
  )
}
