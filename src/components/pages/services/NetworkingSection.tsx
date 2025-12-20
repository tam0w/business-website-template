'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Link2, Network, Wifi, Route, LucideIcon, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'
import { Card, CardContent } from '@/components/ui/card'

interface NetworkService {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

const defaultServices: NetworkService[] = [
  {
    icon: Link2,
    title: 'WAN & SD-WAN',
    description:
      'Multi-site connectivity with intelligent traffic routing, automatic failover, and 99.99% uptime SLA.',
    href: '#',
  },
  {
    icon: Network,
    title: 'LAN & Switching',
    description:
      'High-performance Cisco/Juniper switching with PoE+, stacking, and network segmentation.',
    href: '#',
  },
  {
    icon: Wifi,
    title: 'Enterprise Wireless',
    description:
      'Scalable Wi-Fi 6/6E with centralized management, guest portals, and location analytics.',
    href: '#',
  },
  {
    icon: Route,
    title: 'Network Design',
    description:
      'Custom network architecture, BGP/OSPF routing, and performance tuning for complex topologies.',
    href: '#',
  },
]

interface NetworkCardProps {
  service: NetworkService
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function NetworkCard({ service, isHovered, onHover }: NetworkCardProps) {
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

interface NetworkingSectionProps {
  label?: string
  headline?: string
  description?: string
  services?: NetworkService[]
}

export function NetworkingSection({
  label = 'NETWORKING',
  headline = 'Enterprise Network Infrastructure',
  description = 'Design, deploy, and manage high-performance networks — from single office to 250+ distributed locations.',
  services = defaultServices,
}: NetworkingSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F5F5F5] py-16 px-6 lg:px-20">
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

        {/* Network Cards Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <NetworkCard
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
