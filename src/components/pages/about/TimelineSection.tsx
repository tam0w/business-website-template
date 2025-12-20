'use client'

import { SectionLabel } from '@/components/landing'

interface Milestone {
  year: string
  title: string
  description: string
}

const defaultMilestones: Milestone[] = [
  { year: '2014', title: 'Founded', description: 'Enrich Data Services established in Noida' },
  { year: '2017', title: 'Government Trust', description: 'First major government contracts' },
  { year: '2019', title: '100+ Milestone', description: 'Crossed 100 enterprise clients' },
  { year: '2022', title: 'CMMI Level 3', description: 'Achieved process maturity certification' },
  { year: '2024', title: '200+ Scale', description: 'Current enterprise client base' },
]

interface TimelineMilestoneProps {
  milestone: Milestone
  isLast: boolean
}

function TimelineMilestone({ milestone, isLast }: TimelineMilestoneProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connecting line (desktop) */}
      {!isLast && (
        <div className="absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#0070B3]/50 to-[#0070B3]/20 hidden lg:block" />
      )}

      {/* Dot with rings */}
      <div className="relative z-10 mb-6">
        <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-[#0070B3]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0070B3]/15" />
        <div className="relative w-16 h-16 rounded-full bg-[#0070B3]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0070B3]/30">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0070B3] to-[#00A0FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,112,179,0.4)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,112,179,0.5)]">
            <div className="w-4 h-4 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* Year */}
      <span className="text-gradient-blue text-3xl font-bold mb-2 transition-transform duration-300 group-hover:scale-110">
        {milestone.year}
      </span>

      {/* Title */}
      <h4 className="text-[#EDEDED] text-lg font-semibold mb-1.5">{milestone.title}</h4>

      {/* Description */}
      <p className="text-[#EDEDED]/50 text-sm max-w-[160px]">{milestone.description}</p>
    </div>
  )
}

interface TimelineSectionProps {
  label?: string
  headline?: string
  milestones?: Milestone[]
}

export function TimelineSection({
  label = 'OUR JOURNEY',
  headline = 'A Decade of Excellence',
  milestones = defaultMilestones,
}: TimelineSectionProps) {
  return (
    <section className="relative bg-[#0A1628] py-20 lg:py-28 px-6 lg:px-20 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #EDEDED 1px, transparent 1px),
            linear-gradient(to bottom, #EDEDED 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel variant="both" className="justify-center mb-4">
            {label}
          </SectionLabel>
          <h2 className="w-full text-[#EDEDED] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Milestones */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {milestones.map((milestone, index) => (
              <TimelineMilestone
                key={milestone.year}
                milestone={milestone}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
