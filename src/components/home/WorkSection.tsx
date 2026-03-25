import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BlurBlob } from '@/components/common/BlurBlob'
import { Badge } from '@/components/ui/Badge'

interface WorkItem {
  name: string
  industry: string
  tags: string[]
  description: string
  result: string
}

// One accent color per card (cycles)
const accentBg = [
  'from-blue-950/60 to-blue-900/20',
  'from-indigo-950/60 to-indigo-900/20',
  'from-sky-950/60 to-sky-900/20',
  'from-violet-950/60 to-violet-900/20',
]

export function WorkSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  const items = t('work.items', { returnObjects: true }) as WorkItem[]

  return (
    <section ref={sectionRef} id="work" className="relative overflow-hidden bg-abyss py-24">
      <motion.div
        style={{ y: blobY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <BlurBlob size="xl" className="relative" opacity={0.05} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          eyebrow={t('work.eyebrow')}
          title={t('work.title')}
          highlight={t('work.highlight')}
          subtitle={t('work.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-default hover:border-border-strong hover:shadow-[0_12px_48px_rgba(43,127,255,0.1)] transition-all duration-300"
            >
              {/* Gradient header band */}
              <div className={`h-2 bg-gradient-to-r ${accentBg[i % accentBg.length]} border-b border-border`} />
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accentBg[i % accentBg.length]} opacity-30 pointer-events-none`} />

              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-bold text-2xl text-text-primary group-hover:text-accent transition-colors duration-300">
                        {item.name}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                      />
                    </div>
                    <p className="text-text-muted text-sm font-mono">{item.industry}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="muted" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key result */}
                <div className="flex items-center gap-2 pt-5 border-t border-border">
                  <TrendingUp size={14} className="text-accent shrink-0" />
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    {t('work.result_label')}:
                  </span>
                  <span className="text-sm font-semibold text-accent">
                    {item.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
