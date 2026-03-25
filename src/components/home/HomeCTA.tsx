import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { BlurBlob } from '@/components/common/BlurBlob'
import { fadeUp, stagger } from '@/lib/animations'

export function HomeCTA() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%'])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-deep py-32">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="relative rounded-3xl border border-border bg-elevated overflow-hidden">
          {/* Parallax blob inside the card */}
          <motion.div
            style={{ y: blobY }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <BlurBlob size="lg" className="relative" opacity={0.22} />
          </motion.div>

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <motion.div
            className="relative z-10 py-20 px-8 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-mono tracking-widest uppercase mb-4">
              {t('cta.eyebrow')}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6 leading-tight"
            >
              {t('cta.title')}
            </motion.h2>

            <motion.p variants={fadeUp} className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
              {t('cta.subtitle')}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="primary" onClick={() => scrollTo('hero')}>
                {t('cta.primary')}
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="ghost" onClick={() => scrollTo('testimonials')}>
                {t('cta.secondary')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
