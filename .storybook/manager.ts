import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

addons.setConfig({
  navSize: 112,
  bottomPanelHeight: 192,
  rightPanelWidth: 112,
  panelPosition: 'top',
  enableShortcuts: true,
  showToolbar: true,
  theme: themes.dark,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
})
