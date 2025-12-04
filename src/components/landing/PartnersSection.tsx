'use client'

import { Marquee, MarqueeItem } from '@/components/ui/marquee'

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
}: PartnersSectionProps) {
  return (
    <section className="bg-secondary py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center space-y-6">
        <h2 className="text-foreground text-2xl md:text-3xl font-semibold tracking-tight px-6">
          {heading}
        </h2>

        <div className="relative flex flex-col gap-12 md:gap-16">
          {/* Row 1 - Scrolling left */}
          <Marquee duration={25} direction="left" className="h-[50px] md:h-[60px]" showFade={false}>
            {row1Logos.map((logo) => (
              <MarqueeItem key={logo.name} className="h-6 md:h-8 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain brightness-0"
                />
              </MarqueeItem>
            ))}
          </Marquee>

          {/* Blue Certification Strip */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[110vw] z-20 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/certification-strip.svg"
              alt="15+ OEM Partnerships • 10+ Years Enterprise Security • ISO 27001 Certified"
              className="w-full h-auto object-cover"
              style={{ minWidth: '110vw' }}
            />
          </div>

          {/* Row 2 - Scrolling right */}
          <Marquee duration={30} direction="right" className="h-[50px] md:h-[60px]" showFade={false}>
            {row2Logos.map((logo) => (
              <MarqueeItem key={logo.name} className="h-6 md:h-8 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain brightness-0"
                />
              </MarqueeItem>
            ))}
          </Marquee>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-[60px] md:w-[120px] bg-gradient-to-r from-secondary to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[60px] md:w-[120px] bg-gradient-to-l from-secondary to-transparent z-30 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
