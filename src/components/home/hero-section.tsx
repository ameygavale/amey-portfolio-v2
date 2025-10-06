'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { Github, Linkedin, MapPin, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  site: {
    name: string
    shortName?: string
    tagline: string
    description: string
    github: string
    linkedin: string
    location: string
    headshotUrl: string
    phone: string
  }
}

const floatingIndicators = [
  { delay: 0, top: '16%', left: '18%' },
  { delay: 1.2, top: '68%', left: '68%' },
  { delay: 0.9, top: '72%', left: '8%' },
  { delay: 1.8, top: '38%', left: '88%' }
]

export function HeroSection({ site }: HeroSectionProps) {
  const spotlightX = useMotionValue(50)
  const spotlightY = useMotionValue(35)
  const spotlightIntensity = useSpring(0.45, {
    stiffness: 120,
    damping: 20,
    mass: 0.6
  })
  const spotlightBackground = useMotionTemplate`
    radial-gradient(650px circle at ${spotlightX}% ${spotlightY}%, rgba(56,189,248, ${spotlightIntensity}), transparent 70%)
  `

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
      const x = ((event.clientX - left) / width) * 100
      const y = ((event.clientY - top) / height) * 100

      spotlightX.set(x)
      spotlightY.set(y)
      spotlightIntensity.set(0.7)
    },
    [spotlightX, spotlightY, spotlightIntensity]
  )

  const handlePointerLeave = useCallback(() => {
    spotlightIntensity.set(0.35)
    spotlightX.set(50)
    spotlightY.set(35)
  }, [spotlightX, spotlightY, spotlightIntensity])

  return (
    <motion.section
      id="hero"
      className="relative isolate overflow-hidden bg-background pb-28 pt-28 text-foreground"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlightBackground }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute top-[46%] right-[-18%] h-[520px] w-[520px] rounded-full bg-secondary/25 blur-[160px]" />
        <div className="absolute bottom-[-35%] left-[6%] h-[420px] w-[420px] rounded-full bg-accent/25 blur-[140px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(145, 222, 255, 0.06) 0%, rgba(145, 222, 255, 0) 32%), linear-gradient(300deg, rgba(183, 149, 255, 0.05) 10%, rgba(183, 149, 255, 0) 48%)'
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '120px 120px'
        }}
      />

      {floatingIndicators.map((item, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute hidden rounded-full border border-primary/40 bg-primary/40 shadow-[0_0_25px_rgba(72,216,255,0.35)] backdrop-blur md:block"
          style={{ width: 18, height: 18, top: item.top, left: item.left }}
          initial={{ opacity: 0.25, scale: 0.8, y: -10 }}
          animate={{
            opacity: [0.28, 0.9, 0.28],
            scale: [0.8, 1.24, 0.8],
            y: [-14, 16, -14]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay
          }}
        />
      ))}

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-4 text-center md:flex-row md:items-stretch md:gap-20 md:text-left">
        <motion.div
          className="order-1 h-full w-full max-w-sm md:order-2"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(32,74,109,0.45)] backdrop-blur-xl"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <Image
              src={site.headshotUrl}
              alt={`Portrait of ${site.name}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 420px, 80vw"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="order-2 flex w-full max-w-2xl flex-col justify-center space-y-10 md:order-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-sm font-medium text-primary">
              <motion.span
                className="h-2 w-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              {site.tagline}
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              {site.name}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {site.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 py-3 md:gap-5 md:py-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          >
            <Button asChild size="lg">
              <Link href="/resumes">
                <Download className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-6 py-2 text-sm text-muted-foreground md:py-3 md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2">
              <MapPin className="h-4 w-4 text-primary" />
              {site.location}
            </span>
            <Link
              href={site.github}
              className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 transition hover:border-primary/50 hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 transition hover:border-primary/50 hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
