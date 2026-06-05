import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  module: string
  title: string
  description?: string
  className?: string
  children?: ReactNode
}

export function SectionHeader({
  module,
  title,
  description,
  className,
  children
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        className
      )}
    >
      <div className="max-w-2xl space-y-3">
        <span className="module-label">{module}</span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
