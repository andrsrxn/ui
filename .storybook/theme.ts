import { create } from 'storybook/theming'

// TODO: Hardcoded values because does not accept variables or imports
export default create({
  base: 'light',

  // Branding
  brandTitle: 'andrsrxn/ui',
  brandUrl: 'https://ui.andrsrxn.com',
  brandImage: 'https://res.cloudinary.com/dq5nfyajn/image/upload/v1781545765/symbol_p9zdmn.svg',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Hanken Grotesk Variable", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Color palette
  booleanSelectedBg: '#ffffff',
  buttonBg: '#ffffff',
  booleanBg: '#f6f7fd',
  buttonBorder: '#daddf1',

  colorPrimary: '#0047cc',
  colorSecondary: '#0047cc',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#f6f7fd',
  appBorderColor: '#daddf1',
  appBorderRadius: 8,

  // Text colors
  textColor: '#191a24',
  textMutedColor: '#6f769b',
  textInverseColor: '#ebedf9',

  // Toolbar default and active colors
  barTextColor: '#6f769b',
  barSelectedColor: '#0047cc',
  barHoverColor: '#0047cc',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#f6f7fd',
  inputBorder: '#daddf1',
  inputTextColor: '#191a24',
  inputBorderRadius: 8,
})
