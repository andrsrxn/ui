import preview from '../../.storybook/preview'
import { cn } from '../../src/lib/utils/theme'

const meta = preview.meta({
  title: 'Foundations/Color',
  parameters: {
    layout: 'padded',
  },
  tags: ['!autodocs'],
})

const ColorSwatch = ({
  color,
  hslColor,
  hexColor,
  className,
}: {
  color: string
  className?: string
  hslColor?: string
  hexColor?: string
}) => (
  <div className='bg-surface border-base flex w-full flex-col overflow-hidden rounded-lg border'>
    <div className={cn('h-20 w-full', className)} />
    <div className='flex flex-col gap-6 px-2 py-4'>
      <span className='text-label-base text-primary block w-max leading-none'>{color}</span>
      <span className='text-body-xs text-secondary block w-max leading-none tabular-nums'>
        {hslColor}
      </span>
      <span className='text-body-xs text-secondary block w-max leading-none tabular-nums'>
        {hexColor}
      </span>
    </div>
  </div>
)

export const Primitives = meta.story({
  render: () => (
    <div className='grid gap-20'>
      {/* Brand */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Brand</span>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Brand 50'
            className='bg-(--color-brand-50)'
            hslColor='hsl(218, 87%, 95%)'
            hexColor='#e7effd'
          />
          <ColorSwatch
            color='Brand 100'
            className='bg-(--color-brand-100)'
            hslColor='hsl(218, 93%, 92%)'
            hexColor='#d8e5fd'
          />
          <ColorSwatch
            color='Brand 200'
            className='bg-(--color-brand-200)'
            hslColor='hsl(218, 91%, 84%)'
            hexColor='#b1cbfb'
          />
          <ColorSwatch
            color='Brand 300'
            className='bg-(--color-brand-300)'
            hslColor='hsl(219, 90%, 75%)'
            hexColor='#86aef9'
          />
          <ColorSwatch
            color='Brand 400'
            className='bg-(--color-brand-400)'
            hslColor='hsl(221, 82%, 63%)'
            hexColor='#5187ec'
          />
          <ColorSwatch
            color='Brand 500'
            className='bg-(--color-brand-500)'
            hslColor='hsl(221, 80%, 52%)'
            hexColor='#2367e7'
          />
          <ColorSwatch
            color='Brand 600'
            className='bg-(--color-brand-600)'
            hslColor='hsl(221, 100%, 40%)'
            hexColor='#0047cc'
          />
          <ColorSwatch
            color='Brand 700'
            className='bg-(--color-brand-700)'
            hslColor='hsl(221, 100%, 32%)'
            hexColor='#0039a3'
          />
          <ColorSwatch
            color='Brand 800'
            className='bg-(--color-brand-800)'
            hslColor='hsl(221, 100%, 26%)'
            hexColor='#002e85'
          />
          <ColorSwatch
            color='Brand 900'
            className='bg-(--color-brand-900)'
            hslColor='hsl(221, 100%, 12%)'
            hexColor='#00153d'
          />
          <ColorSwatch
            color='Brand 950'
            className='bg-(--color-brand-950)'
            hslColor='hsl(221, 100%, 8%)'
            hexColor='#000e29'
          />
        </div>
      </div>

      {/* Neutral */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Neutral</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Neutral 0'
            className='bg-(--color-neutral-0)'
            hslColor='hsl(0, 0%, 100%)'
            hexColor='#ffffff'
          />
          <ColorSwatch
            color='Neutral 50'
            className='bg-(--color-neutral-50)'
            hslColor='hsl(234, 85%, 98%)'
            hexColor='#f6f7fd'
          />
          <ColorSwatch
            color='Neutral 100'
            className='bg-(--color-neutral-100)'
            hslColor='hsl(232, 67%, 95%)'
            hexColor='#ebedf9'
          />
          <ColorSwatch
            color='Neutral 200'
            className='bg-(--color-neutral-200)'
            hslColor='hsl(232, 51%, 90%)'
            hexColor='#daddf1'
          />
          <ColorSwatch
            color='Neutral 300'
            className='bg-(--color-neutral-300)'
            hslColor='hsl(232, 38%, 82%)'
            hexColor='#c1c6e1'
          />
          <ColorSwatch
            color='Neutral 400'
            className='bg-(--color-neutral-400)'
            hslColor='hsl(232, 27%, 64%)'
            hexColor='#8f96b7'
          />
          <ColorSwatch
            color='Neutral 500'
            className='bg-(--color-neutral-500)'
            hslColor='hsl(232, 19%, 46%)'
            hexColor='#60678a'
          />
          <ColorSwatch
            color='Neutral 600'
            className='bg-(--color-neutral-600)'
            hslColor='hsl(232, 18%, 25%)'
            hexColor='#323648'
          />
          <ColorSwatch
            color='Neutral 700'
            className='bg-(--color-neutral-700)'
            hslColor='hsl(228, 19%, 15%)'
            hexColor='#1f222d'
          />
          <ColorSwatch
            color='Neutral 800'
            className='bg-(--color-neutral-800)'
            hslColor='hsl(233, 20%, 10%)'
            hexColor='#15161e'
          />
          <ColorSwatch
            color='Neutral 900'
            className='bg-(--color-neutral-900)'
            hslColor='hsl(230, 16%, 7%)'
            hexColor='#0f1015'
          />
          <ColorSwatch
            color='Neutral 950'
            className='bg-(--color-neutral-950)'
            hslColor='hsl(240, 20%, 4%)'
            hexColor='#060709'
          />
        </div>
      </div>

      {/* Accent Blue (aliases Brand) */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Blue</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Blue 50'
            className='bg-(--color-accent-blue-50)'
            hslColor='hsl(218, 93%, 94%)'
            hexColor='#e2ecfd'
          />
          <ColorSwatch
            color='Blue 100'
            className='bg-(--color-accent-blue-100)'
            hslColor='hsl(218, 93%, 92%)'
            hexColor='#d8e5fd'
          />
          <ColorSwatch
            color='Blue 200'
            className='bg-(--color-accent-blue-200)'
            hslColor='hsl(218, 91%, 84%)'
            hexColor='#b1cbfb'
          />
          <ColorSwatch
            color='Blue 300'
            className='bg-(--color-accent-blue-300)'
            hslColor='hsl(219, 90%, 75%)'
            hexColor='#86aef9'
          />
          <ColorSwatch
            color='Blue 400'
            className='bg-(--color-accent-blue-400)'
            hslColor='hsl(221, 82%, 63%)'
            hexColor='#5187ec'
          />
          <ColorSwatch
            color='Blue 500'
            className='bg-(--color-accent-blue-500)'
            hslColor='hsl(221, 80%, 52%)'
            hexColor='#2367e7'
          />
          <ColorSwatch
            color='Blue 600'
            className='bg-(--color-accent-blue-600)'
            hslColor='hsl(221, 100%, 40%)'
            hexColor='#0047cc'
          />
          <ColorSwatch
            color='Blue 700'
            className='bg-(--color-accent-blue-700)'
            hslColor='hsl(221, 100%, 32%)'
            hexColor='#0039a3'
          />
          <ColorSwatch
            color='Blue 800'
            className='bg-(--color-accent-blue-800)'
            hslColor='hsl(221, 100%, 26%)'
            hexColor='#002e85'
          />
          <ColorSwatch
            color='Blue 900'
            className='bg-(--color-accent-blue-900)'
            hslColor='hsl(221, 100%, 12%)'
            hexColor='#00153d'
          />
          <ColorSwatch
            color='Blue 950'
            className='bg-(--color-accent-blue-950)'
            hslColor='hsl(221, 100%, 8%)'
            hexColor='#000e29'
          />
        </div>
      </div>

      {/* Accent Teal */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Teal</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Teal 50'
            className='bg-(--color-accent-teal-50)'
            hslColor='hsl(171, 73%, 96%)'
            hexColor='#effbf9'
          />
          <ColorSwatch
            color='Teal 100'
            className='bg-(--color-accent-teal-100)'
            hslColor='hsl(167, 73%, 92%)'
            hexColor='#e3f7f3'
          />
          <ColorSwatch
            color='Teal 200'
            className='bg-(--color-accent-teal-200)'
            hslColor='hsl(170, 52%, 88%)'
            hexColor='#d2efea'
          />
          <ColorSwatch
            color='Teal 300'
            className='bg-(--color-accent-teal-300)'
            hslColor='hsl(172, 42%, 78%)'
            hexColor='#afded7'
          />
          <ColorSwatch
            color='Teal 400'
            className='bg-(--color-accent-teal-400)'
            hslColor='hsl(172, 44%, 66%)'
            hexColor='#83cdc0'
          />
          <ColorSwatch
            color='Teal 500'
            className='bg-(--color-accent-teal-500)'
            hslColor='hsl(169, 55%, 52%)'
            hexColor='#45c4af'
          />
          <ColorSwatch
            color='Teal 600'
            className='bg-(--color-accent-teal-600)'
            hslColor='hsl(172, 47%, 37%)'
            hexColor='#328b7d'
          />
          <ColorSwatch
            color='Teal 700'
            className='bg-(--color-accent-teal-700)'
            hslColor='hsl(172, 49%, 28%)'
            hexColor='#246b5f'
          />
          <ColorSwatch
            color='Teal 800'
            className='bg-(--color-accent-teal-800)'
            hslColor='hsl(172, 49%, 20%)'
            hexColor='#1a4d44'
          />
          <ColorSwatch
            color='Teal 900'
            className='bg-(--color-accent-teal-900)'
            hslColor='hsl(172, 49%, 12%)'
            hexColor='#0f2e29'
          />
          <ColorSwatch
            color='Teal 950'
            className='bg-(--color-accent-teal-950)'
            hslColor='hsl(172, 49%, 9%)'
            hexColor='#0b221f'
          />
        </div>
      </div>

      {/* Accent Green */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Green</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Green 50'
            className='bg-(--color-accent-green-50)'
            hslColor='hsl(103, 58%, 96%)'
            hexColor='#f3faef'
          />
          <ColorSwatch
            color='Green 100'
            className='bg-(--color-accent-green-100)'
            hslColor='hsl(108, 58%, 92%)'
            hexColor='#e7f6e0'
          />
          <ColorSwatch
            color='Green 200'
            className='bg-(--color-accent-green-200)'
            hslColor='hsl(107, 55%, 84%)'
            hexColor='#cfecc0'
          />
          <ColorSwatch
            color='Green 300'
            className='bg-(--color-accent-green-300)'
            hslColor='hsl(107, 57%, 74%)'
            hexColor='#b1e199'
          />
          <ColorSwatch
            color='Green 400'
            className='bg-(--color-accent-green-400)'
            hslColor='hsl(103, 57%, 64%)'
            hexColor='#93d572'
          />
          <ColorSwatch
            color='Green 500'
            className='bg-(--color-accent-green-500)'
            hslColor='hsl(103, 57%, 55%)'
            hexColor='#78ca4e'
          />
          <ColorSwatch
            color='Green 600'
            className='bg-(--color-accent-green-600)'
            hslColor='hsl(103, 63%, 38%)'
            hexColor='#4c9f23'
          />
          <ColorSwatch
            color='Green 700'
            className='bg-(--color-accent-green-700)'
            hslColor='hsl(103, 61%, 30%)'
            hexColor='#3d7b1e'
          />
          <ColorSwatch
            color='Green 800'
            className='bg-(--color-accent-green-800)'
            hslColor='hsl(104, 56%, 25%)'
            hexColor='#34631c'
          />
          <ColorSwatch
            color='Green 900'
            className='bg-(--color-accent-green-900)'
            hslColor='hsl(104, 56%, 12%)'
            hexColor='#192f0e'
          />
          <ColorSwatch
            color='Green 950'
            className='bg-(--color-accent-green-950)'
            hslColor='hsl(104, 56%, 9%)'
            hexColor='#14210d'
          />
        </div>
      </div>

      {/* Accent Yellow */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Yellow</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Yellow 50'
            className='bg-(--color-accent-yellow-50)'
            hslColor='hsl(49, 100%, 97%)'
            hexColor='#fefcf0'
          />
          <ColorSwatch
            color='Yellow 100'
            className='bg-(--color-accent-yellow-100)'
            hslColor='hsl(49, 100%, 94%)'
            hexColor='#fef9e2'
          />
          <ColorSwatch
            color='Yellow 200'
            className='bg-(--color-accent-yellow-200)'
            hslColor='hsl(48, 94%, 86%)'
            hexColor='#fcf1ba'
          />
          <ColorSwatch
            color='Yellow 300'
            className='bg-(--color-accent-yellow-300)'
            hslColor='hsl(48, 93%, 86%)'
            hexColor='#fbf0bb'
          />
          <ColorSwatch
            color='Yellow 400'
            className='bg-(--color-accent-yellow-400)'
            hslColor='hsl(48, 88%, 78%)'
            hexColor='#f7e797'
          />
          <ColorSwatch
            color='Yellow 500'
            className='bg-(--color-accent-yellow-500)'
            hslColor='hsl(48, 85%, 68%)'
            hexColor='#f2db69'
          />
          <ColorSwatch
            color='Yellow 600'
            className='bg-(--color-accent-yellow-600)'
            hslColor='hsl(48, 82%, 59%)'
            hexColor='#eace43'
          />
          <ColorSwatch
            color='Yellow 700'
            className='bg-(--color-accent-yellow-700)'
            hslColor='hsl(48, 77%, 34%)'
            hexColor='#9a8413'
          />
          <ColorSwatch
            color='Yellow 800'
            className='bg-(--color-accent-yellow-800)'
            hslColor='hsl(48, 77%, 26%)'
            hexColor='#75640f'
          />
          <ColorSwatch
            color='Yellow 900'
            className='bg-(--color-accent-yellow-900)'
            hslColor='hsl(48, 77%, 11%)'
            hexColor='#322a06'
          />
          <ColorSwatch
            color='Yellow 950'
            className='bg-(--color-accent-yellow-950)'
            hslColor='hsl(48, 79%, 8%)'
            hexColor='#231f05'
          />
        </div>
      </div>

      {/* Accent Orange */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Orange</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Orange 50'
            className='bg-(--color-accent-orange-50)'
            hslColor='hsl(22, 100%, 97%)'
            hexColor='#fef5f0'
          />
          <ColorSwatch
            color='Orange 100'
            className='bg-(--color-accent-orange-100)'
            hslColor='hsl(22, 99%, 94%)'
            hexColor='#feebe2'
          />
          <ColorSwatch
            color='Orange 200'
            className='bg-(--color-accent-orange-200)'
            hslColor='hsl(22, 93%, 88%)'
            hexColor='#fcd7c5'
          />
          <ColorSwatch
            color='Orange 300'
            className='bg-(--color-accent-orange-300)'
            hslColor='hsl(22, 93%, 79%)'
            hexColor='#fbbc9d'
          />
          <ColorSwatch
            color='Orange 400'
            className='bg-(--color-accent-orange-400)'
            hslColor='hsl(23, 89%, 70%)'
            hexColor='#f79c6e'
          />
          <ColorSwatch
            color='Orange 500'
            className='bg-(--color-accent-orange-500)'
            hslColor='hsl(23, 88%, 64%)'
            hexColor='#f58851'
          />
          <ColorSwatch
            color='Orange 600'
            className='bg-(--color-accent-orange-600)'
            hslColor='hsl(22, 76%, 52%)'
            hexColor='#e06629'
          />
          <ColorSwatch
            color='Orange 700'
            className='bg-(--color-accent-orange-700)'
            hslColor='hsl(22, 78%, 39%)'
            hexColor='#b14a16'
          />
          <ColorSwatch
            color='Orange 800'
            className='bg-(--color-accent-orange-800)'
            hslColor='hsl(22, 82%, 30%)'
            hexColor='#8f390f'
          />
          <ColorSwatch
            color='Orange 900'
            className='bg-(--color-accent-orange-900)'
            hslColor='hsl(22, 80%, 15%)'
            hexColor='#441d09'
          />
          <ColorSwatch
            color='Orange 950'
            className='bg-(--color-accent-orange-950)'
            hslColor='hsl(22, 79%, 11%)'
            hexColor='#301508'
          />
        </div>
      </div>

      {/* Accent Red */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Red</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Red 50'
            className='bg-(--color-accent-red-50)'
            hslColor='hsl(0, 100%, 97%)'
            hexColor='#fef0f0'
          />
          <ColorSwatch
            color='Red 100'
            className='bg-(--color-accent-red-100)'
            hslColor='hsl(0, 95%, 94%)'
            hexColor='#fde2e2'
          />
          <ColorSwatch
            color='Red 200'
            className='bg-(--color-accent-red-200)'
            hslColor='hsl(0, 92%, 88%)'
            hexColor='#fbc5c5'
          />
          <ColorSwatch
            color='Red 300'
            className='bg-(--color-accent-red-300)'
            hslColor='hsl(0, 88%, 78%)'
            hexColor='#f79797'
          />
          <ColorSwatch
            color='Red 400'
            className='bg-(--color-accent-red-400)'
            hslColor='hsl(0, 85%, 68%)'
            hexColor='#f26969'
          />
          <ColorSwatch
            color='Red 500'
            className='bg-(--color-accent-red-500)'
            hslColor='hsl(0, 84%, 60%)'
            hexColor='#ef4343'
          />
          <ColorSwatch
            color='Red 600'
            className='bg-(--color-accent-red-600)'
            hslColor='hsl(0, 99%, 42%)'
            hexColor='#d40202'
          />
          <ColorSwatch
            color='Red 700'
            className='bg-(--color-accent-red-700)'
            hslColor='hsl(0, 98%, 32%)'
            hexColor='#a20202'
          />
          <ColorSwatch
            color='Red 800'
            className='bg-(--color-accent-red-800)'
            hslColor='hsl(0, 99%, 26%)'
            hexColor='#830101'
          />
          <ColorSwatch
            color='Red 900'
            className='bg-(--color-accent-red-900)'
            hslColor='hsl(0, 99%, 12%)'
            hexColor='#3d0101'
          />
          <ColorSwatch
            color='Red 950'
            className='bg-(--color-accent-red-950)'
            hslColor='hsl(0, 100%, 9%)'
            hexColor='#2d0000'
          />
        </div>
      </div>

      {/* Accent Magenta */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Magenta</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Magenta 50'
            className='bg-(--color-accent-magenta-50)'
            hslColor='hsl(336, 100%, 97%)'
            hexColor='#fef0f5'
          />
          <ColorSwatch
            color='Magenta 100'
            className='bg-(--color-accent-magenta-100)'
            hslColor='hsl(336, 95%, 94%)'
            hexColor='#fde2ec'
          />
          <ColorSwatch
            color='Magenta 200'
            className='bg-(--color-accent-magenta-200)'
            hslColor='hsl(336, 92%, 88%)'
            hexColor='#fcc5d8'
          />
          <ColorSwatch
            color='Magenta 300'
            className='bg-(--color-accent-magenta-300)'
            hslColor='hsl(336, 91%, 83%)'
            hexColor='#faadc8'
          />
          <ColorSwatch
            color='Magenta 400'
            className='bg-(--color-accent-magenta-400)'
            hslColor='hsl(337, 88%, 78%)'
            hexColor='#f896b8'
          />
          <ColorSwatch
            color='Magenta 500'
            className='bg-(--color-accent-magenta-500)'
            hslColor='hsl(337, 94%, 71%)'
            hexColor='#fc6ea0'
          />
          <ColorSwatch
            color='Magenta 600'
            className='bg-(--color-accent-magenta-600)'
            hslColor='hsl(337, 87%, 60%)'
            hexColor='#f33f7e'
          />
          <ColorSwatch
            color='Magenta 700'
            className='bg-(--color-accent-magenta-700)'
            hslColor='hsl(337, 61%, 48%)'
            hexColor='#c53064'
          />
          <ColorSwatch
            color='Magenta 800'
            className='bg-(--color-accent-magenta-800)'
            hslColor='hsl(337, 54%, 33%)'
            hexColor='#822746'
          />
          <ColorSwatch
            color='Magenta 900'
            className='bg-(--color-accent-magenta-900)'
            hslColor='hsl(337, 55%, 17%)'
            hexColor='#431324'
          />
          <ColorSwatch
            color='Magenta 950'
            className='bg-(--color-accent-magenta-950)'
            hslColor='hsl(337, 61%, 12%)'
            hexColor='#310c19'
          />
        </div>
      </div>

      {/* Accent Purple */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Accent / Purple</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Purple 50'
            className='bg-(--color-accent-purple-50)'
            hslColor='hsl(272, 93%, 97%)'
            hexColor='#f7f1fe'
          />
          <ColorSwatch
            color='Purple 100'
            className='bg-(--color-accent-purple-100)'
            hslColor='hsl(272, 91%, 94%)'
            hexColor='#efe2fd'
          />
          <ColorSwatch
            color='Purple 200'
            className='bg-(--color-accent-purple-200)'
            hslColor='hsl(272, 91%, 89%)'
            hexColor='#e1cafc'
          />
          <ColorSwatch
            color='Purple 300'
            className='bg-(--color-accent-purple-300)'
            hslColor='hsl(272, 84%, 84%)'
            hexColor='#d4b6f7'
          />
          <ColorSwatch
            color='Purple 400'
            className='bg-(--color-accent-purple-400)'
            hslColor='hsl(272, 78%, 76%)'
            hexColor='#bf93f0'
          />
          <ColorSwatch
            color='Purple 500'
            className='bg-(--color-accent-purple-500)'
            hslColor='hsl(272, 77%, 66%)'
            hexColor='#a466ea'
          />
          <ColorSwatch
            color='Purple 600'
            className='bg-(--color-accent-purple-600)'
            hslColor='hsl(272, 73%, 52%)'
            hexColor='#7f2cdd'
          />
          <ColorSwatch
            color='Purple 700'
            className='bg-(--color-accent-purple-700)'
            hslColor='hsl(272, 70%, 42%)'
            hexColor='#661fb7'
          />
          <ColorSwatch
            color='Purple 800'
            className='bg-(--color-accent-purple-800)'
            hslColor='hsl(272, 68%, 32%)'
            hexColor='#4e1a89'
          />
          <ColorSwatch
            color='Purple 900'
            className='bg-(--color-accent-purple-900)'
            hslColor='hsl(272, 68%, 16%)'
            hexColor='#270d45'
          />
          <ColorSwatch
            color='Purple 950'
            className='bg-(--color-accent-purple-950)'
            hslColor='hsl(272, 68%, 12%)'
            hexColor='#1d0a34'
          />
        </div>
      </div>

      {/* Feedback: Info (alias → Brand) */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Feedback / Info</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Info 50'
            className='bg-(--color-info-50)'
            hslColor='hsl(218, 93%, 94%)'
            hexColor='#e2ecfd'
          />
          <ColorSwatch
            color='Info 100'
            className='bg-(--color-info-100)'
            hslColor='hsl(218, 93%, 92%)'
            hexColor='#d8e5fd'
          />
          <ColorSwatch
            color='Info 200'
            className='bg-(--color-info-200)'
            hslColor='hsl(218, 91%, 84%)'
            hexColor='#b1cbfb'
          />
          <ColorSwatch
            color='Info 300'
            className='bg-(--color-info-300)'
            hslColor='hsl(219, 90%, 75%)'
            hexColor='#86aef9'
          />
          <ColorSwatch
            color='Info 400'
            className='bg-(--color-info-400)'
            hslColor='hsl(221, 82%, 63%)'
            hexColor='#5187ec'
          />
          <ColorSwatch
            color='Info 500'
            className='bg-(--color-info-500)'
            hslColor='hsl(221, 80%, 52%)'
            hexColor='#2367e7'
          />
          <ColorSwatch
            color='Info 600'
            className='bg-(--color-info-600)'
            hslColor='hsl(221, 100%, 40%)'
            hexColor='#0047cc'
          />
          <ColorSwatch
            color='Info 700'
            className='bg-(--color-info-700)'
            hslColor='hsl(221, 100%, 32%)'
            hexColor='#0039a3'
          />
          <ColorSwatch
            color='Info 800'
            className='bg-(--color-info-800)'
            hslColor='hsl(221, 100%, 26%)'
            hexColor='#002e85'
          />
          <ColorSwatch
            color='Info 900'
            className='bg-(--color-info-900)'
            hslColor='hsl(221, 100%, 12%)'
            hexColor='#00153d'
          />
          <ColorSwatch
            color='Info 950'
            className='bg-(--color-info-950)'
            hslColor='hsl(221, 100%, 8%)'
            hexColor='#000e29'
          />
        </div>
      </div>

      {/* Feedback: Success (alias → Green) */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Feedback / Success</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Success 50'
            className='bg-(--color-success-50)'
            hslColor='hsl(103, 58%, 96%)'
            hexColor='#f3faef'
          />
          <ColorSwatch
            color='Success 100'
            className='bg-(--color-success-100)'
            hslColor='hsl(108, 58%, 92%)'
            hexColor='#e7f6e0'
          />
          <ColorSwatch
            color='Success 200'
            className='bg-(--color-success-200)'
            hslColor='hsl(107, 55%, 84%)'
            hexColor='#cfecc0'
          />
          <ColorSwatch
            color='Success 300'
            className='bg-(--color-success-300)'
            hslColor='hsl(107, 57%, 74%)'
            hexColor='#b1e199'
          />
          <ColorSwatch
            color='Success 400'
            className='bg-(--color-success-400)'
            hslColor='hsl(103, 57%, 64%)'
            hexColor='#93d572'
          />
          <ColorSwatch
            color='Success 500'
            className='bg-(--color-success-500)'
            hslColor='hsl(103, 57%, 55%)'
            hexColor='#78ca4e'
          />
          <ColorSwatch
            color='Success 600'
            className='bg-(--color-success-600)'
            hslColor='hsl(103, 63%, 38%)'
            hexColor='#4c9f23'
          />
          <ColorSwatch
            color='Success 700'
            className='bg-(--color-success-700)'
            hslColor='hsl(103, 61%, 30%)'
            hexColor='#3d7b1e'
          />
          <ColorSwatch
            color='Success 800'
            className='bg-(--color-success-800)'
            hslColor='hsl(104, 56%, 25%)'
            hexColor='#34631c'
          />
          <ColorSwatch
            color='Success 900'
            className='bg-(--color-success-900)'
            hslColor='hsl(104, 56%, 12%)'
            hexColor='#192f0e'
          />
          <ColorSwatch
            color='Success 950'
            className='bg-(--color-success-950)'
            hslColor='hsl(104, 56%, 9%)'
            hexColor='#14210d'
          />
        </div>
      </div>

      {/* Feedback: Warning (alias → Yellow) */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Feedback / Warning</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Warning 50'
            className='bg-(--color-warning-50)'
            hslColor='hsl(49, 100%, 97%)'
            hexColor='#fefcf0'
          />
          <ColorSwatch
            color='Warning 100'
            className='bg-(--color-warning-100)'
            hslColor='hsl(49, 100%, 94%)'
            hexColor='#fef9e2'
          />
          <ColorSwatch
            color='Warning 200'
            className='bg-(--color-warning-200)'
            hslColor='hsl(48, 94%, 86%)'
            hexColor='#fcf1ba'
          />
          <ColorSwatch
            color='Warning 300'
            className='bg-(--color-warning-300)'
            hslColor='hsl(48, 93%, 86%)'
            hexColor='#fbf0bb'
          />
          <ColorSwatch
            color='Warning 400'
            className='bg-(--color-warning-400)'
            hslColor='hsl(48, 88%, 78%)'
            hexColor='#f7e797'
          />
          <ColorSwatch
            color='Warning 500'
            className='bg-(--color-warning-500)'
            hslColor='hsl(48, 85%, 68%)'
            hexColor='#f2db69'
          />
          <ColorSwatch
            color='Warning 600'
            className='bg-(--color-warning-600)'
            hslColor='hsl(48, 82%, 59%)'
            hexColor='#eace43'
          />
          <ColorSwatch
            color='Warning 700'
            className='bg-(--color-warning-700)'
            hslColor='hsl(48, 77%, 34%)'
            hexColor='#9a8413'
          />
          <ColorSwatch
            color='Warning 800'
            className='bg-(--color-warning-800)'
            hslColor='hsl(48, 77%, 26%)'
            hexColor='#75640f'
          />
          <ColorSwatch
            color='Warning 900'
            className='bg-(--color-warning-900)'
            hslColor='hsl(48, 77%, 11%)'
            hexColor='#322a06'
          />
          <ColorSwatch
            color='Warning 950'
            className='bg-(--color-warning-950)'
            hslColor='hsl(48, 79%, 8%)'
            hexColor='#231f05'
          />
        </div>
      </div>

      {/* Feedback: Danger (alias → Red) */}
      <div className='grid gap-4'>
        <span className='text-label-2xl'>Feedback / Danger</span>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-4'>
          <ColorSwatch
            color='Danger 50'
            className='bg-(--color-danger-50)'
            hslColor='hsl(0, 100%, 97%)'
            hexColor='#fef0f0'
          />
          <ColorSwatch
            color='Danger 100'
            className='bg-(--color-danger-100)'
            hslColor='hsl(0, 95%, 94%)'
            hexColor='#fde2e2'
          />
          <ColorSwatch
            color='Danger 200'
            className='bg-(--color-danger-200)'
            hslColor='hsl(0, 92%, 88%)'
            hexColor='#fbc5c5'
          />
          <ColorSwatch
            color='Danger 300'
            className='bg-(--color-danger-300)'
            hslColor='hsl(0, 88%, 78%)'
            hexColor='#f79797'
          />
          <ColorSwatch
            color='Danger 400'
            className='bg-(--color-danger-400)'
            hslColor='hsl(0, 85%, 68%)'
            hexColor='#f26969'
          />
          <ColorSwatch
            color='Danger 500'
            className='bg-(--color-danger-500)'
            hslColor='hsl(0, 84%, 60%)'
            hexColor='#ef4343'
          />
          <ColorSwatch
            color='Danger 600'
            className='bg-(--color-danger-600)'
            hslColor='hsl(0, 99%, 42%)'
            hexColor='#d40202'
          />
          <ColorSwatch
            color='Danger 700'
            className='bg-(--color-danger-700)'
            hslColor='hsl(0, 98%, 32%)'
            hexColor='#a20202'
          />
          <ColorSwatch
            color='Danger 800'
            className='bg-(--color-danger-800)'
            hslColor='hsl(0, 99%, 26%)'
            hexColor='#830101'
          />
          <ColorSwatch
            color='Danger 900'
            className='bg-(--color-danger-900)'
            hslColor='hsl(0, 99%, 12%)'
            hexColor='#3d0101'
          />
          <ColorSwatch
            color='Danger 950'
            className='bg-(--color-danger-950)'
            hslColor='hsl(0, 100%, 9%)'
            hexColor='#2d0000'
          />
        </div>
      </div>
    </div>
  ),
})
