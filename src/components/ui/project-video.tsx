'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'

import { trackEvent } from '@/lib/analytics'
import { getEmbeddedVideoUrl, isHostedVideoUrl, resolveMediaUrl } from '@/lib/media'

interface ProjectVideoProps {
  src: string
  title: string
  className?: string
  interactive?: boolean
  poster?: string
  preload?: 'none' | 'metadata' | 'auto'
  projectSlug?: string
  lazy?: boolean
}

export function ProjectVideo({
  src,
  title,
  className,
  interactive = true,
  poster,
  preload,
  projectSlug,
  lazy = false,
}: ProjectVideoProps) {
  const resolvedSrc = resolveMediaUrl(src)
  const wrapperClassName = className ?? 'relative aspect-video overflow-hidden rounded-2xl bg-muted'
  const videoPreload = preload ?? (interactive ? 'metadata' : 'none')
  const videoRef = useRef<HTMLVideoElement>(null)
  const trackedRef = useRef(false)

  useEffect(() => {
    if (!interactive || !projectSlug) return

    const video = videoRef.current
    if (!video) return

    const handlePlay = () => {
      if (trackedRef.current) return
      trackedRef.current = true
      trackEvent({
        name: 'video_play',
        data: { project: projectSlug, source: 'local' },
      })
    }

    video.addEventListener('play', handlePlay)
    return () => video.removeEventListener('play', handlePlay)
  }, [interactive, projectSlug])

  if (isHostedVideoUrl(resolvedSrc)) {
    return (
      <div className={wrapperClassName}>
        <video
          ref={videoRef}
          src={resolvedSrc}
          title={title}
          poster={poster}
          controls={interactive}
          preload={videoPreload}
          playsInline
          muted={!interactive}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  const embeddedUrl = getEmbeddedVideoUrl(src)

  if (embeddedUrl) {
    return (
      <div className={wrapperClassName}>
        {lazy && !interactive ? (
          <div className="flex h-full w-full items-center justify-center bg-muted text-xs text-muted-foreground">
            {poster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={poster} alt="" className="h-full w-full object-cover opacity-40" />
            ) : (
              'Preview'
            )}
          </div>
        ) : (
          <iframe
            src={embeddedUrl}
            title={title}
            loading={lazy ? 'lazy' : 'lazy'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={interactive}
            tabIndex={interactive ? 0 : -1}
            className={`h-full w-full ${interactive ? '' : 'pointer-events-none'}`}
          />
        )}
      </div>
    )
  }

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:text-primary/80"
    >
      <ExternalLink className="h-4 w-4" />
      Open video
    </a>
  )
}
