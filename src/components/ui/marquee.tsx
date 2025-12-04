'use client'

import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  /** Duration in seconds */
  duration?: number
  /** Direction of scroll */
  direction?: 'left' | 'right'
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg'
  /** Whether to pause on hover */
  pauseOnHover?: boolean
  /** Background color for fade edges (must match parent bg) */
  fadeColor?: string
  /** Whether to show fade edges */
  showFade?: boolean
}

const gapClasses = {
  sm: 'gap-6 md:gap-8',
  md: 'gap-8 md:gap-12',
  lg: 'gap-12 md:gap-16',
}

export function Marquee({
  children,
  className,
  duration = 25,
  direction = 'left',
  gap = 'lg',
  pauseOnHover = false,
  fadeColor = '#F5F5F5',
  showFade = true,
}: MarqueeProps) {
  const animationClass =
    direction === 'left'
      ? `animate-[marquee_${duration}s_linear_infinite]`
      : `animate-[marquee-reverse_${duration}s_linear_infinite]`

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Fade edges */}
      {showFade && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[100px] z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[100px] z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
          />
        </>
      )}

      {/* Scrolling content */}
      <div className="flex overflow-hidden">
        <div
          className={cn('flex items-center', gapClasses[gap], pauseOnHover && 'hover:[animation-play-state:paused]')}
          style={{
            animation: `${direction === 'left' ? 'marquee' : 'marquee-reverse'} ${duration}s linear infinite`,
          }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}

interface MarqueeItemProps {
  children: React.ReactNode
  className?: string
}

export function MarqueeItem({ children, className }: MarqueeItemProps) {
  return <div className={cn('flex-shrink-0', className)}>{children}</div>
}
