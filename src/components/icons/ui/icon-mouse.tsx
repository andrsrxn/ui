import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTYuNzcgMTEuNTU3aDEwLjQ2djMuNzY2YTUuMjMxIDUuMjMxIDAgMCAxLTEwLjQ2IDB2LTMuNzY2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTYuNDYgMTIuMzA4SDcuNDk4djMuMDQzYTQuNDggNC40OCAwIDAgMCA4Ljk2MiAwdi0zLjA0M1ptLTYuNDgyLTQuOTFhMiAyIDAgMCAxIDEuMjMtMS44NDZ2LTEuMjZhNC40ODEgNC40ODEgMCAwIDAtMy43MSA0LjQxMnYyLjEwNGgzLjcxdi0uODA0YTIgMiAwIDAgMS0xLjIzLTEuODQ0di0uNzYyWm03Ljk4MiA3Ljk1M2E1Ljk4MSA1Ljk4MSAwIDAgMS0xMS45NjIgMFY4LjcwNGE1Ljk4IDUuOTggMCAwIDEgMTEuOTYyIDB2Ni42NDdaTTExLjQ3NyA4LjE2YS41LjUgMCAwIDAgLjQ5My41aC4wMDhhLjUwMS41MDEgMCAwIDAgLjUwMi0uNXYtLjc2MmEuNTAxLjUwMSAwIDAgMC0uNTAyLS41MDFoLS4wMDhhLjUwMi41MDIgMCAwIDAtLjQ5My41di43NjNabTIuNTAyIDBhMiAyIDAgMCAxLTEuMjcxIDEuODZ2Ljc4OGgzLjc1MlY4LjcwNGE0LjQ4MiA0LjQ4MiAwIDAgMC0zLjc1Mi00LjQydjEuMjUyYTIgMiAwIDAgMSAxLjI3MSAxLjg2MnYuNzYyWiIvPjwvc3ZnPg==)
 */
export const IconMouse: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M6.77 11.557h10.46v3.766a5.231 5.231 0 0 1-10.46 0v-3.766Z' opacity='.2' />
      <path d='M16.46 12.308H7.498v3.043a4.48 4.48 0 0 0 8.962 0v-3.043Zm-6.482-4.91a2 2 0 0 1 1.23-1.846v-1.26a4.481 4.481 0 0 0-3.71 4.412v2.104h3.71v-.804a2 2 0 0 1-1.23-1.844v-.762Zm7.982 7.953a5.981 5.981 0 0 1-11.962 0V8.704a5.98 5.98 0 0 1 11.962 0v6.647ZM11.477 8.16a.5.5 0 0 0 .493.5h.008a.501.501 0 0 0 .502-.5v-.762a.501.501 0 0 0-.502-.501h-.008a.502.502 0 0 0-.493.5v.763Zm2.502 0a2 2 0 0 1-1.271 1.86v.788h3.752V8.704a4.482 4.482 0 0 0-3.752-4.42v1.252a2 2 0 0 1 1.271 1.862v.762Z' />
    </svg>
  )
}
