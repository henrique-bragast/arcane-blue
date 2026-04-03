import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BlurBlob } from '@/components/common/BlurBlob'
import { GradientText } from '@/components/common/GradientText'
import { fadeUp, stagger } from '@/lib/animations'

const CODE_FLOATS: { text: string; style: CSSProperties; duration: string; delay: string }[] = [
  { text: 'const arcane = await summon({ power: Infinity })', style: { top: '17%', left: '4%' },      duration: '20s', delay: '0s' },
  { text: 'type Magic<T> = Awaited<Promise<T>>',              style: { top: '32%', right: '4%' },     duration: '24s', delay: '3s' },
  { text: 'import { transform } from "@arcane/core"',         style: { top: '54%', left: '3%' },      duration: '19s', delay: '1.5s' },
  { text: '{ enchant: true, scale: Infinity }',               style: { bottom: '28%', right: '5%' }, duration: '22s', delay: '5s' },
  { text: '// initialize the arcane protocol',                style: { top: '72%', left: '6%' },      duration: '17s', delay: '2.5s' },
  { text: 'export class Blueprint extends Core {}',           style: { bottom: '14%', right: '7%' }, duration: '21s', delay: '4s' },
  { text: '.map(spell => spell.cast())',                      style: { top: '44%', right: '3%' },     duration: '23s', delay: '7s' },
]

// Blue-only stars with varied shades
const STAR_COLORS = ['#6aaaf5', '#3b8fff', '#8bc4ff', '#5599dd', '#aad0ff']
const STARS: { style: CSSProperties; delay: string; duration: string; color: string }[] = Array.from({ length: 30 }, (_, i) => ({
  style: {
    top: `${(i * 37 + 11) % 95}%`,
    left: `${(i * 53 + 7) % 97}%`,
    width: i % 4 === 0 ? '2.5px' : '1.5px',
    height: i % 4 === 0 ? '2.5px' : '1.5px',
  },
  delay: `${((i * 1.3) % 4).toFixed(1)}s`,
  duration: `${(2.5 + (i * 0.7) % 3).toFixed(1)}s`,
  color: STAR_COLORS[i % STAR_COLORS.length],
}))

export function Hero() {
  const { t } = useTranslation()
  const tags = t('hero.tags', { returnObjects: true }) as string[]
  const headlinePost = t('hero.headline_post')

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative overflow-hidden bg-abyss">

      {/* Animated grid */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,143,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,143,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            opacity: 0.065,
            animation: 'gridDrift 22s linear infinite',
          }}
        />
      </div>

      {/* Stars */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              ...s.style,
              backgroundColor: s.color,
              animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Floating code */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden select-none overflow-hidden lg:block">
        {CODE_FLOATS.map(({ text, style, duration, delay }, i) => (
          <span
            key={i}
            className="absolute font-mono text-xs text-accent-hover whitespace-nowrap"
            style={{
              ...style,
              opacity: 0.09,
              animation: `floatCode ${duration} ease-in-out ${delay} infinite`,
            }}
          >
            {text}
          </span>
        ))}
      </div>

      {/* Blobs — all blue, varied shades */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2">
        <BlurBlob size="xl" className="relative" opacity={0.2} />
      </div>
      <div className="pointer-events-none absolute left-0 top-32 -translate-x-1/2">
        <BlurBlob size="md" className="relative" color="#1560d8" opacity={0.18} />
      </div>
      <div className="pointer-events-none absolute bottom-20 right-0 translate-x-1/3">
        <BlurBlob size="md" className="relative" color="#6aaaf5" opacity={0.14} />
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to bottom, transparent, #02061a)' }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          className="flex items-start pt-10 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28"
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
              className="mb-8 rounded-2xl border border-accent/20 bg-surface/70 px-4 py-3 shadow-[0_0_56px_rgba(59,143,255,0.2)] backdrop-blur-md sm:rounded-full sm:px-6"
            >
              <p className="font-display text-[11px] font-semibold tracking-[0.18em] text-accent-hover sm:text-sm sm:tracking-[0.24em] md:text-base">
                {t('hero.slogan')}
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 max-w-4xl text-[2rem] font-display font-bold leading-[1.02] tracking-tight text-text-primary sm:text-5xl md:text-7xl lg:text-8xl"
            >
              {t('hero.headline_pre')}{' '}
              <GradientText>{t('hero.headline_highlight')}</GradientText>
              {headlinePost && <> {headlinePost}</>}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
            >
              <Button
                size="lg"
                variant="primary"
                type="button"
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto"
              >
                {t('hero.cta_primary')}
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto"
              >
                {t('hero.cta_secondary')}
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/20 bg-surface/80 px-3 py-2 text-xs text-text-secondary backdrop-blur-sm transition-colors duration-200 hover:border-accent/40 hover:text-accent-hover sm:px-4 sm:text-sm"
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
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-text-muted transition-colors hover:text-accent md:block"
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
