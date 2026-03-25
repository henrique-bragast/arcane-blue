import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BlurBlob } from '@/components/common/BlurBlob'

interface Step { number: string; title: string; description: string }

export function ProcessSection() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const blobY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  const steps = t('process.steps', { returnObjects: true }) as Step[]

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden bg-deep py-24">
      <motion.div
        style={{ y: blobY }}
        className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <BlurBlob size="lg" className="relative" opacity={0.06} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          highlight={t('process.highlight')}
          subtitle={t('process.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Connecting line (not on last) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-8 left-[calc(100%+1px)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-border-strong to-border z-0"
                />
              )}

              <div className="relative bg-surface border border-border rounded-2xl p-6 hover:border-border-strong hover:bg-elevated transition-all duration-300 hover:shadow-[0_0_32px_rgba(43,127,255,0.07)] h-full flex flex-col">
                {/* Hover accent top line */}
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Step number */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
                  className="w-14 h-14 rounded-xl bg-accent-muted border border-accent/25 flex items-center justify-center mb-5 group-hover:bg-accent/25 group-hover:border-accent/50 transition-all duration-300"
                >
                  <span className="font-mono font-bold text-accent text-lg group-hover:text-accent-hover transition-colors duration-200">
                    {step.number}
                  </span>
                </motion.div>

                <h3 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
