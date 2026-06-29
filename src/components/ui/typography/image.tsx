/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: show placeholder */
'use client'

import { type ComponentProps, useState } from 'react'
import { cn } from '../../../lib/utils/theme'

export interface ImageProps extends ComponentProps<'img'> {
  src?: string
  alt?: string
  placeholderUrl?: string
}

export const Image = ({
  alt,
  placeholderUrl,
  decoding = 'async',
  loading = 'lazy',
  className,
  src,
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const includePlaceholder = placeholderUrl && placeholderUrl.length > 0

  return (
    <div className='relative isolate'>
      {includePlaceholder ? (
        <img
          src={placeholderUrl}
          className={cn(
            'duration-fast ease-base pointer-events-none absolute inset-0 z-10 size-full object-cover opacity-100 transition-opacity',
            loaded && 'opacity-0',
            className
          )}
          loading='eager'
          decoding='sync'
          alt=''
          aria-hidden
        />
      ) : null}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn('shrink-0', className)}
        decoding={decoding}
        loading={loading}
        {...props}
      />
    </div>
  )
}
