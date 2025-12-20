'use client'

import {
  Train,
  Banknote,
  ShoppingCart,
  Shield,
  Building2,
} from 'lucide-react'

const touchpoints = [
  { icon: Train, label: 'Public Transport & Ticketing' },
  { icon: Banknote, label: 'National Taxation Systems' },
  { icon: ShoppingCart, label: 'Government e-Procurement' },
  { icon: Shield, label: 'National Cyber Response' },
  { icon: Building2, label: 'Critical Infrastructure' },
]

interface CitizenLifecycleSectionProps {
  headline?: string
  body?: string
}

export function CitizenLifecycleSection({
  headline = 'From Tax Filing to Train Tickets — We Secure Every Citizen Touchpoint',
  body = 'Enrich protects the platforms that power daily life for 1.4 billion Indians. Our security infrastructure spans national taxation systems, public transportation booking, government procurement portals, and critical citizen services — safeguarding every interaction across the citizen lifecycle.',
}: CitizenLifecycleSectionProps) {
  return (
    <section className="relative py-16 lg:py-20 px-6 lg:px-20 overflow-hidden bg-gradient-to-r from-[#0891b2] to-[#0e7490]">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-[2px] bg-white/60" />
          <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">
            Securing India's Digital Infrastructure
          </span>
          <div className="w-8 h-[2px] bg-white/60" />
        </div>

        {/* Headline */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-5 max-w-3xl mx-auto">
          {headline}
        </h2>

        {/* Body */}
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          {body}
        </p>

        {/* Touchpoint Icons Strip */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {touchpoints.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium text-sm whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
