'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle } from 'lucide-react'

interface WaitlistCTAProps {
  heading: string
  description: string
  emailPlaceholder: string
  buttonText: string
}

export function WaitlistCTA({
  heading,
  description,
  emailPlaceholder,
  buttonText,
}: WaitlistCTAProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    }
  }

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
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground focus-visible:ring-primary-foreground/30"
            />
            <Button type="submit" variant="inverted">
              {buttonText}
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            className="flex items-center justify-center gap-3 py-4"
          >
            <CheckCircle className="w-6 h-6" />
            <p className="text-lg font-semibold">Thanks! We'll be in touch.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
