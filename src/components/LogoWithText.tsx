import { BrandIcon } from '@/components/BrandIcon'
import { cn } from '@/lib/utils'

interface LogoWithTextProps {
  iconName: string
  logoText: string
  iconSize?: string
  textClassName?: string
  containerClassName?: string
  gap?: string
}

export function LogoWithText({
  iconName,
  logoText,
  iconSize = 'clamp(4rem, 6vw, 6.5rem)',
  textClassName = 'text-5xl md:text-7xl lg:text-8xl',
  containerClassName,
  gap = 'gap-6 md:gap-8 lg:gap-10',
}: LogoWithTextProps) {
  return (
    <div className={cn('flex items-center justify-center', gap, containerClassName)}>
      <BrandIcon iconName={iconName} size={iconSize} />
      <h2 className={cn('font-bold text-foreground', textClassName)}>
        {logoText}
      </h2>
    </div>
  )
}
