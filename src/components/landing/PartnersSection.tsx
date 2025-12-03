'use client'

const row1Logos = [
  { name: 'Fortinet', src: '/images/logos/fortinet.svg' },
  { name: 'Palo Alto Networks', src: '/images/logos/palo-alto.svg' },
  { name: 'Cisco', src: '/images/logos/cisco.svg' },
  { name: 'Zscaler', src: '/images/logos/zscaler.svg' },
  { name: 'F5 Networks', src: '/images/logos/f5.svg' },
  { name: 'Juniper Networks', src: '/images/logos/juniper.svg' },
]

const row2Logos = [
  { name: 'Check Point', src: '/images/logos/checkpoint.svg' },
  { name: 'Barracuda', src: '/images/logos/barracuda.svg' },
  { name: 'Netskope', src: '/images/logos/netskope.svg' },
  { name: 'Arista', src: '/images/logos/arista.svg' },
  { name: 'Dell Technologies', src: '/images/logos/dell.svg' },
  { name: 'Ruckus Networks', src: '/images/logos/ruckus.svg' },
]

interface PartnersSectionProps {
  heading?: string
  certifications?: string
}

export function PartnersSection({
  heading = 'Powered By Industry Leaders',
  certifications = '15+ OEM Partnerships • 10+ Years Enterprise Security • ISO 27001 Certified',
}: PartnersSectionProps) {
  return (
    <section className="bg-[#F5F5F5] py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-[#0A1628] text-2xl md:text-3xl font-semibold tracking-[-0.02em] px-6">
          {heading}
        </h2>

        {/* Logo Rows with Blue Strip */}
        <div className="relative flex flex-col gap-12 md:gap-16">
          {/* Row 1 - Scrolling left */}
          <div className="flex overflow-hidden h-[50px] md:h-[60px]">
            <div className="flex items-center gap-8 md:gap-16 animate-[marquee_25s_linear_infinite]">
              {[...row1Logos, ...row1Logos].map((logo, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 h-6 md:h-8 flex items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-full w-auto object-contain"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Blue Certification Strip - overlaps both rows */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[110vw] z-20 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/certification-strip.svg"
              alt={certifications}
              className="w-full h-auto object-cover"
              style={{ minWidth: '110vw' }}
            />
          </div>

          {/* Row 2 - Scrolling right (reverse) */}
          <div className="flex overflow-hidden h-[50px] md:h-[60px]">
            <div className="flex items-center gap-8 md:gap-16 animate-[marquee-reverse_30s_linear_infinite]">
              {[...row2Logos, ...row2Logos].map((logo, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 h-6 md:h-8 flex items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-full w-auto object-contain"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-[60px] md:w-[120px] bg-gradient-to-r from-[#F5F5F5] to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[60px] md:w-[120px] bg-gradient-to-l from-[#F5F5F5] to-transparent z-30 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
