import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  heading: string
  subheading: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
}

const services = [
  { number: '01', title: 'Technical Content', description: 'Deep-dive articles & documentation' },
  { number: '02', title: 'Brand Storytelling', description: 'Narratives that resonate' },
  { number: '03', title: 'LinkedIn Management', description: 'Full-service presence' },
  { number: '04', title: 'AI Automation', description: 'Intelligent workflows' },
]

export function Hero({
  heading,
  subheading,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) {
  return (
    <section className="min-h-dvh relative overflow-hidden">
      {/* Editorial grid lines - decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-border/50" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-border/50" />
        <div className="absolute left-0 right-0 top-[15%] h-px bg-border/30" />
      </div>

      {/* Green accent block */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute right-0 top-0 w-[35%] h-[45%] bg-primary origin-top hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <span className="tracking-caps text-muted-foreground">Content & Growth Agency</span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Main headline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display leading-[0.9] tracking-tight text-foreground"
              >
                {heading.split(' ').slice(0, 2).join(' ')}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display leading-[0.9] tracking-tight text-foreground"
              >
                <span className="text-primary">{heading.split(' ').slice(2, 4).join(' ')}</span>
                {heading.split(' ').length > 4 && (
                  <span> {heading.split(' ').slice(4).join(' ')}</span>
                )}
              </motion.h1>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              className="w-32 h-0.5 bg-primary origin-left"
            />

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              {subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to={primaryButtonLink}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-base font-medium hover:bg-primary/90 transition-all duration-300"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to={secondaryButtonLink}
                className="inline-flex items-center px-8 py-4 text-foreground text-base font-medium border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>
          </div>

          {/* Right column - Services list (visible on lg+) */}
          <div className="lg:col-span-5 lg:pt-16 hidden lg:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative"
            >
              {/* Services inside green block area - positioned to overlap */}
              <div className="absolute -top-8 right-0 w-full max-w-sm">
                <div className="space-y-0">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.number}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                      className="group py-5 border-b border-primary-foreground/20 last:border-b-0 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-xs font-mono text-primary-foreground/60 pt-1">
                          {service.number}
                        </span>
                        <div>
                          <h3 className="text-lg font-display text-primary-foreground group-hover:translate-x-1 transition-transform duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-primary-foreground/70 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile services - horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 lg:hidden"
        >
          <div className="border-t border-border pt-8">
            <span className="tracking-caps text-muted-foreground mb-6 block">What We Do</span>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.number} className="space-y-2">
                  <span className="text-xs font-mono text-muted-foreground">{service.number}</span>
                  <h3 className="text-base font-display text-foreground">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom editorial marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-4"
        >
          <div className="w-8 h-px bg-border" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider">EST. 2024</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-8 right-6 lg:right-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-muted-foreground tracking-wider rotate-90 origin-center translate-y-4">
              SCROLL
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
