import fs from 'fs/promises'
import path from 'path'

import type { GalleryPhoto } from '@/app/photography/types'

const PHOTOGRAPHY_DIR = path.join(process.cwd(), 'public/images/photography')
const THUMBS_DIR = path.join(PHOTOGRAPHY_DIR, 'thumbs')
const PREVIEWS_DIR = path.join(PHOTOGRAPHY_DIR, 'previews')
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

function toPublicPath(relativePath: string) {
  return `/images/photography/${relativePath.split(path.sep).map(encodeURIComponent).join('/')}`
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

export async function getPhotoSources(): Promise<GalleryPhoto[]> {
  const items = await fs.readdir(PHOTOGRAPHY_DIR)

  const photos = await Promise.all(
    items
      .filter((item) => IMAGE_EXTENSIONS.has(path.extname(item).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map(async (item) => {
        const baseName = path.basename(item, path.extname(item))
        const thumbFile = path.join(THUMBS_DIR, `${baseName}.webp`)
        const previewFile = path.join(PREVIEWS_DIR, `${baseName}.webp`)
        const [hasThumb, hasPreview] = await Promise.all([
          fileExists(thumbFile),
          fileExists(previewFile)
        ])

        return {
          src: toPublicPath(item),
          thumb: hasThumb ? toPublicPath(path.join('thumbs', `${baseName}.webp`)) : toPublicPath(item),
          preview: hasPreview ? toPublicPath(path.join('previews', `${baseName}.webp`)) : toPublicPath(item),
          alt: baseName.replace(/[-_]/g, ' ')
        }
      })
  )

  return photos
}

export const VISION_LAB_FEATURED_ALTS = [
  'milkyway',
  'Chicago Riverwalk',
  'Devil\'s Lake',
  'Artist\'s Bluff'
]

export async function getFeaturedPhotos(): Promise<GalleryPhoto[]> {
  const photos = await getPhotoSources()
  const featured = VISION_LAB_FEATURED_ALTS.flatMap((alt) => {
    const match = photos.find((photo) => photo.alt.toLowerCase() === alt.toLowerCase())
    return match ? [match] : []
  })

  return featured.length > 0 ? featured : photos.slice(0, 4)
}
