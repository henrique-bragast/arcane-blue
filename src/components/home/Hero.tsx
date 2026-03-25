import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BlurBlob } from '@/components/common/BlurBlob'
import { GradientText } from '@/components/common/GradientText'
import { fadeUp, stagger } from '@/lib/animations'

// Animates each word of a string individually
function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ')
  return (
    <motion.span
      className={className}
      variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={{
            hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function Hero() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const gridY     = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const blob1Y    = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const blob2Y    = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const blob3Y    = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const contentOp = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-abyss"
    >
      {/* Animated grid background */}
      <motion.div aria-hidden="true" style={{ y: gridY }} className="absolute inset-0">
        <div
          className="w-full h-full opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(43,127,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(43,127,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            animation: 'gridDrift 12s linear infinite',
          }}
        />
      </motion.div>

      {/* Parallax blobs */}
      <motion.div style={{ y: blob1Y }} className="absolute -top-60 left-1/2 -translate-x-1/2 pointer-events-none">
        <BlurBlob size="xl" className="relative" opacity={0.2} />
      </motion.div>
      <motion.div style={{ y: blob2Y }} className="absolute top-1/3 -left-32 pointer-events-none">
        <BlurBlob size="md" className="relative" opacity={0.12} />
      </motion.div>
      <motion.div style={{ y: blob3Y }} className="absolute bottom-1/4 -right-32 pointer-events-none">
        <BlurBlob size="md" className="relative" opacity={0.12} />
      </motion.div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
      />

      {/* Content with parallax */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="container mx-auto px-6 max-w-7xl relative z-10"
      >
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <Badge variant="accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mr-2 animate-pulse" />
              {t('hero.badge')}
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-text-primary leading-[1.05] tracking-tight mb-5"
          >
            {t('hero.headline_pre')}{' '}
            <GradientText>{t('hero.headline_highlight')}</GradientText>
            <br />
            {t('hero.headline_post')}
          </motion.h1>

          {/* Slogan — word-by-word shimmer */}
          <motion.div variants={fadeUp} className="mb-8">
            <p className="text-xl md:text-2xl font-display font-medium text-text-secondary tracking-wide">
              <WordReveal text={t('hero.slogan')} delay={0.3} />
            </p>
            {/* Animated underline */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-3"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '60%', opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="primary" onClick={() => scrollTo('services')}>
              {t('hero.cta_primary')}
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('contact')}>
              {t('hero.cta_secondary')}
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-14 text-text-muted text-sm font-mono tracking-wider">
            {t('hero.trusted')}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('stats')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
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
