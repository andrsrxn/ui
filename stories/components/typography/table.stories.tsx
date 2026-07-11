import preview from '../../../.storybook/preview'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../src/components/ui/typography/table'
import { SurfaceDecorator } from '../../shared/decorators'
import { formatCurrency } from '../../utils/numbers'

const data = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: 250,
    paymentMethod: 'Credit card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: 150,
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: 350,
    paymentMethod: 'Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: 450,
    paymentMethod: 'Credit card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: 550,
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: 200,
    paymentMethod: 'Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: 300,
    paymentMethod: 'Credit card',
  },
]
const totalData = data.reduce((acc, invoice) => acc + invoice.totalAmount, 0)

const meta = preview.meta({
  title: 'Components/Typography/Table',
  component: Table,
  subcomponents: {
    TableBody,
    TableCaption,
    TableCell,
    TableFoot,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The semantic `<table>` for tabular data.',
      },
    },
  },
  args: {
    className: 'w-lg',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-end'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className='text-end tabular-nums'>
                {formatCurrency(invoice.totalAmount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableFoot colSpan={3}>Total</TableFoot>
            <TableFoot className='text-end tabular-nums'>{formatCurrency(totalData)}</TableFoot>
          </TableRow>
        </TableFooter>
        <TableCaption>Your recent invoices.</TableCaption>
      </>
    ),
  },
})

export const Base = meta.story({})

export const Surface = meta.story({
  args: { variant: 'surface' },

  decorators: SurfaceDecorator,
})

export const Selected = meta.story({
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-end'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice, i) => (
            <TableRow
              key={invoice.invoice}
              // biome-ignore lint/style/noMagicNumbers: mocking random rows to be selected
              data-selected={i === 2 || i === 3 || i === 5 ? true : undefined}>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className='text-end tabular-nums'>
                {formatCurrency(invoice.totalAmount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableFoot colSpan={3}>Total</TableFoot>
            <TableFoot className='text-end tabular-nums'>{formatCurrency(totalData)}</TableFoot>
          </TableRow>
        </TableFooter>
        <TableCaption>Your recent invoices.</TableCaption>
      </>
    ),
  },
})
