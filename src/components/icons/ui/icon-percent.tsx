import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTguNzQgNC45MTNBMi43MDYgMi43MDYgMCAxIDEgNC45MTMgOC43NCAyLjcwNiAyLjcwNiAwIDAgMSA4Ljc0IDQuOTEzWk0xOS4wODcgMTUuMjZhMi43MDYgMi43MDYgMCAxIDEtMy44MjcgMy44MjcgMi43MDYgMi43MDYgMCAwIDEgMy44MjctMy44MjdaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIGQ9Ik0xOS40NDIgMy40OTdhLjc1Ljc1IDAgMCAxIDEuMDYxIDEuMDZMNC41NTggMjAuNTAzYS43NS43NSAwIDAgMS0xLjA2LTEuMDZMMTkuNDQxIDMuNDk2Wk0xNC43MyAxNC43MjlhMy40NTYgMy40NTYgMCAxIDEgNC44ODcgNC44ODkgMy40NTYgMy40NTYgMCAwIDEtNC44ODctNC44ODlabTMuODI3IDEuMDZhMS45NTcgMS45NTcgMCAxIDAtMi43NjcgMi43NjggMS45NTcgMS45NTcgMCAwIDAgMi43NjctMi43NjdaTTQuMzgzIDQuMzg0QTMuNDU2IDMuNDU2IDAgMSAxIDkuMjcgOS4yN2EzLjQ1NiAzLjQ1NiAwIDAgMS00Ljg4OC00Ljg4OFptMy44MjYgMS4wNkExLjk1NiAxLjk1NiAwIDEgMCA1LjQ0MyA4LjIxIDEuOTU2IDEuOTU2IDAgMCAwIDguMjEgNS40NDNaIi8+PC9zdmc+)
 */
export const IconPercent: Icon = ({ className, ...props }) => {
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
        d='M8.74 4.913A2.706 2.706 0 1 1 4.913 8.74 2.706 2.706 0 0 1 8.74 4.913ZM19.087 15.26a2.706 2.706 0 1 1-3.827 3.827 2.706 2.706 0 0 1 3.827-3.827Z'
        opacity='.2'
      />
      <path d='M19.442 3.497a.75.75 0 0 1 1.061 1.06L4.558 20.503a.75.75 0 0 1-1.06-1.06L19.441 3.496ZM14.73 14.729a3.456 3.456 0 1 1 4.887 4.889 3.456 3.456 0 0 1-4.887-4.889Zm3.827 1.06a1.957 1.957 0 1 0-2.767 2.768 1.957 1.957 0 0 0 2.767-2.767ZM4.383 4.384A3.456 3.456 0 1 1 9.27 9.27a3.456 3.456 0 0 1-4.888-4.888Zm3.826 1.06A1.956 1.956 0 1 0 5.443 8.21 1.956 1.956 0 0 0 8.21 5.443Z' />
    </svg>
  )
}
