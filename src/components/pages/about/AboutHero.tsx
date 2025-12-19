'use client'

import { SectionLabel } from '@/components/landing'

interface AboutHeroProps {
  label?: string
  headline?: string
  subheadline?: string
}

export function AboutHero({
  label = 'ABOUT ENRICH',
  headline = 'A Decade of Securing India\'s Digital Infrastructure',
  subheadline = 'Enrich (EDSPL) protects critical systems for government agencies and Fortune 500 companies since 2014.',
}: AboutHeroProps) {
  return (
    <section className="bg-[#0A1628] py-24 lg:py-32 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto text-center">
        <SectionLabel variant="both" className="justify-center mb-6">
          {label}
        </SectionLabel>

        <h1 className="text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] mb-6 max-w-[900px] mx-auto">
          {headline}
        </h1>

        <p className="text-[#EDEDED]/80 text-lg md:text-xl font-medium leading-[1.6] max-w-[700px] mx-auto">
          {subheadline}
        </p>
      </div>
    </section>
  )
}
