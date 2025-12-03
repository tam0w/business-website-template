import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  className?: string
  variant?: 'left' | 'center' | 'both'
}

function LabelBars({ reverse = false }: { reverse?: boolean }) {
  const bars = [
    { height: 12, opacity: 1 },
    { height: 10, opacity: 0.96 },
    { height: 8, opacity: 0.8 },
    { height: 8, opacity: 0.64 },
    { height: 8, opacity: 0.48 },
    { height: 8, opacity: 0.32 },
    { height: 8, opacity: 0.16 },
  ]

  const orderedBars = reverse ? [...bars].reverse() : bars

  return (
    <div className="flex gap-[2px] items-center">
      {orderedBars.map((bar, i) => (
        <span
          key={i}
          className="w-[2px] bg-[#0070B3]"
          style={{ height: bar.height, opacity: bar.opacity }}
        />
      ))}
    </div>
  )
}

export function SectionLabel({ children, className, variant = 'left' }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {(variant === 'left' || variant === 'both') && <LabelBars reverse />}
      <span className="text-[#0070B3] text-base font-bold tracking-[-0.024em] uppercase">
        {children}
      </span>
      {variant === 'both' && <LabelBars />}
    </div>
  )
}
