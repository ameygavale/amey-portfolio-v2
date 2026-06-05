'use client'

import { Calendar, Linkedin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TrackedLink } from '@/components/ui/tracked-link'

interface ContactSectionProps {
  email: string
  phone: string
  phoneHref: string
  linkedin: string
  location: string
  calendarUrl?: string
}

export function ContactSection({
  email,
  phone,
  phoneHref,
  linkedin,
  location,
  calendarUrl,
}: ContactSectionProps) {
  return (
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
              <span className="module-label">Contact</span>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Let&apos;s build the next robot together.
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                I&apos;m exploring full-time opportunities for 2025/26 focused on autonomy, perception, and
                multi-robot systems. If you&apos;re pushing the frontier of Autonomy &amp; Robotics, I&apos;d love
                to chat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <TrackedLink href={`mailto:${email}`} event={{ name: 'contact_click', data: { method: 'email' } }}>
                    <Mail className="h-4 w-4" />
                    Email Me
                  </TrackedLink>
                </Button>
                {calendarUrl ? (
                  <Button asChild size="lg" variant="outline">
                    <TrackedLink
                      href={calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      event={{ name: 'contact_click', data: { method: 'calendar' } }}
                    >
                      <Calendar className="h-4 w-4" />
                      Book 15 min
                    </TrackedLink>
                  </Button>
                ) : null}
                <Button asChild size="lg" variant="outline">
                  <TrackedLink
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    event={{ name: 'contact_click', data: { method: 'linkedin' } }}
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </TrackedLink>
                </Button>
              </div>
            </div>
            <div className="panel space-y-3 p-6 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="telemetry text-muted-foreground">email</span>
                <TrackedLink
                  href={`mailto:${email}`}
                  event={{ name: 'contact_click', data: { method: 'email' } }}
                  className="font-medium text-foreground hover:underline"
                >
                  {email}
                </TrackedLink>
              </div>
              <div className="flex items-center justify-between">
                <span className="telemetry text-muted-foreground">phone</span>
                <TrackedLink
                  href={`tel:${phoneHref}`}
                  event={{ name: 'contact_click', data: { method: 'phone' } }}
                  className="font-medium text-foreground hover:underline"
                >
                  {phone}
                </TrackedLink>
              </div>
              <div className="flex items-center justify-between">
                <span className="telemetry text-muted-foreground">loc</span>
                <span className="font-medium text-foreground">{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
