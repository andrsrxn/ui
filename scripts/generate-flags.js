/** biome-ignore-all lint/complexity/noForEach: js */
/** biome-ignore-all lint/performance/useTopLevelRegex: js */
import fs from 'node:fs'
import path from 'node:path'

const FLAGS_DIR = path.resolve('packages/ui/src/components/icons/flags')

const toPascalCase = str =>
  str.replace(/\.svg$/, '').replace(/(^\w|-\w)/g, m => m.replace('-', '').toUpperCase())

const toJsxAttrs = svg =>
  svg
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/xmlns:xlink=/g, 'xmlnsXlink=')
    .replace(/xlink:href=/g, 'xlinkHref=')
    .replace(/stop-color=/g, 'stopColor=')

const namespaceIds = (svg, prefix) => {
  const ids = [...svg.matchAll(/id="([^"]+)"/g)].map(m => m[1])

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

    const svgMatch = raw.match(/<svg[\s\S]*?>[\s\S]*?<\/svg>/)
    if (!svgMatch) {
      return
    }

    let svg = svgMatch[0]

    // ❌ eliminar comentarios XML/HTML
    svg = svg.replace(/<!--[\s\S]*?-->/g, '')

    // ❌ eliminar <desc>
    svg = svg.replace(/<desc>[\s\S]*?<\/desc>/g, '')

    // JSX attrs
    svg = toJsxAttrs(svg)

    // Namespace IDs (CRÍTICO)
    svg = namespaceIds(svg, baseName)

    // Inyectar props + className
    svg = svg.replace(/<svg([^>]*)>/, `<svg$1 {...props} className={className} role="img">`)

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
