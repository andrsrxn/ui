import type { ElementType, ReactNode } from 'react'
import preview from '../../.storybook/preview'
// biome-ignore lint/performance/noNamespaceImport: to much imports
import * as icons from '../../src/components/icons'
import { Inline } from '../../src/components/ui/typography/inline'

const meta = preview.meta({
  title: 'Foundations/Icons',
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs'],
})

const IconGridItem = ({ icon: Icon, iconName }: { icon: ElementType; iconName: string }) => {
  return (
    <div className='flex items-center justify-start gap-2'>
      <Inline className='rounded-base bg-surface shadow-base size-icon-4xl flex shrink-0 items-center justify-center p-2'>
        <Icon className='size-icon-2xl' />
      </Inline>
      <Inline size='xs' className='truncate' title={iconName}>
        {iconName}
      </Inline>
    </div>
  )
}

const IconGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4'>
      {children}
    </div>
  )
}

export const Base = meta.story({
  render: () => (
    <IconGrid>
      {Object.entries(icons)
        .filter(
          ([name]) =>
            !(
              name.startsWith('IconBrand') ||
              name.startsWith('IconFlag') ||
              name.startsWith('IconLogo')
            )
        )
        .map(([name, Icon]) => (
          <IconGridItem key={name} icon={Icon} iconName={name} />
        ))}
    </IconGrid>
  ),
})

export const Logos = meta.story({
  render: () => (
    <IconGrid>
      {Object.entries(icons)
        .filter(([name]) => name.startsWith('IconLogo'))
        .map(([name, Icon]) => (
          <IconGridItem key={name} icon={Icon} iconName={name} />
        ))}
    </IconGrid>
  ),
})

export const Brands = meta.story({
  render: () => (
    <IconGrid>
      {Object.entries(icons)
        .filter(([name]) => name.startsWith('IconBrand'))
        .map(([name, Icon]) => (
          <IconGridItem key={name} icon={Icon} iconName={name} />
        ))}
    </IconGrid>
  ),
})

export const Flags = meta.story({
  render: () => (
    <IconGrid>
      {Object.entries(icons)
        // biome-ignore lint/style/noMagicNumbers: to not take the literal `IconFlag`
        .filter(([name]) => name.startsWith('IconFlag') && name.length > 8)
        .map(([name, Icon]) => (
          <IconGridItem key={name} icon={Icon} iconName={name} />
        ))}
    </IconGrid>
  ),
})
