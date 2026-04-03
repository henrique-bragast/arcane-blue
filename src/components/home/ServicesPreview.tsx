import { motion } from 'framer-motion'
import { Code2, Blocks, Bot, RefreshCw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Section } from '@/components/layout/Section'
import { serviceMeta } from '@/data/services'
import { stagger, fadeUp } from '@/lib/animations'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Blocks, Bot, RefreshCw,
}

interface ServiceItem {
  title: string
  description: string
  features: string[]
}

export function ServicesPreview() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <Section id="services" className="bg-abyss" size="md">
      <div className="relative z-10">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          highlight={t('services.highlight')}
          subtitle={t('services.subtitle')}
          className="mb-10"
        />

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {serviceMeta.map((meta, i) => {
            const Icon = iconMap[meta.icon]
            const item = items[i]
            if (!item) return null

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:bg-elevated"
              >
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent-muted transition-colors duration-300 group-hover:bg-accent/20">
                    {Icon && <Icon size={22} className="text-accent" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 font-display text-xl font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-text-muted">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
