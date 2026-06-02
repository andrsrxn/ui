import fs from 'node:fs'
import path from 'node:path'

const FLAGS_DIR = path.resolve('packages/ui/src/components/icons/flags')
const INDEX_PATH = path.resolve('packages/ui/src/components/icons/flags-index.ts')

const files = fs
  .readdirSync(FLAGS_DIR)
  .filter(file => file.endsWith('.tsx'))
  .sort()

const exports = files.map(file => {
  const baseName = file.replace('.tsx', '') // ad
  const componentName = `${baseName.toUpperCase()}Flag` // ADFlag

  return `export { ${componentName} } from './flags/${baseName}'`
})

fs.writeFileSync(INDEX_PATH, `${exports.join('\n')}\n`, 'utf8')

console.log(`✔ flags-index.ts generado (${exports.length} exports)`)
