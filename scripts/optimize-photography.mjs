import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const PHOTOGRAPHY_DIR = path.join(process.cwd(), 'public/images/photography')
const THUMBS_DIR = path.join(PHOTOGRAPHY_DIR, 'thumbs')
const PREVIEWS_DIR = path.join(PHOTOGRAPHY_DIR, 'previews')
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function optimizeImage(fileName) {
  const ext = path.extname(fileName).toLowerCase()
  if (!IMAGE_EXTENSIONS.has(ext)) {
    return
  }

  const sourcePath = path.join(PHOTOGRAPHY_DIR, fileName)
  const baseName = path.basename(fileName, ext)
  const thumbPath = path.join(THUMBS_DIR, `${baseName}.webp`)
  const previewPath = path.join(PREVIEWS_DIR, `${baseName}.webp`)

  const image = sharp(sourcePath).rotate()

  await image
    .clone()
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(thumbPath)

  await image
    .clone()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(previewPath)

  const [thumbStats, previewStats] = await Promise.all([
    fs.stat(thumbPath),
    fs.stat(previewPath)
  ])

  console.log(
    `${fileName} -> thumb ${Math.round(thumbStats.size / 1024)}KB, preview ${Math.round(previewStats.size / 1024)}KB`
  )
}

async function main() {
  await fs.mkdir(THUMBS_DIR, { recursive: true })
  await fs.mkdir(PREVIEWS_DIR, { recursive: true })

  const items = await fs.readdir(PHOTOGRAPHY_DIR)

  for (const item of items) {
    const itemPath = path.join(PHOTOGRAPHY_DIR, item)
    const stats = await fs.stat(itemPath)
    if (stats.isFile()) {
      await optimizeImage(item)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
