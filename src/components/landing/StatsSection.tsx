import Image from 'next/image'
import { SectionLabel } from './SectionLabel'

interface Stat {
  value: string
  label: string
}

const defaultStats: Stat[] = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '40+', label: 'Government Projects' },
  { value: '15+', label: 'OEM Partners' },
  { value: '10+', label: 'Years Excellence' },
]

interface StatsSectionProps {
  label?: string
  heading?: string
  stats?: Stat[]
}

export function StatsSection({
  label = 'Our Impact',
  heading = 'Trusted at Scale',
  stats = defaultStats,
}: StatsSectionProps) {
  return (
    <section id="why-enrich" className="bg-white py-24 lg:py-32 px-6 lg:px-20 relative overflow-hidden">
      {/* Background globe graphic - positioned at bottom center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
        <Image
          src="/images/icons/stats-bg.svg"
          alt=""
          width={600}
          height={280}
          className="w-[600px] h-auto opacity-80"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-y-12 lg:gap-x-32 items-center min-h-[400px]">
          {/* Left Stats */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {stats.slice(0, 2).map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center lg:text-right ${idx === 1 ? 'lg:mr-10' : ''}`}
              >
                <p className="text-[#0070B3] text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em]">
                  {stat.value}
                </p>
                <div className="border-t border-[#D1D5DB] mt-3 pt-3">
                  <p className="text-[#0A1628] text-xl lg:text-2xl font-semibold tracking-[-0.02em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Icon & Heading */}
          <div className="col-span-2 lg:col-span-1 order-first lg:order-none text-center flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 mb-8">
              <Image
                src="/images/icons/waf-api.svg"
                alt=""
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <SectionLabel variant="both" className="justify-center mb-3">
              {label}
            </SectionLabel>
            <h2 className="w-full text-[#0A1628] text-3xl lg:text-4xl font-semibold leading-[1.2] tracking-[-0.02em]">
              {heading}
            </h2>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {stats.slice(2, 4).map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center lg:text-left ${idx === 1 ? 'lg:ml-10' : ''}`}
              >
                <p className="text-[#0070B3] text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em]">
                  {stat.value}
                </p>
                <div className="border-t border-[#D1D5DB] mt-3 pt-3">
                  <p className="text-[#0A1628] text-xl lg:text-2xl font-semibold tracking-[-0.02em]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
