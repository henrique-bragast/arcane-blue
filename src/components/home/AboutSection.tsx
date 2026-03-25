import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Layers, Zap, Handshake, Calendar, MapPin, Users, Cpu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { BlurBlob } from '@/components/common/BlurBlob'
import { stagger, fadeUp, fadeLeft, fadeRight } from '@/lib/animations'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target, Layers, Zap, Handshake,
}

interface Differential { icon: string; title: string; desc: string }

const companyMeta = [
  { key: 'founded',  Icon: Calendar },
  { key: 'location', Icon: MapPin },
  { key: 'team',     Icon: Users },
  { key: 'focus',    Icon: Cpu },
]

export function AboutSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  const differentials = t('about.differentials', { returnObjects: true }) as Differential[]

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-abyss py-24">
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 left-0 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <BlurBlob size="lg" className="relative" opacity={0.07} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          highlight={t('about.highlight')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text + differentials */}
          <div>
            <ScrollReveal variants={fadeLeft}>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                {t('about.description')}
              </p>
              <p className="text-text-muted text-base leading-relaxed mb-10">
                {t('about.description2')}
              </p>
            </ScrollReveal>

            <motion.div
              className="space-y-5"
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
                    className="flex items-start gap-4 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-muted border border-accent/20 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors duration-300">
                      {Icon && <Icon size={18} className="text-accent" />}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-text-primary text-base mb-1">
                        {d.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: company info card */}
          <ScrollReveal variants={fadeRight}>
            <div className="relative rounded-2xl border border-border bg-surface overflow-hidden">
              {/* Top accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

              {/* Logo centered */}
              <div className="flex justify-center pt-10 pb-6">
                <img
                  src="/logo_arcane_blue.png"
                  alt="Arcane Blue"
                  className="h-28 w-auto rounded-xl opacity-90"
                />
              </div>

              {/* Meta info grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-border border-t border-border">
                {companyMeta.map(({ key, Icon }) => (
                  <div key={key} className="p-5 group hover:bg-elevated transition-colors duration-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={13} className="text-accent" />
                      <span className="text-text-muted text-xs font-mono uppercase tracking-wider">
                        {t(`about.${key}`)}
                      </span>
                    </div>
                    <p className="font-display font-semibold text-text-primary text-sm group-hover:text-accent transition-colors duration-200">
                      {t(`about.${key}_value`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
