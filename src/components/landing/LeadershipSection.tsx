'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'

interface Leader {
  name: string
  title: string
  image: string
  experience: string
  bio: string
}

const defaultLeaders: Leader[] = [
  {
    name: 'Sanjeev Tyagi',
    title: 'CEO',
    image: '/images/team/ceo.jpg',
    experience: '25+ Years Enterprise Security Leadership',
    bio: 'Ex-Country Head at Juniper, Fortinet & F5 with government, defense, and enterprise tech expertise.',
  },
  {
    name: 'Vijay Tyagi',
    title: 'CTO',
    image: '/images/team/cto.jpg',
    experience: '24+ Years Technical Leadership',
    bio: 'MS in Cyber Security & AI with top security certifications (CISA, CISSP, CCIE, AWS, Zscaler); former SOC & Infra Security Head.',
  },
]

interface LeaderCardProps {
  leader: Leader
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function LeaderCard({ leader, isHovered, onHover }: LeaderCardProps) {
  return (
    <div
      className={cn(
        'relative bg-white rounded-xl overflow-hidden transition-all duration-500 cursor-pointer',
        'w-full max-w-[423px]',
        isHovered ? 'shadow-lg' : 'shadow-md'
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Image Container */}
      <div className="relative mx-3 mt-3">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
          {/* Placeholder - replace with actual images */}
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-500 text-8xl font-bold opacity-30">
              {leader.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Name Badge - positioned at bottom of image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0070B3] text-white px-6 py-3 rounded-lg whitespace-nowrap shadow-lg">
          <span className="font-semibold text-lg">{leader.name}</span>
          <span className="mx-2 opacity-70">-</span>
          <span className="font-medium">{leader.title}</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 pt-6">
        <p className="text-[#0A1628] text-sm font-semibold mb-2">
          {leader.experience}
        </p>

        {/* Bio - expands on hover */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-500',
            isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <p className="text-[#666666] text-sm leading-relaxed pt-2">
            {leader.bio}
          </p>
        </div>
      </div>
    </div>
  )
}

interface LeadershipSectionProps {
  label?: string
  heading?: string
  leaders?: Leader[]
}

export function LeadershipSection({
  label = 'LEADERSHIP',
  heading = 'Led by Industry Veterans',
  leaders = defaultLeaders,
}: LeadershipSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="leadership" className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* Left Column - Heading */}
          <div className="lg:w-[275px] lg:flex lg:flex-col lg:justify-center lg:min-h-[492px]">
            <div>
              <SectionLabel>{label}</SectionLabel>
              <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize mt-4">
                {heading}
              </h2>
            </div>
          </div>

          {/* Right Column - Leader Cards */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 flex-1 justify-center">
            {leaders.map((leader, index) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                isHovered={hoveredIndex === index}
                onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
