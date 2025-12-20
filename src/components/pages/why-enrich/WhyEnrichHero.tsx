'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Train,
  Banknote,
  ShoppingCart,
  Shield,
  Building2,
  Users,
  Landmark,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
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
  label = "SECURING INDIA'S DIGITAL INFRASTRUCTURE",
  headline = 'From Tax Filing to Train Tickets — We Secure Every Citizen Touchpoint',
  subheadline = 'Enrich protects the platforms powering daily life for 1.4 billion Indians — national taxation, public transport, government procurement, and critical infrastructure.',
  primaryCta = { text: 'Schedule Your Free Assessment', href: '#contact' },
  secondaryCta = { text: 'Explore Our Services', href: '/services' },
}: WhyEnrichHeroProps) {
  return (
    <section className="relative bg-[#0A1628] min-h-[90vh] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
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
          className="absolute top-1/4 right-0 w-[700px] h-[700px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.08), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.06), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-[640px]">
            <SectionLabel className="mb-8">{label}</SectionLabel>

            <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
              {headline}
            </h1>

            <p className="text-[#EDEDED] text-lg md:text-xl font-medium leading-[1.5] mb-10">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
              <Button asChild size="xl" className="group">
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="dark-ghost" size="xl">
                <Link href={secondaryCta.href}>
                  {secondaryCta.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Touchpoint Pills */}
            <div className="flex flex-wrap gap-3">
              {touchpoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#EDEDED]/90 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-[#0070B3]/40"
                >
                  <Icon className="w-4 h-4 text-[#0070B3] group-hover:text-[#00A0FF] transition-colors" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Citizen Touchpoints SVG Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* India outline abstraction with connected nodes */}
              <div className="absolute inset-0">
                {/* Central map-like shape */}
                <div className="absolute inset-[15%] rounded-[60px] border-2 border-[#0070B3]/20 bg-gradient-to-br from-[#0070B3]/5 to-transparent rotate-12">
                  {/* Inner shape */}
                  <div className="absolute inset-[20%] rounded-[40px] border border-[#00A0FF]/20" />
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="citizenLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0070B3" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#00A0FF" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Lines connecting to central shield */}
                  <line x1="50" y1="50" x2="25" y2="20" stroke="url(#citizenLine)" strokeWidth="0.5" />
                  <line x1="50" y1="50" x2="75" y2="18" stroke="url(#citizenLine)" strokeWidth="0.5" />
                  <line x1="50" y1="50" x2="15" y2="55" stroke="url(#citizenLine)" strokeWidth="0.5" />
                  <line x1="50" y1="50" x2="85" y2="60" stroke="url(#citizenLine)" strokeWidth="0.5" />
                  <line x1="50" y1="50" x2="35" y2="85" stroke="url(#citizenLine)" strokeWidth="0.5" />
                </svg>

                {/* Touchpoint nodes */}
                <div className="absolute top-[12%] left-[20%] w-12 h-12 rounded-xl bg-white/10 border border-[#0070B3]/30 flex items-center justify-center backdrop-blur-sm">
                  <Train className="w-6 h-6 text-[#0070B3]" />
                </div>
                <div className="absolute top-[10%] right-[20%] w-12 h-12 rounded-xl bg-white/10 border border-[#00A0FF]/30 flex items-center justify-center backdrop-blur-sm">
                  <Banknote className="w-6 h-6 text-[#00A0FF]" />
                </div>
                <div className="absolute top-[50%] left-[8%] -translate-y-1/2 w-10 h-10 rounded-lg bg-white/10 border border-[#0070B3]/30 flex items-center justify-center backdrop-blur-sm">
                  <Landmark className="w-5 h-5 text-[#0070B3]" />
                </div>
                <div className="absolute top-[55%] right-[8%] w-10 h-10 rounded-lg bg-white/10 border border-[#00A0FF]/30 flex items-center justify-center backdrop-blur-sm">
                  <ShoppingCart className="w-5 h-5 text-[#00A0FF]" />
                </div>
                <div className="absolute bottom-[10%] left-[30%] w-10 h-10 rounded-lg bg-white/10 border border-[#0070B3]/30 flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-5 h-5 text-[#0070B3]" />
                </div>

                {/* Central shield */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0070B3] to-[#00A0FF] flex items-center justify-center shadow-[0_0_50px_rgba(0,112,179,0.4)]">
                  <Shield className="w-12 h-12 text-white" />
                </div>

                {/* Pulsing dots */}
                <div className="absolute top-[30%] left-[35%] w-2 h-2 rounded-full bg-[#00A0FF] animate-pulse" />
                <div className="absolute top-[65%] right-[30%] w-2 h-2 rounded-full bg-[#0070B3] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-[30%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#00A0FF]/60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Placeholder label */}
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <span className="text-[#EDEDED]/30 text-xs tracking-wider uppercase">
                  Citizen Touchpoints Illustration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
