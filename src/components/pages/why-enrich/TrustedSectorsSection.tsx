'use client'

import { SectionLabel } from '@/components/landing'
import { cn } from '@/lib/utils'

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
  index: number
}

function SectorBadge({ label, variant = 'government', index }: SectorBadgeProps) {
  const isGov = variant === 'government'

  return (
    <div
      className={cn(
        'group relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-default',
        isGov
          ? 'bg-white text-[#0070B3] border border-[#0070B3]/20 hover:bg-[#0070B3]/10 hover:border-[#0070B3]/40 shadow-sm'
          : 'bg-white text-[#00A0FF] border border-[#00A0FF]/20 hover:bg-[#00A0FF]/10 hover:border-[#00A0FF]/40 shadow-sm'
      )}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Hover glow */}
      <div
        className={cn(
          'absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          isGov ? 'shadow-[0_4px_15px_rgba(0,112,179,0.15)]' : 'shadow-[0_4px_15px_rgba(0,160,255,0.15)]'
        )}
      />
      <span className="relative z-10">{label}</span>
    </div>
  )
}

interface TrustedSectorsSectionProps {
  label?: string
  headline?: string
  description?: string
  governmentSectors?: string[]
  enterpriseSectors?: string[]
  trustNote?: string
}

export function TrustedSectorsSection({
  label = 'WHO WE PROTECT',
  headline = 'Trusted Across Government & Enterprise',
  description = 'From critical national infrastructure to leading private enterprises, organizations rely on Enrich for their security needs.',
  governmentSectors: govSectors = governmentSectors,
  enterpriseSectors: entSectors = enterpriseSectors,
  trustNote = 'Also trusted by: Paytm | Airtel Payments Bank | And 200+ more',
}: TrustedSectorsSectionProps) {
  return (
    <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex justify-center mb-4">
            <SectionLabel variant="both">
              {label}
            </SectionLabel>
          </div>
          <h2 className="block text-center text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] mb-4">
            {headline}
          </h2>
          <p className="block text-center text-[#666666] text-lg font-medium leading-[1.5] max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="space-y-10">
          {/* Government Sectors */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#0070B3]" />
              <p className="text-[#0A1628] text-sm font-semibold uppercase tracking-wider">
                Government & Public Sector
              </p>
              <div className="flex-1 h-px bg-gradient-to-r from-[#0070B3]/30 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {govSectors.map((sector, index) => (
                <SectorBadge key={sector} label={sector} variant="government" index={index} />
              ))}
            </div>
          </div>

          {/* Enterprise Sectors */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#00A0FF]" />
              <p className="text-[#0A1628] text-sm font-semibold uppercase tracking-wider">
                Enterprise & Private Sector
              </p>
              <div className="flex-1 h-px bg-gradient-to-r from-[#00A0FF]/30 to-transparent" />
            </div>
            <div className="flex flex-wrap gap-3">
              {entSectors.map((sector, index) => (
                <SectorBadge key={sector} label={sector} variant="enterprise" index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#F5F5F5] border border-[#DADADA]">
            <div className="flex -space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#0070B3]" />
              <div className="w-2 h-2 rounded-full bg-[#00A0FF]" />
            </div>
            <span className="text-[#666666] text-sm font-medium">{trustNote}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
