import { SITE_CONFIG } from '@/lib/constants'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {SITE_CONFIG.name}
            </p>
            <p className="telemetry">
              ros2 · c++ · python · perception · control
            </p>
          </div>
          <div className="flex gap-4">
            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
