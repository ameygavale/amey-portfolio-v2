import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

import { CaseStudySections } from '@/components/projects/case-study-sections'
import { ProjectHeroMedia } from '@/components/projects/project-hero-media'
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
    title: `${project.title} | Case Study`,
    description: project.caseStudy.problem
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((item) => item.slug === params.slug) ?? notFound()
  const mediaVideos = normalizeMediaPaths(project.media)
  const videoLinks = project.videoLinks?.filter(Boolean) ?? []
  const videos = [...mediaVideos, ...videoLinks]

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <header className="mb-12 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip text-primary dark:text-foreground/80">{project.category}</span>
              {project.caseStudy.highlightMetric && (
                <span className="status-live rounded-md border border-border bg-muted/60 px-3 py-1.5">
                  {project.caseStudy.highlightMetric}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-[2.5rem]">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">{project.description}</p>
          </div>

          <ProjectHeroMedia
            title={project.title}
            image={project.image}
            videos={videos}
            projectSlug={project.slug}
          />
        </header>

        <CaseStudySections caseStudy={project.caseStudy} technologies={project.technologies} />

        {(project.github || project.demo) && (
          <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8">
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
        )}
      </div>
    </main>
  )
}
