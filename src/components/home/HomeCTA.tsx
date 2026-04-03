import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { Section } from '@/components/layout/Section'
import { fadeUp, stagger } from '@/lib/animations'
import { SITE } from '@/lib/constants'

export function HomeCTA() {
  const { t } = useTranslation()
  const emailHref = `mailto:${SITE.email}`

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Section id="contact" className="bg-deep" size="lg">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-elevated px-5 py-8 sm:rounded-[1.75rem] sm:px-8 sm:py-10 md:rounded-3xl md:px-12 md:py-14">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <motion.div
          className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.35fr_0.8fr]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="text-center lg:text-left">
            <motion.p variants={fadeUp} className="mb-4 text-sm font-mono uppercase tracking-widest text-accent">
              {t('cta.eyebrow')}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mb-6 text-[2rem] font-display font-bold leading-tight text-text-primary sm:text-4xl md:text-5xl"
            >
              {t('cta.title')}
            </motion.h2>

            <motion.p variants={fadeUp} className="mb-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg lg:max-w-none">
              {t('cta.subtitle')}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                variant="primary"
                type="button"
                onClick={() => { window.location.href = emailHref }}
                className="w-full sm:w-auto"
              >
                {t('cta.primary')}
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                type="button"
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto"
              >
                {t('cta.secondary')}
              </Button>
            </motion.div>
          </div>

          <ScrollReveal className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-xs font-mono uppercase tracking-widest text-text-muted">
              {t('cta.email_hint')}
            </p>
            <a
              href={emailHref}
              className="mb-6 inline-flex items-start gap-3 break-all text-base font-semibold text-text-primary transition-colors hover:text-accent sm:text-lg"
            >
              <Mail size={18} className="text-accent" />
              {SITE.email}
            </a>

            <div className="flex items-start gap-3 text-sm text-text-secondary">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{SITE.address}</span>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </Section>
  )
}
