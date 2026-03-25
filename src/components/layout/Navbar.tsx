import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-abyss/90 backdrop-blur-2xl border-b border-border/60 shadow-[0_4px_40px_rgba(0,0,0,0.7)]'
          : 'bg-transparent',
      )}
    >
      <nav className="container mx-auto px-6 max-w-7xl h-28 flex items-center justify-between">
        {/* Logo — tall enough for brand text to be legible */}
        <Link to="/" className="flex items-center group">
          <img
            src="/logo_arcane_blue.png"
            alt="Arcane Blue"
            className="h-[88px] w-auto rounded-xl transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollTo('contact')}
          >
            {t('nav.contact')}
          </Button>
        </div>
      </nav>
    </header>
  )
}
