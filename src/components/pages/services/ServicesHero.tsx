'use client'

import Link from 'next/link'
import { ArrowRight, Download, Shield, Lock, Eye, Fingerprint } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/landing'

interface ServicesHeroProps {
  label?: string
  headline?: string
  subheadline?: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export function ServicesHero({
  label = 'OUR SERVICES',
  headline = 'Cybersecurity, Networking & Managed IT Services',
  subheadline = 'From Zero Trust & SOC-as-a-Service to SD-WAN & multi-cloud management — enterprise solutions trusted by 200+ organizations.',
  primaryCta = { text: 'Get Your Free Assessment', href: '#contact' },
  secondaryCta = { text: 'Download Service Catalog', href: '#' },
}: ServicesHeroProps) {
  return (
    <section className="relative bg-[#0A1628] min-h-[85vh] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
      {/* Animated background grid pattern */}
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
        {/* Radial gradient overlays */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.08), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.06), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <SectionLabel className="mb-8">{label}</SectionLabel>

            <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
              {headline}
            </h1>

            <p className="text-[#EDEDED] text-lg md:text-xl font-medium leading-[1.5] mb-10">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button asChild size="xl" className="group">
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="dark-ghost" size="xl">
                <Link href={secondaryCta.href} className="gap-2">
                  <Download className="w-5 h-5" />
                  {secondaryCta.text}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Security Layers SVG Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Animated concentric rings representing security layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer glow */}
                <div
                  className="absolute inset-[-20%] rounded-full animate-pulse"
                  style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.1), transparent)', animationDuration: '4s' }}
                />

                {/* Ring 1 - Outermost */}
                <div className="absolute inset-0 rounded-full border border-[#0070B3]/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0070B3]/40 border-2 border-[#0070B3]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#00A0FF]/60" />
                </div>

                {/* Ring 2 */}
                <div className="absolute inset-[12%] rounded-full border border-[#0070B3]/30">
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0070B3]/50" />
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A0FF]/50" />
                </div>

                {/* Ring 3 */}
                <div className="absolute inset-[24%] rounded-full border-2 border-[#0070B3]/40 bg-[#0070B3]/5" />

                {/* Ring 4 */}
                <div className="absolute inset-[36%] rounded-full border border-[#00A0FF]/40">
                  {/* Orbiting elements */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <Lock className="w-5 h-5 text-[#00A0FF]" />
                  </div>
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    <Eye className="w-5 h-5 text-[#0070B3]" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <Fingerprint className="w-5 h-5 text-[#00A0FF]" />
                  </div>
                </div>

                {/* Core shield */}
                <div className="absolute inset-[42%] rounded-full bg-gradient-to-br from-[#0070B3] to-[#00A0FF] flex items-center justify-center shadow-[0_0_40px_rgba(0,112,179,0.4)]">
                  <Shield className="w-12 h-12 text-white" />
                </div>

                {/* Data flow lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0070B3" stopOpacity="0" />
                      <stop offset="50%" stopColor="#00A0FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#0070B3" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Diagonal data flow lines */}
                  <line x1="10" y1="20" x2="35" y2="35" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="90" y1="25" x2="65" y2="40" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="15" y1="75" x2="38" y2="62" stroke="url(#lineGradient)" strokeWidth="0.5" />
                  <line x1="85" y1="80" x2="62" y2="65" stroke="url(#lineGradient)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Placeholder text */}
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <span className="text-[#EDEDED]/30 text-xs tracking-wider uppercase">
                  Security Layers Illustration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
