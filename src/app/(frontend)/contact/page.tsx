import { Metadata } from 'next'
import { ContactHero, ContactFormSection } from '@/components/pages/contact'
import { NavbarSentinel } from '@/components/NavbarSentinel'

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Your Free Security Assessment | Enrich',
  description: 'Get a free security assessment from Enrich. Our experts will analyze your environment and provide a risk score in 48 hours.',
  keywords: 'contact Enrich, security assessment, cybersecurity consultation, IT security audit',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <NavbarSentinel />
      <ContactFormSection />
    </main>
  )
}
