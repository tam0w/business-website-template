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
    <section className="min-h-dvh snap-start relative overflow-hidden">
      {/* Green diagonal block */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-0 w-[55%] lg:w-[45%] bg-primary origin-right hidden md:block"
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      <div className="relative z-10 min-h-dvh flex flex-col justify-center px-6 lg:px-16 py-16">
        <div className="max-w-2xl">
          <div className="space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-foreground"
            >
              Strategic content
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight text-foreground"
            >
              and automation for
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight"
            >
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">ambitious brands.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 origin-left -z-0"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 lg:mt-12 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 lg:mt-10"
          >
            <Link
              to={primaryButtonLink}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300"
            >
              {primaryButtonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Right side content on green (desktop) - Logo, label, and services */}
      <div className="absolute inset-y-0 right-0 w-[55%] lg:w-[45%] hidden md:flex flex-col justify-between py-12 lg:py-16 px-8 lg:px-16">
        {/* Logo and label at top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-right"
        >
          <Link to="/" className="inline-flex items-center gap-3 group">
            <span className="text-2xl lg:text-3xl font-display font-medium text-primary-foreground">
              {logoText}
            </span>
            <BrandIcon iconName={logoIcon} size="clamp(2rem, 3vw, 2.5rem)" className="text-primary-foreground" />
          </Link>
          <p className="mt-3 tracking-caps text-primary-foreground/70 text-xs">
            Content & Growth Agency
          </p>
        </motion.div>

        {/* Services at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-primary-foreground text-right"
        >
          <p className="text-sm tracking-caps opacity-70 mb-4">What we do</p>
          <ul className="space-y-2">
            <li className="text-lg font-display">Technical Content</li>
            <li className="text-lg font-display">Founder's Voice</li>
            <li className="text-lg font-display">LinkedIn Management</li>
            <li className="text-lg font-display">AI Automation</li>
          </ul>
        </motion.div>
      </div>

      {/* Mobile: Logo at top */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-6 left-6 md:hidden"
      >
        <Link to="/" className="inline-flex items-center gap-2">
          <BrandIcon iconName={logoIcon} size="1.75rem" className="text-primary" />
          <span className="text-xl font-display font-medium text-foreground">{logoText}</span>
        </Link>
      </motion.div>

      {/* Mobile green accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-primary origin-left md:hidden"
      />
    </section>
  )
}
