import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuNjI3IDUuOTg0djcuOTM4YTMuODA2IDMuODA2IDAgMSAwIDQuNzQ1IDBWNS45ODRjMC0uMzE5IDAtLjQ3OC0uMDE3LS42MTJBMi4wMyAyLjAzIDAgMCAwIDEyLjYxIDMuNjNjLS4xMzMtLjAxOC0uMjkyLS4wMTgtLjYxMS0uMDE4cy0uNDc4IDAtLjYxMS4wMThhMi4wMyAyLjAzIDAgMCAwLTEuNzQ0IDEuNzQzYy0uMDE4LjEzNC0uMDE4LjI5My0uMDE4LjYxMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTIuNjk0IDE2Ljg5OGEuNjk0LjY5NCAwIDEgMS0xLjM4OCAwIC42OTQuNjk0IDAgMCAxIDEuMzg5IDBaIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMTcuNTkzYS42OTQuNjk0IDAgMSAwIDAtMS4zOS42OTQuNjk0IDAgMCAwIDAgMS4zOVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjY5NCAxNi44OThhLjY5NC42OTQgMCAxIDEtMS4zODggMCAuNjk0LjY5NCAwIDAgMSAxLjM4OSAwWiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTkuNjI3IDUuOTg0djcuOTM4YTMuODA2IDMuODA2IDAgMSAwIDQuNzQ1IDBWNS45ODRjMC0uMzE5IDAtLjQ3OC0uMDE3LS42MTJBMi4wMyAyLjAzIDAgMCAwIDEyLjYxIDMuNjNjLS4xMzMtLjAxOC0uMjkyLS4wMTgtLjYxMS0uMDE4cy0uNDc4IDAtLjYxMS4wMThhMi4wMyAyLjAzIDAgMCAwLTEuNzQ0IDEuNzQzYy0uMDE4LjEzNC0uMDE4LjI5My0uMDE4LjYxMlptMy4wNjcgMTAuOTE0YS42OTQuNjk0IDAgMSAxLTEuMzg4IDAgLjY5NC42OTQgMCAwIDEgMS4zODkgMFoiLz48L3N2Zz4=)
 */
export const IconTermometer: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-termometer'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M9.627 5.984v7.938a3.806 3.806 0 1 0 4.745 0V5.984c0-.319 0-.478-.017-.612A2.03 2.03 0 0 0 12.61 3.63c-.133-.018-.292-.018-.611-.018s-.478 0-.611.018a2.03 2.03 0 0 0-1.744 1.743c-.018.134-.018.293-.018.612Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.694 16.898a.694.694 0 1 1-1.388 0 .694.694 0 0 1 1.389 0Z' />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 17.593a.694.694 0 1 0 0-1.39.694.694 0 0 0 0 1.39Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.694 16.898a.694.694 0 1 1-1.388 0 .694.694 0 0 1 1.389 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.627 5.984v7.938a3.806 3.806 0 1 0 4.745 0V5.984c0-.319 0-.478-.017-.612A2.03 2.03 0 0 0 12.61 3.63c-.133-.018-.292-.018-.611-.018s-.478 0-.611.018a2.03 2.03 0 0 0-1.744 1.743c-.018.134-.018.293-.018.612Zm3.067 10.914a.694.694 0 1 1-1.388 0 .694.694 0 0 1 1.389 0Z'
      />
    </svg>
  )
}
