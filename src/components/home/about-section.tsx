'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { CircuitBoard, MapPin, ArrowRight, Cpu, Route, Waves } from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

const HIGHLIGHT_ICON_MAP = {
  cpu: Cpu,
  route: Route,
  waves: Waves
} satisfies Record<string, LucideIcon>

export type HighlightIconName = keyof typeof HIGHLIGHT_ICON_MAP

export interface HighlightItem {
  title: string
  description: string
  icon: HighlightIconName
}

interface StatItem {
  label: string
  value: string
  detail: string
}

interface AboutSectionProps {
  highlights: HighlightItem[]
  stats: StatItem[]
}

const highlightVariants = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  inView: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5
    }
  })
}

type ParsedValue = {
  prefix: string
  number: number
  suffix: string
}

const parseStatValue = (value: string): ParsedValue => {
  const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/)

  if (!match) {
    return { prefix: '', number: 0, suffix: value }
  }

  const [, prefix, numeric, suffix] = match
  return {
    prefix: prefix ?? '',
    number: Number(numeric),
    suffix: suffix ?? ''
  }
}

interface AnimatedStatProps {
  label: string
  value: string
  detail: string
  index: number
}

function AnimatedStat({ label, value, detail, index }: AnimatedStatProps) {
  const statRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(statRef, { once: true, amount: 0.4 })
  const { prefix, number, suffix } = useMemo(() => parseStatValue(value), [value])
  const [currentValue, setCurrentValue] = useState(0)
  const hasAnimatedRef = useRef(false)
  const decimals = Number.isInteger(number) ? 0 : 1

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) {
      return
    }
    hasAnimatedRef.current = true

    const controls = animate(0, number, {
      duration: 1.2,
      ease: 'easeOut',
      delay: index * 0.08,
      onUpdate: (latest) => {
        setCurrentValue(Number(latest.toFixed(decimals)))
      }
    })

    return () => controls.stop()
  }, [isInView, number, index, decimals])

  const formattedValue = `${prefix}${currentValue}${suffix}`

  return (
    <motion.div
      ref={statRef}
      className="border-l-2 border-primary/40 pl-4"
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
    >
      <p className="text-2xl font-semibold text-foreground">{formattedValue}</p>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground/80">{detail}</p>
    </motion.div>
  )
}

export function AboutSection({ highlights, stats }: AboutSectionProps) {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                About
              </motion.span>
              <motion.h2
                className="text-3xl font-semibold md:text-4xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                Engineering autonomy that survives real-world chaos
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
              >
                I build autonomy that works in the wild. From perception to control, I architect and deploy full-stack robotics systems that keep performing through rain, reflections, and dropped networks so field teams can focus on results, not resets.
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                Most weeks you&apos;ll find me iterating on sensor fusion pipelines, resilience testing with operators, or packaging experiments into reproducible benchmarks. I love the hand-off between lab breakthroughs and sustained deployments.
              </motion.p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = HIGHLIGHT_ICON_MAP[item.icon] ?? Cpu

                return (
                  <motion.div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border bg-background/80 p-5 shadow-sm transition"
                    variants={highlightVariants}
                    initial="initial"
                    whileInView="inView"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={index}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <motion.span
                      className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                      whileHover={{ rotate: 4 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <aside className="space-y-6">
            <motion.div
              className="rounded-3xl border bg-muted/10 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Field stats
              </h3>
              <div className="mt-6 space-y-5">
                {stats.map((stat, index) => (
                  <AnimatedStat
                    key={stat.label}
                    label={stat.label}
                    value={stat.value}
                    detail={stat.detail}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl border bg-background p-6 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            >
              <h3 className="text-base font-semibold text-foreground">How I approach deployment</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CircuitBoard className="h-4 w-4" />
                  </span>
                  Prototyping perception modules with sim-to-real checkpoints and exhaustive dataset labeling hooks.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Running on-robot validation playbooks that stress-test GNSS dropouts, multipath, and sensor occlusions.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  Packaging insights into repeatable docs, CI pipelines, and ops handoffs so teams keep shipping after demo day.
                </li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  )
}
