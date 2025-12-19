'use client'

import Image from 'next/image'
import { SectionLabel } from '@/components/landing'

interface Leader {
  name: string
  title: string
  image: string
  bio: string
  credentials: string[]
}

const defaultLeaders: Leader[] = [
  {
    name: 'Sanjeev Tyagi',
    title: 'CEO',
    image: '/images/team/ceo.jpg',
    bio: '25+ years of industry experience leading enterprise technology strategy. Former Country Head at Juniper Networks, Fortinet, and F5 Networks.',
    credentials: ['Ex-Juniper Country Head', 'Ex-Fortinet Country Head', 'Ex-F5 Country Head'],
  },
  {
    name: 'Vijay Tyagi',
    title: 'CTO',
    image: '/images/team/cto.jpg',
    bio: '24+ years of technical leadership with MS in Cyber Security & Artificial Intelligence. Proven authority in security architecture and infrastructure design.',
    credentials: ['CCIE #22365', 'CISSP', 'CISA', 'CISM', 'MS Cyber Security & AI'],
  },
]

interface LeaderCardExpandedProps {
  leader: Leader
}

function LeaderCardExpanded({ leader }: LeaderCardExpandedProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)]">
      {/* Photo */}
      <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
        <Image
          src={leader.image}
          alt={leader.name}
          width={192}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-3">
          <h3 className="text-[#0A1628] text-2xl font-semibold">
            {leader.name}
          </h3>
          <p className="text-[#0070B3] text-lg font-semibold">
            {leader.title}
          </p>
        </div>

        <p className="text-[#666666] text-base leading-relaxed mb-4">
          {leader.bio}
        </p>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2">
          {leader.credentials.map((credential) => (
            <span
              key={credential}
              className="px-3 py-1.5 rounded-md bg-[#0070B3]/10 text-[#0070B3] text-sm font-semibold"
            >
              {credential}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

interface LeadershipExpandedSectionProps {
  label?: string
  headline?: string
  leaders?: Leader[]
}

export function LeadershipExpandedSection({
  label = 'LEADERSHIP',
  headline = 'Led By Industry Veterans',
  leaders = defaultLeaders,
}: LeadershipExpandedSectionProps) {
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

        {/* Leader Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {leaders.map((leader) => (
            <LeaderCardExpanded key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  )
}
