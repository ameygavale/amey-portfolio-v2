'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Aperture, Eye, Scan } from 'lucide-react'

import type { GalleryPhoto } from '@/app/photography/types'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'

interface VisionLabSectionProps {
  photos: GalleryPhoto[]
}

const INSIGHTS = [
  {
    icon: Eye,
    title: 'Train the eye',
    description:
      'Composition, exposure, and depth-of-field decisions in the field sharpen the intuition I bring to camera calibration and scene understanding.',
  },
  {
    icon: Scan,
    title: 'See like a sensor',
    description:
      'Photography forces you to notice noise, motion blur, and lighting shifts, the same failure modes that break perception pipelines on real robots.',
  },
  {
    icon: Aperture,
    title: 'Close the loop',
    description:
      'Every frame I shoot is practice for the systems I build: stereo depth, segmentation, and fusion that must work outside the lab.',
  },
]

function FeaturedPhoto({
  photo,
  index,
  onSelect,
}: {
  photo: GalleryPhoto
  index: number
  onSelect: (photo: GalleryPhoto) => void
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(photo)}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted text-left"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />}
      <Image
        src={photo.preview}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="telemetry text-white/70">frame {String(index + 1).padStart(2, '0')}</span>
        <p className="mt-1 text-sm font-medium capitalize text-white">{photo.alt}</p>
      </div>
    </motion.button>
  )
}

export function VisionLabSection({ photos }: VisionLabSectionProps) {
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

  return (
    <section id="vision-lab" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <div className="ambient-glow absolute left-[10%] top-8 h-72 w-72 bg-primary/18 blur-[150px]" />
        <div className="ambient-glow absolute right-[8%] bottom-[-20%] h-80 w-80 bg-secondary/18 blur-[160px]" />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeader
          module="Vision"
          title="How I see the world"
          description="Photography is my creative lab for computer vision: framing shots, reading light, and noticing what machines miss."
        >
          <Button
            asChild
            variant="outline"
            className="border-border bg-card hover:border-primary/40 hover:bg-muted"
          >
            <Link href="/photography">
              Full gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </SectionHeader>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <div className="panel-brackets p-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am building my career in computer vision, and photography is where I keep that instinct sharp.
                Messing around with cameras and framing shots keeps me curious about how machines see the world,
                and it is a fun way to turn perception work into something visual on the side.
              </p>
            </div>

            <div className="space-y-4">
              {INSIGHTS.map((insight, index) => {
                const Icon = insight.icon
                return (
                  <motion.div
                    key={insight.title}
                    className="panel flex gap-4 p-5"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{insight.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {insight.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo, index) => (
              <FeaturedPhoto
                key={photo.src}
                photo={photo}
                index={index}
                onSelect={setActivePhoto}
              />
            ))}
          </div>
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-0 top-0 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow"
            >
              Close
            </button>
            <div
              className="relative mt-12 w-full bg-black/20"
              style={{ height: 'min(80vh, 90vw)', maxWidth: 'min(90vw, 1200px)' }}
            >
              <Image
                src={activePhoto.preview}
                alt={activePhoto.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
