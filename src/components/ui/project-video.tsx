import { ExternalLink } from 'lucide-react'

import { getEmbeddedVideoUrl, isHostedVideoUrl, resolveMediaUrl } from '@/lib/media'

interface ProjectVideoProps {
  src: string
  title: string
}

export function ProjectVideo({ src, title }: ProjectVideoProps) {
  const resolvedSrc = resolveMediaUrl(src)

  if (isHostedVideoUrl(resolvedSrc)) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
        <video
          src={resolvedSrc}
          title={title}
          controls
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  const embeddedUrl = getEmbeddedVideoUrl(src)

  if (embeddedUrl) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
        <iframe
          src={embeddedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
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
