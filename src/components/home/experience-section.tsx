'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExperienceRole {
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  achievements: string[]
}

interface ExperienceSectionProps {
  roles: ExperienceRole[]
}

export function ExperienceSection({ roles }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeRole = useMemo(() => roles[activeIndex], [roles, activeIndex])

  return (
    <section id="experience" className="container mx-auto px-4">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="mt-2 text-muted-foreground">
          Leading autonomy projects from proof-of-concept to production deployments across agricultural, aerial, and automotive robotics domains.
        </p>
      </div>

      <div className="grid gap-8 rounded-3xl border bg-background/95 p-6 shadow-sm md:grid-cols-[0.9fr_1.6fr]">
        <div className="relative flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Roles
          </span>
          <div className="relative mt-2 space-y-2">
            {roles.map((role, index) => {
              const isActive = index === activeIndex
              return (
                <motion.button
                  key={`${role.company}-${role.startDate}`}
                  type="button"
                  className={`relative w-full rounded-2xl border px-4 py-3 text-left transition ${
                    isActive
                      ? 'border-primary/60 bg-primary/10 text-foreground'
                      : 'border-border bg-background hover:border-primary/30'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -1 }}
                >
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {role.startDate} – {role.endDate}
                    </span>
                    <span>{role.location}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {role.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{role.company}</p>
                  {isActive && (
                    <motion.span
                      layoutId="experienceActive"
                      className="absolute inset-0 -z-10 rounded-2xl bg-primary/10"
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRole.company}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-4"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {activeRole.startDate} – {activeRole.endDate}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {activeRole.location}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{activeRole.role}</h3>
              <p className="text-lg text-muted-foreground">{activeRole.company}</p>
            </div>
            <motion.ul
              className="space-y-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
            >
              {activeRole.achievements.map((achievement) => (
                <motion.li key={achievement} className="flex gap-2" layout>
                  <motion.span
                    className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                    layout
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
