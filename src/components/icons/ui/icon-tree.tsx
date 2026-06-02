import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTE1LjI2MyAxNi4xNzVIOC43MzdhMiAyIDAgMCAxLTItMlY4LjgzM0E1LjI1MiA1LjI1MiAwIDAgMSAxMiAzLjU4N2E1LjI1MiA1LjI1MiAwIDAgMSA1LjI2MyA1LjI0NXY1LjM0M2EyIDIgMCAwIDEtMiAyWiIgb3BhY2l0eT0iLjIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi41MTMgOC44MzJ2NS4zNDNjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDEyLjc1di0zLjk5MmwyLjAyNC0xLjE2OWEuNzUuNzUgMCAwIDAtLjc1LTEuMjk5bC0xLjI3NC43MzZWOGEuNzUuNzUgMCAwIDAtMS41IDB2My4zOTNsLTEuMjc0LS43MzZhLjc1Ljc1IDAgMCAwLS43NSAxLjI5OWwyLjAyNCAxLjE2OXYyLjI5OUg4LjczN2ExLjI1IDEuMjUgMCAwIDEtMS4yNS0xLjI1VjguODMzQTQuNTAzIDQuNTAzIDAgMCAxIDEyIDQuMzM3YTQuNTAyIDQuNTAyIDAgMCAxIDQuNTEyIDQuNDk1Wk0xMi43NSAxOS40ODF2LTIuNTU2aDIuNTEzYTIuNzUgMi43NSAwIDAgMCAyLjc1LTIuNzVWOC44MzJBNi4wMDIgNi4wMDIgMCAwIDAgMTIgMi44MzdhNi4wMDMgNi4wMDMgMCAwIDAtNi4wMTMgNS45OTV2NS4zNDRhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NDloMi41MTN2Mi41NTZIOC45NThhLjc1Ljc1IDAgMCAwIDAgMS41aDYuMDg0YS43NS43NSAwIDAgMCAwLTEuNUgxMi43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==)
 */
export const IconTree: Icon = ({ className, ...props }) => {
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
        d='M15.263 16.175H8.737a2 2 0 0 1-2-2V8.833A5.252 5.252 0 0 1 12 3.587a5.252 5.252 0 0 1 5.263 5.245v5.343a2 2 0 0 1-2 2Z'
        opacity='.2'
      />
      <path
        fillRule='evenodd'
        d='M16.513 8.832v5.343c0 .69-.56 1.25-1.25 1.25H12.75v-3.992l2.024-1.169a.75.75 0 0 0-.75-1.299l-1.274.736V8a.75.75 0 0 0-1.5 0v3.393l-1.274-.736a.75.75 0 0 0-.75 1.299l2.024 1.169v2.299H8.737a1.25 1.25 0 0 1-1.25-1.25V8.833A4.503 4.503 0 0 1 12 4.337a4.502 4.502 0 0 1 4.512 4.495ZM12.75 19.481v-2.556h2.513a2.75 2.75 0 0 0 2.75-2.75V8.832A6.002 6.002 0 0 0 12 2.837a6.003 6.003 0 0 0-6.013 5.995v5.344a2.75 2.75 0 0 0 2.75 2.749h2.513v2.556H8.958a.75.75 0 0 0 0 1.5h6.084a.75.75 0 0 0 0-1.5H12.75Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
