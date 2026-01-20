import { Link } from 'react-router-dom'
import { LogoWithText } from '@/components/LogoWithText'
import { siteBranding, contactInfo } from '@/data'
import { cn } from '@/lib/utils'

interface FooterProps {
  variant?: 'default' | 'inverted'
  className?: string
}

export function Footer({ variant = 'default', className }: FooterProps) {
  const isInverted = variant === 'inverted'

  const textColor = isInverted ? 'text-primary-foreground' : 'text-foreground'
  const mutedColor = isInverted ? 'text-primary-foreground/70' : 'text-muted-foreground'
  const borderColor = isInverted ? 'border-primary-foreground/20' : 'border-border'
  const hoverClass = 'hover:opacity-70 transition-opacity'

  return (
    <footer
      className={cn(
        'pt-16 pb-4 px-6 lg:px-12 border-t',
        isInverted ? 'surface-inverted' : 'bg-background border-border',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <LogoWithText
              iconName={siteBranding.logoIcon}
              logoText={siteBranding.logoText}
              iconSize="clamp(1.5rem, 2vw, 2rem)"
              textClassName={cn('text-xl md:text-2xl', textColor)}
              gap="gap-3"
              containerClassName="justify-start"
            />
          </div>

          <div className="space-y-3">
            <h3 className={cn('tracking-caps text-xs', mutedColor)}>Company</h3>
            <ul className={cn('space-y-2 text-sm', textColor)}>
              <li>
                <Link to="/services" className={hoverClass}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className={hoverClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className={hoverClass}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className={hoverClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className={cn('tracking-caps text-xs', mutedColor)}>Connect</h3>
            <ul className={cn('space-y-2 text-sm', textColor)}>
              {contactInfo.socialLinks?.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={hoverClass}
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className={cn('tracking-caps text-xs', mutedColor)}>Legal</h3>
            <ul className={cn('space-y-2 text-sm', textColor)}>
              <li>
                <Link to="/privacy" className={hoverClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={hoverClass}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn('h-px mb-6', isInverted ? 'bg-primary-foreground/20' : 'bg-border')} />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className={cn('text-sm', mutedColor)}>
            &copy; {new Date().getFullYear()} {siteBranding.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
