'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { ProjectVideo } from '@/components/ui/project-video'
import { cn } from '@/lib/utils'

interface ProjectVideoStackProps {
  videos: string[]
  projectTitle: string
  projectSlug: string
  posterImage?: string | null
}

const videoShellClass =
  'relative h-full w-full overflow-hidden rounded-xl border border-border bg-muted shadow-lg'

const peekShellClass =
  'pointer-events-none absolute inset-y-4 z-0 h-[calc(100%-2rem)] w-[46%] overflow-hidden rounded-xl border border-border/50 bg-muted opacity-30 shadow-sm'

const glassArrowClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 text-foreground shadow-[0_8px_32px_rgba(15,23,42,0.14)] backdrop-blur-xl transition hover:border-white/50 hover:bg-white/30 dark:border-white/15 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:hover:border-white/25 dark:hover:bg-white/15 sm:h-11 sm:w-11'

export function ProjectVideoStack({ videos, projectTitle, projectSlug, posterImage }: ProjectVideoStackProps) {
  const poster = posterImage ?? undefined
  const [activeIndex, setActiveIndex] = useState(0)
  const count = videos.length
  const hasMultiple = count > 1

  const goPrev = () => {
    setActiveIndex((index) => (index - 1 + count) % count)
  }

  const goNext = () => {
    setActiveIndex((index) => (index + 1) % count)
  }

  const prevIndex = (activeIndex - 1 + count) % count
  const nextIndex = (activeIndex + 1) % count

  const videoTitle = (index: number) => `${projectTitle} video ${index + 1}`

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 sm:gap-3">
        {hasMultiple && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous video"
            className={glassArrowClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div className="relative min-w-0 flex-1 aspect-video">
          {hasMultiple && (
            <>
              <div className={cn(peekShellClass, 'left-0 -translate-x-[34%] scale-[0.84]')}>
                <ProjectVideo
                  src={videos[prevIndex]}
                  title={videoTitle(prevIndex)}
                  interactive={false}
                  lazy
                  poster={poster}
                  preload="none"
                  className="relative h-full w-full overflow-hidden rounded-xl bg-muted"
                />
              </div>
              <div className={cn(peekShellClass, 'right-0 translate-x-[34%] scale-[0.84]')}>
                <ProjectVideo
                  src={videos[nextIndex]}
                  title={videoTitle(nextIndex)}
                  interactive={false}
                  lazy
                  poster={poster}
                  preload="none"
                  className="relative h-full w-full overflow-hidden rounded-xl bg-muted"
                />
              </div>
            </>
          )}

          <div
            key={activeIndex}
            className="video-stack-enter relative z-10 h-full w-full"
          >
            <ProjectVideo
              src={videos[activeIndex]}
              title={videoTitle(activeIndex)}
              projectSlug={projectSlug}
              poster={poster}
              preload="metadata"
              className={videoShellClass}
            />
          </div>
        </div>

        {hasMultiple && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next video"
            className={glassArrowClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {hasMultiple && (
        <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          Video {activeIndex + 1} of {count}
        </p>
      )}
    </div>
  )
}
