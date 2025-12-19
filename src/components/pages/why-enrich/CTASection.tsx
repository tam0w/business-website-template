'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  headline?: string
  body?: string
  ctaText?: string
  ctaHref?: string
  variant?: 'teal' | 'dark'
}

export function CTASection({
  headline = 'Ready to Secure Your Digital Future?',
  body = 'Free assessment. Risk score in 48 hours.',
  ctaText = 'Schedule Your Free Security Audit',
  ctaHref = '#contact',
  variant = 'teal',
}: CTASectionProps) {
  const bgClass = variant === 'teal'
    ? 'bg-gradient-to-r from-[#0891b2] to-[#0e7490]'
    : 'bg-[#0A1628]'

  return (
    <section className={`${bgClass} py-16 lg:py-20 px-6 lg:px-20`}>
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-[#EDEDED] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] mb-4">
          {headline}
        </h2>

        <p className="text-[#EDEDED]/80 text-lg font-medium mb-8 max-w-[500px] mx-auto">
          {body}
        </p>

        <Link
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-white text-[#0A1628] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#EDEDED] transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
