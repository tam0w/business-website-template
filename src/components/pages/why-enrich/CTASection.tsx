'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  headline?: string
  body?: string
  ctaText?: string
  ctaHref?: string
  secondaryCta?: { text: string; href: string }
}

export function CTASection({
  headline = 'Ready to Secure Your Digital Future?',
  body = 'Free assessment. Risk score in 48 hours.',
  ctaText = 'Schedule Your Free Security Audit',
  ctaHref = '#contact',
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-24 px-6 lg:px-20 overflow-hidden bg-[#0A1628]">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0070B3 1px, transparent 1px),
              linear-gradient(to bottom, #0070B3 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial gradients */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.1), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.08), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <h2 className="text-[#EDEDED] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] mb-5">
          {headline}
        </h2>

        <p className="text-[#EDEDED]/80 text-lg font-medium leading-[1.5] mb-10 max-w-[500px] mx-auto">
          {body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="xl"
            className="group bg-[#0070B3] text-white hover:bg-[#0070B3]/90"
          >
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          {secondaryCta && (
            <Button
              asChild
              variant="dark-outline"
              size="xl"
            >
              <Link href={secondaryCta.href}>
                {secondaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
