'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingCTAProps {
  heading: string
  description: string
  planName: string
  price: string
  priceSubtext: string
  features: Array<{ feature: string }>
  buttonText: string
  buttonLink: string
}

export function PricingCTA({
  heading,
  description,
  planName,
  price,
  priceSubtext,
  features,
  buttonText,
  buttonLink,
}: PricingCTAProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="glass rounded-2xl p-8 md:p-12 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 glow-primary"
      >
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">{planName}</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold">{price}</span>
              <span className="text-muted-foreground">{priceSubtext}</span>
            </div>
          </div>

          <div className="space-y-4 py-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{item.feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="glow"
              size="lg"
              asChild
              className="w-full h-14 text-base rounded-xl font-semibold"
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm text-center text-muted-foreground"
      >
        No credit card required • Cancel anytime • 14-day money-back guarantee
      </motion.p>
    </div>
  )
}
