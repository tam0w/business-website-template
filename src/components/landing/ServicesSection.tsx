'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

interface Service {
  icon: string
  title: string
  description: string
  href?: string
}

const defaultServices: Service[] = [
  {
    icon: '/images/icons/network-cloud.svg',
    title: 'Network & Cloud Security',
    description: 'Multi-layered protection from perimeter to cloud—featuring NGFW, DDoS defense, IDS/IPS, and Zero Trust architecture.',
    href: '#',
  },
  {
    icon: '/images/icons/waf-api.svg',
    title: 'WAF & API Protection',
    description: 'Comprehensive application layer defense with real-time threat detection and automated response capabilities.',
    href: '#',
  },
  {
    icon: '/images/icons/soc-services.svg',
    title: '24/7 SOC Services',
    description: 'AI-powered threat hunting with continuous monitoring, incident response, and compliance management for mission-critical systems.',
    href: '#',
  },
]

interface ServiceCardProps {
  service: Service
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function ServiceCard({ service, isHovered, onHover }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative p-6 rounded-xl transition-all duration-300 cursor-pointer',
        isHovered ? 'bg-neutral-100 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]' : 'hover:bg-neutral-50'
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-6">
        <Image
          src={service.icon}
          alt=""
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-[#0A1628] text-2xl font-semibold tracking-[-0.02em] capitalize">
          {service.title}
        </h3>
        <p className="text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em]">
          {service.description}
        </p>
      </div>

      {/* Know More Link - Shows on hover */}
      {service.href && (
        <Link
          href={service.href}
          className={cn(
            'flex items-center gap-2 mt-6 text-[#0A1628] text-lg font-medium transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          )}
        >
          Know more
          <ArrowUpRight className="w-5 h-5 rotate-45" />
        </Link>
      )}
    </div>
  )
}

interface ServicesSectionProps {
  label?: string
  heading?: string
  description?: string
  services?: Service[]
}

export function ServicesSection({
  label = 'WHAT WE OFFER',
  heading = 'Comprehensive Protection for Modern Threats',
  description = 'Enterprise-grade security solutions addressing the 45% increase in supply-chain attacks and evolving threat landscapes.',
  services = defaultServices,
}: ServicesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div className="space-y-2 max-w-[565px]">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize">
              {heading}
            </h2>
          </div>
          <p className="text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em] max-w-[538px]">
            {description}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
