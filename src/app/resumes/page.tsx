import fs from 'fs'
import path from 'path'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

type ResumeVariant = {
  title: string
  file: string
  fileName: string
  displayPath: string
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

    return {
      title,
      file: `/resumes/${encodedFileName}`,
      fileName: file,
      displayPath: `/resumes/${file}`,
    }
  })
}

export default function ResumesPage() {
  const resumeVariants = getResumeVariants()

  return (
    <main className="flex min-h-screen flex-col bg-background pb-24 pt-16 text-foreground">
      <section className="container mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
          </Button>
          <span className="text-sm text-muted-foreground">{SITE_CONFIG.email}</span>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-semibold md:text-4xl">Choose the resume you need</h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Pick the PDF that matches what you need. Each file name below comes straight from{' '}
            <code>public/resumes</code>{' '}so you always know which version you are sharing.
          </p>
        </div>

        {resumeVariants.length === 0 ? (
          <div className="rounded-3xl border border-dashed p-10 text-center text-sm text-muted-foreground">
            No PDF resumes found yet. Drop your files into <code>public/resumes</code> and refresh this page.
          </div>
        ) : (
          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {resumeVariants.map((variant) => (
              <article
                key={variant.file}
                className="flex flex-col justify-between rounded-3xl border bg-background p-6 text-left shadow-sm"
              >
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">{variant.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    Saved in <code>public/resumes</code> as <span className="font-medium">{variant.fileName}</span>. Use it for
                    applications that call for this specific variant.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full gap-2" size="lg">
                    <a href={variant.file} download>
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                  <p className="mt-2 break-words text-xs text-muted-foreground">{variant.displayPath}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
