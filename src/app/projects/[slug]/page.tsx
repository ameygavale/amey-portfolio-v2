import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Play } from 'lucide-react'

import { PROJECTS, type ProjectMedia } from '@/lib/constants'

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]+)/)
  if (match && match[1]) {
    return match[1]
  }

  const urlObj = new URL(url)
  const idFromQuery = urlObj.searchParams.get('v')

  return idFromQuery
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const videoId = extractYouTubeId(url)
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null
  } catch {
    return null
  }
}

function ProjectMedia({ media, title }: { media?: ProjectMedia | null; title: string }) {
  if (!media) {
    return (
      <div className="mt-12 rounded-2xl border border-dashed border-muted-foreground/40 bg-muted/30 p-12 text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-3 text-base">
          <Play className="h-5 w-5" />
          Demo video coming soon.
        </p>
      </div>
    )
  }

  if (media.type === 'local') {
    const sources = Array.isArray(media.src) ? media.src : [media.src]

    return (
      <div className="mt-12 space-y-8">
        {sources.map((source, index) => (
          <div
            key={`${source}-${index}`}
            className="overflow-hidden rounded-2xl bg-black shadow-xl"
          >
            <video
              controls
              preload="metadata"
              poster={media.poster}
              className="h-auto w-full"
            >
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    )
  }

  const embedUrl = getYouTubeEmbedUrl(media.src)

  if (!embedUrl) {
    return (
      <div className="mt-12 rounded-2xl border border-dashed border-muted-foreground/40 bg-muted/30 p-12 text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-3 text-base">
          <Play className="h-5 w-5" />
          Unable to load the linked demo video. Please verify the YouTube URL.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 overflow-hidden rounded-2xl shadow-xl">
      <div className="aspect-video bg-black">
        <iframe
          src={embedUrl}
          title={`${title} demo video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = PROJECTS.find((item) => item.slug === params.slug)

  if (!project) {
    return {
      title: 'Project not found'
    }
  }

  return {
    title: `${project.title} | Projects`
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((item) => item.slug === params.slug) ?? notFound()

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <section className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="space-y-6 md:flex-1">
              <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {project.category}
              </span>
              <h1 className="text-3xl font-semibold text-card-foreground md:text-4xl">
                {project.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Stack
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    View code
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    External demo
                  </Link>
                )}
              </div>
            </div>

            {project.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted md:max-w-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                />
              </div>
            )}
          </div>
        </section>

        <ProjectMedia media={project.media} title={project.title} />
      </div>
    </main>
  )
}
