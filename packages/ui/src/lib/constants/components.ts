/** biome-ignore-all lint/style/noMagicNumbers: config stater values */
import type { CSSProperties } from 'react'

export const DEFAULT_LABELS = {
  actions: {
    cancel: 'Cancel',
    confirm: 'Confirm',
    dismiss: 'Dismiss',
    close: 'Close',
    copy: 'Copy',
    copied: 'Copied',
    select: 'Select',
    selected: 'Selected',
    add: 'Add',
    remove: 'Remove',
    increase: 'Increase',
    decrease: 'Decrease',
    prev: 'Previous',
    next: 'Next',
    seeMore: 'See more',
    seeLess: 'See less',

    continueWith: 'Continue with',
    copyPermanentLink: 'Copy permanent link',
  },

  state: {
    loading: 'Loading',
    empty: 'No results',
    emptyDescription: 'Try another search term',
    maxCharacters: 'Maximum characters',
    percentage: 'Percentage',
  },

  pagination: {
    label: 'Pagination',
    next: 'Next page',
    prev: 'Previous page',
    morePages: 'More pages',
  },

  toaster: {
    label: 'Notifications',
  },

  progressBar: {
    label: 'Progress bar',
  },

  tag: {
    add: 'Add tag',
    remove: 'Remove tag',
  },

  command: {
    label: 'Menu',
    description: 'Command center',
  },

  slide: {
    prev: 'Previous slide',
    next: 'Next slide',
    goTo: 'Go to slide',
  },

  calendar: {
    label: 'Date',
    selectDate: 'Select a date',
    selectRange: 'Select a date range',
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    thisWeek: 'This week',
    thisMonth: 'This month',
    last7Days: 'Last 7 days',
    last15Days: 'Last 15 days',
    lastWeek: 'Last week',
    lastMonth: 'Last month',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    nextMonth: 'Next month',
    nextYear: 'Next year',
    prevMonth: 'Previous month',
    prevYear: 'Previous year',
  },

  imageCropper: {
    cropArea: 'Use the arrow keys to move the crop area',
    imageCropped: 'Image cropped',
    dragHandles: {
      n: 'Use the arrow keys to move the north drag handle to change the crop area',
      s: 'Use the arrow keys to move the south drag handle to change the crop area',
      e: 'Use the arrow keys to move the east drag handle to change the crop area',
      w: 'Use the arrow keys to move the west drag handle to change the crop area',
      nw: 'Use the arrow keys to move the north-west drag handle to change the crop area',
      ne: 'Use the arrow keys to move the north-east drag handle to change the crop area',
      se: 'Use the arrow keys to move the south-east drag handle to change the crop area',
      sw: 'Use the arrow keys to move the south-west drag handle to change the crop area',
    },
  },

  resizer: {
    grab: 'Grab resizer',
  },

  video: {
    title: 'Video title',
    play: 'Play',
    pause: 'Pause',
    mute: 'Mute',
    unmute: 'Unmute',
    volume: 'Volume',
    loop: 'Loop',
    live: 'LIVE',
    liveCurrent: 'Live',
    liveIdle: 'Live idle',
    rewind: 'Rewind',
    replay: 'Replay',
    seekBackward: 'Seek backward',
    seekForward: 'Seek forward',
    seekBackward10: 'Seek backward 10 seconds',
    seekForward10: 'Seek forward 10 seconds',
    currentTime: 'Current time',
    totalTime: 'Total time',
    speed: 'Speed',
    normal: 'Normal',
    auto: 'Auto',
    quality: 'Quality',
    chapters: 'Chapters',
    captions: 'Captions',
    thumbnails: 'Thumbnails',
    timeline: 'Timeline',
    announcers: 'Announcers',
    settings: 'Settings',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    enterPiP: 'Enter picture-in-picture',
    exitPiP: 'Exit picture-in-picture',
    closedCaptionsOn: 'Turn on closed captions',
    closedCaptionsOff: 'Turn off closed captions',
    airplay: 'AirPlay',
    connectAirplay: 'Connect AirPlay',
    disconnectAirplay: 'Disconnect AirPlay',
    googleCast: 'Google Cast',
    connectGoogleCast: 'Connect Google Cast',
    disconnectGoogleCast: 'Disconnect Google Cast',
  },
} as const

export const DEFAULT_CONFIG = {
  /** Apply to elements like Tooltip, Popover, and similar */
  floatingElement: {
    /** Delay in milliseconds */
    openDelay: 0,
    /** Delay in milliseconds */
    closeDelay: 0,
    /** Offset in pixels */
    offset: 8,
  },

  toast: {
    /** Duration in milliseconds */
    duration: 3000,
  },

  copy: {
    /** Duration in milliseconds */
    feedbackDuration: 1000,
  },

  animatedNumber: {
    /** Duration in milliseconds */
    duration: 1000,
  },

  textarea: {
    /** Maximum characters */
    maxLength: 500,
  },

  history: {
    /** Maximum amount of history entries */
    maxDepth: 50,
  },

  progress: {
    min: 0,
    max: 100,
  },

  scrollSpy: {
    /** Percentage of the element's height that must be visible before it is considered visible */
    threshold: 0.2,
  },

  dataTable: {
    /** Tuple of available page sizes */
    pageSizes: [10, 20, 30, 40, 50],
  },

  mouseSafeArea: {
    /** When to start applying the safe area padding */
    paddingInset: 12,
  },

  map: {
    defaultZoom: 13,
  },

  motion: {
    /** Translate ease from design tokens, keep always in sync with tailwind */
    ease: {
      base: [0.28, 0.1, 0.34, 1],
      out: [0.16, 1, 0.3, 1],
      elastic: [0.76, 0, 0.24, 1],
      linear: [0, 0, 1, 1],
    },
    /** Translate durations from design tokens, keep always in sync with tailwind */
    duration: {
      slowest: 100,
      slow: 250,
      base: 400,
      fast: 650,
      fastest: 1000,
    },
  },
} as const

