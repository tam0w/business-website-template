'use client'

import { SectionLabel } from './SectionLabel'
import { GradientBadge } from '@/components/ui/gradient-badge'
import { Marquee, MarqueeItem } from '@/components/ui/marquee'

interface Testimonial {
  logo?: string
  companyName: string
  quote: string
  authorName: string
  authorTitle: string
  authorCompany: string
  metric?: {
    value: string
    label: string
  }
}

const defaultTestimonials: Testimonial[] = [
  {
    logo: '/images/logos/nasscom.svg',
    companyName: 'NASSCOM',
    quote: '"EDSPL Gave Us Extended Visibility Of Data Flow In Our Network—Enabling Us To Be More Compliant And Prepared. Their Team Always Works As Your Backbone Support."',
    authorName: 'Anirban Mandal',
    authorTitle: 'Deputy Director Technology',
    authorCompany: 'NASSCOM',
    metric: {
      value: '60%',
      label: 'Reduction In Security Incidents',
    },
  },
  {
    logo: '/images/logos/nasscom.svg',
    companyName: 'NASSCOM',
    quote: '"EDSPL Gave Us Extended Visibility Of Data Flow In Our Network—Enabling Us To Be More Compliant And Prepared. Their Team Always Works As Your Backbone Support."',
    authorName: 'Anirban Mandal',
    authorTitle: 'Deputy Director Technology',
    authorCompany: 'NASSCOM',
    metric: {
      value: '60%',
      label: 'Reduction In Security Incidents',
    },
  },
  {
    logo: '/images/logos/nasscom.svg',
    companyName: 'NASSCOM',
    quote: '"EDSPL Gave Us Extended Visibility Of Data Flow In Our Network—Enabling Us To Be More Compliant And Prepared. Their Team Always Works As Your Backbone Support."',
    authorName: 'Anirban Mandal',
    authorTitle: 'Deputy Director Technology',
    authorCompany: 'NASSCOM',
    metric: {
      value: '60%',
      label: 'Reduction In Security Incidents',
    },
  },
]

interface TestimonialCardProps {
  testimonial: Testimonial
  featured?: boolean
}

function TestimonialCard({ testimonial, featured }: TestimonialCardProps) {
  return (
    <div
      className={`relative bg-[#EDEDED] rounded-xl p-8 flex-shrink-0 ${
        featured
          ? 'w-[848px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]'
          : 'w-[763px]'
      }`}
    >
      {/* Company Logo in white pill */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center bg-white px-6 py-4 rounded-full shadow-[1px_1px_2px_0px_rgba(0,0,0,0.16)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={testimonial.logo || '/images/logos/nasscom.svg'}
            alt={testimonial.companyName}
            className="h-4 w-auto object-contain"
          />
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-[#0A1628] text-xl lg:text-2xl font-semibold leading-[1.5] tracking-[-0.02em] mb-8 capitalize">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="text-lg leading-[1.5] tracking-[-0.016em]">
        <p className="font-bold text-[#0070B3]">{testimonial.authorName}</p>
        <p className="text-[#666666] font-medium">{testimonial.authorTitle}</p>
        <p className="text-[#666666] font-medium">{testimonial.authorCompany}</p>
      </div>

      {/* Metric Badge - positioned so triangle fold aligns with card edge */}
      {testimonial.metric && (
        <GradientBadge className="absolute bottom-6 right-[-20px] text-xl lg:text-2xl">
          {testimonial.metric.value} {testimonial.metric.label}
        </GradientBadge>
      )}
    </div>
  )
}

interface TestimonialsSectionProps {
  label?: string
  heading?: string
  testimonials?: Testimonial[]
}

export function TestimonialsSection({
  label = 'TESTIMONIALS',
  heading = 'Proven Results For Government & Enterprise',
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 mb-12">
        <div className="text-center space-y-3">
          <SectionLabel variant="both" className="justify-center">
            {label}
          </SectionLabel>
          <h2 className="text-[#0A1628] text-3xl lg:text-4xl font-semibold leading-[1.2] tracking-[-0.02em] capitalize">
            {heading}
          </h2>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <Marquee duration={40} direction="left" fadeColor="#ffffff" gap="lg">
        {testimonials.map((testimonial, index) => (
          <MarqueeItem key={index}>
            <TestimonialCard testimonial={testimonial} featured={index % 3 === 1} />
          </MarqueeItem>
        ))}
      </Marquee>
    </section>
  )
}
