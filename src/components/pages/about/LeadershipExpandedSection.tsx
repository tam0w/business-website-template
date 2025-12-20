'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'

interface Leader {
  name: string
  title: string
  image: string
  bio: string
  credentials: string[]
}

const defaultLeaders: Leader[] = [
  {
    name: 'Sanjeev Tyagi',
    title: 'CEO',
    image: '/images/team/ceo.jpg',
    bio: '25+ years of industry experience leading enterprise technology strategy. Former Country Head at Juniper Networks, Fortinet, and F5 Networks.',
    credentials: ['Ex-Juniper Country Head', 'Ex-Fortinet Country Head', 'Ex-F5 Country Head'],
  },
  {
    name: 'Vijay Tyagi',
    title: 'CTO',
    image: '/images/team/cto.jpg',
    bio: '24+ years of technical leadership with MS in Cyber Security & Artificial Intelligence. Proven authority in security architecture and infrastructure design.',
    credentials: ['CCIE #22365', 'CISSP', 'CISA', 'CISM', 'MS Cyber Security & AI'],
  },
]

interface LeaderCardExpandedProps {
  leader: Leader
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function LeaderCardExpanded({ leader, isHovered, onHover }: LeaderCardExpandedProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col md:flex-row gap-6 p-6 lg:p-8 rounded-2xl transition-all duration-500',
        'bg-white border border-[#E5E5E5]',
        'hover:border-[#0070B3]/30 hover:shadow-[0_8px_30px_rgba(0,112,179,0.1)]',
        isHovered && 'border-[#0070B3]/30 shadow-[0_8px_30px_rgba(0,112,179,0.1)]'
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Photo placeholder */}
      <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-[#0070B3]/10 to-[#00A0FF]/5 flex-shrink-0">
        {/* Placeholder circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              'w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300',
              'bg-[#0070B3]/10 border-2 border-[#0070B3]/20',
              isHovered && 'bg-[#0070B3]/20 border-[#0070B3]/40'
            )}
          >
            <User className="w-12 h-12 text-[#0070B3]/60" />
          </div>
        </div>
        {/* Placeholder label */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <span className="text-[#666666]/50 text-xs">Photo Placeholder</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-4">
          <h3 className="text-[#0A1628] text-2xl font-semibold tracking-[-0.01em]">
            {leader.name}
          </h3>
          <p className="text-[#0070B3] text-lg font-semibold">{leader.title}</p>
        </div>

        <p className="text-[#666666] text-base leading-relaxed mb-5">{leader.bio}</p>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2">
          {leader.credentials.map((credential) => (
            <span
              key={credential}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300',
                'bg-[#0070B3]/10 text-[#0070B3] border border-[#0070B3]/20',
                isHovered && 'bg-[#0070B3]/15 border-[#0070B3]/30'
              )}
            >
              {credential}
            </span>
          ))}
        </div>
      </div>

      {/* Hover accent */}
      <div
        className={cn(
          'absolute top-0 left-0 w-1 rounded-l-2xl transition-all duration-300',
          'bg-gradient-to-b from-[#0070B3] to-[#00A0FF]',
          isHovered ? 'h-full opacity-100' : 'h-0 opacity-0'
        )}
      />
    </div>
  )
}

interface LeadershipExpandedSectionProps {
  label?: string
  headline?: string
  description?: string
  leaders?: Leader[]
}

export function LeadershipExpandedSection({
  label = 'LEADERSHIP',
  headline = 'Led By Industry Veterans',
  description = 'Our leadership team brings decades of experience from global technology giants.',
  leaders = defaultLeaders,
}: LeadershipExpandedSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[#F5F5F5] py-20 lg:py-28 px-6 lg:px-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0070B3 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <SectionLabel className="mb-4">{label}</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="lg:flex-shrink-0 text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
              {headline}
            </h2>
            <p className="text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em] max-w-[538px] flex-shrink-0">
              {description}
            </p>
          </div>
        </div>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {leaders.map((leader, index) => (
            <LeaderCardExpanded
              key={leader.name}
              leader={leader}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
