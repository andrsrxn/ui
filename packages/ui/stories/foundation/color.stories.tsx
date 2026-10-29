import preview from '../../.storybook/preview'
import { cn } from '../../src/lib/utils/theme'
import { capitalize } from '../utils/strings'

const meta = preview.meta({
  title: 'Foundations/Color',
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs'],
})

const colors = {
  brand: {
    '50': {
      className: 'bg-(--color-brand-50)',
      hex: '#e7effd',
    },
    '100': {
      className: 'bg-(--color-brand-100)',
      hex: '#d8e5fd',
    },

    '200': {
      className: 'bg-(--color-brand-200)',
      hex: '#b1cbfb',
    },

    '300': {
      className: 'bg-(--color-brand-300)',
      hex: '#86aef9',
    },

    '400': {
      className: 'bg-(--color-brand-400)',
      hex: '#5187ec',
    },

    '500': {
      className: 'bg-(--color-brand-500)',
      hex: '#2367e7',
    },

    '600': {
      className: 'bg-(--color-brand-600)',
      hex: '#0047cc',
    },

    '700': {
      className: 'bg-(--color-brand-700)',
      hex: '#0039a3',
    },

    '800': {
      className: 'bg-(--color-brand-800)',
      hex: '#002e85',
    },

    '900': {
      className: 'bg-(--color-brand-900)',
      hex: '#00153d',
    },

    '950': {
      className: 'bg-(--color-brand-950)',
      hex: '#000e29',
    },
  },
  brandSecondary: {
    '50': {
      className: 'bg-(--color-brand-secondary-50)',
      hex: '#e7effd',
    },
    '100': {
      className: 'bg-(--color-brand-secondary-100)',
      hex: '#d8e5fd',
    },

    '200': {
      className: 'bg-(--color-brand-secondary-200)',
      hex: '#b1cbfb',
    },

    '300': {
      className: 'bg-(--color-brand-secondary-300)',
      hex: '#86aef9',
    },

    '400': {
      className: 'bg-(--color-brand-secondary-400)',
      hex: '#5187ec',
    },

    '500': {
      className: 'bg-(--color-brand-secondary-500)',
      hex: '#2367e7',
    },

    '600': {
      className: 'bg-(--color-brand-secondary-600)',
      hex: '#0047cc',
    },

    '700': {
      className: 'bg-(--color-brand-secondary-700)',
      hex: '#0039a3',
    },

    '800': {
      className: 'bg-(--color-brand-secondary-800)',
      hex: '#002e85',
    },

    '900': {
      className: 'bg-(--color-brand-secondary-900)',
      hex: '#00153d',
    },

    '950': {
      className: 'bg-(--color-brand-secondary-950)',
      hex: '#000e29',
    },
  },
  neutral: {
    '0': {
      className: 'bg-(--color-neutral-0)',
      hex: '#ffffff',
    },
    '50': {
      className: 'bg-(--color-neutral-50)',
      hex: '#f6f7fd',
    },
    '100': {
      className: 'bg-(--color-neutral-100)',
      hex: '#ebedf9',
    },
    '200': {
      className: 'bg-(--color-neutral-200)',
      hex: '#daddf1',
    },
    '300': {
      className: 'bg-(--color-neutral-300)',
      hex: '#c1c6e1',
    },
    '400': {
      className: 'bg-(--color-neutral-400)',
      hex: '#8f96b7',
    },
    '500': {
      className: 'bg-(--color-neutral-500)',
      hex: '#60678a',
    },
    '600': {
      className: 'bg-(--color-neutral-600)',
      hex: '#323648',
    },
    '700': {
      className: 'bg-(--color-neutral-700)',
      hex: '#1f222d',
    },
    '800': {
      className: 'bg-(--color-neutral-800)',
      hex: '#15161e',
    },
    '900': {
      className: 'bg-(--color-neutral-900)',
      hex: '#0f1015',
    },
    '950': {
      className: 'bg-(--color-neutral-950)',
      hex: '#060709',
    },
  },
  accentBlue: {
    '50': {
      className: 'bg-(--color-accent-blue-50)',
      hex: '#e2ecfd',
    },
    '100': {
      className: 'bg-(--color-accent-blue-100)',
      hex: '#d8e5fd',
    },
    '200': {
      className: 'bg-(--color-accent-blue-200)',
      hex: '#b1cbfb',
    },
    '300': {
      className: 'bg-(--color-accent-blue-300)',
      hex: '#86aef9',
    },
    '400': {
      className: 'bg-(--color-accent-blue-400)',
      hex: '#5187ec',
    },
    '500': {
      className: 'bg-(--color-accent-blue-500)',
      hex: '#2367e7',
    },
    '600': {
      className: 'bg-(--color-accent-blue-600)',
      hex: '#0047cc',
    },
    '700': {
      className: 'bg-(--color-accent-blue-700)',
      hex: '#0039a3',
    },
    '800': {
      className: 'bg-(--color-accent-blue-800)',
      hex: '#002e85',
    },
    '900': {
      className: 'bg-(--color-accent-blue-900)',
      hex: '#00153d',
    },
    '950': {
      className: 'bg-(--color-accent-blue-950)',
      hex: '#000e29',
    },
  },
  accentTeal: {
    '50': {
      className: 'bg-(--color-accent-teal-50)',
      hex: '#effbf9',
    },
    '100': {
      className: 'bg-(--color-accent-teal-100)',
      hex: '#e3f7f3',
    },
    '200': {
      className: 'bg-(--color-accent-teal-200)',
      hex: '#d2efea',
    },
    '300': {
      className: 'bg-(--color-accent-teal-300)',
      hex: '#afded7',
    },
    '400': {
      className: 'bg-(--color-accent-teal-400)',
      hex: '#83cdc0',
    },
    '500': {
      className: 'bg-(--color-accent-teal-500)',
      hex: '#45c4af',
    },
    '600': {
      className: 'bg-(--color-accent-teal-600)',
      hex: '#328b7d',
    },
    '700': {
      className: 'bg-(--color-accent-teal-700)',
      hex: '#246b5f',
    },
    '800': {
      className: 'bg-(--color-accent-teal-800)',
      hex: '#1a4d44',
    },
    '900': {
      className: 'bg-(--color-accent-teal-900)',
      hex: '#0f2e29',
    },
    '950': {
      className: 'bg-(--color-accent-teal-950)',
      hex: '#0b221f',
    },
  },
  accentGreen: {
    '50': {
      className: 'bg-(--color-accent-green-50)',
      hex: '#f3faef',
    },
    '100': {
      className: 'bg-(--color-accent-green-100)',
      hex: '#e7f6e0',
    },
    '200': {
      className: 'bg-(--color-accent-green-200)',
      hex: '#cfecc0',
    },
    '300': {
      className: 'bg-(--color-accent-green-300)',
      hex: '#b1e199',
    },
    '400': {
      className: 'bg-(--color-accent-green-400)',
      hex: '#93d572',
    },
    '500': {
      className: 'bg-(--color-accent-green-500)',
      hex: '#78ca4e',
    },
    '600': {
      className: 'bg-(--color-accent-green-600)',
      hex: '#4c9f23',
    },
    '700': {
      className: 'bg-(--color-accent-green-700)',
      hex: '#3d7b1e',
    },
    '800': {
      className: 'bg-(--color-accent-green-800)',
      hex: '#34631c',
    },
    '900': {
      className: 'bg-(--color-accent-green-900)',
      hex: '#192f0e',
    },
    '950': {
      className: 'bg-(--color-accent-green-950)',
      hex: '#14210d',
    },
  },
  accentYellow: {
    '50': {
      className: 'bg-(--color-accent-yellow-50)',
      hex: '#fefcf0',
    },
    '100': {
      className: 'bg-(--color-accent-yellow-100)',
      hex: '#fef9e2',
    },
    '200': {
      className: 'bg-(--color-accent-yellow-200)',
      hex: '#fcf1ba',
    },
    '300': {
      className: 'bg-(--color-accent-yellow-300)',
      hex: '#fbf0bb',
    },
    '400': {
      className: 'bg-(--color-accent-yellow-400)',
      hex: '#f7e797',
    },
    '500': {
      className: 'bg-(--color-accent-yellow-500)',
      hex: '#f2db69',
    },
    '600': {
      className: 'bg-(--color-accent-yellow-600)',
      hex: '#eace43',
    },
    '700': {
      className: 'bg-(--color-accent-yellow-700)',
      hex: '#9a8413',
    },
    '800': {
      className: 'bg-(--color-accent-yellow-800)',
      hex: '#75640f',
    },
    '900': {
      className: 'bg-(--color-accent-yellow-900)',
      hex: '#322a06',
    },
    '950': {
      className: 'bg-(--color-accent-yellow-950)',
      hex: '#231f05',
    },
  },
  accentOrange: {
    '50': {
      className: 'bg-(--color-accent-orange-50)',
      hex: '#fef5f0',
    },
    '100': {
      className: 'bg-(--color-accent-orange-100)',
      hex: '#feebe2',
    },
    '200': {
      className: 'bg-(--color-accent-orange-200)',
      hex: '#fcd7c5',
    },
    '300': {
      className: 'bg-(--color-accent-orange-300)',
      hex: '#fbbc9d',
    },
    '400': {
      className: 'bg-(--color-accent-orange-400)',
      hex: '#f79c6e',
    },
    '500': {
      className: 'bg-(--color-accent-orange-500)',
      hex: '#f58851',
    },
    '600': {
      className: 'bg-(--color-accent-orange-600)',
      hex: '#e06629',
    },
    '700': {
      className: 'bg-(--color-accent-orange-700)',
      hex: '#b14a16',
    },
    '800': {
      className: 'bg-(--color-accent-orange-800)',
      hex: '#8f390f',
    },
    '900': {
      className: 'bg-(--color-accent-orange-900)',
      hex: '#441d09',
    },
    '950': {
      className: 'bg-(--color-accent-orange-950)',
      hex: '#301508',
    },
  },
  accentRed: {
    '50': {
      className: 'bg-(--color-accent-red-50)',
      hex: '#fef0f0',
    },
    '100': {
      className: 'bg-(--color-accent-red-100)',
      hex: '#fde2e2',
    },
    '200': {
      className: 'bg-(--color-accent-red-200)',
      hex: '#fbc5c5',
    },
    '300': {
      className: 'bg-(--color-accent-red-300)',
      hex: '#f79797',
    },
    '400': {
      className: 'bg-(--color-accent-red-400)',
      hex: '#f26969',
    },
    '500': {
      className: 'bg-(--color-accent-red-500)',
      hex: '#ef4343',
    },
    '600': {
      className: 'bg-(--color-accent-red-600)',
      hex: '#d40202',
    },
    '700': {
      className: 'bg-(--color-accent-red-700)',
      hex: '#a20202',
    },
    '800': {
      className: 'bg-(--color-accent-red-800)',
      hex: '#830101',
    },
    '900': {
      className: 'bg-(--color-accent-red-900)',
      hex: '#3d0101',
    },
    '950': {
      className: 'bg-(--color-accent-red-950)',
      hex: '#2d0000',
    },
  },
  accentMagenta: {
    '50': {
      className: 'bg-(--color-accent-magenta-50)',
      hex: '#fef0f5',
    },
    '100': {
      className: 'bg-(--color-accent-magenta-100)',
      hex: '#fde2ec',
    },
    '200': {
      className: 'bg-(--color-accent-magenta-200)',
      hex: '#fcc5d8',
    },
    '300': {
      className: 'bg-(--color-accent-magenta-300)',
      hex: '#faadc8',
    },
    '400': {
      className: 'bg-(--color-accent-magenta-400)',
      hex: '#f896b8',
    },
    '500': {
      className: 'bg-(--color-accent-magenta-500)',
      hex: '#fc6ea0',
    },
    '600': {
      className: 'bg-(--color-accent-magenta-600)',
      hex: '#f33f7e',
    },
    '700': {
      className: 'bg-(--color-accent-magenta-700)',
      hex: '#c53064',
    },
    '800': {
      className: 'bg-(--color-accent-magenta-800)',
      hex: '#822746',
    },
    '900': {
      className: 'bg-(--color-accent-magenta-900)',
      hex: '#431324',
    },
    '950': {
      className: 'bg-(--color-accent-magenta-950)',
      hex: '#310c19',
    },
  },
  accentPurple: {
    '50': {
      className: 'bg-(--color-accent-purple-50)',
      hex: '#f7f1fe',
    },
    '100': {
      className: 'bg-(--color-accent-purple-100)',
      hex: '#efe2fd',
    },
    '200': {
      className: 'bg-(--color-accent-purple-200)',
      hex: '#e1cafc',
    },
    '300': {
      className: 'bg-(--color-accent-purple-300)',
      hex: '#d4b6f7',
    },
    '400': {
      className: 'bg-(--color-accent-purple-400)',
      hex: '#bf93f0',
    },
    '500': {
      className: 'bg-(--color-accent-purple-500)',
      hex: '#a466ea',
    },
    '600': {
      className: 'bg-(--color-accent-purple-600)',
      hex: '#7f2cdd',
    },
    '700': {
      className: 'bg-(--color-accent-purple-700)',
      hex: '#661fb7',
    },
    '800': {
      className: 'bg-(--color-accent-purple-800)',
      hex: '#4e1a89',
    },
    '900': {
      className: 'bg-(--color-accent-purple-900)',
      hex: '#270d45',
    },
    '950': {
      className: 'bg-(--color-accent-purple-950)',
      hex: '#1d0a34',
    },
  },
  info: {
    '50': {
      className: 'bg-(--color-info-50)',
      hex: '#e2ecfd',
    },
    '100': {
      className: 'bg-(--color-info-100)',
      hex: '#d8e5fd',
    },
    '200': {
      className: 'bg-(--color-info-200)',
      hex: '#b1cbfb',
    },
    '300': {
      className: 'bg-(--color-info-300)',
      hex: '#86aef9',
    },
    '400': {
      className: 'bg-(--color-info-400)',
      hex: '#5187ec',
    },
    '500': {
      className: 'bg-(--color-info-500)',
      hex: '#2367e7',
    },
    '600': {
      className: 'bg-(--color-info-600)',
      hex: '#0047cc',
    },
    '700': {
      className: 'bg-(--color-info-700)',
      hex: '#0039a3',
    },
    '800': {
      className: 'bg-(--color-info-800)',
      hex: '#002e85',
    },
    '900': {
      className: 'bg-(--color-info-900)',
      hex: '#00153d',
    },
    '950': {
      className: 'bg-(--color-info-950)',
      hex: '#000e29',
    },
  },
  success: {
    '50': {
      className: 'bg-(--color-success-50)',
      hex: '#f3faef',
    },
    '100': {
      className: 'bg-(--color-success-100)',
      hex: '#e7f6e0',
    },
    '200': {
      className: 'bg-(--color-success-200)',
      hex: '#cfecc0',
    },
    '300': {
      className: 'bg-(--color-success-300)',
      hex: '#b1e199',
    },
    '400': {
      className: 'bg-(--color-success-400)',
      hex: '#93d572',
    },
    '500': {
      className: 'bg-(--color-success-500)',
      hex: '#78ca4e',
    },
    '600': {
      className: 'bg-(--color-success-600)',
      hex: '#4c9f23',
    },
    '700': {
      className: 'bg-(--color-success-700)',
      hex: '#3d7b1e',
    },
    '800': {
      className: 'bg-(--color-success-800)',
      hex: '#34631c',
    },
    '900': {
      className: 'bg-(--color-success-900)',
      hex: '#192f0e',
    },
    '950': {
      className: 'bg-(--color-success-950)',
      hex: '#14210d',
    },
  },
  warning: {
    '50': {
      className: 'bg-(--color-warning-50)',
      hex: '#fefcf0',
    },
    '100': {
      className: 'bg-(--color-warning-100)',
      hex: '#fef9e2',
    },
    '200': {
      className: 'bg-(--color-warning-200)',
      hex: '#fcf1ba',
    },
    '300': {
      className: 'bg-(--color-warning-300)',
      hex: '#fbf0bb',
    },
    '400': {
      className: 'bg-(--color-warning-400)',
      hex: '#f7e797',
    },
    '500': {
      className: 'bg-(--color-warning-500)',
      hex: '#f2db69',
    },
    '600': {
      className: 'bg-(--color-warning-600)',
      hex: '#eace43',
    },
    '700': {
      className: 'bg-(--color-warning-700)',
      hex: '#9a8413',
    },
    '800': {
      className: 'bg-(--color-warning-800)',
      hex: '#75640f',
    },
    '900': {
      className: 'bg-(--color-warning-900)',
      hex: '#322a06',
    },
    '950': {
      className: 'bg-(--color-warning-950)',
      hex: '#231f05',
    },
  },

  danger: {
    '50': {
      className: 'bg-(--color-danger-50)',
      hex: '#fef0f0',
    },
    '100': {
      className: 'bg-(--color-danger-100)',
      hex: '#fde2e2',
    },
    '200': {
      className: 'bg-(--color-danger-200)',
      hex: '#fbc5c5',
    },
    '300': {
      className: 'bg-(--color-danger-300)',
      hex: '#f79797',
    },
    '400': {
      className: 'bg-(--color-danger-400)',
      hex: '#f26969',
    },
    '500': {
      className: 'bg-(--color-danger-500)',
      hex: '#ef4343',
    },
    '600': {
      className: 'bg-(--color-danger-600)',
      hex: '#d40202',
    },
    '700': {
      className: 'bg-(--color-danger-700)',
      hex: '#a20202',
    },
    '800': {
      className: 'bg-(--color-danger-800)',
      hex: '#830101',
    },
    '900': {
      className: 'bg-(--color-danger-900)',
      hex: '#3d0101',
    },
    '950': {
      className: 'bg-(--color-danger-950)',
      hex: '#2d0000',
    },
  },
}

