'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionLabel } from './SectionLabel'

interface ContactSectionProps {
  label?: string
  heading?: string
  description?: string
  subheading?: string
  benefits?: string[]
  phoneNumber?: string
}

export function ContactSection({
  label = 'BOOK A DEMO',
  heading = 'Secure Your Critical Infrastructure Today',
  description = 'Join 200+ enterprises and 40+ government agencies that trust Enrich to protect their most valuable assets.',
  subheading = 'Schedule Your Free Security Assessment',
  benefits = [
    'No credit card required',
    'Response within 2 hours',
    'ISO 27001 Certified',
  ],
  phoneNumber = '+91 98106 10676',
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    organizationType: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="bg-[#EDEDED] py-16 lg:py-20 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="flex-1 max-w-[600px]">
            <div className="space-y-3">
              <SectionLabel variant="left">{label}</SectionLabel>
              <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] capitalize">
                {heading}
              </h2>
              <p className="text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em]">
                {description}
              </p>
            </div>

            <div className="mt-32 lg:mt-36 space-y-4">
              <p className="text-[#0A1628] text-xl lg:text-2xl font-semibold leading-[1.5] tracking-[-0.02em]">
                {subheading}
                <br />
                <span className="text-[#0070B3] font-bold">—No Obligation.</span>
              </p>

              <div className="border-t border-[#DADADA] pt-4">
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Image
                        src="/images/icons/contact/check-filled.svg"
                        alt=""
                        width={22}
                        height={19}
                        className="w-6 h-5 flex-shrink-0"
                      />
                      <span className="text-[#666666] text-lg lg:text-2xl font-medium tracking-[-0.016em]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 max-w-[600px] bg-white rounded-xl p-8 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-[#666666] text-base font-medium tracking-[-0.016em]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="workEmail" className="block text-[#666666] text-base font-medium tracking-[-0.016em]">
                  Work Email
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-[#666666] text-base font-medium tracking-[-0.016em]">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2 relative">
                <label htmlFor="organizationType" className="block text-[#666666] text-base font-medium tracking-[-0.016em]">
                  Organization Type
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select organization type</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="government">Government</option>
                  <option value="startup">Startup</option>
                  <option value="other">Other</option>
                </select>
                <svg className="absolute right-4 top-[42px] w-5 h-5 text-[#666666] pointer-events-none" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#0070B3] text-white pl-3 pr-6 py-3 rounded-xl font-bold text-lg hover:bg-[#005a8f] transition-colors border-[3px] border-black/10"
                >
                  <div className="w-8 h-8 rounded-full bg-white/30 overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/team/placeholder.jpg"
                      alt=""
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  Get Your Free Security Audit
                </button>

                <div className="flex items-center gap-2 text-[#666666]">
                  <Image
                    src="/images/icons/contact/phone.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-lg font-medium tracking-[-0.016em]">
                    Or call us: {phoneNumber}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
