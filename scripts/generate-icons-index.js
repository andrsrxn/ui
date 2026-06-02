import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Configuration
// Assuming this is run from packages/ui root
const ICONS_DIR = path.resolve('./src/components/icons/ui')
const BRANDS_DIR = path.resolve('./src/components/icons/brands')
const FLAGS_DIR = path.resolve('./src/components/icons/flags')
const ICONS_OUT = path.resolve('./src/components/icons')
const OUTPUT_FILE = path.join(ICONS_OUT, 'index.ts')

const DIRS = {
  brands: BRANDS_DIR,
  flags: FLAGS_DIR,
  ui: ICONS_DIR,
}

const IN_DIRS = Object.values(DIRS)

function main() {
  for (const dir of IN_DIRS) {
    if (!fs.existsSync(dir)) {
      console.error(`Directory not found: ${dir}`)

      process.exit(1)
    }
  }

  console.log(`Scanning ${ICONS_DIR} and ${BRANDS_DIR} and ${FLAGS_DIR}...`)

  for (const dir of IN_DIRS) {
    const files = fs.readdirSync(dir)

    // Filter for .tsx files
    const iconFiles = files
      .filter(
        file => file.endsWith('.tsx') && file !== 'index.tsx' // Should not exist, but good to filter
      )
      .sort()

    console.log(`Found ${iconFiles.length} icon files.`)

    const content = []

    for (const [prefix, dir] of Object.entries(DIRS)) {
      const files = fs.readdirSync(dir)

      console.log(`Found ${files.length} icon files.`)

      const exports = files.map(file => {
        const basename = path.basename(file, '.tsx')

        return `export * from './${prefix}/${basename}'`
      })

      content.push(...exports, '')
    }

    fs.writeFileSync(OUTPUT_FILE, content.join('\n'))
    console.log(`Successfully generated index.ts with ${content.length} exports.`)
  }
}

main()
