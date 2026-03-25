import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '@/components/layout/Section'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { statValues } from '@/data/stats'
import { stagger, fadeUp } from '@/lib/animations'

interface StatItem { suffix: string; label: string }

export function StatsBar() {
  const { t } = useTranslation()
  const items = t('stats.items', { returnObjects: true }) as StatItem[]

  return (
    <Section id="stats" className="py-0 bg-abyss" size="sm">
      <div className="border border-border rounded-2xl bg-surface overflow-hidden">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {statValues.map((value, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center justify-center p-8 gap-2 group hover:bg-elevated transition-colors duration-300"
            >
              <span className="font-display font-bold text-4xl md:text-5xl text-text-primary group-hover:text-accent transition-colors duration-300">
                <AnimatedCounter value={value} suffix={items[i]?.suffix ?? ''} />
              </span>
              <span className="text-text-muted text-sm font-mono text-center">
                {items[i]?.label ?? ''}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