/** Custom code highlighting theme based on  */
export const CODE_THEME = {
  'code[class*="language-"]': {
    background: 'var(--background-surface)',
    color: 'var(--text-primary)',
    textShadow: 'none',
    fontFamily: 'var(--font-mono), Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    background: 'var(--background-surface)',
    color: 'var(--text-primary)',
    textShadow: 'none',
    fontFamily: 'var(--font-mono), Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: 'var(--spacing-12) 0',
    margin: '0',
    overflow: 'auto',
    borderBottomLeftRadius: 'var(--radius-lg)',
    borderBottomRightRadius: 'var(--radius-lg)',
  },

  ':not(pre) > code[class*="language-"]': {
    padding: '0.2em 0.3em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
    background: 'var(--text-primary)',
  },
  'pre>code': {
    display: 'block',
    width: 'max-content',
    maxWidth: 'max-content',
  },
  'code>span': {
    display: 'block',
    width: '100%',
    minWidth: 'max-content',
  },
  comment: {
    color: 'var(--text-tertiary)',
    fontStyle: 'italic',
  },
  prolog: { color: 'var(--text-tertiary)' },
  cdata: { color: 'var(--text-tertiary)' },

  constant: { color: 'var(--text-accent-red)' },
  number: { color: 'var(--text-accent-red)' },
  boolean: { color: 'var(--text-accent-red)' },
  entity: { color: 'var(--text-accent-red)', cursor: 'help' },
  doctype: { color: 'var(--text-primary)' },

  keyword: { color: 'var(--text-brand)' },
  atrule: { color: 'var(--text-accent-red)' },

  variable: { color: 'var(--text-color-accent-purple)' },
  function: { color: 'var(--text-color-accent-purple)' },
  operator: { color: 'var(--text-accent-red)' },

  string: { color: 'var(--text-accent-teal)' },
  char: { color: 'var(--text-accent-teal)' },
  regex: { color: 'var(--text-accent-teal)' },
  'attr-value': { color: 'var(--text-accent-teal)' },
  'attr-value > .token.punctuation': { color: 'var(--text-accent-teal)' },

  property: { color: 'var(--text-accent-red)' },
  tag: { color: 'var(--text-color-accent-orange)' },
  symbol: { color: 'var(--text-accent-red)' },
  'attr-name': { color: 'var(--text-accent-red)' },
  'class-name': { color: 'var(--text-color-accent-magenta)' },

  punctuation: { color: 'var(--text-secondary)' },
  builtin: { color: 'var(--text-accent-orange)' },

  deleted: {
    color: 'var(--text-danger)',
    background: 'var(--background-danger-subtlest)',
  },
  inserted: {
    color: 'var(--text-success)',
    background: 'var(--background-success-subtlest)',
  },

  '.language-markdown .token.title.important > .token.punctuation': {
    color: 'var(--text-brand)',
  },
  '.language-markdown .token.url': {
    color: 'var(--text-link)',
  },
  '.language-markdown .token.url > .token.operator': {
    color: 'var(--text-brand)',
  },
  '.language-markdown .token.blockquote.punctuation': {
    color: 'var(--text-tertiary)',
    fontStyle: 'italic',
  },
  '.language-markdown .token.code-snippet': {
    color: 'var(--text-accent-teal)',
  },
  bold: { fontWeight: 'bold', color: 'var(--text-primary)' },
  italic: { fontStyle: 'italic', color: 'var(--text-primary)' },

  '.line-numbers .line-numbers-rows': {
    borderRightColor: 'var(--text-primary)',
  },
  '.line-numbers .line-numbers-rows > span:before': {
    color: 'var(--text-primary)',
  },
  lineNumber: {
    fontStyle: 'normal',
    color: 'var(--text-tertiary)',
  },
  namespace: { Opacity: '0.8' },
  'token.tab:not(:empty):before': { color: '#444d5630', textShadow: 'none' },
  'token.cr:before': { color: '#444d5630', textShadow: 'none' },
  'token.lf:before': { color: '#444d5630', textShadow: 'none' },
  'token.space:before': { color: '#444d5630', textShadow: 'none' },
} as Record<string, CSSProperties>

/** Most used languages for code snippets */
export const ACCEPTED_CODE_LANGUAGES = [
  'html',
  'xml',
  'svg',
  'css',
  'javascript',
  'js',
  'typescript',
  'ts',
  'json',
  'bash',
  'sh',
  'shell',
  'c',
  'cpp',
  'python',
  'py',
  'php',
  'java',
  'go',
  'kotlin',
  'swift',
  'ruby',
  'rb',
  'rust',
  'sql',
  'graphql',
  'sass',
  'scss',
  'markdown',
  'md',
  'yaml',
  'yml',
  'dockerfile',
  'powershell',
  'perl',
  'jsx',
  'tsx',
  'csharp',
  'cs',
  'vb',
  'r',
  'nginx',
  'json',
] as const

/** Most used languages for code snippets */
export type CodeLangauge = (typeof ACCEPTED_CODE_LANGUAGES)[number]
