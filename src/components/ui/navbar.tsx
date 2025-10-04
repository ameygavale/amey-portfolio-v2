'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { SITE_CONFIG } from '@/lib/constants'

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
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl text-accent">
            {SITE_CONFIG.shortName}
          </Link>

          <div className="flex items-center gap-6">
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
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
