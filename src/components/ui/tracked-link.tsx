'use client'

import type { ComponentProps } from 'react'

import { trackEvent } from '@/lib/analytics'

interface TrackedLinkProps extends ComponentProps<'a'> {
  event: Parameters<typeof trackEvent>[0]
}

export function TrackedLink({ event, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event)
        onClick?.(clickEvent)
      }}
    />
  )
}
