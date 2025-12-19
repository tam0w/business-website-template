'use client'

import { Building2, Zap, ShieldCheck, Handshake, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Differentiator {
  icon: LucideIcon
  title: string
  stat: string
  statLabel: string
  body: string
}

const defaultDifferentiators: Differentiator[] = [
  {
    icon: Building2,
    title: 'Government Expertise',
    stat: '40+',
    statLabel: 'Projects',
    body: 'Taxation • Transport • National IT',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    stat: '<2hr',
    statLabel: 'Response',
    body: '24/7 SOC operations',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Operations',
    stat: '3',
    statLabel: 'Certs',
    body: 'CMMI L3 • ISO 9001 • ISO 27001',
  },
  {
    icon: Handshake,
    title: 'Global Partnerships',
    stat: '15+',
    statLabel: 'OEMs',
    body: 'Zscaler • F5 • Fortinet • Palo Alto',
  },
]

interface DifferentiatorCardProps {
  differentiator: Differentiator
}

function DifferentiatorCard({ differentiator }: DifferentiatorCardProps) {
  const Icon = differentiator.icon

  return (
    <div className="group relative p-6 lg:p-8 rounded-2xl bg-[#1A2A3D] border border-[#EDEDED]/10 hover:border-[#0070B3]/50 transition-all duration-300">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-[#0070B3]/20 flex items-center justify-center mb-6 group-hover:bg-[#0070B3]/30 transition-colors">
        <Icon className="w-7 h-7 text-[#0070B3]" />
      </div>

      {/* Title */}
      <h3 className="text-[#EDEDED] text-xl font-semibold mb-4">
        {differentiator.title}
      </h3>

      {/* Stat */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-[#0070B3] text-4xl lg:text-5xl font-bold">
          {differentiator.stat}
        </span>
        <span className="text-[#EDEDED]/60 text-lg font-medium">
          {differentiator.statLabel}
        </span>
      </div>

      {/* Body */}
      <p className="text-[#EDEDED]/70 text-base font-medium">
        {differentiator.body}
      </p>
    </div>
  )
}

interface DifferentiatorsSectionProps {
  differentiators?: Differentiator[]
}

export function DifferentiatorsSection({
  differentiators = defaultDifferentiators,
}: DifferentiatorsSectionProps) {
  return (
    <section className="bg-[#0A1628] py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((differentiator) => (
            <DifferentiatorCard
              key={differentiator.title}
              differentiator={differentiator}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
