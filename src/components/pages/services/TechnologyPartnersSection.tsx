'use client'

import Image from 'next/image'

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
  headline?: string
  subheadline?: string
}

export function TechnologyPartnersSection({
  headline = 'Powered by Global Technology Leaders',
  subheadline = 'Authorized system integrator for 15+ platforms',
}: TechnologyPartnersSectionProps) {
  return (
    <section className="bg-[#EDEDED] py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-[#0A1628] text-2xl lg:text-3xl font-semibold mb-2">
          {headline}
        </h2>
        <p className="text-[#666666] text-lg font-medium mb-12">
          {subheadline}
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 px-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
