'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-3">
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
      >
        <Card variant="ghost" className="p-md border-2 border-primary/20 hover:border-primary/40">
          <div className="space-y-6">
            <div className="space-y-2 pb-4 border-b border-border">
              <h3 className="text-xl font-bold text-primary">{planName}</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl md:text-5xl font-bold">{price}</span>
                <span className="text-muted-foreground text-sm">{priceSubtext}</span>
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
                  className="flex items-center gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full"
              >
                <a href={buttonLink}>{buttonText}</a>
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <p className="text-xs text-center text-muted-foreground pt-2 border-t border-border">
        No credit card required • Cancel anytime • 14-day money-back guarantee
      </p>
    </div>
  )
}
