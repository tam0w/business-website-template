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
    quote: '"EDSPL gave us extended visibility of data flow in our network—enabling us to be more compliant and prepared. Their team always works as your backbone support."',
    authorName: 'Anirban Mandal',
    authorTitle: 'Deputy Director Technology',
    authorCompany: 'NASSCOM',
    metric: {
      value: '60%',
      label: 'Reduction in Security Incidents',
    },
  },
  {
    logo: '/images/logos/nasscom.svg',
    companyName: 'NASSCOM',
    quote: '"EDSPL gave us extended visibility of data flow in our network—enabling us to be more compliant and prepared. Their team always works as your backbone support."',
    authorName: 'Anirban Mandal',
    authorTitle: 'Deputy Director Technology',
    authorCompany: 'NASSCOM',
    metric: {
      value: '60%',
      label: 'Reduction in Security Incidents',
    },
  },
  {
    logo: '/images/logos/nasscom.svg',
    companyName: 'NASSCOM',
    quote: '"EDSPL gave us extended visibility of data flow in our network—enabling us to be more compliant and prepared. Their team always works as your backbone support."',
    authorName: 'Anirban Mandal',
    authorTitle: 'Deputy Director Technology',
    authorCompany: 'NASSCOM',
    metric: {
      value: '60%',
      label: 'Reduction in Security Incidents',
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
      className={`relative bg-card rounded-xl p-8 flex-shrink-0 shadow-md ${
        featured ? 'w-[848px]' : 'w-[763px]'
      }`}
    >
      {/* Company Logo */}
      <div className="mb-8 h-8 flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={testimonial.logo || '/images/logos/nasscom.svg'}
          alt={testimonial.companyName}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Quote */}
      <blockquote className="text-foreground text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="text-muted-foreground text-lg space-y-1">
        <p className="font-semibold text-primary">{testimonial.authorName}</p>
        <p>{testimonial.authorTitle}</p>
        <p>{testimonial.authorCompany}</p>
      </div>

      {/* Metric Badge */}
      {testimonial.metric && (
        <GradientBadge className="absolute bottom-4 -right-4 text-sm md:text-base">
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
  heading = 'Proven Results for Government & Enterprise',
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-white py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 mb-12">
        <div className="text-center space-y-4">
          <SectionLabel variant="both" className="justify-center">
            {label}
          </SectionLabel>
          <h2 className="text-foreground text-3xl lg:text-[42px] font-semibold leading-tight tracking-tight">
            {heading}
          </h2>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <Marquee duration={40} direction="left" fadeColor="#ffffff" gap="md">
        {testimonials.map((testimonial, index) => (
          <MarqueeItem key={index}>
            <TestimonialCard testimonial={testimonial} featured={index % 3 === 1} />
          </MarqueeItem>
        ))}
      </Marquee>
    </section>
  )
}
