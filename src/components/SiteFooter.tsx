import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'Networking', href: '/services#networking' },
    { name: 'Cloud & Data Center', href: '/services#datacenter' },
    { name: 'Managed Services', href: '/services#managed' },
  ],
  company: [
    { name: 'Why Enrich', href: '/why-enrich' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  resources: [
    { name: 'Case Studies', href: '#' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Partner Portal', href: '#' },
  ],
}

const certifications = [
  'CMMI Level 3',
  'ISO 27001',
  'ISO 9001',
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white border-t border-[#DADADA]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/images/logos/enrich-logo-blue.svg"
                  alt="Enrich"
                  width={140}
                  height={50}
                  className="h-11 w-auto"
                />
              </Link>
              <p className="text-[#666666] text-sm leading-relaxed mb-5 max-w-sm">
                Enterprise cybersecurity and IT infrastructure partner trusted by 200+ organizations and 40+ government agencies across India.
              </p>

              {/* Contact Info */}
              <div className="space-y-2.5">
                <a
                  href="mailto:info@intelegain.com"
                  className="flex items-center gap-2.5 text-[#666666] hover:text-[#0070B3] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#0070B3]" />
                  info@intelegain.com
                </a>
                <a
                  href="tel:+919810610676"
                  className="flex items-center gap-2.5 text-[#666666] hover:text-[#0070B3] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#0070B3]" />
                  +91 98106 10676
                </a>
                <div className="flex items-start gap-2.5 text-[#666666] text-sm">
                  <MapPin className="w-4 h-4 text-[#0070B3] flex-shrink-0 mt-0.5" />
                  <span>New Delhi & Noida, India</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-[#0A1628] font-semibold text-sm uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#666666] hover:text-[#0070B3] transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-[#0A1628] font-semibold text-sm uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2.5">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#666666] hover:text-[#0070B3] transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-[#0A1628] font-semibold text-sm uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#666666] hover:text-[#0070B3] transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <div className="mt-6">
                <h4 className="text-[#0A1628] font-semibold text-sm uppercase tracking-wider mb-3">
                  Certified
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2.5 py-1 rounded-full bg-[#0070B3]/10 text-[#0070B3] text-xs font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#DADADA] py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#666666] text-sm">
              &copy; {currentYear} Enrich Data Services Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/enrich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#0070B3] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/enrich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#0070B3] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-4 text-sm">
                <Link href="#" className="text-[#666666] hover:text-[#0070B3] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-[#666666] hover:text-[#0070B3] transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
