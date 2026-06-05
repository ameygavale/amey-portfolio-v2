import { PROJECTS } from '@/lib/constants'
import { ProjectCard } from '@/components/ui/project-card'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Projects</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Case studies from field robotics, marine autonomy, and computer vision,
            each with the problem, approach, measured results, and lessons learned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
