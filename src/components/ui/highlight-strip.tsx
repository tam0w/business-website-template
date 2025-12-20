import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const highlightStripVariants = cva(
  'text-[#EDEDED] font-semibold text-center whitespace-nowrap',
  {
    variants: {
      variant: {
        // Full-width diagonal strip (partners section style)
        diagonal: 'w-full py-3 text-lg md:text-2xl',
        // Compact badge strip (leader card style)
        badge: 'px-6 py-3 rounded-md text-xl md:text-2xl capitalize',
      },
      gradient: {
        solid: '',
        horizontal: '',
      },
    },
    defaultVariants: {
      variant: 'diagonal',
      gradient: 'solid',
    },
  }
)

export interface HighlightStripProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof highlightStripVariants> {
  rotation?: number
  items?: string[]
  separator?: string
}

function HighlightStrip({
  className,
  variant,
  gradient,
  rotation = -1,
  items,
  separator = '•',
  children,
  ...props
}: HighlightStripProps) {
  const backgroundStyle =
    gradient === 'horizontal'
      ? 'linear-gradient(90deg, #0070B3 0%, #004D7A 100%)'
      : '#0070B3'

  const content = items ? (
    items.map((item, index) => (
      <React.Fragment key={item}>
        {item}
        {index < items.length - 1 && (
          <span className="mx-4 opacity-70">{separator}</span>
        )}
      </React.Fragment>
    ))
  ) : (
    children
  )

  if (variant === 'diagonal') {
    return (
      <div
        className="absolute left-1/2 top-1/2 z-40 w-[110vw]"
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
      >
        <div
          className={cn(highlightStripVariants({ variant, gradient, className }))}
          style={{
            background: backgroundStyle,
            boxShadow:
              '0px 8px 12px 6px rgba(0,0,0,0.15), 0px 4px 4px 0px rgba(0,0,0,0.3)',
            textShadow: '0px 3px 4px rgba(0, 0, 0, 0.16)',
          }}
          {...props}
        >
          {content}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(highlightStripVariants({ variant, gradient, className }))}
      style={{
        background: backgroundStyle,
        textShadow: '0px 3px 4px rgba(0, 0, 0, 0.16)',
      }}
      {...props}
    >
      {content}
    </div>
  )
}

export { HighlightStrip, highlightStripVariants }
