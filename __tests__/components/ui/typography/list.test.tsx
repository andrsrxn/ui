import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { List, ListItem } from '../../../../src/components/ui/typography/list'

describe('List Component', () => {
  it('renders a ul tag by default with list-disc', () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
      </List>
    )
    const list = screen.getByRole('list')
    expect(list.tagName).toBe('UL')
    expect(list.getAttribute('data-slot')).toBe('list')
    expect(list.className).toContain('list-disc')
  })

  it('renders an ol tag when ordered is true', () => {
    render(
      <List ordered>
        <ListItem>Item 1</ListItem>
      </List>
    )
    const list = screen.getByRole('list')
    expect(list.tagName).toBe('OL')
    expect(list.className).toContain('list-decimal')
  })

  it('applies custom nested and size classes', () => {
    render(
      <List nested size='lg'>
        <ListItem>Nested Item</ListItem>
      </List>
    )
    const list = screen.getByRole('list')
    expect(list.className).toContain('mt-1') // nested true class
    expect(list.className).toContain('text-body-lg') // size lg class
  })
})

describe('ListItem Component', () => {
  it('renders li with data-slot and children', () => {
    render(<ListItem>Hello World</ListItem>)
    const item = screen.getByRole('listitem')
    expect(item).toBeDefined()
    expect(item.getAttribute('data-slot')).toBe('list-item')
    expect(item.textContent).toBe('Hello World')
  })

  it('renders a label prefix when label is provided', () => {
    render(<ListItem label='Note'>Important information</ListItem>)
    const item = screen.getByRole('listitem')
    expect(item.textContent).toContain('Note:')
    expect(item.textContent).toContain('Important information')

    // Check that Label is rendered inside
    const label = screen.getByText('Note:')
    expect(label.getAttribute('data-slot')).toBe('list-item-label')
  })

  it('forwards custom className and props', () => {
    render(
      <ListItem className='custom-item' id='item-1'>
        Item
      </ListItem>
    )
    const item = screen.getByRole('listitem')
    expect(item.className).toContain('custom-item')
    expect(item.id).toBe('item-1')
  })
})
