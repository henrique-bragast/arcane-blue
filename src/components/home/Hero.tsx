import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BlurBlob } from '@/components/common/BlurBlob'
import { GradientText } from '@/components/common/GradientText'
import { fadeUp, stagger } from '@/lib/animations'

export function Hero() {
  const { t } = useTranslation()
  const tags = t('hero.tags', { returnObjects: true }) as string[]
  const headlinePost = t('hero.headline_post')

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative overflow-hidden bg-abyss">
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="h-full w-full opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(43,127,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(43,127,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2">
        <BlurBlob size="xl" className="relative" opacity={0.2} />
      </div>
      <div className="pointer-events-none absolute left-0 top-32 -translate-x-1/2">
        <BlurBlob size="md" className="relative" opacity={0.12} />
      </div>
      <div className="pointer-events-none absolute bottom-20 right-0 translate-x-1/3">
        <BlurBlob size="md" className="relative" opacity={0.12} />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="flex min-h-[calc(100vh-7rem)] items-center py-16 md:min-h-[calc(100vh-8rem)] md:py-20"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div variants={fadeUp} className="mb-6">
              <Badge variant="accent">{t('hero.badge')}</Badge>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mb-8 rounded-full border border-accent/20 bg-surface/70 px-6 py-3 shadow-[0_0_48px_rgba(43,127,255,0.14)] backdrop-blur-md"
            >
              <p className="font-display text-sm font-semibold tracking-[0.26em] text-accent md:text-base">
                {t('hero.slogan')}
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 max-w-4xl text-5xl font-display font-bold leading-[1.03] tracking-tight text-text-primary md:text-7xl lg:text-8xl"
            >
              {t('hero.headline_pre')}{' '}
              <GradientText>{t('hero.headline_highlight')}</GradientText>
              {headlinePost && <> {headlinePost}</>}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Button size="lg" variant="primary" type="button" onClick={() => scrollTo('services')}>
                {t('hero.cta_primary')}
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" type="button" onClick={() => scrollTo('contact')}>
                {t('hero.cta_secondary')}
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm text-text-secondary backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  )
}
