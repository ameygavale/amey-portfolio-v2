import { Mail, Linkedin, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { ProjectsShowcase } from '@/components/home/projects-showcase'
import { ExperienceSection } from '@/components/home/experience-section'
import {
  SITE_CONFIG,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  SKILLS
} from '@/lib/constants'

export default function Home() {
  const phoneHref = SITE_CONFIG.phone.replace(/[^\d+]/g, '')
  return (
    <main className="relative z-10 flex flex-col gap-24 pb-24">
      <HeroSection site={SITE_CONFIG} />

      <AboutSection />

      <section id="skills" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-[-35%] left-[15%] h-80 w-80 rounded-full bg-accent/15 blur-[130px]" />
        </div>
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Skills</h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary/40 bg-primary/10 text-primary hover:border-primary/60 hover:bg-primary/20"
            >
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                View endorsements
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SKILLS.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(30,98,132,0.45)]"
              >
                <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px] transition duration-300 group-hover:bg-primary/20" />
                <h3 className="relative text-lg font-semibold text-foreground">{skillGroup.category}</h3>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium tracking-[0.08em] text-primary/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection roles={EXPERIENCE} />

      <ProjectsShowcase projects={PROJECTS} />

      <section id="education" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[18%] top-8 h-64 w-64 rounded-full bg-primary/20 blur-[150px]" />
          <div className="absolute bottom-[-25%] left-[10%] h-72 w-72 rounded-full bg-secondary/18 blur-[160px]" />
        </div>
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Education</h2>
            <p className="mt-3 text-muted-foreground">
              Academic foundation grounded in Autonomy, Artificial Intelligence and Hardware Systems.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION.map((entry) => (
              <div
                key={entry.degree}
                className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-7 shadow-[0_24px_70px_rgba(31,82,133,0.35)] transition duration-300 hover:border-primary/50"
              >
                <div className="pointer-events-none absolute -top-24 right-6 h-48 w-48 rounded-full bg-primary/15 blur-[120px] transition-opacity duration-300 group-hover:opacity-100" />
                <p className="relative text-sm font-semibold text-primary">
                  {entry.startDate} – {entry.endDate}
                </p>
                <h3 className="relative mt-3 text-xl font-semibold text-foreground md:text-2xl">{entry.degree}</h3>
                {'major' in entry && entry.major && (
                  <p className="relative text-sm font-medium text-foreground/80">{entry.major}</p>
                )}
                <p className="relative text-muted-foreground">{entry.school}</p>
                <ul className="relative mt-5 space-y-3 text-sm text-muted-foreground">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[12%] top-[15%] h-64 w-64 rounded-full bg-primary/20 blur-[150px]" />
          <div className="absolute right-[18%] bottom-[-20%] h-72 w-72 rounded-full bg-secondary/20 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-primary/25 via-transparent to-secondary/30 p-10 text-foreground shadow-[0_30px_100px_rgba(24,70,110,0.45)]">
            <div className="pointer-events-none absolute -top-24 left-20 h-60 w-60 rounded-full bg-white/20 blur-[140px] opacity-40" />
            <div className="pointer-events-none absolute bottom-[-28%] right-10 h-72 w-72 rounded-full bg-black/30 blur-[120px] opacity-40" />
            <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 md:text-4xl">Let&apos;s build the next robot together.</h2>
                <p className="text-base text-slate-800 dark:text-slate-100 md:text-lg">
                  I&apos;m exploring full-time opportunities for 2025/26 focused on autonomy, perception, and multi-robot systems. If you&apos;re pushing the frontier of Autonomy &amp; Robotics, I&apos;d love to chat.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="border border-transparent bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/90 dark:text-slate-900 dark:hover:bg-white"
                  >
                    <a href={`mailto:${SITE_CONFIG.email}`}>
                      <Mail className="h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="border border-transparent bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/90 dark:text-slate-900 dark:hover:bg-white"
                  >
                    <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-3 rounded-2xl border border-white/10 bg-white/10 p-6 text-sm text-slate-800 dark:text-slate-100">
                <div className="flex items-center justify-between">
                  <span>Primary email</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-medium text-slate-900 hover:underline dark:text-white"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phone</span>
                  <a
                    href={`tel:${phoneHref}`}
                    className="font-medium text-slate-900 hover:underline dark:text-white"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="font-medium text-slate-900 dark:text-white">{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
