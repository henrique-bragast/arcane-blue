import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/cn'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'es', label: 'Spanish' },
] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find((language) => language.code === i18n.language.slice(0, 2)) ?? languages[0]

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium transition-colors duration-200',
          'text-text-secondary hover:bg-elevated hover:text-text-primary',
          open && 'border-border bg-elevated text-text-primary',
        )}
        aria-label="Select language"
      >
        <span className="font-mono text-xs uppercase tracking-wider">
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
            className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-elevated shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(language.code)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors duration-150',
                    i18n.language.startsWith(language.code)
                      ? 'bg-accent-muted text-accent'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary',
                  )}
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    {language.code}
                  </span>
                  <span>{language.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
