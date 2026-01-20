'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
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
      >
        <Card variant="ghost" className="p-md border-2 border-primary/20 hover:border-primary/40">
          {!isSubmitted ? (
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder={emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button
                  type="submit"
                  variant="default"
                >
                  {buttonText}
                </Button>
              </form>
              <p className="text-xs text-center text-muted-foreground pt-2 border-t border-border">
                Join the waitlist to get early access and exclusive updates
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
              className="flex items-center justify-center gap-3 text-primary py-4"
            >
              <CheckCircle className="w-6 h-6" />
              <p className="text-lg font-semibold">Thanks for joining!</p>
            </motion.div>
          )}
        </Card>
      </motion.div>
    </div>
  )
}
