'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

const MODES = [
  { value: 'system' as const, label: 'Use system theme', icon: Monitor },
  { value: 'light' as const, label: 'Use light theme', icon: Sun },
  { value: 'dark' as const, label: 'Use dark theme', icon: Moon },
]

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = theme === 'system' ? resolvedTheme : theme

  if (!mounted) {
    return <div className={cn('h-9 w-[126px] rounded-full border border-border/60 bg-muted/50', className)} />
  }

  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-full border border-border/60 bg-muted/80 p-1 shadow-sm backdrop-blur',
        className
      )}
    >
      {MODES.map(({ value, icon: Icon, label }) => {
        const isActive =
          value === 'system' ? theme === 'system' : activeTheme === value

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={isActive}
            className={cn(
              'flex h-7 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isActive && 'bg-background text-foreground shadow'
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        )
      })}
    </div>
  )
}
