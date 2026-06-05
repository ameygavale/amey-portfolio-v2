'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { GalleryPhoto } from './types'

type PhotoGalleryProps = {
  photos: GalleryPhoto[]
}

function GalleryImage({
  src,
  alt,
  priority = false,
  sizes,
  className
}: {
  src: string
  alt: string
  priority?: boolean
  sizes: string
  className?: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`${className ?? ''} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null)

  useEffect(() => {
    if (!activePhoto) {
      return
    }

    const originalOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePhoto(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activePhoto])

  const closePreview = () => setActivePhoto(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <div key={photo.src} className="group relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted">
            <GalleryImage
              src={photo.thumb}
              alt={photo.alt}
              priority={index < 3}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60" />
            <button
              type="button"
              onClick={() => setActivePhoto(photo)}
              className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100"
              aria-label={`Preview ${photo.alt}`}
            >
              Preview
            </button>
          </div>
        ))}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute right-0 top-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow"
            >
              Close
            </button>
            <div
              className="relative mt-12 w-full bg-black/20"
              style={{ height: 'min(80vh, 90vw)', maxWidth: 'min(90vw, 1200px)' }}
            >
              <GalleryImage
                src={activePhoto.preview}
                alt={activePhoto.alt}
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
