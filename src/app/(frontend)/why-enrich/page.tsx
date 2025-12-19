import { Metadata } from 'next'
import {
  WhyEnrichHero,
  DifferentiatorsSection,
  TrustedSectorsSection,
  CTASection,
} from '@/components/pages/why-enrich'

export const metadata: Metadata = {
  title: 'Why Choose Enrich | Securing India\'s Citizen-Facing Digital Platforms',
  description: 'From tax filing to train tickets, Enrich secures every citizen touchpoint. CMMI Level 3 certified cybersecurity protecting 40+ government projects.',
  keywords: 'cybersecurity partner India, citizen-facing platform security, public sector IT security, CMMI Level 3',
}

export default function WhyEnrichPage() {
  return (
    <main>
      <WhyEnrichHero />
      <DifferentiatorsSection />
      <TrustedSectorsSection />
      <CTASection />
    </main>
  )
}
