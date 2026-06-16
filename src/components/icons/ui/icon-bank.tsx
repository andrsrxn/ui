import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTExLjczIDMuODc5IDMuNyA5LjAxNmMtLjQyMS4yNy0uMjMuOTIyLjI2OS45MjJIMjAuMDNjLjUgMCAuNjktLjY1Mi4yNy0uOTIyTDEyLjI3IDMuODhhLjUuNSAwIDAgMC0uNTQgMFpNMy43NDggMTguODQ2YzAtLjM3OCAwLS41NjcuMDUtLjcyYTEgMSAwIDAgMSAuNjM2LS42MzZjLjE1My0uMDUuMzQyLS4wNS43Mi0uMDVoMTMuNjkyYy4zNzggMCAuNTY3IDAgLjcyLjA1YTEgMSAwIDAgMSAuNjM2LjYzNmMuMDUuMTUyLjA1LjM0Mi4wNS43MiAwIC4zNzkgMCAuNTY4LS4wNS43MmExIDEgMCAwIDEtLjYzNi42MzZjLS4xNTMuMDUtLjM0Mi4wNS0uNzIuMDVINS4xNTRjLS4zNzggMC0uNTY3IDAtLjcyLS4wNWExIDEgMCAwIDEtLjYzNi0uNjM1Yy0uMDUtLjE1My0uMDUtLjM0Mi0uMDUtLjcyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTYuMTUyIDE3LjE1OHYtNy4yMm0zLjg4MyA3LjUwMlY5LjkzOG0zLjk0NiA3LjUwMlY5LjkzOG0zLjg2NyA3LjUwMlY5LjkzOE0zLjY5OSA5LjAxNmw4LjAzMi01LjEzN2EuNS41IDAgMCAxIC41MzkgMGw4LjAzIDUuMTM3Yy40MjEuMjcuMjMuOTIyLS4yNjkuOTIySDMuOTdjLS41IDAtLjY5LS42NTItLjI3LS45MjJabTEuNDU1IDExLjIzN2gxMy42OTJjLjM3OCAwIC41NjcgMCAuNzItLjA1YTEgMSAwIDAgMCAuNjM2LS42MzZjLjA1LS4xNTMuMDUtLjM0Mi4wNS0uNzIgMC0uMzggMC0uNTY5LS4wNS0uNzIxYTEgMSAwIDAgMC0uNjM2LS42MzZjLS4xNTMtLjA1LS4zNDItLjA1LS43Mi0uMDVINS4xNTRjLS4zNzggMC0uNTY3IDAtLjcyLjA1YTEgMSAwIDAgMC0uNjM2LjYzNmMtLjA1LjE1Mi0uMDUuMzQyLS4wNS43MiAwIC4zNzkgMCAuNTY4LjA1LjcyYTEgMSAwIDAgMCAuNjM2LjYzNmMuMTUzLjA1LjM0Mi4wNS43Mi4wNVoiLz48L3N2Zz4=)
 */
export const IconBank: Icon = ({ className, ...props }) => {
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
      <path
        fill='currentColor'
        d='M11.73 3.879 3.7 9.016c-.421.27-.23.922.269.922H20.03c.5 0 .69-.652.27-.922L12.27 3.88a.5.5 0 0 0-.54 0ZM3.748 18.846c0-.378 0-.567.05-.72a1 1 0 0 1 .636-.636c.153-.05.342-.05.72-.05h13.692c.378 0 .567 0 .72.05a1 1 0 0 1 .636.636c.05.152.05.342.05.72 0 .379 0 .568-.05.72a1 1 0 0 1-.636.636c-.153.05-.342.05-.72.05H5.154c-.378 0-.567 0-.72-.05a1 1 0 0 1-.636-.635c-.05-.153-.05-.342-.05-.72Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.152 17.158v-7.22m3.883 7.502V9.938m3.946 7.502V9.938m3.867 7.502V9.938M3.699 9.016l8.032-5.137a.5.5 0 0 1 .539 0l8.03 5.137c.421.27.23.922-.269.922H3.97c-.5 0-.69-.652-.27-.922Zm1.455 11.237h13.692c.378 0 .567 0 .72-.05a1 1 0 0 0 .636-.636c.05-.153.05-.342.05-.72 0-.38 0-.569-.05-.721a1 1 0 0 0-.636-.636c-.153-.05-.342-.05-.72-.05H5.154c-.378 0-.567 0-.72.05a1 1 0 0 0-.636.636c-.05.152-.05.342-.05.72 0 .379 0 .568.05.72a1 1 0 0 0 .636.636c.153.05.342.05.72.05Z'
      />
    </svg>
  )
}
