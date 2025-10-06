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
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute right-[12%] bottom-[-25%] h-80 w-80 rounded-full bg-secondary/20 blur-[160px]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Featured Projects</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/5 text-foreground hover:border-primary/60 hover:bg-primary/20 hover:text-foreground"
          >
            <Link href="/projects">
              Explore project archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'border-primary/60 bg-primary/20 text-foreground shadow-[0_12px_32px_rgba(33,118,155,0.4)]'
                    : 'border-white/10 bg-white/5 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
                whileTap={{ scale: 0.94 }}
                whileHover={{ y: -2 }}
              >
                {category}
              </motion.button>
            )
          })}
        </div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
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
