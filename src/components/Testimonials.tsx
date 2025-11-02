"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    content: 'This product has completely transformed how we work. The results speak for themselves.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Innovation Labs',
    content: 'Outstanding service and support. Our team productivity has increased by 40%.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Digital Solutions',
    content: 'Best investment we made this year. Highly recommend to any growing business.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-6 bg-gradient-radial-primary">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 md:p-12 shadow-lg border-glow-hover space-y-6"
            >
              <Quote className="w-12 h-12 text-primary/20" />
              <p className="text-xl md:text-2xl leading-relaxed">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="text-lg font-semibold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border glass hover:bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_15px_oklch(0.55_0.25_265_/_20%)]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8 glow-primary' : 'bg-muted-foreground/30 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border glass hover:bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_15px_oklch(0.55_0.25_265_/_20%)]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
