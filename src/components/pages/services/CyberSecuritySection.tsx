'use client'

import { useState } from 'react'
import { ShieldCheck, Code, Radar, MailCheck, Shield, Target, LucideIcon, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const defaultServices: Service[] = [
  {
    icon: ShieldCheck,
    title: 'Network & Cloud Security',
    description: 'Multi-layered NGFW + Zero Trust',
    tags: ['ZTNA', 'SASE', 'SSE'],
  },
  {
    icon: Code,
    title: 'WAF & API Protection',
    description: 'App layer defense',
    tags: ['WAF', 'API Security'],
  },
  {
    icon: Radar,
    title: '24/7 SOC Services',
    description: 'AI threat hunting, continuous monitoring',
    tags: ['SOC', 'SIEM', 'XDR'],
  },
  {
    icon: MailCheck,
    title: 'Email Security',
    description: 'Phishing prevention',
    tags: ['Anti-Phishing'],
  },
  {
    icon: Shield,
    title: 'Firewall & DDoS',
    description: 'Next-gen firewalls, DDoS mitigation',
    tags: ['NGFW', 'IDS/IPS'],
  },
  {
    icon: Target,
    title: 'Security Assessment',
    description: 'VAPT, breach simulation',
    tags: ['VAPT', 'BAS'],
  },
]

interface ServiceCardProps {
  service: Service
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function ServiceCard({ service, isHovered, onHover }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div
      className={cn(
        'group relative p-6 rounded-xl transition-all duration-300 cursor-pointer bg-white border border-[#DADADA]',
        isHovered ? 'shadow-lg border-[#0070B3]/30' : 'hover:shadow-md'
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-[#0070B3]/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-[#0070B3]" />
      </div>

      {/* Content */}
      <h3 className="text-[#0A1628] text-xl font-semibold mb-2">
        {service.title}
      </h3>
      <p className="text-[#666666] text-base font-medium mb-4">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#666666] text-xs font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover Arrow */}
      <div
        className={cn(
          'absolute top-6 right-6 w-8 h-8 rounded-full bg-[#0070B3] flex items-center justify-center transition-all duration-300',
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        )}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>
    </div>
  )
}

interface CyberSecuritySectionProps {
  label?: string
  headline?: string
  services?: Service[]
}

export function CyberSecuritySection({
  label = 'CYBER SECURITY',
  headline = 'Comprehensive Threat Protection',
  services = defaultServices,
}: CyberSecuritySectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#EDEDED] py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel className="mb-4">{label}</SectionLabel>
          <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              isHovered={hoveredIndex === index}
              onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
