'use client'

import { SectionLabel } from '@/components/landing'

const governmentSectors = [
  'National IT',
  'Railways & Ticketing',
  'Heavy Engineering PSU',
  'Cyber Security',
  'e-Procurement',
  'Tax Systems',
]

const enterpriseSectors = [
  'Payments & Fintech',
  'Telecom',
  'Energy',
  'IT Services',
  'Healthcare',
  'Aviation',
]

interface SectorBadgeProps {
  label: string
  variant?: 'government' | 'enterprise'
}

function SectorBadge({ label, variant = 'government' }: SectorBadgeProps) {
  return (
    <div
      className={`px-4 py-2.5 rounded-lg text-sm font-semibold ${
        variant === 'government'
          ? 'bg-[#0070B3]/10 text-[#0070B3] border border-[#0070B3]/20'
          : 'bg-[#00A0FF]/10 text-[#00A0FF] border border-[#00A0FF]/20'
      }`}
    >
      {label}
    </div>
  )
}

interface TrustedSectorsSectionProps {
  label?: string
  headline?: string
  governmentSectors?: string[]
  enterpriseSectors?: string[]
  trustNote?: string
}

export function TrustedSectorsSection({
  label = 'WHO WE PROTECT',
  headline = 'Trusted Across Government & Enterprise',
  governmentSectors: govSectors = governmentSectors,
  enterpriseSectors: entSectors = enterpriseSectors,
  trustNote = 'Also trusted by: Paytm | Airtel Payments Bank',
}: TrustedSectorsSectionProps) {
  return (
    <section className="bg-[#0A1628] py-16 lg:py-24 px-6 lg:px-20 border-t border-[#EDEDED]/10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel variant="both" className="justify-center mb-4">
            {label}
          </SectionLabel>
          <h2 className="text-[#EDEDED] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Government Sectors */}
        <div className="mb-8">
          <p className="text-[#EDEDED]/60 text-sm font-semibold uppercase tracking-wider mb-4">
            Government & Public Sector
          </p>
          <div className="flex flex-wrap gap-3">
            {govSectors.map((sector) => (
              <SectorBadge key={sector} label={sector} variant="government" />
            ))}
          </div>
        </div>

        {/* Enterprise Sectors */}
        <div className="mb-10">
          <p className="text-[#EDEDED]/60 text-sm font-semibold uppercase tracking-wider mb-4">
            Enterprise & Private Sector
          </p>
          <div className="flex flex-wrap gap-3">
            {entSectors.map((sector) => (
              <SectorBadge key={sector} label={sector} variant="enterprise" />
            ))}
          </div>
        </div>

        {/* Trust Note */}
        <p className="text-[#EDEDED]/50 text-sm font-medium text-center">
          {trustNote}
        </p>
      </div>
    </section>
  )
}
