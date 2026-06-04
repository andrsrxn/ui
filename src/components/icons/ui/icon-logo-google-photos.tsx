import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDEyVjMuNzAzQTUuMTA2IDUuMTA2IDAgMCAxIDE1Ljk4OSAxMkgxMlptMCAwdjguMjk3QTUuMTA2IDUuMTA2IDAgMCAxIDguMDEgMTJIMTJaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTIgMTJWMy43MDNBNS4xMDYgNS4xMDYgMCAwIDEgMTUuOTkgMTJNMTIgMTJIMy43MDNBNS4xMDYgNS4xMDYgMCAwIDEgMTIgOC4wMU0xMiAxMnY4LjI5N0E1LjEwNiA1LjEwNiAwIDAgMSA4LjAxIDEyTTEyIDEyaDguMjk3QTUuMTA2IDUuMTA2IDAgMCAxIDEyIDE1Ljk5Ii8+PC9zdmc+)
 */
export const IconLogoGooglePhotos: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M12 12V3.703A5.106 5.106 0 0 1 15.989 12H12Zm0 0v8.297A5.106 5.106 0 0 1 8.01 12H12Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12V3.703A5.106 5.106 0 0 1 15.99 12M12 12H3.703A5.106 5.106 0 0 1 12 8.01M12 12v8.297A5.106 5.106 0 0 1 8.01 12M12 12h8.297A5.106 5.106 0 0 1 12 15.99"/></svg>
  )
}
