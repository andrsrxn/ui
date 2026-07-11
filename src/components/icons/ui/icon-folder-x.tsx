import type { Icon } from '../icon'
import { cn } from '../../../lib/utils/theme'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjI3NCAxNC41di0yLjgxNGMwLTEuODg2IDAtMi44MjktLjU4Ni0zLjQxNC0uNTg1LS41ODYtMS41MjgtLjU4Ni0zLjQxNC0uNTg2aC0yLjhjLS41NzcgMC0uODY2IDAtMS4xMzMtLjA3NmEyIDIgMCAwIDEtLjUxMy0uMjI4Yy0uMjM2LS4xNDctLjQzLS4zNjEtLjgxOC0uNzktLjM4OC0uNDI3LS41ODItLjY0MS0uODE4LS43ODhhMiAyIDAgMCAwLS41MTMtLjIyOEM5LjQxMiA1LjUgOS4xMjMgNS41IDguNTQ1IDUuNUg1LjU4M2ExLjg1NyAxLjg1NyAwIDAgMC0xLjg1NyAxLjg1N1YxNC41YzAgMS44ODYgMCAyLjgyOC41ODYgMy40MTQuNTg1LjU4NiAxLjUyOC41ODYgMy40MTQuNTg2aDguNTQ4YzEuODg2IDAgMi44MjkgMCAzLjQxNC0uNTg2LjU4Ni0uNTg2LjU4Ni0xLjUyOC41ODYtMy40MTRaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjAuMjc0IDEwLjY0M2MwLS44OTIgMC0xLjMzOC0uMTQtMS42OTFhMiAyIDAgMCAwLTEuMTI1LTEuMTI3Yy0uMzU0LS4xNC0uOC0uMTQtMS42OTItLjE0aC0zLjg0MmMtLjU3OCAwLS44NjcgMC0xLjEzNC0uMDc1YTIgMiAwIDAgMS0uNTEzLS4yMjhjLS4yMzYtLjE0Ny0uNDMtLjM2MS0uODE4LS43OS0uMzg4LS40MjctLjU4Mi0uNjQxLS44MTgtLjc4OGEyIDIgMCAwIDAtLjUxMy0uMjI4QzkuNDEyIDUuNSA5LjEyMyA1LjUgOC41NDUgNS41SDUuNTgzYTEuODU3IDEuODU3IDAgMCAwLTEuODU3IDEuODU3VjE0LjVjMCAxLjg4NiAwIDIuODI4LjU4NiAzLjQxNC41ODUuNTg2IDEuNTI4LjU4NiAzLjQxNC41ODZoNC43NjJtMy4wMDMtNC43ODMgNC43ODMgNC43ODNtMC00Ljc4M0wxNS40OTEgMTguNSIvPjwvc3ZnPg==)
 */
export const IconFolderX: Icon = ({ className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      data-slot='icon-folder-x'
      aria-hidden='true'
      focusable='false'
      className={cn('ui-icon text-primary pointer-events-none shrink-0', className)}
      {...props}>
      <path
        fill='currentColor'
        d='M20.274 14.5v-2.814c0-1.886 0-2.829-.586-3.414-.585-.586-1.528-.586-3.414-.586h-2.8c-.577 0-.866 0-1.133-.076a2 2 0 0 1-.513-.228c-.236-.147-.43-.361-.818-.79-.388-.427-.582-.641-.818-.788a2 2 0 0 0-.513-.228C9.412 5.5 9.123 5.5 8.545 5.5H5.583a1.857 1.857 0 0 0-1.857 1.857V14.5c0 1.886 0 2.828.586 3.414.585.586 1.528.586 3.414.586h8.548c1.886 0 2.829 0 3.414-.586.586-.586.586-1.528.586-3.414Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.274 10.643c0-.892 0-1.338-.14-1.691a2 2 0 0 0-1.125-1.127c-.354-.14-.8-.14-1.692-.14h-3.842c-.578 0-.867 0-1.134-.075a2 2 0 0 1-.513-.228c-.236-.147-.43-.361-.818-.79-.388-.427-.582-.641-.818-.788a2 2 0 0 0-.513-.228C9.412 5.5 9.123 5.5 8.545 5.5H5.583a1.857 1.857 0 0 0-1.857 1.857V14.5c0 1.886 0 2.828.586 3.414.585.586 1.528.586 3.414.586h4.762m3.003-4.783 4.783 4.783m0-4.783L15.491 18.5'
      />
    </svg>
  )
}
