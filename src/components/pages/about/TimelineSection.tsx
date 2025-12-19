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
    <section className="bg-[#0A1628] py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel variant="both" className="justify-center mb-4">
            {label}
          </SectionLabel>
          <h2 className="text-[#EDEDED] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0070B3]/50 to-transparent hidden lg:block" />

          {/* Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative flex flex-col items-center text-center">
                {/* Dot */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#0070B3]/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#0070B3] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Year */}
                <span className="text-[#0070B3] text-2xl font-bold mb-2">
                  {milestone.year}
                </span>

                {/* Title */}
                <h4 className="text-[#EDEDED] text-lg font-semibold mb-1">
                  {milestone.title}
                </h4>

                {/* Description */}
                <p className="text-[#EDEDED]/60 text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
