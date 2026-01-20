import { Link } from 'react-router-dom'
import { Hero } from '@/components/Hero'
import FeatureShowcase from '@/components/FeatureShowcase'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { LogoWithText } from '@/components/LogoWithText'
import { WaitlistCTA } from '@/components/WaitlistCTA'
import { PricingCTA } from '@/components/PricingCTA'
import {
  siteBranding,
  homepageContent,
  featuresContent,
  testimonialsContent,
  faqContent,
} from '@/data'

export default function HomePage() {
  const logoIcon = siteBranding.logoIcon
  const logoText = siteBranding.logoText
  const companyName = siteBranding.companyName

  const heroHeading = homepageContent.heroHeading
  const heroSubheading = homepageContent.heroSubheading
  const heroPrimaryButtonText = homepageContent.heroPrimaryButtonText
  const heroPrimaryButtonLink = homepageContent.heroPrimaryButtonLink || '/contact'
  const heroSecondaryButtonText = homepageContent.heroSecondaryButtonText
  const heroSecondaryButtonLink = homepageContent.heroSecondaryButtonLink || '/blog'

  const featuresHeading = featuresContent.heading
  const featuresSubheading = featuresContent.subheading
  const features = featuresContent.features

  const ctaType = homepageContent.ctaType
  const ctaHeading = homepageContent.ctaHeading
  const ctaDescription = homepageContent.ctaDescription

  const waitlistEmailPlaceholder = homepageContent.waitlistEmailPlaceholder || 'Enter your email'
  const waitlistButtonText = homepageContent.waitlistButtonText || 'Join Waitlist'

  const pricingPlanName = homepageContent.pricingPlanName || 'Pro'
  const pricingPrice = homepageContent.pricingPrice || '$29'
  const pricingPriceSubtext = homepageContent.pricingPriceSubtext || 'per month'
  const pricingFeatures = homepageContent.pricingFeatures || []
  const pricingButtonText = homepageContent.pricingButtonText || 'Get Started'
  const pricingButtonLink = homepageContent.pricingButtonLink || '/contact'

  const testimonialsHeading = testimonialsContent.heading
  const testimonialsSubheading = testimonialsContent.subheading
  const testimonials = testimonialsContent.testimonials

  const faqHeading = faqContent.heading
  const faqSubheading = faqContent.subheading
  const faqs = faqContent.faqs

  return (
    <div>
      <Hero
        heading={heroHeading}
        subheading={heroSubheading}
        primaryButtonText={heroPrimaryButtonText}
        primaryButtonLink={heroPrimaryButtonLink}
        secondaryButtonText={heroSecondaryButtonText}
        secondaryButtonLink={heroSecondaryButtonLink}
      />

      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FeatureShowcase
            heading={featuresHeading}
            subheading={featuresSubheading}
            features={features}
          />
        </div>
      </section>

      <div className="border-b border-border">
        <Testimonials
          heading={testimonialsHeading}
          subheading={testimonialsSubheading}
          testimonials={testimonials}
        />
      </div>

      <div className="border-b border-border">
        <FAQ heading={faqHeading} subheading={faqSubheading} faqs={faqs} />
      </div>

      <section className="py-24 lg:py-32 px-6 lg:px-12 surface-inverted">
        {ctaType === 'waitlist' ? (
          <WaitlistCTA
            heading={ctaHeading}
            description={ctaDescription}
            emailPlaceholder={waitlistEmailPlaceholder}
            buttonText={waitlistButtonText}
          />
        ) : (
          <PricingCTA
            heading={ctaHeading}
            description={ctaDescription}
            planName={pricingPlanName}
            price={pricingPrice}
            priceSubtext={pricingPriceSubtext}
            features={pricingFeatures}
            buttonText={pricingButtonText}
            buttonLink={pricingButtonLink}
          />
        )}
      </section>

      <footer className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <LogoWithText
                iconName={logoIcon}
                logoText={logoText}
                iconSize="clamp(1.75rem, 2.5vw, 2.5rem)"
                textClassName="text-2xl md:text-3xl"
                gap="gap-3 md:gap-4"
              />
              <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
                We help ambitious companies tell better stories and build stronger brands through
                strategic content and intelligent automation.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="tracking-caps text-foreground text-xs">Services</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="hover:text-primary transition-colors cursor-pointer">
                    Technical Content
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer">
                    Brand Storytelling
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer">
                    LinkedIn Management
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer">
                    AI Automation
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="tracking-caps text-foreground text-xs">Company</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>
                    <Link to="/contact" className="hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="tracking-caps text-foreground text-xs">Connect</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>
                    <a
                      href="https://linkedin.com/company/ryebrim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ryebrim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/ryebrim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="tracking-caps text-foreground text-xs">Legal</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="hover:text-primary transition-colors cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-primary transition-colors cursor-pointer">
                    Terms of Service
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-border mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 {companyName}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs font-mono">Designed with intention.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
