import { motion } from 'framer-motion'
import { Sparkles, Workflow, RefreshCw, Handshake } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { Section } from '@/components/layout/Section'
import { stagger, fadeUp } from '@/lib/animations'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles, Workflow, RefreshCw, Handshake,
}

interface Differential {
  icon: string
  title: string
  desc: string
}

export function AboutSection() {
  const { t } = useTranslation()
  const differentials = t('about.differentials', { returnObjects: true }) as Differential[]

  return (
    <Section id="about" className="bg-deep" size="md">
      <div className="relative z-10">
        <SectionHeading
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          highlight={t('about.highlight')}
          className="mb-8"
        />

        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            {t('about.description')}
          </p>
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            {t('about.description2')}
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {differentials.map((d) => {
            const Icon = iconMap[d.icon]
            return (
              <motion.div
                key={d.title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-border-strong hover:bg-elevated sm:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent-muted sm:h-11 sm:w-11">
                  {Icon && <Icon size={18} className="text-accent" />}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-text-primary sm:text-xl">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {d.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
