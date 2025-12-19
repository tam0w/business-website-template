'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Download } from 'lucide-react'
import { SectionLabel } from '@/components/landing'

interface ServicesHeroProps {
  label?: string
  headline?: string
  subheadline?: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export function ServicesHero({
  label = 'COMPLETE SERVICE CATALOG',
  headline = 'End-to-End Security, Networking & Infrastructure',
  subheadline = 'From Zero Trust to 24/7 managed security — solutions trusted by 200+ organizations.',
  primaryCta = { text: 'Get Your Security Assessment', href: '#contact' },
  secondaryCta = { text: 'Download Brochure', href: '#' },
}: ServicesHeroProps) {
  return (
    <section className="relative bg-[#0A1628] min-h-[70vh] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0070B3]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#00A0FF]/5 rounded-full blur-3xl" />
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                <Download className="w-5 h-5" />
                {secondaryCta.text}
              </Link>
            </div>
          </div>

          {/* Right Side - SVG Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* Concentric rings placeholder for Security Layers SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#0070B3]/20" />
                  {/* Middle ring */}
                  <div className="absolute inset-[15%] rounded-full border-2 border-[#0070B3]/30" />
                  {/* Inner ring */}
                  <div className="absolute inset-[30%] rounded-full border-2 border-[#0070B3]/40" />
                  {/* Core */}
                  <div className="absolute inset-[42%] rounded-full bg-[#0070B3]/20 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-[#0070B3]" />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A0FF]" />
                  <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00A0FF]" />
                  <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A0FF]" />
                  <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A0FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
