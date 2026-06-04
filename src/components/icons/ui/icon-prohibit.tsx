import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjE3NyAxMmE4LjE3NyA4LjE3NyAwIDEgMS0xNi4zNTQgMCA4LjE3NyA4LjE3NyAwIDAgMSAxNi4zNTQgMFoiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTkuNDg2IDIwLjU0NmEuNzUuNzUgMCAwIDAgMS4wNi0xLjA2bC0uNTMuNTMtLjUzLjUzWk00LjUxNCAzLjQ1NGEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bC41My0uNTMuNTMtLjUzWk0yMC4xNzcgMTJoLS43NUE3LjQyNyA3LjQyNyAwIDAgMSAxMiAxOS40Mjd2MS41QTguOTI3IDguOTI3IDAgMCAwIDIwLjkyNyAxMmgtLjc1Wk0xMiAyMC4xNzd2LS43NUE3LjQyNyA3LjQyNyAwIDAgMSA0LjU3MyAxMmgtMS41QTguOTI3IDguOTI3IDAgMCAwIDEyIDIwLjkyN3YtLjc1Wk0zLjgyMyAxMmguNzVBNy40MjcgNy40MjcgMCAwIDEgMTIgNC41NzN2LTEuNUE4LjkyNyA4LjkyNyAwIDAgMCAzLjA3MyAxMmguNzVaTTEyIDMuODIzdi43NUE3LjQyNyA3LjQyNyAwIDAgMSAxOS40MjcgMTJoMS41QTguOTI3IDguOTI3IDAgMCAwIDEyIDMuMDczdi43NVptOC4wMTYgMTYuMTkzLjUzLS41M0w0LjUxNCAzLjQ1M2wtLjUzLjUzLS41My41MyAxNi4wMzIgMTYuMDMyLjUzLS41M1oiLz48L3N2Zz4=)
 */
export const IconProhibit: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M20.177 12a8.177 8.177 0 1 1-16.354 0 8.177 8.177 0 0 1 16.354 0Z" opacity=".2"/><path fill="currentColor" d="M19.486 20.546a.75.75 0 0 0 1.06-1.06l-.53.53-.53.53ZM4.514 3.454a.75.75 0 0 0-1.06 1.06l.53-.53.53-.53ZM20.177 12h-.75A7.427 7.427 0 0 1 12 19.427v1.5A8.927 8.927 0 0 0 20.927 12h-.75ZM12 20.177v-.75A7.427 7.427 0 0 1 4.573 12h-1.5A8.927 8.927 0 0 0 12 20.927v-.75ZM3.823 12h.75A7.427 7.427 0 0 1 12 4.573v-1.5A8.927 8.927 0 0 0 3.073 12h.75ZM12 3.823v.75A7.427 7.427 0 0 1 19.427 12h1.5A8.927 8.927 0 0 0 12 3.073v.75Zm8.016 16.193.53-.53L4.514 3.453l-.53.53-.53.53 16.032 16.032.53-.53Z"/></svg>
  )
}
