'use client'

import { SectionLabel } from '@/components/landing'

interface BlogHeroProps {
  label?: string
  headline?: string
  description?: string
}

export function BlogHero({
  label = 'INSIGHTS & RESOURCES',
  headline = 'Security Intelligence Hub',
  description = 'Expert perspectives on cybersecurity, Zero Trust architecture, and enterprise infrastructure — insights from the team protecting India\'s critical digital infrastructure.',
}: BlogHeroProps) {
  return (
    <section className="relative bg-[#0A1628] min-h-[60vh] py-24 lg:py-32 px-6 lg:px-20 overflow-hidden flex items-center">
      {/* Grid pattern background */}
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

        {/* Radial gradient overlays for depth */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.08), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.06), transparent)' }}
        />

        {/* Decorative abstract lines suggesting articles/text flow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-20">
          <svg viewBox="0 0 400 300" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0070B3" stopOpacity="0" />
                <stop offset="50%" stopColor="#00A0FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0070B3" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Abstract horizontal lines suggesting text/content */}
            <rect x="50" y="40" width="300" height="3" rx="1.5" fill="url(#lineGrad)" />
            <rect x="80" y="60" width="240" height="2" rx="1" fill="url(#lineGrad)" opacity="0.6" />
            <rect x="60" y="80" width="280" height="2" rx="1" fill="url(#lineGrad)" opacity="0.4" />

            <rect x="70" y="120" width="260" height="3" rx="1.5" fill="url(#lineGrad)" />
            <rect x="90" y="140" width="220" height="2" rx="1" fill="url(#lineGrad)" opacity="0.6" />
            <rect x="50" y="160" width="300" height="2" rx="1" fill="url(#lineGrad)" opacity="0.4" />

            <rect x="60" y="200" width="280" height="3" rx="1.5" fill="url(#lineGrad)" />
            <rect x="100" y="220" width="200" height="2" rx="1" fill="url(#lineGrad)" opacity="0.6" />
            <rect x="70" y="240" width="260" height="2" rx="1" fill="url(#lineGrad)" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="max-w-[720px]">
          <SectionLabel className="mb-8">{label}</SectionLabel>

          <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
            {headline}
          </h1>

          <p className="text-[#EDEDED]/80 text-lg md:text-xl font-medium leading-[1.5] max-w-[600px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
