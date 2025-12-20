'use client'

import { Mail, Wrench, Phone, MapPin, ExternalLink } from 'lucide-react'
import { SectionLabel } from '@/components/landing'

interface ContactLocationSectionProps {
  label?: string
  headline?: string
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

export function ContactLocationSection({
  label = 'CONTACT US',
  headline = 'Get in Touch',
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
}: ContactLocationSectionProps) {
  return (
    <section className="relative bg-[#F5F5F5] py-20 lg:py-28 px-6 lg:px-20 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0070B3 0.5px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="flex-1">
            <SectionLabel className="mb-4">{label}</SectionLabel>
            <h2 className="text-[#0A1628] text-3xl lg:text-[42px] font-semibold tracking-[-0.02em] mb-10">
              {headline}
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-8 p-5 rounded-xl bg-white border border-[#E5E5E5]">
              <div className="w-12 h-12 rounded-xl bg-[#0070B3]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#0070B3]" />
              </div>
              <div>
                <h4 className="text-[#0A1628] text-lg font-semibold mb-2">Head Office</h4>
                <p className="text-[#666666] leading-relaxed">
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.city}
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <a
                href={`mailto:${contacts.sales}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#0070B3]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 group-hover:bg-[#0070B3] flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#0070B3] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[#666666] text-sm">Sales Inquiries</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.sales}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`mailto:${contacts.support}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#0070B3]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 group-hover:bg-[#0070B3] flex items-center justify-center transition-colors duration-300">
                  <Wrench className="w-5 h-5 text-[#0070B3] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[#666666] text-sm">Technical Support</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.support}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`tel:${contacts.phone}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#0070B3]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 group-hover:bg-[#0070B3] flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#0070B3] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-[#666666] text-sm">Phone</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.phone}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666666] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right - Map Placeholder */}
          <div className="flex-1">
            <div className="w-full h-full min-h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0070B3]/10 to-[#00A0FF]/5 border border-[#E5E5E5] relative">
              {/* Map placeholder with visual elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Grid lines */}
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

                {/* Location marker */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#0070B3]/20 flex items-center justify-center animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-[#0070B3] flex items-center justify-center shadow-[0_0_20px_rgba(0,112,179,0.4)]">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Pin drop shadow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full blur-sm" />
                </div>
              </div>

              {/* Placeholder text */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-[#E5E5E5]">
                  <MapPin className="w-4 h-4 text-[#0070B3]" />
                  <span className="text-[#666666] text-sm font-medium">
                    Noida, Uttar Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
