import Image from 'next/image'
import Link from 'next/link'
import { Github, Play, Video } from 'lucide-react'

import type { ProjectConfig } from '@/lib/constants'

type ProjectCardProps = Pick<
  ProjectConfig,
  'title' | 'description' | 'image' | 'technologies' | 'github' | 'demo' | 'category' | 'slug' | 'media' | 'videoLinks'
>

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
  category,
  slug,
  media,
  videoLinks
}: ProjectCardProps) {
  const hasImage = Boolean(image)
  const normalizedVideoLinks = videoLinks?.filter(Boolean) ?? []
  const hasVideoMedia = Boolean(media) || normalizedVideoLinks.length > 0

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-card-foreground transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_22px_70px_rgba(28,96,132,0.45)]">
      <div className="relative h-48 w-full overflow-hidden rounded-t-[2rem] bg-slate-900/20">
        {hasImage ? (
          <Image
            src={image as string}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-sm font-medium text-muted-foreground">
            Visual coming soon
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent transition-opacity duration-300 group-hover:from-slate-950/85 group-hover:via-slate-950/25" />
        <Link
          href={`/projects/${slug}`}
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
          aria-label={`Open project ${title}`}
        >
          {hasVideoMedia ? (
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
              <Play className="h-7 w-7" />
            </span>
          ) : (
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black shadow-lg">
              View project
            </span>
          )}
        </Link>
        <div className="absolute top-4 right-4">
          <span className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white shadow-lg">
            {category}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <h3 className="text-2xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.12em] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Video size={20} />
              <span>Demo</span>
            </a>
          )}
          {normalizedVideoLinks.map((link, index) => (
            <a
              key={`${link}-${index}`}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Video size={20} />
              <span>{normalizedVideoLinks.length > 1 ? `Video ${index + 1}` : 'Video'}</span>
            </a>
          ))}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          View project details
          <Play className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
