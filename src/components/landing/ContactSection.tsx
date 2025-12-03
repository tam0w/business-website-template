'use client'

import { useState } from 'react'
import { Shield, Check, Phone } from 'lucide-react'
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
  subheading = 'Schedule your free security assessment —no obligation.',
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
    <section id="contact" className="bg-[#F5F5F5] py-16 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionLabel>{label}</SectionLabel>
              <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em]">
                {heading}
              </h2>
              <p className="text-[#666666] text-lg font-medium leading-[1.5]">
                {description}
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <p className="text-[#0A1628] text-xl lg:text-2xl font-medium leading-[1.5]">
                {subheading}
              </p>

              <div className="border-t border-[#E5E5E5] pt-6">
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0070B3]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#0070B3]" />
                      </div>
                      <span className="text-[#666666] text-lg font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-[#0A1628] text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="workEmail" className="block text-[#0A1628] text-sm font-medium">
                  Work Email
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="companyName" className="block text-[#0A1628] text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="organizationType" className="block text-[#0A1628] text-sm font-medium">
                  Organization Type
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all appearance-none bg-white"
                  required
                >
                  <option value="">Select organization type</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="government">Government</option>
                  <option value="startup">Startup</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#0070B3] text-white px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-[#0070B3]/90 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  Get Your Free Security Audit
                </button>

                <div className="flex items-center gap-2 text-[#666666]">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">
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
