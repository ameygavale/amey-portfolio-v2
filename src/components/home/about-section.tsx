'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-14 shadow-[0_25px_80px_rgba(41,61,125,0.35)] backdrop-blur">
        <div className="pointer-events-none absolute -top-32 left-16 h-56 w-56 rounded-full bg-primary/25 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[-25%] right-[-10%] h-72 w-72 rounded-full bg-secondary/20 blur-[120px]" />
        <motion.span
          className="relative mb-6 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary-foreground shadow-[0_12px_30px_rgba(12,74,110,0.35)] ring-1 ring-primary/60 dark:bg-primary/90"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          ABOUT
        </motion.span>
        <motion.p
          className="relative text-lg leading-relaxed text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Initiated my journey with Mechanical Engineering at Pune, where I learned how machines move. Got hooked on intelligence by earning a Postgraduate Diploma in Artificial Intelligence, automated systems at Accenture, and then leveled up with a Master&apos;s in Autonomy & Robotics at UIUC in collaboration with GE Aerospace Research. Now, as a researcher at UIUC, I build robots that actually work in the wild, designing autonomy for air, land, and water systems using stereo vision, motion planning, and control.
        </motion.p>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(72, 216, 255, 0.04) 0%, rgba(72, 216, 255, 0) 40%), linear-gradient(300deg, rgba(183, 149, 255, 0.03) 20%, rgba(183, 149, 255, 0) 60%)'
          }}
        />
      </div>
    </section>
  )
}
