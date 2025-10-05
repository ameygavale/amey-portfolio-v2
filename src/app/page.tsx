import { Mail, Linkedin, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import type { HighlightItem } from '@/components/home/about-section'
import { ProjectsShowcase } from '@/components/home/projects-showcase'
import { ExperienceSection } from '@/components/home/experience-section'
import {
  SITE_CONFIG,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  SKILLS
} from '@/lib/constants'

const ABOUT_HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Ship-ready autonomy stacks',
    description:
      'Builds full autonomy pipelines—perception, mapping, and planning—that survive outdoors where weather and comms fail.',
    icon: 'cpu'
  },
  {
    title: 'Field-proven deployments',
    description:
      'Delivered robots that navigate farms, lakes, and urban test beds with repeatable performance and documented playbooks.',
    icon: 'route'
  },
  {
    title: 'Sensing under uncertainty',
    description:
      'Fuses LiDAR, stereo, and GNSS for resilient localization when lighting shifts or GPS fades out.',
    icon: 'waves'
  }
]

const ABOUT_STATS = [
  {
    label: 'Real-world deployments',
    value: '12+',
    detail: 'Across agricultural robots, marine vessels, and autonomous shuttles.'
  },
  {
    label: 'SLAM & perception stacks',
    value: '5',
    detail: 'Designed and benchmarked across ROS2, Gazebo, and embedded compute.'
  },
  {
    label: 'Team leadership',
    value: '5 engineers',
    detail: 'Mentored graduate and undergraduate teams from concept to field ops.'
  }
]

export default function Home() {
  const phoneHref = SITE_CONFIG.phone.replace(/[^\d+]/g, '')
  return (
    <main className="flex flex-col gap-24 pb-24">
      <HeroSection site={SITE_CONFIG} />

      <AboutSection highlights={ABOUT_HIGHLIGHTS} stats={ABOUT_STATS} />

      <section id="skills" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Technical Toolkit</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Breadth across autonomy, perception, and software infrastructure lets me deliver reliable, end-to-end robotics capabilities.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary">
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                View endorsements
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category} className="rounded-3xl border bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
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

      <section id="education" className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="mt-2 text-muted-foreground">
            Academic foundation grounded in robotics, controls, and systems engineering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((entry) => (
            <div key={entry.degree} className="rounded-3xl border bg-background p-6 shadow-sm">
              <p className="text-sm font-semibold text-primary">{entry.startDate} – {entry.endDate}</p>
              <h3 className="mt-2 text-xl font-semibold">{entry.degree}</h3>
              <p className="text-muted-foreground">{entry.school}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {entry.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-foreground" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">Let&apos;s build the next robot together.</h2>
              <p className="text-slate-200">
                I&apos;m exploring full-time opportunities for 2025/26 focused on autonomy, perception, and multi-robot systems. If you&apos;re pushing the frontier of Autonomy &amp; Robotics, I&apos;d love to chat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-white/20 bg-white/5 p-6 text-sm">
              <div className="flex items-center justify-between text-slate-200">
                <span>Primary email</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-white hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center justify-between text-slate-200">
                <span>Phone</span>
                <a href={`tel:${phoneHref}`} className="font-medium text-white hover:underline">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center justify-between text-slate-200">
                <span>Location</span>
                <span className="font-medium text-white">{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
