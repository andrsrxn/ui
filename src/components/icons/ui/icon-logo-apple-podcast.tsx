import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMy4zODFhMi4wNzIgMi4wNzIgMCAxIDAgMC00LjE0NCAyLjA3MiAyLjA3MiAwIDAgMCAwIDQuMTQ0WiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyLjMwNyAyMC4yODhoLS42MTRhMS4zOTggMS4zOTggMCAwIDEtMS4zNi0xLjA0Nkw5LjI4IDE1LjA5OGExLjM4NiAxLjM4NiAwIDAgMSAxLjM2LTEuNzE3aDIuNzJhMS4zODcgMS4zODcgMCAwIDEgMS4zNiAxLjcxN2wtMS4wNTIgNC4xNDRhMS4zOTkgMS4zOTkgMCAwIDEtMS4zNiAxLjA0NloiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik02LjY3NiAxMy40ODNhNS41MjYgNS41MjYgMCAxIDEgMTAuNjQ4IDBtLTkuOTMyIDUuNDA4YTguMjg4IDguMjg4IDAgMSAxIDkuMjE2IDBtLTIuNTM2LTcuNTgyYTIuMDcyIDIuMDcyIDAgMSAxLTQuMTQ0IDAgMi4wNzIgMi4wNzIgMCAwIDEgNC4xNDQgMFptLTEuNzY1IDguOThoLS42MTRhMS40IDEuNCAwIDAgMS0xLjM2MS0xLjA0N0w5LjI4IDE1LjA5OGExLjM4NyAxLjM4NyAwIDAgMSAxLjM2LTEuNzE3aDIuNzJhMS4zODcgMS4zODcgMCAwIDEgMS4zNiAxLjcxN2wtMS4wNTIgNC4xNDRhMS4zOTkgMS4zOTkgMCAwIDEtMS4zNiAxLjA0NloiLz48L3N2Zz4=)
 */
export const IconLogoApplePodcast: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      className={cn('bp-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.381a2.072 2.072 0 1 0 0-4.144 2.072 2.072 0 0 0 0 4.144Z'
        />
        <path
          fill='currentColor'
          d='M12.307 20.288h-.614a1.398 1.398 0 0 1-1.36-1.046L9.28 15.098a1.386 1.386 0 0 1 1.36-1.717h2.72a1.387 1.387 0 0 1 1.36 1.717l-1.052 4.144a1.399 1.399 0 0 1-1.36 1.046Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.676 13.483a5.526 5.526 0 1 1 10.648 0m-9.932 5.408a8.288 8.288 0 1 1 9.216 0m-2.536-7.582a2.072 2.072 0 1 1-4.144 0 2.072 2.072 0 0 1 4.144 0Zm-1.765 8.98h-.614a1.4 1.4 0 0 1-1.361-1.047L9.28 15.098a1.387 1.387 0 0 1 1.36-1.717h2.72a1.387 1.387 0 0 1 1.36 1.717l-1.052 4.144a1.399 1.399 0 0 1-1.36 1.046Z'
      />
    </svg>
  )
}
