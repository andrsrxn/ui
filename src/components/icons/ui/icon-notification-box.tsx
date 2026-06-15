import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTcuNTg4IDMuNjUyaDcuODg2bC43NDggNC42MTJoNC4xMjZ2OC4xNDhjMCAxLjg1MSAwIDIuNzc3LS41NzUgMy4zNTItLjU3NS41NzQtMS41LjU3NC0zLjM1MS41NzRINy41ODhjLTEuODUxIDAtMi43NzcgMC0zLjM1MS0uNTc1LS41NzUtLjU3NS0uNTc1LTEuNS0uNTc1LTMuMzVWNy41NzdjMC0xLjg1IDAtMi43NzYuNTc1LTMuMzUuNTc0LS41NzYgMS41LS41NzYgMy4zNS0uNTc2WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjM0OCAxMS42NDF2NC43NzFjMCAxLjg1MSAwIDIuNzc3LS41NzUgMy4zNTItLjU3NS41NzQtMS41LjU3NC0zLjM1MS41NzRINy41ODhjLTEuODUxIDAtMi43NzcgMC0zLjM1MS0uNTc1LS41NzUtLjU3NS0uNTc1LTEuNS0uNTc1LTMuMzVWNy41NzdjMC0xLjg1IDAtMi43NzYuNTc1LTMuMzUuNTc0LS41NzYgMS41LS41NzYgMy4zNS0uNTc2aDQuNzE3bTguNTM0IDIuMjU0YTIuNzQ0IDIuNzQ0IDAgMSAxLTUuNDg4IDAgMi43NDQgMi43NDQgMCAwIDEgNS40ODggMFoiLz48L3N2Zz4=)
 */
export const IconNotificationBox: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M7.588 3.652h7.886l.748 4.612h4.126v8.148c0 1.851 0 2.777-.575 3.352-.575.574-1.5.574-3.351.574H7.588c-1.851 0-2.777 0-3.351-.575-.575-.575-.575-1.5-.575-3.35V7.577c0-1.85 0-2.776.575-3.35.574-.576 1.5-.576 3.35-.576Z" opacity=".2"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20.348 11.641v4.771c0 1.851 0 2.777-.575 3.352-.575.574-1.5.574-3.351.574H7.588c-1.851 0-2.777 0-3.351-.575-.575-.575-.575-1.5-.575-3.35V7.577c0-1.85 0-2.776.575-3.35.574-.576 1.5-.576 3.35-.576h4.717m8.534 2.254a2.744 2.744 0 1 1-5.488 0 2.744 2.744 0 0 1 5.488 0Z"/></svg>
  )
}
