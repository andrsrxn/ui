import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjA2MiAxNy41OTNjMCAxLjQ5NC0xLjE5OCAyLjcwNC0yLjY3NiAyLjcwNC0xLjQ3OCAwLTIuNjc3LTEuMjEtMi42NzctMi43MDQgMC0xLjQ5MiAxLjE5OS0yLjcwMyAyLjY3Ny0yLjcwM3MyLjY3NiAxLjIxIDIuNjc2IDIuNzAzWm0uMDA0LTExLjA2M3YxLjE2NWExIDEgMCAwIDAgMS4yNDUuOTY5bDUuMDcyLTEuMjg0YTEgMSAwIDAgMCAuNzU0LS45N1Y1LjI0NmExIDEgMCAwIDAtMS4yNDUtLjk2OUwxMS44MiA1LjU2YTEgMSAwIDAgMC0uNzU1Ljk3WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMS4wNjIgMTcuNTk4VjkuMjAzbTAgMFY4LjU5YzAtMS41MTUgMC0yLjI3Mi40My0yLjgxNy40My0uNTQ1IDEuMTY3LS43MjEgMi42NC0xLjA3M2wzLjEyLS43NDZjLjM4NS0uMDkyLjU3OC0uMTM4LjcyNi0uMDc4YS41LjUgMCAwIDEgLjIyLjE3M2MuMDkzLjEzLjA5My4zMjkuMDkzLjcyNSAwIDEuMDI1IDAgMS41MzctLjIwNCAxLjk1M2EyIDIgMCAwIDEtLjUxLjY1M2MtLjM1Ni4yOTgtLjg1My40Mi0xLjg0OC42NjdsLTQuNjY3IDEuMTU1Wm0wIDguMzljMCAxLjQ5NC0xLjE5OCAyLjcwNC0yLjY3NiAyLjcwNC0xLjQ3OCAwLTIuNjc3LTEuMjEtMi42NzctMi43MDQgMC0xLjQ5MiAxLjE5OS0yLjcwMyAyLjY3Ny0yLjcwM3MyLjY3NiAxLjIxIDIuNjc2IDIuNzAzWiIvPjwvc3ZnPg==)
 */
export const IconMusicNote: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-music-note'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M11.062 17.593c0 1.494-1.198 2.704-2.676 2.704-1.478 0-2.677-1.21-2.677-2.704 0-1.492 1.199-2.703 2.677-2.703s2.676 1.21 2.676 2.703Zm.004-11.063v1.165a1 1 0 0 0 1.245.969l5.072-1.284a1 1 0 0 0 .754-.97V5.246a1 1 0 0 0-1.245-.969L11.82 5.56a1 1 0 0 0-.755.97Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M11.062 17.598V9.203m0 0V8.59c0-1.515 0-2.272.43-2.817.43-.545 1.167-.721 2.64-1.073l3.12-.746c.385-.092.578-.138.726-.078a.5.5 0 0 1 .22.173c.093.13.093.329.093.725 0 1.025 0 1.537-.204 1.953a2 2 0 0 1-.51.653c-.356.298-.853.42-1.848.667l-4.667 1.155Zm0 8.39c0 1.494-1.198 2.704-2.676 2.704-1.478 0-2.677-1.21-2.677-2.704 0-1.492 1.199-2.703 2.677-2.703s2.676 1.21 2.676 2.703Z'
      />
    </svg>
  )
}
