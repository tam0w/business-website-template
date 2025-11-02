"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { IconType } from "react-icons"
import {
  FaApple,
  FaMicrosoft,
  FaGoogle,
  FaAmazon,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
}

interface TestimonialsProps {
  heading?: string
  subheading?: string
  testimonials: Testimonial[]
}

type BrandType = {
  name: string
  logo: IconType
}

const Brands: BrandType[] = [
  { name: "Apple", logo: FaApple },
  { name: "Microsoft", logo: FaMicrosoft },
  { name: "Google", logo: FaGoogle },
  { name: "Amazon", logo: FaAmazon },
  { name: "Facebook", logo: FaFacebook },
  { name: "Twitter", logo: FaTwitter },
  { name: "LinkedIn", logo: FaLinkedin },
  { name: "Instagram", logo: FaInstagram },
]

const BrandCard: React.FC<{
  brand: BrandType
  onHover: (isHovered: boolean) => void
  className?: string
}> = React.memo(({ brand, onHover, className }) => (
  <motion.div
    className={`flex-shrink-0 w-auto rounded-xl overflow-hidden flex flex-col items-start justify-center p-6 glass border-glow-hover transition-all duration-300 ${className}`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <div className="flex items-center space-x-3">
      {React.createElement(brand.logo, { className: "text-3xl text-foreground" })}
      <h3 className="text-lg font-semibold text-foreground">{brand.name}</h3>
    </div>
  </motion.div>
))

BrandCard.displayName = "BrandCard"

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)
      setMatches(media.matches)

      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)

      return () => media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

export default function Testimonials({ heading = 'What Our Customers Say', subheading = "Don't just take our word for it", testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollSpeed = 0.1
  const scrollInterval = 30
  const effectiveScrollSpeed = isMobile ? scrollSpeed * 2 : scrollSpeed
  const effectiveScrollInterval = isMobile ? scrollInterval / 2 : scrollInterval

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isPaused) {
      interval = setInterval(() => {
        setScrollPosition(
          (prevPosition) => (prevPosition + effectiveScrollSpeed) % 100
        )
      }, effectiveScrollInterval)
    }

    return () => clearInterval(interval)
  }, [isPaused, effectiveScrollSpeed, effectiveScrollInterval])

  const handleHover = (isHovered: boolean) => {
    setIsPaused(isHovered)
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="h-dvh px-6 bg-gradient-radial-primary flex items-center justify-center snap-start snap-always">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">{heading}</h2>
          {subheading && (
            <p className="text-muted-foreground text-lg">
              {subheading}
            </p>
          )}
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

        {/* Brands Section */}
        <div className="max-w-7xl mx-auto space-y-6 mt-16">
          <div className="text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              Trusted by industry leaders
            </p>
          </div>
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-xl"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
              }}
            >
              <AnimatePresence>
                <motion.div
                  className="flex space-x-6"
                  style={{ transform: `translateX(-${scrollPosition}%)` }}
                  transition={{ duration: 0.5 }}
                >
                  {Brands.concat(Brands).map((brand, index) => (
                    <BrandCard key={index} brand={brand} onHover={handleHover} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
