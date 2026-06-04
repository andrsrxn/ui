/** biome-ignore-all lint/performance/useTopLevelRegex: no */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: no */
/** biome-ignore-all lint/style/noParameterAssign: no */
/** biome-ignore-all lint/complexity/noForEach: no */
/** biome-ignore-all lint/suspicious/noConsole: no */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ICONS_DIR = path.resolve('./src/components/icons/raw')
const ICONS_OUT = path.resolve('./src/components/icons/ui')

const CLASSNAME = 'bp-icon text-primary pointer-events-none shrink-0'

// Excepciones para la conversión de SVG a JSX
const JSX_EXCEPTIONS = new Set(['viewBox', 'xmlns', 'xmlns:xlink', 'xml:space'])

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/gu, clear => clear.replace(/-/u, '').toUpperCase())
}

function extractSvg(source) {
  const match = source.match(/<svg[\s\S]*?<\/svg>/u)
  return match ? match[0] : null
}

// --- Utilidades: Generación de React JSX ---
function svgAttrsToJsx(svg) {
  return svg.replace(/([a-z]+-[a-z-]+)=/giu, (match, attr) => {
    if (JSX_EXCEPTIONS.has(attr)) {
      return match
    }
    const camel = attr.replace(/-([a-z])/gu, (_, c) => c.toUpperCase())
    return `${camel}=`
  })
}

function injectReactProps(svg) {
  return svg.replace(/<svg([^>]*)>/u, (_match, attrs) => {
    return `<svg${attrs} className={cn('${CLASSNAME}', className)} {...props}>`
  })
}

function normalizeSvg(svg) {
  svg = svgAttrsToJsx(svg)
  svg = injectReactProps(svg)
  return svg
}

// --- Utilidades: Generación de Preview (JSDoc) ---
function injectWhiteBackground(svg) {
  // Insertamos rect blanco justo después del <svg ...>
  return svg.replace(/<svg([^>]*)>/u, `<svg$1><rect width="100%" height="100%" fill="white"/>`)
}

function svgToBase64(svg) {
  return Buffer.from(svg).toString('base64')
}

function createPreviewJSDoc(base64) {
  return `/**\n * @preview ![img](data:image/svg+xml;base64,${base64})\n */`
}

// --- Generador Principal ---
function generateComponent(fileName, svgContent) {
  const componentName = toPascalCase(fileName.replace('.svg', ''))

  const rawSvg = extractSvg(svgContent)
  if (!rawSvg) {
    return null
  }

  // 1. Generar el Preview usando el SVG original (antes de mutarlo a JSX)
  const previewSvg = injectWhiteBackground(rawSvg)
  const base64 = svgToBase64(previewSvg)
  const jsDocPreview = createPreviewJSDoc(base64)

  // 2. Generar el JSX normalizado para el componente de React
  const jsxSvg = normalizeSvg(rawSvg)

  // 3. Ensamblar y retornar el contenido del archivo .tsx
  return `import type { Icon } from '../../../lib/types/icon'
import { cn } from '../../../lib/utils/theme'

${jsDocPreview}
export const ${componentName}: Icon = ({ className, ...props }) => {
  return (
    ${jsxSvg}
  )
}
`
}

// --- Ejecución ---
function main() {
  if (!fs.existsSync(ICONS_DIR)) {
    console.error(`Directory not found: ${ICONS_DIR}`)
    process.exit(1)
  }

  const files = fs.readdirSync(ICONS_DIR)
  const svgFiles = files.filter(file => file.endsWith('.svg'))

  console.log(`Found ${svgFiles.length} SVG files to process.`)

  let processedCount = 0

  svgFiles.forEach(file => {
    const filePath = path.join(ICONS_DIR, file)
    const svgContent = fs.readFileSync(filePath, 'utf-8')

    // Generar el contenido del componente
    const componentContent = generateComponent(file, svgContent)

    if (componentContent) {
      // Ruta de salida: mismo directorio, extensión .tsx
      const outputFilePath = path.join(ICONS_OUT, file.replace('.svg', '.tsx'))

      fs.writeFileSync(outputFilePath, componentContent)
      processedCount++
      console.log(`Successfully generated: ${file.replace('.svg', '.tsx')}`)
    } else {
      console.warn(`No SVG found in ${file}`)
    }
  })

  console.log(`Successfully generated ${processedCount} icon components (with preview)`)
}

main()
