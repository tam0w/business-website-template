import { Metadata } from 'next'
import {
  AboutHero,
  LeadershipExpandedSection,
  TimelineSection,
  MissionValuesSection,
  CertificationsSection,
  ContactLocationSection,
} from '@/components/pages/about'
import { CTASection } from '@/components/pages/why-enrich'
import { NavbarSentinel } from '@/components/NavbarSentinel'

export const metadata: Metadata = {
  title: 'About Enrich Data Services (EDSPL) | Enterprise Cybersecurity Since 2014',
  description: 'CMMI Level 3 certified cybersecurity company. 200+ enterprises, 40+ government projects.',
  keywords: 'Enrich Data Services, cybersecurity company India, CMMI Level 3',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <NavbarSentinel />
      <LeadershipExpandedSection />
      <TimelineSection />
      <MissionValuesSection />
      <CertificationsSection />
      <ContactLocationSection />
      <CTASection
        headline="Ready to Partner with Enrich?"
        body="Join 200+ enterprises securing their infrastructure with us."
        ctaText="Schedule a Consultation"
      />
    </main>
  )
}
