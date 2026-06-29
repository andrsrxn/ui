import { addons } from 'storybook/manager-api'
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
    collapsedRoots: ['other'],
  },
})
