import { Metadata } from 'next'
import {
  ServicesHero,
  CyberSecuritySection,
  NetworkingSection,
  DataCenterSection,
  TechnologyPartnersSection,
} from '@/components/pages/services'
import { CTASection } from '@/components/pages/why-enrich'

export const metadata: Metadata = {
  title: 'Cybersecurity & Network Security Services | ZTNA, SASE, SOC | Enrich',
  description: 'Enterprise cybersecurity: Zero Trust, SASE, 24/7 SOC, WAF, DDoS protection. Full catalog for government and enterprise.',
  keywords: 'cybersecurity services India, ZTNA SASE, SOC managed security, WAF API protection',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <CyberSecuritySection />
      <NetworkingSection />
      <DataCenterSection />
      <TechnologyPartnersSection />
      <CTASection
        headline="Not Sure Which Solution Fits?"
        body="Free consultation. We'll analyze your environment."
        ctaText="Schedule Free Consultation"
      />
    </main>
  )
}
