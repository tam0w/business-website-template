'use client'

import { Shield, Users, Zap, Lightbulb, LucideIcon } from 'lucide-react'

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const defaultValues: Value[] = [
  { icon: Shield, title: 'Security First', description: 'Every solution built on security foundations' },
  { icon: Users, title: 'True Partnership', description: 'Backbone support, not just a vendor' },
  { icon: Zap, title: 'Rapid Response', description: '<2hr for critical issues, 24/7' },
  { icon: Lightbulb, title: 'Continuous Innovation', description: 'Staying ahead of threats' },
]

interface ValueCardProps {
  value: Value
}

function ValueCard({ value }: ValueCardProps) {
  const Icon = value.icon

  return (
    <div className="p-5 rounded-xl bg-white border border-[#DADADA] hover:border-[#0070B3]/30 hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-lg bg-[#0070B3]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#0070B3]" />
      </div>
      <h4 className="text-[#0A1628] text-lg font-semibold mb-1">
        {value.title}
      </h4>
      <p className="text-[#666666] text-sm">
        {value.description}
      </p>
    </div>
  )
}

interface MissionValuesSectionProps {
  mission?: string
  values?: Value[]
}

export function MissionValuesSection({
  mission = 'To empower organizations with enterprise-grade cybersecurity, networking, and data center solutions that protect critical infrastructure while enabling business growth.',
  values = defaultValues,
}: MissionValuesSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Mission */}
          <div className="flex-1">
            <h3 className="text-[#0070B3] text-sm font-bold uppercase tracking-wider mb-4">
              Our Mission
            </h3>
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-[#0070B3]/20 text-6xl font-serif">
                "
              </span>
              <p className="text-[#0A1628] text-xl lg:text-2xl font-medium leading-relaxed pl-6">
                {mission}
              </p>
            </blockquote>
          </div>

          {/* Values */}
          <div className="flex-1">
            <h3 className="text-[#0070B3] text-sm font-bold uppercase tracking-wider mb-4">
              Our Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <ValueCard key={value.title} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
