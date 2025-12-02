'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// Inline SVG icons - no lucide-react dependency needed
const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const MonitorIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const THEMES_OPTIONS = [
  { label: 'Light', id: 'light', icon: <SunIcon /> },
  { label: 'Dark', id: 'dark', icon: <MoonIcon /> },
  { label: 'System', id: 'system', icon: <MonitorIcon /> },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
        {THEMES_OPTIONS.map((t) => (
          <div
            key={t.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-400"
          >
            {t.icon}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
      {THEMES_OPTIONS.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
            theme === t.id
              ? 'bg-white text-zinc-950 shadow-sm dark:bg-zinc-700 dark:text-zinc-50'
              : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
          type="button"
          aria-label={`Switch to ${t.label} theme`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-500">© Pranav Karra 2025</span>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
