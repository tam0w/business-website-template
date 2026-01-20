import DarkVeil from '@/components/DarkVeil'
import FeatureShowcase from '@/components/FeatureShowcase'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { TextReveal } from '@/components/ui/text-reveal'
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
    <div className="min-h-dvh snap-y snap-mandatory overflow-y-scroll h-dvh">
      {/* Hero Section with DarkVeil Background */}
      <section className="relative h-dvh flex items-end pb-32 md:pb-40 justify-center bg-gradient-to-br from-[oklch(0.15_0.15_265)] via-[oklch(0.08_0.05_265)] to-background snap-start snap-always border-b border-border">
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil
            hueShift={27}
            noiseIntensity={0}
            scanlineIntensity={0.02}
            speed={0.5}
            scanlineFrequency={0.05}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          {/* Combined Logo: Icon + Text */}
          <div className="mb-12">
            <LogoWithText iconName={logoIcon} logoText={logoText} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            <TextReveal split="word" delay={0.15} duration={0.8} from="bottom" blur={10}>
              {heroHeading}
            </TextReveal>
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground mx-auto leading-relaxed">
            <TextReveal split="word" delay={0.05} duration={0.4} from="bottom" blur={8}>
              {heroSubheading}
            </TextReveal>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href={heroPrimaryButtonLink} className="px-12 py-4 bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-primary border border-primary/20">
              {heroPrimaryButtonText}
            </a>
            <a href={heroSecondaryButtonLink} className="px-12 py-4 glass text-foreground text-lg font-semibold hover:border-primary/40 transition-all duration-300 border-glow-hover">
              {heroSecondaryButtonText}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-dvh px-6 py-20 bg-background flex items-center justify-center snap-start snap-always relative border-b border-border">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 size-full -z-10 dot-grid opacity-30" />
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

      {/* CTA Section */}
      <section className="h-dvh px-6 bg-gradient-radial-primary flex items-center justify-center snap-start snap-always border-b border-border relative">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 size-full -z-10 dot-grid opacity-20" />
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
      <footer className="min-h-dvh border-t border-border py-16 px-6 flex items-center justify-center snap-start snap-always relative">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 size-full -z-10 dot-grid opacity-30" />
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Logo: Icon + Text */}
          <div className="pb-8">
            <LogoWithText
              iconName={logoIcon}
              logoText={logoText}
              iconSize="clamp(2.5rem, 4vw, 4rem)"
              textClassName="text-4xl md:text-5xl lg:text-6xl"
              gap="gap-5 md:gap-6 lg:gap-8"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="font-bold">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Security</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-primary transition-colors cursor-pointer">API</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Privacy</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Terms</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Cookies</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 {companyName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
