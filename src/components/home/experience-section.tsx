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
    <section id="experience" className="container relative mx-auto px-4">
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-64 w-64 rounded-full bg-secondary/20 blur-[180px]" />
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Experience</h2>
        <p className="mt-3 text-muted-foreground">
          Leading autonomy projects from proof-of-concept to production deployments across agricultural, aerial, and automotive robotics domains.
        </p>
      </div>

      <div className="grid gap-8 overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(24,67,105,0.35)] backdrop-blur md:grid-cols-[0.9fr_1.6fr]">
        <div className="relative flex flex-col gap-4">
          <motion.span
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-primary-foreground shadow-[0_12px_30px_rgba(12,74,110,0.35)] ring-1 ring-primary/60 dark:bg-primary/90"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            ROLES
          </motion.span>
          <div className="relative mt-2 space-y-2">
            {roles.map((role, index) => {
              const isActive = index === activeIndex
              return (
                <motion.button
                  key={`${role.company}-${role.startDate}`}
                  type="button"
                  className={`relative w-full overflow-hidden rounded-2xl border px-5 py-4 text-left transition ${
                    isActive
                      ? 'border-primary/50 bg-primary/15 text-foreground shadow-[0_12px_35px_rgba(34,108,145,0.45)]'
                      : 'border-white/10 bg-white/5 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {role.startDate} – {role.endDate}
                    </span>
                    <span>{role.location}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {role.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{role.company}</p>
                  {isActive && (
                    <motion.span
                      layoutId="experienceActive"
                      className="absolute inset-0 -z-10 rounded-2xl border border-primary/50 bg-primary/20"
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
            className="relative space-y-5 overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-8"
          >
            <div className="pointer-events-none absolute -top-28 right-6 h-56 w-56 rounded-full bg-primary/15 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-72 w-72 rounded-full bg-secondary/15 blur-[130px]" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                  {activeRole.startDate} – {activeRole.endDate}
                </span>
                <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {activeRole.location}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">{activeRole.role}</h3>
              <p className="text-lg text-muted-foreground">{activeRole.company}</p>
            </div>
            <motion.ul
              className="relative space-y-3 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
            >
              {activeRole.achievements.map((achievement) => (
                <motion.li key={achievement} className="flex gap-3" layout>
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
