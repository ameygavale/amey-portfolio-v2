import Link from 'next/link'
import Image from 'next/image'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Download
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ui/project-card'
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
    <main className="flex flex-col gap-24 pb-24">
      <section
        id="hero"
        className="relative overflow-hidden bg-white pb-28 pt-24 text-slate-900"
      >
        <div className="container relative mx-auto flex flex-col items-center gap-12 px-4 text-center">
          <div className="relative h-auto w-full max-w-xl overflow-hidden rounded-[220px] shadow-2xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[200px]">
              <Image
                src={SITE_CONFIG.headshotUrl}
                alt="Portrait of Amey Gavale"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 400px, 80vw"
                priority
              />
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div className="space-y-5 md:space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                {SITE_CONFIG.tagline}
              </span>
              <h1 className="mt-12 mb-8 text-4xl font-semibold leading-tight md:mt-16 md:mb-10 md:text-5xl">
                {SITE_CONFIG.name}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
                {SITE_CONFIG.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 py-3 md:gap-5 md:py-4">
              <Button asChild size="lg">
                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-900 hover:bg-slate-100"
              >
                <a href={`mailto:${SITE_CONFIG.email}`}>
                  <Mail className="h-4 w-4" />
                  Let&apos;s Collaborate
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 py-2 text-sm text-slate-600 md:py-3 md:text-base">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-500" />
                {SITE_CONFIG.location}
              </span>
              <Link
                href={SITE_CONFIG.github}
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={SITE_CONFIG.linkedin}
                className="inline-flex items-center gap-2 transition hover:text-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="text-lg text-muted-foreground">
            I build autonomy stacks that work outside the lab. From multi-robot coordination to perception pipelines, my focus is creating production-ready robotics software that can be trusted in the field—where weather, lighting, and communication rarely cooperate.
          </p>
          <p className="text-lg text-muted-foreground">
            My toolkit blends classical estimation, optimization-driven planning, and modern machine learning. I thrive where systems engineering meets research, bringing ideas from simulation into deployments that run for hours at a time.
          </p>
        </div>
      </section>

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

      <section id="experience" className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p className="mt-2 text-muted-foreground">
            Leading autonomy projects from proof-of-concept to production deployments across agricultural, aerial, and automotive robotics domains.
          </p>
        </div>
        <div className="space-y-8">
          {EXPERIENCE.map((role) => (
            <article
              key={`${role.company}-${role.startDate}`}
              className="grid gap-6 rounded-3xl border bg-background p-6 shadow-sm md:grid-cols-[1.1fr_2fr]"
            >
              <div>
                <p className="text-sm font-semibold text-primary">{role.startDate} – {role.endDate}</p>
                <h3 className="mt-2 text-xl font-semibold">{role.role}</h3>
                <p className="text-muted-foreground">{role.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Featured Projects</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Systems I&apos;ve architected and delivered—combining autonomy, perception, and simulation workflows to unlock new capabilities.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects">
                Explore project archive
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

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
                I&apos;m exploring full-time opportunities for 2024 focused on autonomy, perception, and multi-robot systems. If you&apos;re pushing the frontier of embodied intelligence, I&apos;d love to chat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  <a href={`mailto:${SITE_CONFIG.email}`}>
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
