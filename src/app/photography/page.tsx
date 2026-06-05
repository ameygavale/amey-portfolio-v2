import type { Metadata } from 'next'

import { PhotoGallery } from './photo-gallery'
import { getPhotoSources } from '@/lib/photography'

export const metadata: Metadata = { title: 'Photography' }

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
