import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'py-12 sm:py-14 md:py-16',
  md: 'py-16 sm:py-20 md:py-24',
  lg: 'py-20 sm:py-24 md:py-32',
}

export function Section({ children, className, id, size = 'md' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative overflow-hidden', sizeMap[size], className)}
    >
      <div className="container mx-auto max-w-7xl px-5 sm:px-6">
        {children}
      </div>
    </section>
  )
}
