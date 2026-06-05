import { Mail, Linkedin, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { HeroSection } from '@/components/home/hero-section'
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

      <section id="skills" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <div className="ambient-glow absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-primary/15 blur-[120px]" />
          <div className="ambient-glow absolute bottom-[-35%] left-[15%] h-80 w-80 bg-accent/15 blur-[130px]" />
        </div>
        <div className="container mx-auto px-4">
          <SectionHeader module="Cap / Skills" title="Skills">
            <Button
              asChild
              variant="outline"
              className="border-border bg-card hover:border-primary/40 hover:bg-muted"
            >
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                View endorsements
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </SectionHeader>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SKILLS.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group panel-brackets relative overflow-hidden p-6 transition duration-300 hover:border-primary/40 dark:hover:border-primary/30"
              >
                <div className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px] transition duration-300 group-hover:bg-primary/20 dark:hidden" />
                <h3 className="relative text-lg font-semibold text-foreground">{skillGroup.category}</h3>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="chip text-primary/90 dark:border-border dark:bg-muted dark:text-foreground/80"
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
        <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <div className="ambient-glow absolute right-[18%] top-8 h-64 w-64 bg-primary/20 blur-[150px]" />
          <div className="ambient-glow absolute bottom-[-25%] left-[10%] h-72 w-72 bg-secondary/18 blur-[160px]" />
        </div>
        <div className="container mx-auto px-4">
          <SectionHeader
            module="Cal / Education"
            title="Education"
            description="Academic foundation grounded in Autonomy, Artificial Intelligence and Hardware Systems."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION.map((entry) => (
              <div
                key={entry.degree}
                className="group panel-brackets relative overflow-hidden p-7 transition duration-300 hover:border-primary/40 dark:hover:border-primary/30"
              >
                <div className="pointer-events-none absolute -top-24 right-6 h-48 w-48 rounded-full bg-primary/15 blur-[120px] transition-opacity duration-300 group-hover:opacity-100 dark:hidden" />
                <p className="relative telemetry text-primary">
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
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-signal" />
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
        <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <div className="ambient-glow absolute left-[12%] top-[15%] h-64 w-64 bg-primary/20 blur-[150px]" />
          <div className="ambient-glow absolute right-[18%] bottom-[-20%] h-72 w-72 bg-secondary/20 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4">
          <div className="panel-brackets relative overflow-hidden p-10">
            <div className="pointer-events-none absolute -top-24 left-20 h-60 w-60 rounded-full bg-white/20 blur-[140px] opacity-40 dark:hidden" />
            <div className="pointer-events-none absolute bottom-[-28%] right-10 h-72 w-72 rounded-full bg-black/30 blur-[120px] opacity-40 dark:hidden" />
            <div className="relative grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
              <div className="space-y-5">
                <span className="module-label">I/O / Contact</span>
                <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Let&apos;s build the next robot together.</h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  I&apos;m exploring full-time opportunities for 2025/26 focused on autonomy, perception, and multi-robot systems. If you&apos;re pushing the frontier of Autonomy &amp; Robotics, I&apos;d love to chat.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <a href={`mailto:${SITE_CONFIG.email}`}>
                      <Mail className="h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <div className="panel space-y-3 p-6 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="telemetry text-muted-foreground">email</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-medium text-foreground hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="telemetry text-muted-foreground">phone</span>
                  <a
                    href={`tel:${phoneHref}`}
                    className="font-medium text-foreground hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="telemetry text-muted-foreground">loc</span>
                  <span className="font-medium text-foreground">{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
