'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ui/project-card'
import type { ProjectConfig } from '@/lib/constants'

interface ProjectsShowcaseProps {
  projects: ProjectConfig[]
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category)))
    return ['All', ...unique]
  }, [projects])

  const filtered = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }
    return projects.filter((project) => project.category === activeCategory)
  }, [projects, activeCategory])

  return (
    <section id="projects" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Systems I&apos;ve architected and delivered—combining autonomy, perception, and simulation workflows to unlock new capabilities.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/projects">
              Explore project archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border bg-background text-muted-foreground hover:text-foreground'
                }`}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
              >
                {category}
              </motion.button>
            )
          })}
        </div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
