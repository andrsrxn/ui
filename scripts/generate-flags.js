/** biome-ignore-all lint/complexity/noForEach: js */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: js */
/** biome-ignore-all lint/performance/useTopLevelRegex: js */
import fs from 'node:fs'
import path from 'node:path'

const FLAGS_DIR = path.resolve('packages/ui/src/components/icons/flags')

const toPascalCase = str =>
  str.replace(/\.svg$/u, '').replace(/(^\w|-\w)/gu, m => m.replace('-', '').toUpperCase())

const toJsxAttrs = svg =>
  svg
    .replace(/stroke-width=/gu, 'strokeWidth=')
    .replace(/fill-rule=/gu, 'fillRule=')
    .replace(/clip-rule=/gu, 'clipRule=')
    .replace(/xmlns:xlink=/gu, 'xmlnsXlink=')
    .replace(/xlink:href=/gu, 'xlinkHref=')
    .replace(/stop-color=/gu, 'stopColor=')

const namespaceIds = (svg, prefix) => {
  const ids = [...svg.matchAll(/id="([^"]+)"/gu)].map(m => m[1])

  ids.forEach(id => {
    const namespaced = `${prefix}-${id}`
    // biome-ignore lint/style/noParameterAssign: js
    svg = svg
      .replaceAll(`id="${id}"`, `id="${namespaced}"`)
      .replaceAll(`url(#${id})`, `url(#${namespaced})`)
      .replaceAll(`"#${id}"`, `"#${namespaced}"`)
  })

  return svg
}

fs.readdirSync(FLAGS_DIR)
  .filter(file => file.endsWith('.svg'))
  .forEach(file => {
    const filePath = path.join(FLAGS_DIR, file)
    const raw = fs.readFileSync(filePath, 'utf8')

    const baseName = file.replace('.svg', '').toLowerCase()
    const componentName = `${toPascalCase(file)}Flag`

    const svgMatch = raw.match(/<svg[\s\S]*?>[\s\S]*?<\/svg>/u)
    if (!svgMatch) {
      return
    }

    let [svg] = svgMatch

    // ❌ eliminar comentarios XML/HTML
    svg = svg.replace(/<!--[\s\S]*?-->/gu, '')

    // ❌ eliminar <desc>
    svg = svg.replace(/<desc>[\s\S]*?<\/desc>/gu, '')

    // JSX attrs
    svg = toJsxAttrs(svg)

    // Namespace IDs (CRÍTICO)
    svg = namespaceIds(svg, baseName)

    // Inyectar props + className
    svg = svg.replace(/<svg([^>]*)>/u, `<svg$1 {...props} className={className} role="img">`)

    const component = `import type { SVGProps } from 'react'

export const ${componentName} = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    ${svg}
  )
}
`

    fs.writeFileSync(path.join(FLAGS_DIR, `${baseName}.tsx`), component, 'utf8')

    // fs.unlinkSync(filePath)

    console.log(`✔ ${file} → ${componentName}`)
  })
