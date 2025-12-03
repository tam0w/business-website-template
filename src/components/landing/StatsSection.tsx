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
    <section id="why-enrich" className="bg-[#F5F5F5] py-16 px-6 lg:px-20 relative overflow-hidden">
      {/* Background SVG graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/icons/stats-bg.svg"
          alt=""
          width={543}
          height={228}
          className="w-[50%] md:w-[40%] h-auto opacity-100"
        />
      </div>

      <div className="max-w-[1159px] mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-center">
          {/* Left Stats */}
          <div className="space-y-8">
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <p className="text-[#0070B3] text-5xl lg:text-6xl font-semibold mb-2">
                  {stat.value}
                </p>
                <div className="border-t border-[#E5E5E5] pt-3">
                  <p className="text-[#0A1628] text-xl lg:text-2xl font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Icon & Heading */}
          <div className="col-span-2 lg:col-span-1 order-first lg:order-none text-center py-8">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/images/icons/waf-api.svg"
                alt=""
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <SectionLabel variant="both" className="justify-center mb-4">
              {label}
            </SectionLabel>
            <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
              {heading}
            </h2>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            {stats.slice(2, 4).map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-[#0070B3] text-5xl lg:text-6xl font-semibold mb-2">
                  {stat.value}
                </p>
                <div className="border-t border-[#E5E5E5] pt-3">
                  <p className="text-[#0A1628] text-xl lg:text-2xl font-medium">
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
