import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'accent' | 'success' | 'muted'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-elevated text-text-secondary border-border',
  accent: 'bg-accent-muted text-accent border-accent/30',
  success: 'bg-success/10 text-success border-success/30',
  muted: 'bg-surface text-text-muted border-border',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
