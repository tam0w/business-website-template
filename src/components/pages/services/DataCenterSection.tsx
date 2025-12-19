'use client'

import { Cloud, Database, Settings, LucideIcon } from 'lucide-react'
import { SectionLabel } from '@/components/landing'

interface DataCenterService {
  icon: LucideIcon
  title: string
  description: string
}

const defaultServices: DataCenterService[] = [
  {
    icon: Cloud,
    title: 'Hybrid & Multi-Cloud',
    description: 'On-prem to cloud integration',
  },
  {
    icon: Database,
    title: 'Backup & DR',
    description: 'Data protection, disaster recovery',
  },
  {
    icon: Settings,
    title: 'Managed Services',
    description: '24/7 monitoring & support',
  },
]

interface DataCenterCardProps {
  service: DataCenterService
}

function DataCenterCard({ service }: DataCenterCardProps) {
  const Icon = service.icon

  return (
    <div className="p-6 rounded-xl bg-[#1A2A3D] border border-[#EDEDED]/10 hover:border-[#0070B3]/30 transition-all">
      <div className="w-14 h-14 rounded-xl bg-[#0070B3]/20 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-[#0070B3]" />
      </div>
      <h4 className="text-[#EDEDED] text-xl font-semibold mb-2">
        {service.title}
      </h4>
      <p className="text-[#EDEDED]/70 text-base">
        {service.description}
      </p>
    </div>
  )
}

interface DataCenterSectionProps {
  label?: string
  headline?: string
  services?: DataCenterService[]
}

export function DataCenterSection({
  label = 'DATA CENTER',
  headline = 'Cloud & On-Premise Infrastructure',
  services = defaultServices,
}: DataCenterSectionProps) {
  return (
    <section className="bg-[#0A1628] py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel className="mb-4">{label}</SectionLabel>
          <h2 className="text-[#EDEDED] text-3xl lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <DataCenterCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
