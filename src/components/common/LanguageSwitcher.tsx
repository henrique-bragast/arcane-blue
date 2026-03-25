import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { AnimatePresence, motion } from 'framer-motion'

const languages = [
  { code: 'en', label: 'English',    flag: '🇺🇸' },
  { code: 'pt', label: 'Português',  flag: '🇧🇷' },
  { code: 'es', label: 'Español',    flag: '🇪🇸' },
] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find(l => l.code === i18n.language.slice(0, 2)) ?? languages[0]

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
          'text-text-secondary hover:text-text-primary hover:bg-elevated border border-transparent',
          open && 'bg-elevated border-border text-text-primary',
        )}
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="font-mono text-xs tracking-wider uppercase hidden sm:inline">
          {current.code}
        </span>
        <ChevronDown
          size={12}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-40 bg-elevated border border-border rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50"
          >
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => { i18n.changeLanguage(lang.code); setOpen(false) }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150',
                    i18n.language.startsWith(lang.code)
                      ? 'bg-accent-muted text-accent'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary',
                  )}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
