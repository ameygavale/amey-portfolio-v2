import Image from 'next/image'

import { ProjectVideoStack } from '@/components/projects/project-video-stack'

interface ProjectHeroMediaProps {
  title: string
  image?: string | null
  videos: string[]
  projectSlug: string
}

export function ProjectHeroMedia({ title, image, videos, projectSlug }: ProjectHeroMediaProps) {
  if (videos.length > 0) {
    return (
      <ProjectVideoStack
        videos={videos}
        projectTitle={title}
        projectSlug={projectSlug}
        posterImage={image}
      />
    )
  }

  if (image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 400px, 100vw"
          priority
        />
      </div>
    )
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/60 text-sm font-medium text-muted-foreground">
      Visual coming soon
    </div>
  )
}
