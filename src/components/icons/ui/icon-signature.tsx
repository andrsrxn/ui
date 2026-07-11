import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTguNzQyIDguNzIxYy4wNjcgMS43MzQtLjk4MiA1LjEyNi0xLjUxIDYuMzcyLS44ODktMS4wMDYtMi40ODktMy4zODctMi44NzQtNC43MTktLjQ4MS0xLjY2NS0xLjM5Ni01LjkgMS4wMjYtNi41MDUgMi40MjMtLjYwNiAzLjI3MyAyLjY4NSAzLjM1OCA0Ljg1MloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik00LjgxNCAyMC4yMDdjLjY5My0xLjEgMS42NTktMi44ODYgMi40NzYtNC44MzdtMCAwYy45NjgtMi4zMSAxLjcyNy00Ljg1MiAxLjU3NS02Ljc2LS4zMzctNC4yMTItMi4wMjUtNC44NjctMy4wMzgtNC44MTQtMS4wMTMuMDUzLTIuOTQgMS40NDctMS41OTggNi4zMjMuNjg4IDIuNDk2IDEuODU3IDQuMjIzIDMuMDYgNS4yNTJabTAgMGMxLjEzLjk2NyAyLjI5MyAxLjMxOCAzLjExNSAxLjExMyAxLjU3OC0uMzk1IDIuMTItMy4xMTYgMS45NzYtNC42M20wIDBhMy42MjcgMy42MjcgMCAwIDAtLjA0NC0uMzJzLjAxMy4xMi4wNDQuMzJabTAgMGMuMTU1Ljk4Ni43NjUgMy44OTkgMi41NiAzLjc4MSAxLjU0LS4xIDEuNjA2LTIuMjY2IDEuMTg0LTMuOTExbTAgMGE2LjY3MSA2LjY3MSAwIDAgMC0uMTcyLS41NjdzLjA1OS4yMjQuMTcyLjU2N1ptMCAwYy4zODMgMS4xNTYgMS4zODcgMy42NjEgMi44NjYgMy40ODcgMS45MTgtLjIyNyAxLjUzMi0yLjMzIDEuMDctMy4zNE05LjggMTkuNTAyIDIwIDE3Ljg3MyIvPjwvc3ZnPg==)
 */
export const IconSignature: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-signature'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M8.742 8.721c.067 1.734-.982 5.126-1.51 6.372-.889-1.006-2.489-3.387-2.874-4.719-.481-1.665-1.396-5.9 1.026-6.505 2.423-.606 3.273 2.685 3.358 4.852Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.814 20.207c.693-1.1 1.659-2.886 2.476-4.837m0 0c.968-2.31 1.727-4.852 1.575-6.76-.337-4.212-2.025-4.867-3.038-4.814-1.013.053-2.94 1.447-1.598 6.323.688 2.496 1.857 4.223 3.06 5.252Zm0 0c1.13.967 2.293 1.318 3.115 1.113 1.578-.395 2.12-3.116 1.976-4.63m0 0a3.627 3.627 0 0 0-.044-.32s.013.12.044.32Zm0 0c.155.986.765 3.899 2.56 3.781 1.54-.1 1.606-2.266 1.184-3.911m0 0a6.671 6.671 0 0 0-.172-.567s.059.224.172.567Zm0 0c.383 1.156 1.387 3.661 2.866 3.487 1.918-.227 1.532-2.33 1.07-3.34M9.8 19.502 20 17.873'
      />
    </svg>
  )
}
