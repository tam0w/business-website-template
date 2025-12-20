'use client'

import { SectionLabel } from '@/components/landing'
import { Clock, Shield, CheckCircle } from 'lucide-react'

const trustSignals = [
  { icon: Clock, text: 'Response within 2 hours' },
  { icon: Shield, text: 'ISO 27001 Certified' },
  { icon: CheckCircle, text: 'No commitment required' },
]

interface ContactHeroProps {
  label?: string
  headline?: string
  subheadline?: string
}

export function ContactHero({
  label = 'GET IN TOUCH',
  headline = 'Schedule Your Free Security Assessment',
  subheadline = 'Get a comprehensive risk score in 48 hours. Our security experts will analyze your environment and recommend the right solutions.',
}: ContactHeroProps) {
  return (
    <section className="relative bg-[#0A1628] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden">
      {/* Background patterns */}
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
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.08), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.06), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="max-w-[700px]">
          <SectionLabel className="mb-8">{label}</SectionLabel>

          <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
            {headline}
          </h1>

          <p className="text-[#EDEDED]/80 text-lg md:text-xl font-medium leading-[1.5] mb-10 max-w-[600px]">
            {subheadline}
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4">
            {trustSignals.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#EDEDED]/90 text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-[#00A0FF]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
