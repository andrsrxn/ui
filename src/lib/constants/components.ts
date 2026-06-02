import type { CSSProperties } from 'react'

export const LABELS = {
  imageCropper: {
    cropArea: 'Use las teclas de flecha para mover el área de recorte',
    eDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte este para cambiar el área de recorte',
    nDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte norte para cambiar el área de recorte',
    sDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte sur para cambiar el área de recorte',
    wDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte oeste para cambiar el área de recorte',
    nwDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte norte oeste para cambiar el área de recorte',
    neDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte norte este para cambiar el área de recorte',
    seDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte sur este para cambiar el área de recorte',
    swDragHandle:
      'Use las teclas de flecha para mover el manejador de la parte sur oeste para cambiar el área de recorte',
    imageCropped: 'Imágen recortada',
  },
  removeTag: 'Quitar',
  addTag: 'Agregar tag',
  emptyLabel: 'Sin resultados',
  emptyDescription: 'Intenta con otro término de búsqueda',
  command: 'Menú',
  commandDescription: 'Centro de comandos',
  continueWith: 'Continuar como',
  increase: 'Incrementar',
  decrease: 'Disminuir',
  grabReziser: 'Tomar redimensionador',
  selectDate: 'Elige una fecha',
  selectRangeDate: 'Elige un rango de fecha',
  loading: 'Cargando',
  maxCharacters: 'Máximo de caracteres',
  percentage: 'Porcentaje',
  permanetLink: 'Copiar link permanente',
  copied: 'Copiado',
  copy: 'Copiar',
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  dismiss: 'Descartar',
  seeMore: 'Ver más',
  seeLess: 'Ver menos',
  close: 'Cerrar',
  slide: {
    prev: 'Anterior diapositiva',
    next: 'Siguiente diapositiva',
    goTo: 'Ir a la diapositiva',
  },
  pagination: {
    pagination: 'Paginación',
    next: 'Siguiente página',
    prev: 'Página anterior',
    morePages: 'Más páginas',
  },
  prev: 'Anterior',
  next: 'Siguiente',
  toaster: 'Notificaciones',
  progressBar: 'Barra de progreso',
  video: {
    airplay: 'Airplay',
    googleCast: 'Google Cast',
    chapters: 'Capítulos',
    captions: 'Subtítulos',
    settings: 'Configuración',
    unmute: 'Activar sonido',
    speed: 'Velocidad',
    loop: 'Repetir',
    live: 'LIVE',
    rewind: 'Reanudar',
    reset: 'Volver a reproducir',
    seekBackward10: 'Retroceder 10 segundos',
    seekForward10: 'Avanzar 10 segundos',
    closedCaptionsOff: 'Desactivar subtítulos',
    closedCaptionsOn: 'Activar Subtitulos',
    enterFullscreen: 'Pantalla completa',
    enterPiP: 'Activar PiP',
    exitFullscreen: 'Salir de pantalla completa',
    exitPiP: 'Salir de PiP',
    seekBackward: 'Retroceder',
    seekForward: 'Avanzar',
    mute: 'Silenciar',
    pause: 'Pausa',
    play: 'Play',
    volume: 'Volumen',
    videoTitle: 'Título del video',
    connectAirplay: 'Conectar Airplay',
    disconnectAirplay: 'Desconectar Airplay',
    connectGoogleCast: 'Conectar GoogleCast',
    disconnectGoogleCast: 'Desconectar GoogleCast',
    currentTime: 'Tiempo actual',
    totalTime: 'Tiempo total',
    liveCurrent: 'En directo',
    liveIdle: 'Directo inactivo',
    thumbnails: 'Miniaturas',
    timeline: 'Linea de tiempo',
    quality: 'Calidad',
    announcers: 'Anuncios',
    normal: 'Normal',
    auto: 'Auto',
  },
  selected: 'Seleccionado',
  select: 'Seleccionar',
  calendar: {
    date: 'Fecha',
    today: 'Hoy',
    yesterday: 'Ayer',
    tomorrow: 'Mañana',
    thisWeek: 'Esta semana',
    thisMonth: 'Este mes',
    last7days: 'Últimos 7 días',
    last15days: 'Últimos 15 días',
    lastMonth: 'Último mes',
    lastWeek: 'Última semana',
    week: 'Semana',
    month: 'Mes',
    year: 'Año',
    nextMonth: 'Siguiente mes',
    nextYear: 'Siguiente año',
    prevMonth: 'Mes anterior',
    prevYear: 'Año anterior',
  },
}

export const COPIED_DELAY = 1000
export const ANIMATED_NUMBER_DURATION = 1000
export const TOAST_DURATION = 3000
export const POPOVER_OFFSET = 4
export const TOOLTIP_OPEN_DELAY = 100
export const TOOLTIP_CLOSE_DELAY = 0
export const SCROLLBAR_CLOSE_DELAY = 0
export const MAX_TEXTAREA_LENGTH = 500
export const MAX_HISTORY_DEPTH = 50
export const SCROLL_SPY_THRESHOLD = 0.2 // 20%
// biome-ignore lint/style/noMagicNumbers: amount of items per page
export const DATA_TABLE_SIZES = [10, 20, 30, 40, 50]
export const MAX_PROGRESS_LIMIT = 100
export const MIN_PROGRESS_LIMIT = 0
export const MAP_ZOOM = 13

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

export type CodeLangauge = (typeof ACCEPTED_CODE_LANGUAGES)[number]
