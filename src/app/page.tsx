import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { HeroSection } from '@/components/home/hero-section'
import { ProjectsShowcase } from '@/components/home/projects-showcase'
import { ExperienceSection } from '@/components/home/experience-section'
import { VisionLabSection } from '@/components/home/vision-lab-section'
import { ContactSection } from '@/components/home/contact-section'
import {
  SITE_CONFIG,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  SKILLS,
} from '@/lib/constants'
import { getFeaturedPhotos } from '@/lib/photography'

export default async function Home() {
  const featuredPhotos = await getFeaturedPhotos()
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
          <SectionHeader module="Skills" title="Skills">
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

      <VisionLabSection photos={featuredPhotos} />

      <section id="education" className="relative py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <div className="ambient-glow absolute right-[18%] top-8 h-64 w-64 bg-primary/20 blur-[150px]" />
          <div className="ambient-glow absolute bottom-[-25%] left-[10%] h-72 w-72 bg-secondary/18 blur-[160px]" />
        </div>
        <div className="container mx-auto px-4">
          <SectionHeader
            module="Education"
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

      <ContactSection
        email={SITE_CONFIG.email}
        phone={SITE_CONFIG.phone}
        phoneHref={phoneHref}
        linkedin={SITE_CONFIG.linkedin}
        location={SITE_CONFIG.location}
        calendarUrl={SITE_CONFIG.calendarUrl}
      />
    </main>
  )
}
