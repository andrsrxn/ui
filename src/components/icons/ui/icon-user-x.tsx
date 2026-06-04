import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMy4wNjhjLTMuNTcyIDAtNi45MDQgMi43MTYtNy40MSA2LjQ4LS4wNzQuNTQ3LjM4Ljk5OC45MzMuOTk4aDEwLjY0M2ExIDEgMCAwIDAgLjczMS0uMzE5bDEuNjkyLTEuODE1Yy4yNTktLjI3Ny4zNDQtLjY4LjE4LTEuMDIzLTEuMjM1LTIuNi0zLjkyNi00LjMyLTYuNzY5LTQuMzJaIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTYuODA3IDguMjYxYTQuODA3IDQuODA3IDAgMSAxLTkuNjE0IDAgNC44MDcgNC44MDcgMCAwIDEgOS42MTQgMFoiLz48L2c+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAxMy4wNjhhNC44MDcgNC44MDcgMCAxIDAgMC05LjYxMyA0LjgwNyA0LjgwNyAwIDAgMCAwIDkuNjEzWm0wIDBjLTMuODggMC03LjQ3NyAzLjIwNS03LjQ3NyA3LjQ3OE0xMiAxMy4wNjhjLjg2OCAwIDEuNzIxLjE2IDIuNTI0LjQ1N00xNiAxNmw0LjY3NCA0LjY3NG0wLTQuNjc0TDE2IDIwLjY3NCIvPjwvc3ZnPg==)
 */
export const IconUserX: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><g opacity=".2"><path fill="currentColor" d="M12 13.068c-3.572 0-6.904 2.716-7.41 6.48-.074.547.38.998.933.998h10.643a1 1 0 0 0 .731-.319l1.692-1.815c.259-.277.344-.68.18-1.023-1.235-2.6-3.926-4.32-6.769-4.32Z"/><path fill="currentColor" d="M16.807 8.261a4.807 4.807 0 1 1-9.614 0 4.807 4.807 0 0 1 9.614 0Z"/></g><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 13.068a4.807 4.807 0 1 0 0-9.613 4.807 4.807 0 0 0 0 9.613Zm0 0c-3.88 0-7.477 3.205-7.477 7.478M12 13.068c.868 0 1.721.16 2.524.457M16 16l4.674 4.674m0-4.674L16 20.674"/></svg>
  )
}
