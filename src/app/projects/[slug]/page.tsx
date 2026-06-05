import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

import { ProjectVideo } from '@/components/ui/project-video'
import { PROJECTS } from '@/lib/constants'
import { normalizeMediaPaths } from '@/lib/media'

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
  const mediaVideos = normalizeMediaPaths(project.media)
  const videoLinks = project.videoLinks?.filter(Boolean) ?? []
  const hasVideos = mediaVideos.length > 0 || videoLinks.length > 0

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

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted md:max-w-md">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-sm font-medium text-muted-foreground">
                  Visual coming soon
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-xl md:p-12">
          <h2 className="text-2xl font-semibold text-card-foreground">Project Videos</h2>
          {hasVideos ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {mediaVideos.map((src, index) => (
                <div key={`${src}-${index}`} className="flex flex-col gap-3">
                  <ProjectVideo
                    src={src}
                    title={`${project.title} video ${index + 1}`}
                  />
                </div>
              ))}
              {videoLinks.map((link, index) => (
                <div key={`${link}-${index}`} className="flex flex-col gap-3">
                  <ProjectVideo
                    src={link}
                    title={`${project.title} video ${mediaVideos.length + index + 1}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-muted-foreground">Visuals coming soon.</p>
          )}
        </section>
      </div>
    </main>
  )
}
