import { IconPlus } from '@andrsrxn/icons'
import preview from '../../.storybook/preview'
import { Button } from '../../src/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../src/components/ui/tooltip'

const meta = preview.meta({
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: {
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The tooltip component is used to display additional information about an element when the user hovers over it.',
      },
    },
  },
  args: {
    children: (
      <>
        <TooltipTrigger
          render={
            <Button size='icon-base'>
              <IconPlus />
            </Button>
          }
        />

        <TooltipContent>Create a new file</TooltipContent>
      </>
    ),
  },
})

export const Base = meta.story({})

export const Sides = meta.story({
  render: () => {
    return (
      <div className='flex flex-col items-center justify-center gap-4'>
        <Tooltip>
          <TooltipTrigger render={<Button variant='secondary' />}>Top</TooltipTrigger>
          <TooltipContent side='top'>Top</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant='secondary' />}>Right</TooltipTrigger>
          <TooltipContent side='right'>Right</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant='secondary' />}>Bottom</TooltipTrigger>
          <TooltipContent side='bottom'>Bottom</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant='secondary' />}>Left</TooltipTrigger>
          <TooltipContent side='left'>Left</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant='secondary' />}>Inline end</TooltipTrigger>
          <TooltipContent side='inline-end'>Inline end</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger render={<Button variant='secondary' />}>Inline start</TooltipTrigger>
          <TooltipContent side='inline-start'>Inline start</TooltipContent>
        </Tooltip>
      </div>
    )
  },
})
