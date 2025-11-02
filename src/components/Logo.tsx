import Link from 'next/link'
import { BrandIcon } from '@/components/BrandIcon'
import { cn } from '@/lib/utils'

interface LogoProps {
  iconName: string
  companyName: string
  size?: string
  className?: string
}

export function Logo({ iconName, companyName, size = '1.5rem', className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex-shrink-0 hover:text-primary transition-colors',
        className
      )}
      aria-label={companyName}
    >
      <BrandIcon iconName={iconName} size={size} />
    </Link>
  )
}
