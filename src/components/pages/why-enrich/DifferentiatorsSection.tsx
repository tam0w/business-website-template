'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building2, Zap, ShieldCheck, Handshake, LucideIcon, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'
import { Card, CardContent } from '@/components/ui/card'

interface Differentiator {
  icon: LucideIcon
  title: string
  stat: string
  statLabel: string
  description: string
  href?: string
}

const defaultDifferentiators: Differentiator[] = [
  {
    icon: Building2,
    title: 'Government Expertise',
    stat: '40+',
    statLabel: 'Projects',
    description: 'Deep experience across taxation, public transport, national IT, and critical infrastructure.',
    href: '#',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    stat: '<2hr',
    statLabel: 'Response',
    description: '24/7 SOC operations with guaranteed response times for critical issues.',
    href: '#',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Excellence',
    stat: '3',
    statLabel: 'Certifications',
    description: 'CMMI Level 3, ISO 9001:2015, and ISO 27001 certified operations.',
    href: '#',
  },
  {
    icon: Handshake,
    title: 'Premium Partnerships',
    stat: '15+',
    statLabel: 'OEMs',
    description: 'Authorized partner of Zscaler, F5, Fortinet, Palo Alto, Cisco, and more.',
    href: '#',
  },
]

interface DifferentiatorCardProps {
  differentiator: Differentiator
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function DifferentiatorCard({ differentiator, isHovered, onHover }: DifferentiatorCardProps) {
  const Icon = differentiator.icon

  return (
    <Card
      variant="feature"
      hovered={isHovered}
      padding="default"
      gap="none"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <CardContent className="space-y-0">
        {/* Icon */}
        <div
          className={cn(
            'w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300',
            isHovered
              ? 'bg-[#0070B3] shadow-[0_4px_16px_rgba(0,112,179,0.25)]'
              : 'bg-[#0070B3]/10'
          )}
        >
          <Icon
            className={cn(
              'w-7 h-7 transition-colors duration-300',
              isHovered ? 'text-white' : 'text-[#0070B3]'
            )}
          />
        </div>

        {/* Title */}
        <h3 className="text-[#0A1628] text-xl font-semibold tracking-[-0.02em] mb-3">
          {differentiator.title}
        </h3>

        {/* Stat */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-[#0070B3] text-4xl font-bold tracking-tight">
            {differentiator.stat}
          </span>
          <span className="text-[#666666] text-base font-medium">
            {differentiator.statLabel}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#666666] text-base font-medium leading-[1.6] tracking-[-0.01em] mb-4">
          {differentiator.description}
        </p>

        {/* Know More Link */}
        {differentiator.href && (
          <Link
            href={differentiator.href}
            className={cn(
              'flex items-center gap-2 text-[#0A1628] text-base font-semibold transition-all duration-300',
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2 pointer-events-none'
            )}
          >
            Know more
            <ArrowUpRight className="w-4 h-4 rotate-45" />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

interface DifferentiatorsSectionProps {
  label?: string
  headline?: string
  differentiators?: Differentiator[]
}

export function DifferentiatorsSection({
  label = 'WHY ENRICH',
  headline = 'What Sets Us Apart',
  differentiators = defaultDifferentiators,
}: DifferentiatorsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F5F5F5] py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel variant="both" className="justify-center mb-4">
            {label}
          </SectionLabel>
          <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Cards Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {differentiators.map((differentiator, index) => (
            <DifferentiatorCard
              key={differentiator.title}
              differentiator={differentiator}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
