'use client'

import { Trophy, CheckCircle, Lock, LucideIcon } from 'lucide-react'

interface Certification {
  icon: LucideIcon
  title: string
  detail: string
}

const defaultCertifications: Certification[] = [
  { icon: Trophy, title: 'CMMI Level 3', detail: 'Process maturity • Valid July 2025' },
  { icon: CheckCircle, title: 'ISO 9001:2015', detail: 'Quality management systems' },
  { icon: Lock, title: 'ISO 27001', detail: 'Information security management' },
]

interface CertificationCardProps {
  certification: Certification
}

function CertificationCard({ certification }: CertificationCardProps) {
  const Icon = certification.icon

  return (
    <div className="p-6 rounded-xl bg-[#1A2A3D] border border-[#EDEDED]/10 text-center">
      <div className="w-16 h-16 rounded-full bg-[#0070B3]/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-[#0070B3]" />
      </div>
      <h4 className="text-[#EDEDED] text-xl font-semibold mb-2">
        {certification.title}
      </h4>
      <p className="text-[#EDEDED]/60 text-sm">
        {certification.detail}
      </p>
    </div>
  )
}

interface CertificationsSectionProps {
  headline?: string
  certifications?: Certification[]
}

export function CertificationsSection({
  headline = 'Enterprise-Grade Credentials',
  certifications = defaultCertifications,
}: CertificationsSectionProps) {
  return (
    <section className="bg-[#0A1628] py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[#EDEDED] text-2xl lg:text-3xl font-semibold text-center mb-12">
          {headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
