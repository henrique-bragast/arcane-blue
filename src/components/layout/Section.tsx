import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'py-16',
  md: 'py-24',
  lg: 'py-32',
}

export function Section({ children, className, id, size = 'md' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', sizeMap[size], className)}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </section>
  )
}
