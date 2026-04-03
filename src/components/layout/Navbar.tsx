import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const { t } = useTranslation()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="relative z-30 border-b border-border/60 bg-abyss/95">
      <nav className="container mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/logo_arcane_blue.png?v=5"
            alt="Arcane Blue"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-elevated hover:text-text-primary"
          >
            {t('nav.about')}
          </button>
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-elevated hover:text-text-primary"
          >
            {t('nav.services')}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => scrollTo('contact')}
          >
            {t('nav.contact')}
          </Button>
        </div>
      </nav>
    </header>
  )
}
