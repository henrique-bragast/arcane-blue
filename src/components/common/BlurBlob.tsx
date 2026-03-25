import { cn } from '@/lib/cn'

interface BlurBlobProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  opacity?: number
}

const sizeMap = {
  sm: 'w-48 h-48',
  md: 'w-80 h-80',
  lg: 'w-[500px] h-[500px]',
  xl: 'w-[800px] h-[800px]',
}

export function BlurBlob({ size = 'lg', className, opacity = 0.15 }: BlurBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute rounded-full bg-accent pointer-events-none',
        sizeMap[size],
        className,
      )}
      style={{
        opacity,
        filter: 'blur(120px)',
      }}
    />
  )
}
