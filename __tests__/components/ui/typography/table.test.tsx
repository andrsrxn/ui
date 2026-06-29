import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableCell,
  TableFoot,
  TableRow,
  TableHead,
  TableCaption,
} from '../../../../src/components/ui/typography/table'

describe('Table Components', () => {
  it('renders a table structure with all components', () => {
    render(
      <Table variant='primary' data-testid='table-wrapper'>
        <TableCaption>My Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableFoot>Foot 1</TableFoot>
          </TableRow>
        </TableFooter>
      </Table>
    )

    // Check table elements
    const table = screen.getByRole('table')
    expect(table).toBeDefined()
    expect(table.getAttribute('data-slot')).toBe('table')
    expect(table.className).toContain('text-body-sm') // Table includes textVariants({ size: 'sm' })
    expect(table.className).toContain('[&_tbody_tr:hover]:bg-base-hover') // primary variant styles

    // Check table-header
    const thead = table.querySelector('thead')
    expect(thead).toBeDefined()
    expect(thead?.getAttribute('data-slot')).toBe('table-header')
    expect(thead?.className).toContain('[&_tr]:border-base')

    // Check table-row
    const tr = table.querySelector('tr')
    expect(tr).toBeDefined()
    expect(tr?.getAttribute('data-slot')).toBe('table-row')
    expect(tr?.className).toContain('border-b')

    // Check table-head (th)
    const th = screen.getByRole('columnheader', { name: 'Header 1' })
    expect(th).toBeDefined()
    expect(th.getAttribute('data-slot')).toBe('table-head')
    expect(th.className).toContain('text-label-sm') // TableHead includes labelVariants({ size: 'sm' })

    // Check table-body
    const tbody = table.querySelector('tbody')
    expect(tbody).toBeDefined()
    expect(tbody?.getAttribute('data-slot')).toBe('table-body')

    // Check table-cell (td)
    const td = screen.getByRole('cell', { name: 'Cell 1' })
    expect(td).toBeDefined()
    expect(td.getAttribute('data-slot')).toBe('table-cell')

    // Check table-footer (tfoot)
    const tfoot = table.querySelector('tfoot')
    expect(tfoot).toBeDefined()
    expect(tfoot?.getAttribute('data-slot')).toBe('table-footer')

    // Check table-foot (td custom)
    const tfootCell = screen.getByText('Foot 1')
    expect(tfootCell).toBeDefined()
    expect(tfootCell.getAttribute('data-slot')).toBe('table-foot')
    expect(tfootCell.className).toContain('text-label-sm') // TableFoot includes labelVariants({ size: 'sm' })

    // Check table caption
    const caption = screen.getByText('My Table Caption')
    expect(caption).toBeDefined()
    expect(caption.getAttribute('data-slot')).toBe('table-caption')
  })

  it('applies secondary variant styles to the table', () => {
    render(<Table variant='secondary' />)
    const table = screen.getByRole('table')
    expect(table.className).toContain('[&_tbody_tr:hover]:bg-surface-hover')
  })

  it('forwards custom classNames to subcomponents', () => {
    render(
      <Table className='c-table'>
        <TableHeader className='c-header'>
          <TableRow className='c-row'>
            <TableHead className='c-head'>Col</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='c-body'>
          <TableRow>
            <TableCell className='c-cell'>Val</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter className='c-footer'>
          <TableRow>
            <TableFoot className='c-foot'>End</TableFoot>
          </TableRow>
        </TableFooter>
      </Table>
    )

    const table = screen.getByRole('table')
    expect(table.className).toContain('c-table')
    expect(table.querySelector('thead')?.className).toContain('c-header')
    expect(table.querySelector('tbody')?.className).toContain('c-body')
    expect(table.querySelector('tfoot')?.className).toContain('c-footer')
    expect(table.querySelector('tr')?.className).toContain('c-row')
    expect(screen.getByRole('columnheader').className).toContain('c-head')
    expect(screen.getByRole('cell', { name: 'Val' }).className).toContain('c-cell')
    expect(screen.getByText('End').className).toContain('c-foot')
  })
})
