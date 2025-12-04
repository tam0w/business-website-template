import { cn } from '@/lib/utils'

interface GradientBadgeProps {
  children: React.ReactNode
  className?: string
  /** Rotation angle in degrees */
  rotate?: number
}

/**
 * A badge with the Enrich blue gradient background.
 * Used for metric highlights and CTAs.
 */
export function GradientBadge({ children, className, rotate = -1 }: GradientBadgeProps) {
  return (
    <div
      className={cn('px-6 py-3 text-white font-semibold shadow-lg', className)}
      style={{
        background: 'linear-gradient(90deg, var(--color-primary) 0%, #00304D 100%)',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
  )
}
