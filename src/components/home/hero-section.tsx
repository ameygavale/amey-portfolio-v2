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
  { delay: 0, top: '12%', left: '18%' },
  { delay: 1.4, top: '68%', left: '78%' },
  { delay: 0.7, top: '72%', left: '6%' }
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
      className="relative overflow-hidden bg-background pb-28 pt-24 text-foreground"
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

      {floatingIndicators.map((item, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute hidden rounded-full bg-sky-300/60 shadow-lg md:block"
          style={{ width: 14, height: 14, top: item.top, left: item.left }}
          initial={{ opacity: 0.3, scale: 0.8, y: -10 }}
          animate={{
            opacity: [0.3, 0.85, 0.3],
            scale: [0.8, 1.2, 0.8],
            y: [-10, 12, -10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay
          }}
        />
      ))}

      <div className="container relative mx-auto flex flex-col items-center gap-12 px-4 text-center">
        <motion.div
          className="relative h-auto w-full max-w-xl overflow-hidden rounded-[220px] shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[200px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image
              src={site.headshotUrl}
              alt={`Portrait of ${site.name}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 80vw"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-8 md:space-y-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="space-y-5 md:space-y-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
              <motion.span
                className="h-2 w-2 rounded-full bg-sky-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              {site.tagline}
            </span>
            <h1 className="mt-12 mb-8 text-4xl font-semibold leading-tight md:mt-16 md:mb-10 md:text-5xl">
              {site.name}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {site.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 py-3 md:gap-5 md:py-4"
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
            className="flex flex-wrap items-center justify-center gap-5 py-2 text-sm text-muted-foreground md:py-3 md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-500" />
              {site.location}
            </span>
            <Link
              href={site.github}
              className="inline-flex items-center gap-2 transition hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={site.linkedin}
              className="inline-flex items-center gap-2 transition hover:text-foreground"
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
