import { track } from '@vercel/analytics'

type AnalyticsEvent =
  | { name: 'resume_download' }
  | { name: 'contact_click'; data: { method: 'email' | 'linkedin' | 'phone' | 'calendar' } }
  | { name: 'video_play'; data: { project: string; source: 'local' | 'embed' } }
  | { name: 'project_view'; data: { slug: string } }

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return

  switch (event.name) {
    case 'resume_download':
      track('resume_download')
      break
    case 'contact_click':
      track('contact_click', event.data)
      break
    case 'video_play':
      track('video_play', event.data)
      break
    case 'project_view':
      track('project_view', event.data)
      break
  }
}
