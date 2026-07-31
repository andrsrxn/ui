/** biome-ignore-all lint/performance/noNamespaceImport: get all the icons to showcase them */
import type { ElementType, ReactNode } from 'react'
import preview from '../../.storybook/preview'
import * as icons from '@andrsrxn/icons'
import * as bIcons from '@andrsrxn/icons/brands'
import * as fIcons from '@andrsrxn/icons/flags'
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
        .filter(([name]) => !name.startsWith('IconLogo'))
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
      {Object.entries(bIcons)
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
      {Object.entries(fIcons)
        // biome-ignore lint/style/noMagicNumbers: to not take the literal `IconFlag`
        .filter(([name]) => name.startsWith('IconFlag') && name.length > 8)
        .map(([name, Icon]) => (
          <IconGridItem key={name} icon={Icon} iconName={name} />
        ))}
    </IconGrid>
  ),
})
