import fs from 'fs/promises'
import path from 'path'
import type { Metadata } from 'next'

import { PhotoGallery } from './photo-gallery'
import type { GalleryPhoto } from './types'

export const metadata: Metadata = { title: 'Photography' }

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

async function getPhotoSources(): Promise<GalleryPhoto[]> {
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

export default async function PhotographyPage() {
  const photos = await getPhotoSources()

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground">
        <p>
          I am building my career in computer vision, and photography is my creative lab for it.
          Messing around with cameras and framing shots keeps me curious about how machines see the world and it is a fun way to turn my work in vision systems into an art form on the side.
        </p>
      </div>
      <PhotoGallery photos={photos} />
    </main>
  )
}
