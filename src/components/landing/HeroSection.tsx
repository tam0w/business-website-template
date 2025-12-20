import Link from 'next/link'
import { ArrowUpRight, Shield } from 'lucide-react'

interface HeroSectionProps {
  trustBadgeText?: string
  heading?: string
  subheading?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  stats?: {
    value: string
    label: string
  }[]
}

export function HeroSection({
  trustBadgeText = 'Trusted by 200+ Enterprises & 40+ Government Agencies',
  heading = 'Secure Your Digital Future Against $10.5T in Annual Cyber Threats',
  subheading = 'Zero Trust cybersecurity solutions that protect government and enterprise infrastructure — reducing breach attempts by 60% with ZTNA, SASE, SSE, and CNAPP technology.',
  primaryButtonText = 'Schedule Your Free Security Audit',
  primaryButtonLink = '#contact',
  secondaryButtonText = 'See Our Government Success Stories',
  secondaryButtonLink = '#testimonials',
  stats = [
    { value: '99.9% Uptime', label: 'Enterprise SLA' },
    { value: '<2hr Response', label: 'Critical Issues' },
    { value: '24/7 SOC', label: 'Operations' },
  ],
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#0A1628] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Enrich Hero Section Video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]/90" />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-32">
        <div className="max-w-[943px] mx-auto text-center space-y-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#EDEDED]/30 bg-white/5 backdrop-blur-sm">
            <Shield className="w-6 h-6 text-[#0070B3]" />
            <span className="text-[#EDEDED] text-base font-semibold">
              {trustBadgeText}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="w-full text-[#EDEDED] text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              {heading}
            </h1>
            <p className="w-full text-[#EDEDED] text-lg md:text-xl font-medium leading-[1.5] max-w-[770px] mx-auto">
              {subheading}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center gap-3 bg-[#0070B3] text-[#EDEDED] px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-[#0070B3]/90 transition-colors border-[3px] border-black/10"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0070B3] to-[#00A0FF] flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              {primaryButtonText}
            </Link>

            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center gap-2 text-[#EDEDED] text-lg font-medium hover:text-white transition-colors"
            >
              {secondaryButtonText}
              <ArrowUpRight className="w-5 h-5 rotate-45" />
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-14">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-14">
              <div className="text-center min-w-[200px]">
                <p className="text-gradient-blue text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  {stat.value}
                </p>
                <p className="text-[#EDEDED] text-lg font-medium mt-1">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="w-px h-[46px] bg-[#EDEDED]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
