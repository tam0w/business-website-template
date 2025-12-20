import { Metadata } from 'next'
import {
  WhyEnrichHero,
  CitizenLifecycleSection,
  DifferentiatorsSection,
  TimelineSection,
  TrustedSectorsSection,
  CTASection,
} from '@/components/pages/why-enrich'
import { NavbarSentinel } from '@/components/NavbarSentinel'

export const metadata: Metadata = {
  title: 'Why Choose Enrich | Securing India\'s Citizen-Facing Digital Platforms',
  description: 'From tax filing to train tickets, Enrich secures every citizen touchpoint. CMMI Level 3 certified cybersecurity protecting 40+ government projects.',
  keywords: 'cybersecurity partner India, citizen-facing platform security, public sector IT security, CMMI Level 3',
}

export default function WhyEnrichPage() {
  return (
    <main>
      <WhyEnrichHero />
      <NavbarSentinel />
      <CitizenLifecycleSection />
      <DifferentiatorsSection />
      <TimelineSection />
      <TrustedSectorsSection />
      <CTASection />
    </main>
  )
}
