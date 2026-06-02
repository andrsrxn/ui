import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTQuNjE3IDMuNjU0djE1LjA2OGMwIC40MTUuMzM2Ljc1Ljc1Ljc1aDE1LjA3NGEuNzUuNzUgMCAxIDEgMCAxLjVINS4zNjdhMi4yNSAyLjI1IDAgMCAxLTIuMjUtMi4yNVYzLjY1NGEuNzUuNzUgMCAwIDEgMS41IDBaIi8+PHBhdGggZD0iTTEwLjYgMTcuMDc1YTEuMiAxLjIgMCAxIDEtMi40IDAgMS4yIDEuMiAwIDAgMSAyLjQgMFptMS42LTExLjJhMS4yIDEuMiAwIDEgMS0yLjQgMCAxLjIgMS4yIDAgMCAxIDIuNCAwWm0xLjggN2ExLjIgMS4yIDAgMSAxLTIuNCAwIDEuMiAxLjIgMCAwIDEgMi40IDBabTMuOC00LjI5OWExLjIgMS4yIDAgMSAxLTIuNCAwIDEuMiAxLjIgMCAwIDEgMi40IDBabTEuMiA3LjAyN2ExLjIgMS4yIDAgMSAxLTIuNCAwIDEuMiAxLjIgMCAwIDEgMi40IDBaTTkgMTAuNDc1YTEuMiAxLjIgMCAxIDEtMi40IDAgMS4yIDEuMiAwIDAgMSAyLjQgMFoiLz48L3N2Zz4=)
 */
export const IconChartScatter: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 24 24'
      className={cn('text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path d='M4.617 3.654v15.068c0 .415.336.75.75.75h15.074a.75.75 0 1 1 0 1.5H5.367a2.25 2.25 0 0 1-2.25-2.25V3.654a.75.75 0 0 1 1.5 0Z' />
      <path d='M10.6 17.075a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.6-11.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.8 7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm3.8-4.299a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.2 7.027a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM9 10.475a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z' />
    </svg>
  )
}
