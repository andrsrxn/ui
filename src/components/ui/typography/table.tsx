import type { ComponentProps, TableHTMLAttributes } from 'react'
import { cn } from '../../../lib/utils/theme'
import { labelVariants } from './label'
import { textVariants } from './text'

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: 'primary' | 'secondary'
}

export const Table = ({ className, variant = 'primary', ...props }: TableProps) => (
  <div className='relative w-full overflow-auto'>
    <table
      data-slot='table'
      className={cn(
        textVariants({ size: 'sm' }),
        'table w-full caption-bottom leading-none',
        variant === 'primary' &&
          '[&_tbody_tr:hover]:bg-base-hover [&_tbody_tr]:bg-base [&_tfoot_tr]:bg-base-accent [&_thead_tr]:bg-base-accent',
        variant === 'secondary' &&
          '[&_tbody_tr:hover]:bg-surface-hover [&_tbody_tr]:bg-surface [&_tfoot_tr]:bg-base-accent [&_thead_tr]:bg-base-accent',

        className
      )}
      {...props}
    />
  </div>
)

export const TableHeader = ({ className, ...props }: ComponentProps<'thead'>) => (
  <thead
    data-slot='table-header'
    className={cn('[&_tr]:border-base transition-theme [&_tr]:border-b', className)}
    {...props}
  />
)

export const TableBody = ({ className, ...props }: ComponentProps<'tbody'>) => (
  <tbody
    data-slot='table-body'
    className={cn('overflow-hidden [&_tr:last-child]:border-0', className)}
    {...props}
  />
)

export const TableFooter = ({ className, ...props }: ComponentProps<'tfoot'>) => (
  <tfoot
    data-slot='table-footer'
    className={cn(
      'border-base transition-theme w-full border-t font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
)

export const TableCell = ({ className, ...props }: ComponentProps<'td'>) => (
  <td
    data-slot='table-cell'
    className={cn('table-cell p-3 align-middle has-[[role=checkbox]]:pe-0', className)}
    {...props}
  />
)

export const TableFoot = ({ className, ...props }: ComponentProps<typeof TableCell>) => (
  <TableCell
    data-slot='table-foot'
    className={cn(labelVariants({ size: 'sm' }), 'table-cell py-3', className)}
    {...props}
  />
)

export const TableRow = ({ className, ...props }: ComponentProps<'tr'>) => (
  <tr
    data-slot='table-row'
    className={cn(
      'transition-theme hover:duration-none duration-faster data-[state=selected]:bg-selected! data-[state=selected]:border-selected data-[state=selected]:text-selected! data-[state=selected]:hover:bg-selected-hover! border-base tran sition-colors has-[+[data-state=selected]]:border-selected border-b data-[state=selected]:relative data-[state=selected]:border-t',
      className
    )}
    {...props}
  />
)

export const TableHead = ({ className, ...props }: ComponentProps<'th'>) => (
  <th
    data-slot='table-head'
    className={cn(
      labelVariants({ size: 'sm' }),
      'table-cell p-3 px-4 text-start align-middle has-[[role=checkbox]]:pe-0',
      className
    )}
    {...props}
  />
)

export const TableCaption = ({ className, ...props }: ComponentProps<'caption'>) => (
  <caption
    data-slot='table-caption'
    className={cn(textVariants({ size: 'sm', variant: 'secondary' }), 'mt-3', className)}
    {...props}
  />
)
