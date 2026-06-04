import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuMjU1IDMuNzVhLjc1Ljc1IDAgMSAwLTEuNSAwaDEuNVptLTEuNSAxNC43NWEuNzUuNzUgMCAwIDAgMS41IDBoLTEuNVptOC45OSAwYS43NS43NSAwIDAgMCAxLjUgMGgtMS41Wm0xLjUtMTQuNzVhLjc1Ljc1IDAgMCAwLTEuNSAwaDEuNVptNC40NiAxNi42MTRhLjc1Ljc1IDAgMCAwIDEuNSAwaC0xLjVabS43NS02LjYzaC43NWEuNzUuNzUgMCAwIDAtMS4yNjQtLjU0NmwuNTE1LjU0NlptLTMuMzQ2IDIuMTIzYS43NS43NSAwIDEgMCAxLjAyOCAxLjA5MmwtLjUxNC0uNTQ2LS41MTQtLjU0NlpNNC41MDUgMy43NTFoLS43NXY3LjM3NGgxLjVWMy43NTFoLS43NVptMCA3LjM3NGgtLjc1VjE4LjVoMS41di03LjM3NWgtLjc1Wm0wIDB2Ljc1aDguOTl2LTEuNWgtOC45OXYuNzVabTguOTkgMGgtLjc1VjE4LjVoMS41di03LjM3NWgtLjc1Wm0wIDBoLjc1VjMuNzUxaC0xLjV2Ny4zNzRoLjc1Wm01Ljk2IDkuMjRoLjc1di02LjYzMWgtMS41djYuNjNoLjc1Wm0tMi44MzItMy45NjIuNTE0LjU0NiAyLjgzMy0yLjY3LS41MTQtLjU0NS0uNTE1LS41NDYtMi44MzIgMi42Ny41MTQuNTQ1WiIvPjwvc3ZnPg==)
 */
export const IconTextHeading1: Icon = ({ className, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={cn('bp-icon text-primary pointer-events-none shrink-0', className)} {...props}><path fill="currentColor" d="M5.255 3.75a.75.75 0 1 0-1.5 0h1.5Zm-1.5 14.75a.75.75 0 0 0 1.5 0h-1.5Zm8.99 0a.75.75 0 0 0 1.5 0h-1.5Zm1.5-14.75a.75.75 0 0 0-1.5 0h1.5Zm4.46 16.614a.75.75 0 0 0 1.5 0h-1.5Zm.75-6.63h.75a.75.75 0 0 0-1.264-.546l.515.546Zm-3.346 2.123a.75.75 0 1 0 1.028 1.092l-.514-.546-.514-.546ZM4.505 3.751h-.75v7.374h1.5V3.751h-.75Zm0 7.374h-.75V18.5h1.5v-7.375h-.75Zm0 0v.75h8.99v-1.5h-8.99v.75Zm8.99 0h-.75V18.5h1.5v-7.375h-.75Zm0 0h.75V3.751h-1.5v7.374h.75Zm5.96 9.24h.75v-6.631h-1.5v6.63h.75Zm-2.832-3.962.514.546 2.833-2.67-.514-.545-.515-.546-2.832 2.67.514.545Z"/></svg>
  )
}
