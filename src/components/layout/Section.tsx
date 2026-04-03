import { cn } from '@/lib/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'py-10 sm:py-12 md:py-16',
  md: 'py-12 sm:py-16 md:py-24',
  lg: 'py-14 sm:py-20 md:py-32',
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
