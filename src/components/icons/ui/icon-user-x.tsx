import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMy4wNjhjLTMuNTcyIDAtNi45MDQgMi43MTYtNy40MSA2LjQ4LS4wNzUuNTQ3LjM4Ljk5OC45MzMuOTk4aDEwLjY0M2ExIDEgMCAwIDAgLjczLS4zMTlsMS42OTMtMS44MTVhLjkyMi45MjIgMCAwIDAgLjE4LTEuMDIzYy0xLjIzNS0yLjYtMy45MjYtNC4zMi02Ljc2OS00LjMyWiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2LjgwNyA4LjI2MWE0LjgwNyA0LjgwNyAwIDEgMS05LjYxNCAwIDQuODA3IDQuODA3IDAgMCAxIDkuNjE0IDBaIi8+PC9nPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMTMuMDY4YTQuODA3IDQuODA3IDAgMSAwIDAtOS42MTMgNC44MDcgNC44MDcgMCAwIDAgMCA5LjYxM1ptMCAwYy0zLjg4IDAtNy40NzcgMy4yMDUtNy40NzcgNy40NzhNMTIgMTMuMDY4Yy44NjggMCAxLjcyMS4xNiAyLjUyNC40NTdNMTYgMTZsNC42NzQgNC42NzRtMC00LjY3NEwxNiAyMC42NzQiLz48L3N2Zz4=)
 */
export const IconUserX: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-user-x'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.068c-3.572 0-6.904 2.716-7.41 6.48-.075.547.38.998.933.998h10.643a1 1 0 0 0 .73-.319l1.693-1.815a.922.922 0 0 0 .18-1.023c-1.235-2.6-3.926-4.32-6.769-4.32Z'
        />
        <path
          fill='currentColor'
          d='M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457M16 16l4.674 4.674m0-4.674L16 20.674'
      />
    </svg>
  )
}
