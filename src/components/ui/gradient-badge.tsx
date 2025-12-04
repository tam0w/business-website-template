import { cn } from '@/lib/utils'

interface GradientBadgeProps {
  children: React.ReactNode
  className?: string
  /** Rotation angle in degrees */
  rotate?: number
}

/**
 * A ribbon-style badge with the Enrich blue gradient background.
 * Features a folded corner effect on the bottom-right.
 * Used for metric highlights in testimonials.
 */
export function GradientBadge({ children, className, rotate = -1 }: GradientBadgeProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Main badge */}
      <div
        className="px-6 py-3 text-[#EDEDED] font-semibold rounded-[6px]"
        style={{
          background: 'linear-gradient(90deg, #0070B3 0%, #004D7A 100%)',
          boxShadow:
            '-61.2px 118.8px 36.9px 0px rgba(0,0,0,0), -38.7px 75.6px 34.2px 0px rgba(0,0,0,0.03), -21.6px 42.3px 28.8px 0px rgba(0,0,0,0.09), -9.9px 18.9px 21.6px 0px rgba(0,0,0,0.15), -2.7px 4.5px 11.7px 0px rgba(0,0,0,0.17)',
          textShadow: '0px 2.7px 3.6px rgba(0,0,0,0.16)',
        }}
      >
        {children}
      </div>
      {/* Folded corner triangle - ribbon fold effect */}
      <div
        className="absolute -bottom-[14px] right-[6px]"
        style={{
          width: 0,
          height: 0,
          borderRight: '18px solid transparent',
          borderTop: '14px solid #00304D',
        }}
      />
    </div>
  )
}
