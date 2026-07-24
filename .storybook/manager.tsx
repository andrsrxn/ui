import { addons, types, useGlobals } from 'storybook/manager-api'
import { createElement, memo } from 'react'
import { Button } from 'storybook/internal/components'
import theme from './theme'

addons.setConfig({
  navSize: 112,
  bottomPanelHeight: 200,
  rightPanelWidth: 112,
  panelPosition: 'top',
  enableShortcuts: true,
  showToolbar: true,
  theme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
  },
})

const ADDON_ID = 'rtl-toolbar-button'
const TOOL_ID = `${ADDON_ID}/tool`

export const DirectionSwitcher = memo(() => {
  const [{ rtl }, updateGlobals] = useGlobals()

  const isRTL = rtl === 'rtl'

  return createElement(
    Button,
    {
      ariaLabel: 'Toggle direction',
      tooltip: isRTL ? 'RTL direction' : 'LTR direction',
      variant: 'ghost',
      disabled: false,
      key: TOOL_ID,
      onClick: () => {
        updateGlobals({
          rtl: isRTL ? 'ltr' : 'rtl',
        })
      },
    },
    isRTL ? 'RTL' : 'LTR'
  )
})

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Toggle direction',
    render: () => createElement(DirectionSwitcher),
  })
})
