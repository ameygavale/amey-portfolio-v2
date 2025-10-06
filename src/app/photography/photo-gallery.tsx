'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type PhotoGalleryProps = {
  photos: string[]
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null)

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
        {photos.map(src => (
          <div key={src} className="group relative aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              aria-hidden={true}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60" />
            <button
              type="button"
              onClick={() => setActivePhoto(src)}
              className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100"
              aria-label="Preview photo"
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
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePreview}
              className="absolute right-0 top-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow"
            >
              Close
            </button>
            <div
              className="relative mt-12 w-full"
              style={{ height: 'min(80vh, 90vw)', maxWidth: 'min(90vw, 1200px)' }}
            >
              <Image
                src={activePhoto}
                alt="Full size preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
