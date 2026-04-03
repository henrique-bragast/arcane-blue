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
      <nav className="container mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-3 px-5 py-4 sm:px-6 md:flex md:h-24 md:justify-between md:py-0">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src="/logo_arcane_blue.png?v=6"
            alt="Arcane Blue"
            className="h-14 w-auto sm:h-16 md:h-20"
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

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <LanguageSwitcher />
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => scrollTo('contact')}
            className="whitespace-nowrap px-3 sm:px-4"
          >
            {t('nav.contact')}
          </Button>
        </div>

        <div className="col-span-2 flex flex-wrap gap-2 md:hidden">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
          >
            {t('nav.about')}
          </button>
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary"
          >
            {t('nav.services')}
          </button>
        </div>
      </nav>
    </header>
  )
}
