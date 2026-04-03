import { cn } from '@/lib/cn'
import { ScrollReveal } from './ScrollReveal'
import { GradientText } from './GradientText'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) return title
    const idx = title.indexOf(highlight)
    if (idx === -1) return title
    return (
      <>
        {title.slice(0, idx)}
        <GradientText>{highlight}</GradientText>
        {title.slice(idx + highlight.length)}
      </>
    )
  }

  return (
    <ScrollReveal className={cn('mb-10 sm:mb-12', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.22em] text-accent sm:text-sm">
          <span className="inline-block h-px w-6 bg-accent sm:w-8" />
          {eyebrow}
          <span className="inline-block h-px w-6 bg-accent sm:w-8" />
        </span>
      )}
      <h2 className="text-[2rem] font-display font-bold leading-[1.08] text-text-primary sm:text-4xl md:text-5xl">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
