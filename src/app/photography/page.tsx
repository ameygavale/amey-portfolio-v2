import fs from "fs/promises"
import path from "path"
import { PhotoGallery } from "./photo-gallery"

export const metadata = { title: "Photography" }

const PHOTOGRAPHY_DIR = path.join(process.cwd(), "public/images/photography")
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]) // allow common web formats

async function getPhotoSources() {
  const items = await fs.readdir(PHOTOGRAPHY_DIR)

  return items
    .filter(item => IMAGE_EXTENSIONS.has(path.extname(item).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map(item => `/images/photography/${encodeURIComponent(item)}`)
}

export default async function PhotographyPage() {
  const photos = await getPhotoSources()

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <PhotoGallery photos={photos} />
    </main>
  )
}
