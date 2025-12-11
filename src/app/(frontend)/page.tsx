import {
  HeroSection,
  PartnersSection,
  ServicesSection,
  TestimonialsSection,
  LeadershipSection,
  StatsSection,
  ContactSection,
} from '@/components/landing'
import { NavbarSentinel } from '@/components/NavbarSentinel'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <NavbarSentinel />
      <PartnersSection />
      <ServicesSection />
      <TestimonialsSection />
      <LeadershipSection />
      <StatsSection />
      <ContactSection />
    </main>
  )
}
