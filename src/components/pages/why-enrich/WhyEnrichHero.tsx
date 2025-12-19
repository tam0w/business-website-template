'use client'

import Link from 'next/link'
import { ArrowRight, Train, Banknote, ShoppingCart, Shield, Building2 } from 'lucide-react'
import { SectionLabel } from '@/components/landing'

const touchpoints = [
  { icon: Train, label: 'Public Transport' },
  { icon: Banknote, label: 'National Taxation' },
  { icon: ShoppingCart, label: 'e-Procurement' },
  { icon: Shield, label: 'Cyber Response' },
  { icon: Building2, label: 'Critical Infrastructure' },
]

interface WhyEnrichHeroProps {
  label?: string
  headline?: string
  subheadline?: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export function WhyEnrichHero({
  label = 'SECURING INDIA\'S DIGITAL INFRASTRUCTURE',
  headline = 'From Tax Filing to Train Tickets — We Secure Every Citizen Touchpoint',
  subheadline = 'Enrich protects the platforms powering daily life for 1.4 billion Indians — national taxation, public transport, government procurement, and critical infrastructure.',
  primaryCta = { text: 'Schedule Your Free Assessment', href: '#contact' },
  secondaryCta = { text: 'Explore Our Services', href: '/services' },
}: WhyEnrichHeroProps) {
  return (
    <section className="relative bg-[#0A1628] min-h-[80vh] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#0070B3]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#00A0FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <SectionLabel className="mb-6">{label}</SectionLabel>

            <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] mb-6">
              {headline}
            </h1>

            <p className="text-[#EDEDED]/80 text-lg md:text-xl font-medium leading-[1.6] mb-8">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-3 bg-[#0070B3] text-[#EDEDED] px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-[#005a8f] transition-colors border-[3px] border-black/10"
              >
                {primaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-[#EDEDED] text-lg font-medium hover:text-[#00A0FF] transition-colors"
              >
                {secondaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Touchpoint Pills */}
            <div className="flex flex-wrap gap-3">
              {touchpoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#EDEDED]/90 text-sm font-medium"
                >
                  <Icon className="w-4 h-4 text-[#0070B3]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - SVG Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Placeholder for custom SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0070B3]/20 to-[#00A0FF]/10 border border-[#0070B3]/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#0070B3]/20 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-[#0070B3]" />
                    </div>
                    <p className="text-[#EDEDED]/60 text-sm">
                      Custom SVG: Citizen Touchpoints Illustration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
