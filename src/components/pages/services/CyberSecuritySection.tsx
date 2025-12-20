'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Code,
  Radar,
  MailCheck,
  Shield,
  Target,
  LucideIcon,
  ArrowUpRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionLabel } from '@/components/landing'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  href?: string
}

const defaultServices: Service[] = [
  {
    icon: ShieldCheck,
    title: 'Network & Cloud Security',
    description:
      'Multi-layered protection from perimeter to cloud featuring NGFW, DDoS defense, IDS/IPS, and Zero Trust architecture.',
    tags: ['ZTNA', 'SASE', 'SSE', 'CNAPP'],
    href: '#',
  },
  {
    icon: Code,
    title: 'WAF & API Protection',
    description:
      'Comprehensive application layer defense with real-time threat detection and automated response capabilities.',
    tags: ['WAF', 'API Security', 'NGINX'],
    href: '#',
  },
  {
    icon: Radar,
    title: '24/7 SOC Services',
    description:
      'AI-powered threat hunting with continuous monitoring, incident response, and compliance management for mission-critical systems.',
    tags: ['SOC', 'SIEM', 'SOAR', 'XDR'],
    href: '#',
  },
  {
    icon: MailCheck,
    title: 'Email Security',
    description:
      'Advanced threat protection and phishing prevention. Block malware, BEC attacks, and SPAM before they reach your inbox.',
    tags: ['Anti-Phishing', 'SPAM Protection'],
    href: '#',
  },
  {
    icon: Shield,
    title: 'Firewall & DDoS Protection',
    description:
      'Network perimeter security with next-gen firewalls and DDoS mitigation. Enterprise-grade threat prevention.',
    tags: ['NGFW', 'DDoS', 'IDS/IPS'],
    href: '#',
  },
  {
    icon: Target,
    title: 'Security Assessment',
    description:
      'VAPT, Breach & Attack Simulation, and comprehensive security assessments to identify vulnerabilities before attackers do.',
    tags: ['VAPT', 'BAS', 'Pen Testing'],
    href: '#',
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

interface CyberSecuritySectionProps {
  label?: string
  headline?: string
  description?: string
  services?: Service[]
}

export function CyberSecuritySection({
  label = 'CYBERSECURITY',
  headline = 'Enterprise Threat Protection',
  description = 'Comprehensive security from network edge to cloud applications — protecting against $10.5T in annual cyber threats.',
  services = defaultServices,
}: CyberSecuritySectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header - matches landing ServicesSection */}
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

        {/* Service Cards Grid */}
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
