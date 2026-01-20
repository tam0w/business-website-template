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
  // Branding
  const logoIcon = siteBranding.logoIcon
  const logoText = siteBranding.logoText
  const companyName = siteBranding.companyName

  // Hero Section
  const heroHeading = homepageContent.heroHeading
  const heroSubheading = homepageContent.heroSubheading
  const heroPrimaryButtonText = homepageContent.heroPrimaryButtonText
  const heroPrimaryButtonLink = homepageContent.heroPrimaryButtonLink || '#'
  const heroSecondaryButtonText = homepageContent.heroSecondaryButtonText
  const heroSecondaryButtonLink = homepageContent.heroSecondaryButtonLink || '#'

  // Features Section
  const featuresHeading = featuresContent.heading
  const featuresSubheading = featuresContent.subheading
  const features = featuresContent.features

  // CTA Section
  const ctaType = homepageContent.ctaType
  const ctaHeading = homepageContent.ctaHeading
  const ctaDescription = homepageContent.ctaDescription

  // Waitlist CTA
  const waitlistEmailPlaceholder = homepageContent.waitlistEmailPlaceholder || 'Enter your email'
  const waitlistButtonText = homepageContent.waitlistButtonText || 'Join Waitlist'

  // Pricing CTA
  const pricingPlanName = homepageContent.pricingPlanName || 'Pro'
  const pricingPrice = homepageContent.pricingPrice || '$29'
  const pricingPriceSubtext = homepageContent.pricingPriceSubtext || 'per month'
  const pricingFeatures = homepageContent.pricingFeatures || []
  const pricingButtonText = homepageContent.pricingButtonText || 'Get Started'
  const pricingButtonLink = homepageContent.pricingButtonLink || '#'

  // Testimonials Section
  const testimonialsHeading = testimonialsContent.heading
  const testimonialsSubheading = testimonialsContent.subheading
  const testimonials = testimonialsContent.testimonials

  // FAQ Section
  const faqHeading = faqContent.heading
  const faqSubheading = faqContent.subheading
  const faqs = faqContent.faqs

  return (
    <div className="min-h-dvh">
      {/* Hero Section - Editorial Style */}
      <section className="min-h-dvh flex flex-col justify-center px-6 py-32 border-b border-border relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Logo */}
          <div className="mb-16">
            <LogoWithText iconName={logoIcon} logoText={logoText} />
          </div>

          {/* Divider */}
          <div className="divider-primary w-24 mb-12" />

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-8 max-w-4xl">
            {heroHeading}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-body">
            {heroSubheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={heroPrimaryButtonLink}
              className="px-8 py-4 bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors border border-primary"
            >
              {heroPrimaryButtonText}
            </a>
            <a
              href={heroSecondaryButtonLink}
              className="px-8 py-4 bg-transparent text-foreground text-lg font-medium border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {heroSecondaryButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-dvh px-6 py-24 bg-background flex items-center justify-center relative border-b border-border">
        <div className="relative z-10 w-full">
          <FeatureShowcase
            heading={featuresHeading}
            subheading={featuresSubheading}
            features={features}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="border-b border-border">
        <Testimonials
          heading={testimonialsHeading}
          subheading={testimonialsSubheading}
          testimonials={testimonials}
        />
      </div>

      {/* FAQ Section */}
      <div className="border-b border-border">
        <FAQ
          heading={faqHeading}
          subheading={faqSubheading}
          faqs={faqs}
        />
      </div>

      {/* CTA Section - Inverted (green background) */}
      <section className="min-h-[80vh] px-6 py-24 surface-inverted flex items-center justify-center border-b border-border">
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

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-16">
            <LogoWithText
              iconName={logoIcon}
              logoText={logoText}
              iconSize="clamp(2rem, 3vw, 3rem)"
              textClassName="text-3xl md:text-4xl"
              gap="gap-4 md:gap-5"
            />
          </div>

          {/* Divider */}
          <div className="divider mb-12" />

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="tracking-caps text-foreground">Product</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Security</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="tracking-caps text-foreground">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="tracking-caps text-foreground">Resources</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-primary transition-colors cursor-pointer">API</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="tracking-caps text-foreground">Legal</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Privacy</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Terms</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Cookies</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; 2025 {companyName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
