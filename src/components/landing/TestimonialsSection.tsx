'use client'

import { SectionLabel } from './SectionLabel'

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
      className={`relative bg-white rounded-xl p-8 flex-shrink-0 ${
        featured ? 'w-[848px]' : 'w-[763px]'
      }`}
      style={{
        boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Company Logo/Name */}
      <div className="mb-8 h-8 flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={testimonial.logo || '/images/logos/nasscom.svg'}
          alt={testimonial.companyName}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Quote */}
      <blockquote className="text-[#0A1628] text-2xl lg:text-3xl font-medium leading-[1.5] mb-6">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="text-[#666666] text-lg space-y-1">
        <p className="font-semibold text-[#0070B3]">{testimonial.authorName}</p>
        <p>{testimonial.authorTitle}</p>
        <p>{testimonial.authorCompany}</p>
      </div>

      {/* Metric Badge */}
      {testimonial.metric && (
        <div
          className="absolute bottom-4 -right-4 px-6 py-3 text-white text-sm md:text-base font-semibold shadow-lg"
          style={{
            background: 'linear-gradient(90deg, #0070B3 0%, #00304D 100%)',
            transform: 'rotate(-1deg)',
          }}
        >
          {testimonial.metric.value} {testimonial.metric.label}
        </div>
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
    <section id="testimonials" className="bg-[#F5F5F5] py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 mb-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <SectionLabel variant="both" className="justify-center">
            {label}
          </SectionLabel>
          <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
            {heading}
          </h2>
        </div>
      </div>

      {/* Testimonials Carousel - Auto-scrolling */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[100px] bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[100px] bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-[marquee_40s_linear_infinite]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} featured={index % 3 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
