'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg opacity-80"
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-primary-foreground/10 border border-primary-foreground/20 p-8"
      >
        <div className="space-y-6">
          <div className="space-y-2 pb-6 border-b border-primary-foreground/20">
            <h3 className="text-sm tracking-caps opacity-70">{planName}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-display">{price}</span>
              <span className="opacity-70 text-sm">{priceSubtext}</span>
            </div>
          </div>

          <div className="space-y-3">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-primary-foreground/20 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm">{item.feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 border-t border-primary-foreground/20">
            <Button variant="inverted" size="lg" asChild className="w-full">
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
