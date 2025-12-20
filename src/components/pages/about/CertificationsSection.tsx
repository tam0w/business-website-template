'use client'

import { useState } from 'react'
import { Trophy, CheckCircle, Lock, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'

interface Certification {
  icon: LucideIcon
  title: string
  detail: string
  badge?: string
}

const defaultCertifications: Certification[] = [
  {
    icon: Trophy,
    title: 'CMMI Level 3',
    detail: 'Process maturity certification',
    badge: 'Valid July 2025',
  },
  {
    icon: CheckCircle,
    title: 'ISO 9001:2015',
    detail: 'Quality management systems',
    badge: 'Certified',
  },
  {
    icon: Lock,
    title: 'ISO 27001',
    detail: 'Information security management',
    badge: 'Certified',
  },
]

interface CertificationCardProps {
  certification: Certification
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function CertificationCard({
  certification,
  isHovered,
  onHover,
}: CertificationCardProps) {
  const Icon = certification.icon

  return (
    <div
      className={cn(
        'group relative p-8 rounded-xl text-center transition-all duration-500',
        'bg-gradient-to-b from-[#1A2A3D] to-[#0F1D2E] border border-[#EDEDED]/10',
        'hover:border-[#0070B3]/40 hover:shadow-[0_0_40px_rgba(0,112,179,0.15)]',
        isHovered && 'border-[#0070B3]/40 shadow-[0_0_40px_rgba(0,112,179,0.15)]'
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Badge */}
      {certification.badge && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#0070B3]/20 text-[#0070B3]">
            {certification.badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="relative mx-auto mb-5">
        <div
          className={cn(
            'w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all duration-300',
            'bg-[#0070B3]/20',
            isHovered && 'bg-[#0070B3] shadow-[0_4px_30px_rgba(0,112,179,0.4)]'
          )}
        >
          <Icon
            className={cn(
              'w-10 h-10 transition-colors duration-300',
              isHovered ? 'text-white' : 'text-[#0070B3]'
            )}
          />
        </div>
        {/* Decorative ring */}
        <div
          className={cn(
            'absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 transition-all duration-500',
            isHovered
              ? 'border-[#0070B3]/50 scale-110'
              : 'border-transparent scale-100'
          )}
        />
      </div>

      {/* Content */}
      <h4 className="text-[#EDEDED] text-xl font-semibold mb-2">{certification.title}</h4>
      <p className="text-[#EDEDED]/50 text-sm">{certification.detail}</p>
    </div>
  )
}

interface CertificationsSectionProps {
  label?: string
  headline?: string
  certifications?: Certification[]
}

export function CertificationsSection({
  label = 'CREDENTIALS',
  headline = 'Enterprise-Grade Certifications',
  certifications = defaultCertifications,
}: CertificationsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[#0A1628] py-20 lg:py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0070B3]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel variant="both" className="justify-center mb-4">
            {label}
          </SectionLabel>
          <h2 className="w-full text-[#EDEDED] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              certification={cert}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
