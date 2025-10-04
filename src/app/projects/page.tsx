import { PROJECTS } from '@/lib/constants'
import { ProjectCard } from '@/components/ui/project-card'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of robotics and autonomy projects showcasing my work in 
            autonomous systems, computer vision, and multi-agent coordination.
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