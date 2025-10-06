'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ThemeToggle } from '@/components/ui/theme-toggle'

const FEATURE_ITEM = { label: 'More', href: '/photography' }

const NAV_ITEMS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const sectionIds = NAV_ITEMS.filter((item) => item.href.startsWith('/#')).map((item) => item.href.slice(2))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.2,
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setActiveSection(hash)
      } else {
        setActiveSection('hero')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      setActiveSection(href.slice(2))
    }
  }

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/80 backdrop-blur-md transition-colors dark:border-white/5 dark:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex items-center">
            <Link
              href={FEATURE_ITEM.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === FEATURE_ITEM.href ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {FEATURE_ITEM.label}
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-1 rounded-full border border-white/30 bg-white/75 p-1 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/10 dark:shadow-[0_16px_40px_rgba(8,47,73,0.45)]">
              {NAV_ITEMS.map((item) => {
                const isAnchor = item.href.startsWith('/#')
                const isActive = isAnchor
                  ? activeSection === item.href.slice(2)
                  : pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-[0_6px_18px_rgba(15,23,42,0.18)] dark:bg-white/25 dark:text-white dark:shadow-[0_18px_36px_rgba(15,23,42,0.45)]'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/60 dark:text-muted-foreground dark:hover:text-accent/80 dark:hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
