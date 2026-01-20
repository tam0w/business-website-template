import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BrandIcon } from '@/components/BrandIcon'

interface HeroProps {
  heading: string
  subheading: string
  primaryButtonText: string
  primaryButtonLink: string
  logoIcon?: string
  logoText?: string
}

export function Hero({
  subheading,
  primaryButtonText,
  primaryButtonLink,
  logoIcon = 'leaf',
  logoText = 'Ryebrim',
}: HeroProps) {
  return (
    <section className="min-h-dvh snap-start relative overflow-hidden bg-primary">
      {/* Leaf vein pattern overlay - vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L30 60 M0 30 Q15 30 30 15 M60 30 Q45 30 30 15 M0 30 Q15 30 30 45 M60 30 Q45 30 30 45' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, black 70%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, black 70%, black 100%)',
          opacity: 0.19,
        }}
      />

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 0%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      <div className="relative z-10 min-h-dvh flex flex-col">
        {/* Logo section - centered, with breathing room from navbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16 flex flex-col items-center"
        >
          <Link to="/" className="group flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrandIcon
                iconName={logoIcon}
                size="clamp(3rem, 6vw, 4.5rem)"
                className="text-primary-foreground drop-shadow-sm"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-primary-foreground tracking-tight"
            >
              {logoText}
            </motion.span>
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-3 tracking-caps text-primary-foreground/80 text-xs"
          >
            Content & Growth Agency
          </motion.p>
        </motion.div>

        {/* Main content - centered below */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 pb-20 md:pb-28">
          <div className="max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight text-primary-foreground"
            >
              Strategic content
              <br className="hidden sm:block" />
              {' '}and AI workflows for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-foreground">ambitious companies.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-0.5 left-0 right-0 h-2 md:h-3 bg-primary-foreground/20 origin-left -z-0"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-xl mx-auto leading-relaxed"
            >
              {subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-8 md:mt-10"
            >
              <Link
                to={primaryButtonLink}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-primary-foreground/30 origin-center"
        />
      </div>
    </section>
  )
}
