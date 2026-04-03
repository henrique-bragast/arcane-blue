import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SITE } from '@/lib/constants'

const navSections = [
  { id: 'hero', labelKey: null },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-border bg-deep">
      <div className="container mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[minmax(0,1.35fr)_200px_260px] lg:gap-12">
          <div className="flex flex-col items-center gap-5 text-center md:col-span-2 md:items-start md:text-left lg:col-span-1 lg:-mt-3 lg:pr-10">
            <Link to="/" className="inline-flex flex-col items-center gap-3 md:items-start">
              <img
                src="/logo_arcane_blue.png?v=6"
                alt="Arcane Blue"
                className="h-12 w-auto sm:h-14"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                {SITE.tagline}
              </span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-text-secondary">
              {t('footer.description')}
            </p>

            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-4 text-sm font-display font-semibold uppercase tracking-widest text-text-primary">
              {t('footer.nav_title')}
            </h3>
            <ul className="space-y-3">
              {navSections.map(({ id, labelKey }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {labelKey ? t(labelKey) : SITE.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-4 text-sm font-display font-semibold uppercase tracking-widest text-text-primary">
              {t('footer.contact_title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center gap-2 text-sm text-text-secondary md:justify-start">
                <Mail size={14} className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start justify-center gap-2 text-sm text-text-secondary md:justify-start">
                <MapPin size={14} className="mt-0.5 shrink-0 text-accent" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-center sm:mt-12 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-sm text-text-muted">
            {'\u00A9'} {year} {SITE.name}. {t('footer.rights')}
          </p>
          <p className="font-mono text-xs text-text-muted md:text-right">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
