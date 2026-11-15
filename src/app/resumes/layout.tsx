import type { Metadata } from 'next'

export const metadata: Metadata = { alternates: { canonical: '/resumes' } }

export default function ResumesLayout({ children }: { children: React.ReactNode }) {
  return children
}
