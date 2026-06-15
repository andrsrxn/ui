import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEzLjgyNSAxNS4wMDJIOC43NzhhMSAxIDAgMCAxLS45MjItMS4zODVsMS42NjktNGExIDEgMCAwIDEgLjkyMi0uNjE1aDQuODQ0YTEgMSAwIDAgMSAuOTM5IDEuMzQ1bC0xLjQ2NiA0YTEgMSAwIDAgMS0uOTM5LjY1NVoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik01LjUwMSAyMC4wMDUgMTEuNTE3IDRtLjk4NCAxNi4wMDVMMTguNSA0TTIwIDlING0xNiA2SDQiLz48L3N2Zz4=)
 */
export const IconHashtag: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M13.825 15.002H8.778a1 1 0 0 1-.922-1.385l1.669-4a1 1 0 0 1 .922-.615h4.844a1 1 0 0 1 .939 1.345l-1.466 4a1 1 0 0 1-.939.655Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5.501 20.005 11.517 4m.984 16.005L18.5 4M20 9H4m16 6H4"/></svg>
  )
}
