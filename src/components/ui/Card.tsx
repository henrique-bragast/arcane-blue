import { cn } from '@/lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-border rounded-2xl p-6',
        hover && [
          'transition-all duration-300',
          'hover:border-border-strong hover:bg-elevated',
          'hover:shadow-[0_0_32px_rgba(59,123,248,0.08)]',
        ],
        className,
      )}
    >
      {children}
    </div>
  )
}
