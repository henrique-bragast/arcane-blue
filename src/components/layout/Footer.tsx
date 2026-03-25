import { Link } from 'react-router-dom'
import { Linkedin, Github, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SITE } from '@/lib/constants'

const navSections = ['hero', 'stats', 'services', 'testimonials', 'contact']

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-border bg-deep">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex mb-5">
              <img
                src="/logo_arcane_blue.png"
                alt="Arcane Blue"
                className="h-20 w-auto rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: SITE.social.linkedin,  Icon: Linkedin,  label: 'LinkedIn'  },
                { href: SITE.social.github,    Icon: Github,    label: 'GitHub'    },
                { href: SITE.social.instagram, Icon: Instagram, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — scroll to section */}
          <div>
            <h3 className="font-display font-semibold text-text-primary text-sm mb-4 uppercase tracking-widest">
              {t('footer.nav_title')}
            </h3>
            <ul className="space-y-3">
              {navSections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-text-secondary text-sm hover:text-accent transition-colors capitalize"
                  >
                    {id === 'hero' ? SITE.name : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-text-primary text-sm mb-4 uppercase tracking-widest">
              {t('footer.contact_title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-secondary text-sm">
                <Mail size={14} className="mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-secondary text-sm">
                <Phone size={14} className="mt-0.5 text-accent shrink-0" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin size={14} className="mt-0.5 text-accent shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {year} {SITE.name}. {t('footer.rights')}
          </p>
          <p className="text-text-muted text-xs font-mono">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
