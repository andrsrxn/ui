import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtNS43MzIgMTkuNjA2LS4wMTcuMDA0Yy0uMDAzLjAwMS4wMDIgMCAwIDBsLjAxNy0uMDA0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMzM5IDEzLjA5NWg0LjY5YS43MDQuNzA0IDAgMSAwIDAtMS40MDloLTQuNjl2LTUuMTRjLjAwNC0uMzE5LjE0MS0uODUyLjU1OS0xLjMuMzk5LS40MjYgMS4xMTQtLjgzNyAyLjM5NS0uODM3LjczIDAgMS4zNjYgMCAxLjkyMy4wNDIuNTYuMDQyLjk4Ni4xMjIgMS4zMDcuMjU3LjMwMy4xMjYuNTA0LjI5OC42NDIuNTQuMTQ2LjI1Ni4yNTUuNjU0LjI1NSAxLjI4N2EuNzA1LjcwNSAwIDAgMCAxLjQwOCAwYzAtLjc4MS0uMTMzLTEuNDQ2LS40NC0xLjk4NS0uMzE2LS41NTQtLjc4LS45MTUtMS4zMjMtMS4xNDItLjUyNC0uMjItMS4xMjUtLjMxNi0xLjc0My0uMzYyQzE0LjcxMiAzIDE0LjAzMiAzIDEzLjMyNyAzaC0uMDM0Yy0xLjYxMiAwLTIuNzIuNTMyLTMuNDI0IDEuMjg1LS42ODQuNzMyLS45MyAxLjYxNC0uOTM5IDIuMjR2NS4xNjFINS44NzZhLjcwNC43MDQgMCAwIDAgMCAxLjQwOUg4LjkzdjMuNjQzYzAgLjczNS0uNDM0IDEuMzYzLTEuMTI4IDEuODg0LS42OC41MTEtMS41MTIuODQtMi4wNy45ODRsLS4wMjcuMDA3QS43MDQuNzA0IDAgMCAwIDUuODc2IDIxaDEyLjI0OGEuNzA0LjcwNCAwIDEgMCAwLTEuNDA5SDguODQ2Yy43OTUtLjY1MyAxLjQ5My0xLjU5OCAxLjQ5My0yLjg1M3YtMy42NDNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)
 */
export const IconCurrencyGbp: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fillRule='evenodd'
        d='m5.732 19.606-.017.004c-.003.001.002 0 0 0l.017-.004Z'
        clipRule='evenodd'
      />
      <path
        fillRule='evenodd'
        d='M10.339 13.095h4.69a.704.704 0 1 0 0-1.409h-4.69v-5.14c.004-.319.141-.852.559-1.3.399-.426 1.114-.837 2.395-.837.73 0 1.366 0 1.923.042.56.042.986.122 1.307.257.303.126.504.298.642.54.146.256.255.654.255 1.287a.705.705 0 0 0 1.408 0c0-.781-.133-1.446-.44-1.985-.316-.554-.78-.915-1.323-1.142-.524-.22-1.125-.316-1.743-.362C14.712 3 14.032 3 13.327 3h-.034c-1.612 0-2.72.532-3.424 1.285-.684.732-.93 1.614-.939 2.24v5.161H5.876a.704.704 0 0 0 0 1.409H8.93v3.643c0 .735-.434 1.363-1.128 1.884-.68.511-1.512.84-2.07.984l-.027.007A.704.704 0 0 0 5.876 21h12.248a.704.704 0 1 0 0-1.409H8.846c.795-.653 1.493-1.598 1.493-2.853v-3.643Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
