'use client'

import Image from 'next/image'
import { SectionLabel } from '@/components/landing'

const partners = [
  { name: 'Zscaler', logo: '/images/partners/zscaler.svg' },
  { name: 'F5', logo: '/images/partners/f5.svg' },
  { name: 'Fortinet', logo: '/images/partners/fortinet.svg' },
  { name: 'Palo Alto', logo: '/images/partners/palo-alto.svg' },
  { name: 'Cisco', logo: '/images/partners/cisco.svg' },
  { name: 'Juniper', logo: '/images/partners/juniper.svg' },
  { name: 'Dell', logo: '/images/partners/dell.svg' },
  { name: 'HP', logo: '/images/partners/hp.svg' },
]

interface TechnologyPartnersSectionProps {
  label?: string
  headline?: string
  subheadline?: string
}

export function TechnologyPartnersSection({
  label = 'TECHNOLOGY PARTNERS',
  headline = 'Powered by Global Technology Leaders',
  subheadline = 'Authorized system integrator for 15+ enterprise platforms',
}: TechnologyPartnersSectionProps) {
  return (
    <section className="relative bg-[#F5F5F5] py-20 lg:py-24 px-6 lg:px-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.05), transparent)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.05), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex justify-center mb-4">
            <SectionLabel variant="both">
              {label}
            </SectionLabel>
          </div>
          <h2 className="block text-center text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] mb-3">
            {headline}
          </h2>
          <p className="block text-center text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em] max-w-lg mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center h-24 px-8 rounded-xl bg-white border border-[#E5E5E5] transition-all duration-300 hover:border-[#0070B3]/30 hover:shadow-md"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#0070B3]/5 to-transparent" />

              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={56}
                className="relative z-10 max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E5E5]">
            <div className="w-2 h-2 rounded-full bg-[#0070B3] animate-pulse" />
            <span className="text-[#666666] text-sm font-medium">
              All partnerships are official and certified
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
