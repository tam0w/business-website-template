'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ContactFormSectionProps {
  address?: {
    line1: string
    line2: string
    city: string
  }
  contacts?: {
    sales: string
    support: string
    phone: string
  }
}

export function ContactFormSection({
  address = {
    line1: 'B-118, ATS Bouquet, B-Tower, 11th Floor',
    line2: 'Sector-132, Noida — 201304',
    city: 'Uttar Pradesh, India',
  },
  contacts = {
    sales: 'sales@edspl.net',
    support: 'support@edspl.net',
    phone: '+91-9873117177',
  },
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    organizationType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Form */}
          <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-10 border border-[#DADADA]">
            <h2 className="text-[#0A1628] text-2xl lg:text-3xl font-semibold mb-2">
              Request a Consultation
            </h2>
            <p className="text-[#666666] mb-8">
              Fill out the form and our team will get back to you within 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-[#0A1628] text-sm font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-xl border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="workEmail" className="block text-[#0A1628] text-sm font-semibold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full h-12 px-4 rounded-xl border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-[#0A1628] text-sm font-semibold">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full h-12 px-4 rounded-xl border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="organizationType" className="block text-[#0A1628] text-sm font-semibold">
                    Organization Type *
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="government">Government</option>
                    <option value="startup">Startup</option>
                    <option value="other">Other</option>
                  </select>
                  <svg className="absolute right-4 top-[38px] w-5 h-5 text-[#666666] pointer-events-none" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-[#0A1628] text-sm font-semibold">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your security requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#DADADA] bg-white focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all resize-none"
                />
              </div>

              <Button type="submit" size="xl" className="w-full group">
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Right - Contact Info & Map */}
          <div className="flex flex-col gap-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-[#0A1628] text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <a
                href={`mailto:${contacts.sales}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-[#F5F5F5] border border-[#DADADA] hover:border-[#0070B3]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 group-hover:bg-[#0070B3] flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#0070B3] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[#666666] text-sm">Sales Inquiries</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.sales}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`tel:${contacts.phone}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-[#F5F5F5] border border-[#DADADA] hover:border-[#0070B3]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 group-hover:bg-[#0070B3] flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#0070B3] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[#666666] text-sm">Phone</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.phone}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#F5F5F5] border border-[#DADADA]">
                <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#0070B3]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#666666] text-sm">Head Office</p>
                  <p className="text-[#0A1628] font-semibold leading-relaxed">
                    {address.line1}<br />
                    {address.line2}<br />
                    {address.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 min-h-[250px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0070B3]/10 to-[#00A0FF]/5 border border-[#DADADA] relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #0070B3 1px, transparent 1px),
                    linear-gradient(to bottom, #0070B3 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#0070B3]/20 flex items-center justify-center animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-[#0070B3] flex items-center justify-center shadow-[0_0_20px_rgba(0,112,179,0.4)]">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-[#E5E5E5]">
                  <MapPin className="w-4 h-4 text-[#0070B3]" />
                  <span className="text-[#666666] text-sm font-medium">Noida, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
