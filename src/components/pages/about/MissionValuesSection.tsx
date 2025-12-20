'use client'

import { useState } from 'react'
import { Shield, Users, Zap, Lightbulb, LucideIcon, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const defaultValues: Value[] = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every solution built on security foundations',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'Backbone support, not just a vendor relationship',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description: '<2hr response for critical issues, 24/7 availability',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'Staying ahead of evolving threats and technologies',
  },
]

interface ValueCardProps {
  value: Value
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function ValueCard({ value, isHovered, onHover }: ValueCardProps) {
  const Icon = value.icon

  return (
    <div
      className={cn(
        'group relative p-5 rounded-xl transition-all duration-300',
        'bg-white border border-[#E5E5E5]',
        'hover:border-[#0070B3]/30 hover:shadow-md',
        isHovered && 'border-[#0070B3]/30 shadow-md'
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div
        className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300',
          'bg-[#0070B3]/10',
          isHovered && 'bg-[#0070B3]'
        )}
      >
        <Icon
          className={cn(
            'w-6 h-6 transition-colors duration-300',
            isHovered ? 'text-white' : 'text-[#0070B3]'
          )}
        />
      </div>
      <h4 className="text-[#0A1628] text-lg font-semibold mb-1.5">{value.title}</h4>
      <p className="text-[#666666] text-sm leading-relaxed">{value.description}</p>
    </div>
  )
}

interface MissionValuesSectionProps {
  missionLabel?: string
  mission?: string
  valuesLabel?: string
  values?: Value[]
}

export function MissionValuesSection({
  missionLabel = 'Our Mission',
  mission = 'To empower organizations with enterprise-grade cybersecurity, networking, and data center solutions that protect critical infrastructure while enabling business growth.',
  valuesLabel = 'Our Values',
  values = defaultValues,
}: MissionValuesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Mission */}
          <div className="flex-1">
            <SectionLabel className="mb-6">{missionLabel}</SectionLabel>
            <div className="relative">
              {/* Large decorative quote */}
              <div className="absolute -top-4 -left-3">
                <Quote className="w-12 h-12 text-[#0070B3]/15 rotate-180" />
              </div>
              <blockquote className="relative pl-8 border-l-2 border-[#0070B3]/30">
                <p className="text-[#0A1628] text-xl lg:text-2xl font-medium leading-relaxed">
                  {mission}
                </p>
              </blockquote>
            </div>

            {/* Mission visual element */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#0070B3]/20 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-[#00A0FF]/20 border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-[#0070B3]/10 border-2 border-white flex items-center justify-center text-[#0070B3] text-xs font-bold">
                  200+
                </div>
              </div>
              <span className="text-[#666666] text-sm font-medium">
                Organizations trust our mission
              </span>
            </div>
          </div>

          {/* Values */}
          <div className="flex-1">
            <SectionLabel className="mb-6">{valuesLabel}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <ValueCard
                  key={value.title}
                  value={value}
                  isHovered={hoveredIndex === index}
                  onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
