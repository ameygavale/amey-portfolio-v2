'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { SectionHeader } from '@/components/ui/section-header'

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
      <div className="ambient-glow absolute inset-x-0 top-16 -z-10 mx-auto h-64 w-64 bg-secondary/20 blur-[180px]" />
      <SectionHeader
        module="Nav / Experience"
        title="Experience"
        description="Leading autonomy projects from proof-of-concept to production deployments across agricultural, aerial, and automotive robotics domains."
      />

      <div className="panel-brackets grid gap-8 overflow-hidden p-8 md:grid-cols-[0.9fr_1.6fr]">
        <div className="relative flex flex-col gap-4">
          <span className="module-label">Select role</span>
          <div className="relative mt-2 space-y-2">
            {roles.map((role, index) => {
              const isActive = index === activeIndex
              return (
                <motion.button
                  key={`${role.company}-${role.startDate}`}
                  type="button"
                  className={`relative w-full overflow-hidden rounded-xl border px-5 py-4 text-left transition ${
                    isActive
                      ? 'border-primary/40 bg-muted text-foreground dark:border-primary/30'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileTap={{ scale: 0.98 }}
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
            className="panel space-y-5 p-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="chip text-primary dark:text-foreground/80">
                  {activeRole.startDate} – {activeRole.endDate}
                </span>
                <span className="text-xs uppercase tracking-[0.18em]">
                  {activeRole.location}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">{activeRole.role}</h3>
              <p className="text-lg text-muted-foreground">{activeRole.company}</p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {activeRole.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-signal" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
