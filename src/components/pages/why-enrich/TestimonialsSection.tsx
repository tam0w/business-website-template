'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionLabel } from '@/components/landing'

const testimonials = [
  {
    company: 'NASSCOM',
    description: "India's Premier IT Industry Association | 3,000+ Member Companies",
    rating: 10,
    challenge: 'Needed reliable partner to strengthen security posture across their network infrastructure serving thousands of tech companies.',
    solution: 'Extended network visibility enabling compliance readiness and proactive security monitoring.',
    quote: 'We now have extended visibility of data flow in our network — enabling us to be more compliant and prepared. Enrich team always works as your backbone support.',
    author: 'Anirban Mandal',
    role: 'Deputy Director Technology, NASSCOM',
    tags: ['Network Visibility', 'Compliance Ready', 'Backbone Support'],
  },
  {
    company: 'SunSource Energy',
    description: 'Leading Solar Energy Provider | Multi-Location Operations',
    rating: 10,
    challenge: 'Centralizing management of multiple location firewalls while enhancing IT and OT security across expanding solar installations.',
    solution: 'Unified firewall management with industry best practices for IT/OT convergence.',
    quote: 'Significant improvements in operational workflow, reduction in downtime, and enhanced overall productivity. Their quick response and ready availability for issue resolution sets EDSPL apart.',
    author: 'Mandeep Sahani',
    role: 'DGM-IT, SunSource Energy Pvt. Ltd.',
    tags: ['Multi-Site Firewall', 'IT/OT Security', 'Productivity Improvement'],
  },
  {
    company: 'GMR Group',
    description: 'Infrastructure Giant | Airports, Energy & Urban Development',
    rating: 8,
    challenge: 'Required a reliable India-based security partner for critical infrastructure across airports and energy facilities.',
    solution: 'Responsive local partnership with fast turnaround even for non-commercial queries.',
    quote: "Good and timely support from a reliable India-based partner. Fast response even when there may not be a business opportunity — that's genuine partnership.",
    author: 'Rohit Bhandari',
    role: 'Head Security Northern Region, GMR Group',
    tags: ['Critical Infrastructure', 'Rapid Response', 'Local Partner'],
  },
  {
    company: 'Safe Technology India',
    description: 'Cybersecurity Platform | Enterprise Risk Management',
    rating: 10,
    challenge: 'Frequent Wi-Fi connectivity issues at Delhi office impacting productivity and user experience.',
    solution: 'Complete Wi-Fi infrastructure overhaul with thorough site survey, new access points, and optimized coverage.',
    quote: "EDSPL's thorough site survey and expert recommendations helped us completely revamp our Wi-Fi setup. Significantly improved connectivity and stability with minimal downtime.",
    author: 'Karthik Kumar',
    role: 'Senior Manager IT, Safe Technology India',
    tags: ['Wi-Fi Optimization', 'Site Survey', 'Network Performance'],
  },
  {
    company: 'Benori Knowledge',
    description: 'Knowledge & Research Services | Data-Driven Insights',
    rating: 9,
    challenge: 'Managing both hardware and cloud firewalls. Explored multiple vendors before finding the right balance of service, support, and pricing.',
    solution: 'Hybrid firewall management with dedicated relationship manager and expert technical team.',
    quote: 'Excellent support with even quicker response and action. The technical team is excellent. Special thanks to Mr. Ravi, our Relationship Manager.',
    author: 'Dharmvir Singh',
    role: 'IT Manager, Benori Knowledge',
    tags: ['Hybrid Firewall', 'Dedicated Support', 'Relationship Management'],
  },
  {
    company: 'MastersIndia Solutions',
    description: 'GST & Tax Compliance Platform | Fintech SaaS',
    rating: 10,
    challenge: 'Needed to improve overall security environment handling sensitive tax and financial data for thousands of businesses.',
    solution: 'Comprehensive security deployment reducing breach attempts and strengthening environment.',
    quote: "EDSPL's security solutions helped us improve security and significantly reduce security breaches. Their implementation strengthened our entire environment.",
    author: 'Dheeraj Singh',
    role: 'IT Support Engineer, MastersIndia Solutions',
    tags: ['Security Posture', 'Breach Reduction', 'Fintech Security'],
  },
  {
    company: 'DocOnline Health',
    description: 'Telehealth Platform | Healthcare Technology',
    rating: 10,
    challenge: 'Email security threats including SPAM and phishing attacks targeting healthcare communications with sensitive patient data.',
    solution: 'Email security implementation significantly reducing SPAM and phishing attempts.',
    quote: 'Reduced SPAM and phishing attacks significantly. I appreciate the coordination and support from the entire Enrich team throughout implementation.',
    author: 'Udaykumar',
    role: 'Manager IT Infrastructure, DocOnline Health',
    tags: ['Email Security', 'Anti-Phishing', 'Healthcare Compliance'],
  },
]

const linkedClients = ['Paytm', 'Airtel Payments Bank']

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel className="mb-4">Client Results</SectionLabel>
          <h2 className="text-[#0A1628] text-3xl md:text-4xl lg:text-[44px] font-semibold leading-tight mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Measurable security improvements across diverse industries
          </p>

          {/* Linked Clients Badge */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-[#666666] text-sm">Also trusted by:</span>
            {linkedClients.map((client) => (
              <span
                key={client}
                className="px-3 py-1.5 rounded-full bg-[#0070B3]/10 text-[#0070B3] text-sm font-medium"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12 border border-[#DADADA] mb-8">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12">
            {/* Left - Company Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#0070B3] flex items-center justify-center text-white text-xl font-bold">
                  {activeTestimonial.company[0]}
                </div>
                <div>
                  <h3 className="text-[#0A1628] text-xl font-semibold">
                    {activeTestimonial.company}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(activeTestimonial.rating / 2)
                            ? 'text-[#FFB800] fill-[#FFB800]'
                            : 'text-[#DADADA]'
                        }`}
                      />
                    ))}
                    <span className="text-[#666666] text-sm ml-2">
                      {activeTestimonial.rating}/10
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#666666] text-sm mb-6">
                {activeTestimonial.description}
              </p>

              {/* Challenge & Solution */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-[#0A1628] text-sm font-semibold mb-1.5">
                    Challenge
                  </h4>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {activeTestimonial.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0A1628] text-sm font-semibold mb-1.5">
                    Solution
                  </h4>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {activeTestimonial.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Quote */}
            <div className="flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-[#0070B3]/20 mb-4" />
                <blockquote className="text-[#0A1628] text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  "{activeTestimonial.quote}"
                </blockquote>
              </div>

              <div>
                <div className="mb-4">
                  <p className="text-[#0A1628] font-semibold">
                    {activeTestimonial.author}
                  </p>
                  <p className="text-[#666666] text-sm">{activeTestimonial.role}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {activeTestimonial.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#0070B3]/10 text-[#0070B3] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Company Pills */}
          <div className="hidden md:flex flex-wrap gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.company}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  idx === activeIndex
                    ? 'bg-[#0070B3] text-white'
                    : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E5E5E5] border border-[#DADADA]'
                }`}
              >
                {t.company}
              </button>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-[#666666] text-sm">
              {activeIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#DADADA] flex items-center justify-center text-[#666666] hover:bg-[#0070B3] hover:text-white hover:border-[#0070B3] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-[#F5F5F5] border border-[#DADADA] flex items-center justify-center text-[#666666] hover:bg-[#0070B3] hover:text-white hover:border-[#0070B3] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