const ColorSwatch = ({
  name,
  hex,
  className,
}: {
  name: string
  className?: string
  hex?: string
}) => (
  <div className='bg-surface border-base flex w-full flex-col overflow-hidden rounded-lg border'>
    <div className={cn('h-20 w-full', className)} />
    <div className='flex flex-col gap-2 px-2 py-4'>
      <span className='text-label-base text-primary leading-base block w-full truncate'>
        {name}
      </span>

      <span className='text-body-xs text-secondary block w-full truncate leading-none tabular-nums'>
        {hex}
      </span>
    </div>
  </div>
)

const REGEX_UPPERCASE = /[A-Z]/u

export const Primitives = meta.story({
  render: () => (
    <div className='grid gap-20'>
      <div className='grid gap-4'>
        {Object.entries(colors).map(([colorKey, color]) => {
          let normalizedColorName = colorKey
          const firstUppercase = colorKey.match(REGEX_UPPERCASE)?.[0]

          if (firstUppercase) {
            const indexOfUppercase = colorKey.indexOf(firstUppercase)
            const firstWord = capitalize(colorKey.slice(0, indexOfUppercase))
            const secondWord = capitalize(colorKey.slice(indexOfUppercase))

            normalizedColorName = `${firstWord} ${secondWord}`
          } else {
            normalizedColorName = capitalize(colorKey)
          }

          return (
            <div key={colorKey} className='grid gap-4'>
              <span className='text-label-2xl'>{normalizedColorName}</span>
              <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4'>
                {Object.entries(color).map(([scale, value]) => (
                  <ColorSwatch
                    key={`${colorKey}-${scale}`}
                    name={`${normalizedColorName} ${scale}`}
                    hex={value.hex}
                    className={value.className}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ),
})
