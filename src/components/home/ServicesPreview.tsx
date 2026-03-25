import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Cloud, Shield, BarChart3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BlurBlob } from '@/components/common/BlurBlob'
import { serviceMeta } from '@/data/services'
import { stagger, fadeUp } from '@/lib/animations'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Cloud, Shield, BarChart3,
}

interface ServiceItem { title: string; description: string; features: string[] }

export function ServicesPreview() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  const items = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-deep py-24">
      {/* Parallax background blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 pointer-events-none"
        aria-hidden="true"
      >
        <BlurBlob size="lg" className="relative" opacity={0.08} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          highlight={t('services.highlight')}
          subtitle={t('services.subtitle')}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                key={i}
                variants={fadeUp}
                className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-border-strong hover:bg-elevated transition-all duration-300 hover:shadow-[0_0_40px_rgba(43,127,255,0.07)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-muted border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    {Icon && <Icon size={22} className="text-accent" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5">
                      {item.features.map((feat, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-text-muted text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
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
    </section>
  )
}
