import fs from 'fs'
import path from 'path'

import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ResumeVariant = {
  title: string
  file: string
  summary: string
}

const resumeSummaries: Record<string, string> = {
  mechanicalresume:
    'Mechanical work blending FEA, CAD, and lean manufacturing to accelerate product cycles and boost reliability.\nLed automation upgrades that cut downtime by 20%+ while directing cross-functional build teams from concept through launch.',
  roboticsresume:
    'Robotics integration merging perception, control, and mechatronics to deliver autonomous systems that thrive off the bench.\nBuilt sensor-rich platforms, tuned motion pipelines, and shipped field-ready robots that lift productivity and safety.',
  softwaredevelopmentresume:
    'Software development shipping resilient web and AI products that scale to thousands of users with clean TypeScript.\nDrives end-to-end delivery architecture, DevOps, and experimentation to unlock speed, quality, and measurable growth.',
  resumesde:
    'Software development shipping resilient web and AI products that scale to thousands of users with clean TypeScript.\nDrives end-to-end delivery architecture, DevOps, and experimentation to unlock speed, quality, and measurable growth.',
  // Handle existing file names that contain a common misspelling.
  softwaredevelpmentresume:
    'Software development shipping resilient web and AI products that scale to thousands of users with clean TypeScript.\nDrives end-to-end delivery architecture, DevOps, and experimentation to unlock speed, quality, and measurable growth.',
}

function normalizeTitle(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function getResumeVariants(): ResumeVariant[] {
  const resumesDirectory = path.join(process.cwd(), 'public', 'resumes')

  if (!fs.existsSync(resumesDirectory)) {
    return []
  }

  const files = fs
    .readdirSync(resumesDirectory)
    .filter((file) => file.toLowerCase().endsWith('.pdf'))
    .sort((a, b) => a.localeCompare(b))

  return files.map((file) => {
    const title = file.replace(/\.pdf$/i, '')
    const encodedFileName = encodeURIComponent(file)
    const normalizedTitle = normalizeTitle(title)
    const normalizedWithoutName = normalizeTitle(title.replace(/amey\s+(vilas\s+)?gavale\s+/i, ''))

    return {
      title,
      file: `/resumes/${encodedFileName}`,
      summary:
        resumeSummaries[normalizedTitle] ?? resumeSummaries[normalizedWithoutName] ?? '',
    }
  })
}

export default function ResumesPage() {
  const resumeVariants = getResumeVariants()

  return (
    <main className="flex min-h-screen flex-col bg-background pb-24 pt-24 text-foreground">
      <section className="container mx-auto flex w-full max-w-4xl flex-1 flex-col px-4">
        {resumeVariants.length === 0 ? (
          <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
            No resumes available right now.
          </div>
        ) : (
          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {resumeVariants.map((variant) => (
              <article
                key={variant.file}
                className="flex flex-col justify-between gap-6 rounded-3xl border bg-background p-6 text-left shadow-sm"
              >
                <h2 className="text-xl font-semibold">{variant.title}</h2>
                {variant.summary ? (
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {variant.summary}
                  </p>
                ) : null}
                <Button asChild className="w-full gap-2" size="lg">
                  <a href={variant.file} download>
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
