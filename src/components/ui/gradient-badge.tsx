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
      className={cn('relative inline-block', className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Main badge - no border radius on right side to extend to card edge */}
      <div
        className="px-4 py-3 text-[#EDEDED] font-semibold rounded-l-[6px] capitalize"
        style={{
          background: 'linear-gradient(90deg, #0070B3 0%, #005a8f 100%)',
          boxShadow:
            '-68px 132px 41px 0px rgba(0,0,0,0), -43px 84px 38px 0px rgba(0,0,0,0.03), -24px 47px 32px 0px rgba(0,0,0,0.09), -11px 21px 24px 0px rgba(0,0,0,0.15), -3px 5px 13px 0px rgba(0,0,0,0.17)',
          textShadow: '0px 3px 4px rgba(0,0,0,0.16)',
        }}
      >
        {children}
      </div>
      {/* Folded corner triangle - ribbon fold effect at bottom right */}
      <div
        className="absolute -bottom-[16px] right-0"
        style={{
          width: 0,
          height: 0,
          borderRight: '20px solid transparent',
          borderTop: '16px solid #00304D',
        }}
      />
    </div>
  )
}
