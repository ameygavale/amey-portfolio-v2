import Image from 'next/image'
import Link from 'next/link'
import { Github, Play, Video } from 'lucide-react'

import type { ProjectConfig } from '@/lib/constants'

type ProjectCardProps = Pick<
  ProjectConfig,
  'title' | 'description' | 'image' | 'technologies' | 'github' | 'demo' | 'category' | 'slug' | 'media'
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
  media
}: ProjectCardProps) {
  const hasImage = Boolean(image)
  const hasVideoMedia = Boolean(media)

  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full bg-muted">
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
          <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold text-card-foreground">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
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
        </div>

        <Link
          href={`/projects/${slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          View project details
          <Play className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
