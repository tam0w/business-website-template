'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Cloud, Database, Settings, LucideIcon, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DataCenterService {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  href?: string
}

const defaultServices: DataCenterService[] = [
  {
    icon: Cloud,
    title: 'Hybrid & Multi-Cloud',
    description:
      'Unified management across AWS, Azure, GCP, and private cloud with cost optimization and governance.',
    tags: ['AWS', 'Azure', 'GCP', 'VMware'],
    href: '#',
  },
  {
    icon: Database,
    title: 'Backup & Disaster Recovery',
    description:
      'Automated backup with geo-redundant disaster recovery. Meet RPO/RTO SLAs with immutable storage.',
    tags: ['RPO <1hr', 'Geo-Redundant', 'Ransomware-Proof'],
    href: '#',
  },
  {
    icon: Settings,
    title: '24/7 Managed Infrastructure',
    description:
      'Proactive monitoring, patching, and optimization by certified engineers. Focus on your business, not IT.',
    tags: ['NOC', 'Patch Management', 'Performance'],
    href: '#',
  },
]

interface DataCenterCardProps {
  service: DataCenterService
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function DataCenterCard({ service, isHovered, onHover }: DataCenterCardProps) {
  const Icon = service.icon

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
        <h3 className="text-[#0A1628] text-xl font-semibold tracking-[-0.02em] mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#666666] text-base font-medium leading-[1.6] tracking-[-0.01em] mb-4">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <Badge key={tag} variant="tech">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Know More Link */}
        {service.href && (
          <Link
            href={service.href}
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

interface DataCenterSectionProps {
  label?: string
  headline?: string
  description?: string
  services?: DataCenterService[]
}

export function DataCenterSection({
  label = 'DATA CENTER & CLOUD',
  headline = 'Cloud & Infrastructure Solutions',
  description = 'Modern data center infrastructure for cloud and on-premise — designed for 99.9% uptime and enterprise scale.',
  services = defaultServices,
}: DataCenterSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div className="space-y-2 max-w-[565px]">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
              {headline}
            </h2>
          </div>
          <p className="text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em] max-w-[538px]">
            {description}
          </p>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <DataCenterCard
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
