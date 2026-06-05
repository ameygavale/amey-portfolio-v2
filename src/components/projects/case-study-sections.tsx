import type { CaseStudy, CaseStudyMetric } from '@/lib/constants'

interface CaseStudySectionsProps {
  caseStudy: CaseStudy
  technologies?: string[]
}

function ImpactStrip({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <div className="grid divide-x divide-border overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col items-center justify-center px-4 py-6 text-center sm:py-8">
          <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{metric.value}</p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export function CaseStudySections({ caseStudy, technologies = [] }: CaseStudySectionsProps) {
  return (
    <article className="space-y-14 md:space-y-16">
      {caseStudy.results.length > 0 && <ImpactStrip metrics={caseStudy.results} />}

      <blockquote className="relative border-l-[3px] border-primary pl-6 md:pl-8">
        <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl md:leading-relaxed">
          {caseStudy.problem}
        </p>
      </blockquote>

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Built</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{caseStudy.role}</p>
        </div>

        {caseStudy.approach.length > 0 && (
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">How</p>
            <ol className="mt-4 space-y-5">
              {caseStudy.approach.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {caseStudy.architecture && (
        <div className="overflow-hidden rounded-xl border border-border bg-muted/40">
          <div className="border-b border-border px-5 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Pipeline</p>
          </div>
          <p className="px-5 py-5 font-mono text-sm leading-relaxed text-muted-foreground md:px-6 md:py-6 md:text-[15px]">
            {caseStudy.architecture}
          </p>
        </div>
      )}

      {caseStudy.lessonsLearned.length > 0 && (
        <div className="space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Takeaways</p>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudy.lessonsLearned.map((lesson) => (
              <p
                key={lesson}
                className="rounded-lg border border-border/80 bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground"
              >
                {lesson}
              </p>
            ))}
          </div>
        </div>
      )}

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-border pt-8">
          {technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
