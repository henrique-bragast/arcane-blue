import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/common/SectionHeading'
import { BlurBlob } from '@/components/common/BlurBlob'
import { stagger, fadeUp } from '@/lib/animations'

interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
  initials: string
}

export function Testimonials() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%'])

  const items = t('testimonials.items', { returnObjects: true }) as TestimonialItem[]

  return (
    <section ref={sectionRef} id="testimonials" className="relative overflow-hidden bg-abyss py-24">
      <motion.div
        style={{ y: blobY }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <BlurBlob size="lg" className="relative" opacity={0.07} />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeading
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative bg-surface border border-border rounded-2xl p-8 flex flex-col hover:border-border-strong transition-colors duration-300"
            >
              <Quote size={24} className="text-accent/25 mb-4" />
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-muted border border-accent/20 flex items-center justify-center">
                  <span className="font-display font-bold text-accent text-sm">{item.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{item.author}</p>
                  <p className="text-text-muted text-xs">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
