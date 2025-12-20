'use client'

import { SectionLabel } from '@/components/landing'

interface Milestone {
  year: string
  title: string
  description: string
}

const defaultMilestones: Milestone[] = [
  {
    year: '2014',
    title: 'Founded',
    description: 'Enrich Data Services established in Noida',
  },
  {
    year: '2017',
    title: 'Government Trust',
    description: 'First major government infrastructure projects',
  },
  {
    year: '2019',
    title: '100+ Clients',
    description: 'Crossed enterprise client milestone',
  },
  {
    year: '2022',
    title: 'CMMI Level 3',
    description: 'Achieved process maturity certification',
  },
  {
    year: '2024',
    title: '200+ Enterprises',
    description: 'Trusted by leading organizations nationwide',
  },
]

interface TimelineSectionProps {
  label?: string
  headline?: string
  milestones?: Milestone[]
  mission?: string
}

export function TimelineSection({
  label = 'OUR JOURNEY',
  headline = 'A Decade of Excellence',
  milestones = defaultMilestones,
  mission = 'To empower organizations with enterprise-grade cybersecurity, networking, and data center solutions that protect critical infrastructure while enabling business growth.',
}: TimelineSectionProps) {
  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel variant="both" className="justify-center mb-4">
            {label}
          </SectionLabel>
          <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {headline}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#DADADA] -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'
                  }`}
                >
                  <div className="inline-block">
                    <span className="text-[#0070B3] text-4xl lg:text-5xl font-bold tracking-tight">
                      {milestone.year}
                    </span>
                    <h3 className="text-[#0A1628] text-xl font-semibold mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#666666] text-base font-medium mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Node */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-[#0070B3] ring-4 ring-white shadow-md flex-shrink-0" />

                {/* Spacer for other side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block max-w-3xl">
            <span className="text-[#0070B3] text-sm font-bold uppercase tracking-wider">
              Our Mission
            </span>
            <p className="text-[#0A1628] text-xl lg:text-2xl font-medium leading-relaxed mt-4 italic">
              "{mission}"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
