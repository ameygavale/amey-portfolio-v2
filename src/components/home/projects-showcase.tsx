'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
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
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:hidden">
        <div className="ambient-glow absolute left-[8%] top-10 h-72 w-72 bg-primary/20 blur-[150px]" />
        <div className="ambient-glow absolute right-[12%] bottom-[-25%] h-80 w-80 bg-secondary/20 blur-[160px]" />
      </div>
      <div className="container mx-auto px-4">
        <SectionHeader module="Sys / Projects" title="Featured Projects">
          <Button
            asChild
            variant="outline"
            className="border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted dark:hover:bg-muted"
          >
            <Link href="/projects">
              Explore project archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </SectionHeader>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'border-primary/40 bg-muted text-foreground dark:border-primary/30'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
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
