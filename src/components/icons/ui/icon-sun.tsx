import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE1Ljc3IDEyYTMuNzcgMy43NyAwIDEgMS03LjU0IDAgMy43NyAzLjc3IDAgMCAxIDcuNTQgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xNi43MDMgNy4yOTcgMS4zOC0xLjM4TTEyIDUuMzQ4VjMuMzk2TTcuMjk3IDcuMjk3bC0xLjM4LTEuMzhNNS4zNDggMTJIMy4zOTZNMTIgMjAuNjA0VjE4LjY1bS02LjA4NC0uNTY3IDEuMzgxLTEuMzgxbTEwLjc4NyAxLjM4LTEuMzgxLTEuMzhtMy45LTQuNzAzaC0xLjk1Mm0tMi44OCAwYTMuNzcgMy43NyAwIDEgMS03LjU0MiAwIDMuNzcgMy43NyAwIDAgMSA3LjU0MiAwWiIvPjwvc3ZnPg==)
 */
export const IconSun: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M15.77 12a3.77 3.77 0 1 1-7.54 0 3.77 3.77 0 0 1 7.54 0Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m16.703 7.297 1.38-1.38M12 5.348V3.396M7.297 7.297l-1.38-1.38M5.348 12H3.396M12 20.604V18.65m-6.084-.567 1.381-1.381m10.787 1.38-1.381-1.38m3.9-4.703h-1.952m-2.88 0a3.77 3.77 0 1 1-7.542 0 3.77 3.77 0 0 1 7.542 0Z"/></svg>
  )
}
