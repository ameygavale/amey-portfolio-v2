'use client'

import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

export default function ResumesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background pb-24 pt-24 text-foreground">
      <section className="container mx-auto flex w-full max-w-md flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <p className="text-muted-foreground">Download my latest resume below.</p>
        <Button asChild size="lg" className="w-full gap-2">
          <a
            href="/resumes/Amey_Gavale_Resume.pdf"
            download="Amey_Gavale_Resume.pdf"
            onClick={() => trackEvent({ name: 'resume_download' })}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </section>
    </main>
  )
}
