'use client'

import { Mail, Wrench, Phone, MapPin } from 'lucide-react'

interface ContactLocationSectionProps {
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
    <section className="bg-[#EDEDED] py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="flex-1">
            <h2 className="text-[#0A1628] text-2xl lg:text-3xl font-semibold mb-8">
              Get in Touch
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#0070B3]" />
              </div>
              <div>
                <h4 className="text-[#0A1628] text-lg font-semibold mb-1">Head Office</h4>
                <p className="text-[#666666]">
                  {address.line1}<br />
                  {address.line2}<br />
                  {address.city}
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href={`mailto:${contacts.sales}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0070B3]" />
                </div>
                <div>
                  <p className="text-[#666666] text-sm">Sales</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.sales}</p>
                </div>
              </a>

              <a
                href={`mailto:${contacts.support}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-[#0070B3]" />
                </div>
                <div>
                  <p className="text-[#666666] text-sm">Support</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.support}</p>
                </div>
              </a>

              <a
                href={`tel:${contacts.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0070B3]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0070B3]" />
                </div>
                <div>
                  <p className="text-[#666666] text-sm">Phone</p>
                  <p className="text-[#0A1628] font-semibold">{contacts.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="flex-1">
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7068!2d77.3963!3d28.5145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzUyLjIiTiA3N8KwMjMnNDYuNyJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Enrich Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
