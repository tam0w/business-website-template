'use client'

import { Link, Network, Wifi, Route, LucideIcon, Building2 } from 'lucide-react'
import { SectionLabel } from '@/components/landing'

interface NetworkService {
  icon: LucideIcon
  title: string
  description: string
}

const defaultServices: NetworkService[] = [
  {
    icon: Link,
    title: 'WAN & SD-WAN',
    description: 'Multi-site intelligent routing',
  },
  {
    icon: Network,
    title: 'LAN & Switching',
    description: 'High-performance local infra',
  },
  {
    icon: Wifi,
    title: 'Enterprise Wireless',
    description: 'Scalable Wi-Fi, seamless roaming',
  },
  {
    icon: Route,
    title: 'Advanced Routing',
    description: 'Complex topology support',
  },
]

interface NetworkingServiceCardProps {
  service: NetworkService
}

function NetworkingServiceCard({ service }: NetworkingServiceCardProps) {
  const Icon = service.icon

  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#DADADA] hover:border-[#0070B3]/30 hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-lg bg-[#0070B3]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#0070B3]" />
      </div>
      <div>
        <h4 className="text-[#0A1628] text-lg font-semibold mb-1">
          {service.title}
        </h4>
        <p className="text-[#666666] text-base">
          {service.description}
        </p>
      </div>
    </div>
  )
}

interface NetworkingSectionProps {
  label?: string
  headline?: string
  services?: NetworkService[]
}

export function NetworkingSection({
  label = 'NETWORKING & WIRELESS',
  headline = 'Infrastructure That Scales',
  services = defaultServices,
}: NetworkingSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left - Illustration Placeholder */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0070B3]/10 to-[#00A0FF]/5 border border-[#0070B3]/20 overflow-hidden">
              {/* Network topology placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* Buildings */}
                <div className="flex items-end justify-between w-full max-w-[350px]">
                  <div className="flex flex-col items-center">
                    <Building2 className="w-10 h-10 text-[#0070B3]/60 mb-2" />
                    <div className="w-20 h-16 rounded-lg bg-[#0070B3]/20" />
                  </div>

                  {/* Connection lines */}
                  <div className="flex-1 h-px bg-[#0070B3]/30 self-center mx-4 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A0FF]" />
                  </div>

                  <div className="flex flex-col items-center">
                    <Wifi className="w-8 h-8 text-[#00A0FF]/60 mb-2" />
                    <div className="w-16 h-12 rounded-lg bg-[#00A0FF]/20" />
                  </div>

                  <div className="flex-1 h-px bg-[#0070B3]/30 self-center mx-4 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A0FF]" />
                  </div>

                  <div className="flex flex-col items-center">
                    <Building2 className="w-10 h-10 text-[#0070B3]/60 mb-2" />
                    <div className="w-20 h-16 rounded-lg bg-[#0070B3]/20" />
                  </div>
                </div>
              </div>

              <p className="absolute bottom-4 left-0 right-0 text-center text-[#666666]/60 text-xs">
                Custom SVG: Network Topology
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <SectionLabel className="mb-4">{label}</SectionLabel>
            <h2 className="text-[#0A1628] text-3xl lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] mb-8">
              {headline}
            </h2>

            {/* Service Cards */}
            <div className="flex flex-col gap-4">
              {services.map((service) => (
                <NetworkingServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
