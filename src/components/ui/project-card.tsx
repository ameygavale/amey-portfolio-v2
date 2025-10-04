import Image from 'next/image'
import { Github, Video } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image?: string | null
  technologies: string[]
  github?: string
  demo?: string
  category: string
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
  category
}: ProjectCardProps) {
  const hasImage = Boolean(image)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-gray-200">
        {hasImage ? (
          <Image
            src={image as string}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-slate-500 text-sm font-medium">
            Visual coming soon
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
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
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
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
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Video size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
