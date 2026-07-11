import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE4LjQyMyAxNC44MzUtMS43MTMtNC4yMTFjLS4zMzgtLjgzLTEuNTE1LS44My0xLjg1MyAwbC0xLjcxMyA0LjIxYTEgMSAwIDAgMCAuOTI2IDEuMzc4aDMuNDI2YTEgMSAwIDAgMCAuOTI3LTEuMzc3WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTE4Ljk4MyAxNi4yMTItMS43MTgtNC4yMjJjLS42MjktMS41NDctLjk0My0yLjMyLTEuNDgyLTIuMzItLjUzOCAwLS44NTIuNzczLTEuNDgyIDIuMzJsLTEuNzE3IDQuMjIybTYuMzk5IDAgMS42IDMuOTMybS0xLjYtMy45MzJoLTYuMzk5bS0xLjYgMy45MzIgMS42LTMuOTMybS0uNzc5LTEwLjIyNWgyLjIyN20tMi4yMjcgMGMwIDEuNTQ3LS43ODcgNC4yNTItMi40OCA2LjA0M20yLjQ4LTYuMDQzaC0zLjEzbS42NSA2LjA0M2E2LjQyIDYuNDIgMCAwIDEtLjA2LjA2M2MtMS45NTggMi4wMjItMy43NzcgMi42ODgtNC45MDQgMy4wNDNtNC45NjUtMy4xMDZMNi40NDggOS4xNTNtMi44NzggMi44NzcgMy41NCAzLjQ5bS05LjQ4LTkuNTMyaDUuMjg4bTAgMFYzLjg1NiIvPjwvc3ZnPg==)
 */
export const IconTranslate: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-translate'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='m18.423 14.835-1.713-4.211c-.338-.83-1.515-.83-1.853 0l-1.713 4.21a1 1 0 0 0 .926 1.378h3.426a1 1 0 0 0 .927-1.377Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m18.983 16.212-1.718-4.222c-.629-1.547-.943-2.32-1.482-2.32-.538 0-.852.773-1.482 2.32l-1.717 4.222m6.399 0 1.6 3.932m-1.6-3.932h-6.399m-1.6 3.932 1.6-3.932m-.779-10.225h2.227m-2.227 0c0 1.547-.787 4.252-2.48 6.043m2.48-6.043h-3.13m.65 6.043a6.42 6.42 0 0 1-.06.063c-1.958 2.022-3.777 2.688-4.904 3.043m4.965-3.106L6.448 9.153m2.878 2.877 3.54 3.49m-9.48-9.532h5.288m0 0V3.856'
      />
    </svg>
  )
}
