'use client'

import { SectionLabel } from '@/components/landing'

interface AboutHeroProps {
  label?: string
  headline?: string
  subheadline?: string
}

export function AboutHero({
  label = 'ABOUT ENRICH',
  headline = "A Decade of Securing India's Digital Infrastructure",
  subheadline = 'Enrich (EDSPL) protects critical systems for government agencies and Fortune 500 companies since 2014.',
}: AboutHeroProps) {
  return (
    <section className="relative bg-[#0A1628] py-28 lg:py-36 px-6 lg:px-20 overflow-hidden">
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.08), transparent)' }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-px bg-gradient-to-b from-[#0070B3]/50 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto text-center">
        <SectionLabel variant="both" className="justify-center mb-8">
          {label}
        </SectionLabel>

        <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6 max-w-[900px] mx-auto">
          {headline}
        </h1>

        <p className="text-[#EDEDED] text-lg md:text-xl font-medium leading-[1.5] max-w-[700px] mx-auto">
          {subheadline}
        </p>

        {/* Decorative stat pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-[#0070B3] text-2xl font-bold">10+</span>
            <span className="text-[#EDEDED]/70 text-sm font-medium">Years</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-[#0070B3] text-2xl font-bold">200+</span>
            <span className="text-[#EDEDED]/70 text-sm font-medium">Clients</span>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="text-[#0070B3] text-2xl font-bold">40+</span>
            <span className="text-[#EDEDED]/70 text-sm font-medium">Govt Projects</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-px bg-gradient-to-t from-[#0070B3]/30 to-transparent" />
    </section>
  )
}
