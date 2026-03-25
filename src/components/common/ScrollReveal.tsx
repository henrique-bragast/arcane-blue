import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { Variants } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        ...variants,
        visible: {
          ...(typeof variants.visible === 'object' ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === 'object' && 'transition' in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
