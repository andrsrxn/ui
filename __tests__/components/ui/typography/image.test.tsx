import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Image } from '../../../../src/components/ui/typography/image'

describe('Image Component', () => {
  it('renders a main image with default attributes and container', () => {
    render(<Image src='main.jpg' alt='Main Image' />)

    const mainImg = screen.getByRole('img', { name: 'Main Image' })
    expect(mainImg).toBeDefined()
    expect(mainImg.getAttribute('src')).toBe('main.jpg')
    expect(mainImg.getAttribute('decoding')).toBe('async')
    expect(mainImg.getAttribute('loading')).toBe('lazy')
    expect(mainImg.className).toContain('shrink-0')

    // Placeholder image should not exist
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(1)
  })

  it('renders a placeholder image when placeholderUrl is provided', () => {
    const { container } = render(
      <Image src='main.jpg' alt='Main Image' placeholderUrl='placeholder.jpg' />
    )

    // We should have 2 images: one main and one placeholder
    const images = container.querySelectorAll('img')
    expect(images.length).toBe(2)

    const placeholderImg = Array.from(images).find(
      img => img.getAttribute('src') === 'placeholder.jpg'
    )
    expect(placeholderImg).toBeDefined()
    expect(placeholderImg?.getAttribute('aria-hidden')).toBe('true')
    expect(placeholderImg?.className).toContain('opacity-100')
    expect(placeholderImg?.className).not.toContain('opacity-0')
  })

  it('hides placeholder when main image loads', () => {
    const { container } = render(
      <Image src='main.jpg' alt='Main Image' placeholderUrl='placeholder.jpg' />
    )

    const mainImg = screen.getByRole('img', { name: 'Main Image' })
    const images = container.querySelectorAll('img')
    expect(images.length).toBe(2)
    const placeholderImg = Array.from(images).find(
      img => img.getAttribute('src') === 'placeholder.jpg'
    )

    // Initially loaded is false, placeholder doesn't have opacity-0
    expect(placeholderImg?.className).not.toContain('opacity-0')

    // Simulate main image load event
    fireEvent.load(mainImg)

    // After load, placeholder should have opacity-0
    expect(placeholderImg?.className).toContain('opacity-0')
  })

  it('forwards additional HTML attributes and applies custom class to main image', () => {
    render(
      <Image src='main.jpg' alt='Main Image' className='custom-img-class' data-custom='value' />
    )
    const mainImg = screen.getByRole('img', { name: 'Main Image' })
    expect(mainImg.className).toContain('custom-img-class')
    expect(mainImg.getAttribute('data-custom')).toBe('value')
  })
})
