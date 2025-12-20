'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionLabel } from './SectionLabel'
import { HighlightStrip } from '@/components/ui/highlight-strip'

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
      className="relative w-full max-w-[423px] cursor-pointer"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Card background - no fill, just shadow */}
      <div className="absolute inset-0 rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16)]" />

      {/* Card content */}
      <div className="relative pt-3 px-3 pb-6">
        {/* Image Container */}
        <div className="relative w-[399px] max-w-full mx-auto">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-300">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name Badge - positioned at bottom of image with slight rotation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 -rotate-1">
            <HighlightStrip variant="badge" gradient="horizontal">
              {leader.name} - {leader.title}
            </HighlightStrip>
          </div>
        </div>

        {/* Experience Text */}
        <div className="mt-[30px] px-3">
          <p className="text-[#0A1628] text-lg font-semibold text-center tracking-[-0.288px] leading-[1.5]">
            {leader.experience}
          </p>
        </div>

        {/* Bio - expands on hover */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-out px-3',
            isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          )}
        >
          <p className="text-[#666666] text-base leading-relaxed text-center">
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
  heading = 'Led By Industry Veterans',
  leaders = defaultLeaders,
}: LeadershipSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="leadership" className="bg-[#EDEDED] py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          {/* Left Column - Heading */}
          <div className="lg:w-[275px] flex-shrink-0">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-[#0A1628] text-3xl lg:text-[36px] font-semibold leading-[1.2] tracking-[-0.72px] capitalize mt-3">
              {heading}
            </h2>
          </div>

          {/* Right Column - Leader Cards */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 flex-1 justify-center items-start">
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
