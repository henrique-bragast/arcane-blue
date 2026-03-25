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
    <ScrollReveal className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-accent text-sm font-mono font-medium tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-accent inline-block" />
          {eyebrow}
          <span className="w-8 h-px bg-accent inline-block" />
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-text-secondary max-w-2xl', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
