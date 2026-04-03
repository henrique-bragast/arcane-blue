import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const SHOW_AFTER_SCROLL_Y = 280

export function ScrollToTopButton() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y)
    }

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t('ui.scroll_to_top')}
      title={t('ui.scroll_to_top')}
      className={[
        'fixed right-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full',
        'border border-accent/30 bg-accent text-white shadow-[0_12px_32px_rgba(17,85,204,0.35)]',
        'transition-all duration-300 hover:-translate-y-1 hover:bg-accent-hover',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-abyss',
        'sm:right-6 sm:bottom-6',
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      ].join(' ')}
    >
      <ArrowUp size={20} />
    </button>
  )
}
