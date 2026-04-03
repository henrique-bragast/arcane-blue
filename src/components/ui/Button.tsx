import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-accent text-white font-semibold',
    'hover:bg-accent-hover',
    'shadow-[0_0_24px_rgba(59,123,248,0.3)]',
    'hover:shadow-[0_0_36px_rgba(91,149,255,0.4)]',
  ].join(' '),
  ghost: [
    'bg-transparent text-text-secondary',
    'hover:bg-elevated hover:text-text-primary',
  ].join(' '),
  outline: [
    'bg-transparent border border-border-strong text-text-primary',
    'hover:border-accent hover:text-accent',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'rounded-lg px-3.5 py-2 text-sm sm:px-4',
  md: 'rounded-xl px-5 py-3 text-sm sm:px-6 sm:text-base',
  lg: 'rounded-xl px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-body transition-all duration-200 cursor-pointer select-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
