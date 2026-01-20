import { Link } from 'react-router-dom'
import { Hero } from '@/components/Hero'
import FeatureShowcase from '@/components/FeatureShowcase'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { WaitlistCTA } from '@/components/WaitlistCTA'
import { PricingCTA } from '@/components/PricingCTA'
import { Footer } from '@/components/Footer'
import { Lightbulb, Target, Users, ArrowRight } from 'lucide-react'
import {
  homepageContent,
  featuresContent,
  testimonialsContent,
  faqContent,
  aboutContent,
} from '@/data'

export default function HomePage() {
  const heroHeading = homepageContent.heroHeading
  const heroSubheading = homepageContent.heroSubheading
  const heroPrimaryButtonText = homepageContent.heroPrimaryButtonText
  const heroPrimaryButtonLink = homepageContent.heroPrimaryButtonLink || '/contact'

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
    <div className="snap-container">
      <Hero
        heading={heroHeading}
        subheading={heroSubheading}
        primaryButtonText={heroPrimaryButtonText}
        primaryButtonLink={heroPrimaryButtonLink}
      />

      <section className="snap-section flex items-center py-24 lg:py-32 px-6 lg:px-12 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto w-full">
          <FeatureShowcase
            heading={featuresHeading}
            subheading={featuresSubheading}
            features={features}
          />
        </div>
      </section>

      <section className="h-dvh px-6 bg-background flex items-center justify-center snap-start snap-always relative border-b border-border">
        <div className="absolute inset-0 size-full -z-10 dot-grid opacity-30" />
        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">{aboutContent.team.heading}</h2>
            <p className="text-muted-foreground text-lg">Why we started and how we work</p>
          </div>

          {/* Bento grid - no gaps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-border bg-card/20">
            {/* Main story card - large left */}
            <Link to="/contact" className="lg:col-span-7 lg:row-span-2 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-border group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">Our Story</h3>
                <Lightbulb className="w-14 h-14 lg:w-20 lg:h-20 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 shrink-0" strokeWidth={1} />
              </div>
              <div className="space-y-4 flex-1">
                {aboutContent.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground/60">
                  We believe the right message, delivered well, changes everything.
                </p>
                <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-4">
                  Work with us <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>

            {/* Approach card - top right */}
            <Link to="/contact" className="lg:col-span-5 p-6 lg:p-8 border-b border-border group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">Our Approach</h3>
                <Target className="w-12 h-12 lg:w-14 lg:h-14 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 shrink-0" strokeWidth={1} />
              </div>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                Depth over volume. We'd rather publish one piece that becomes a reference in your industry than ten posts that disappear into noise. Your personal brand often matters more than your company brand—we help founders become the trusted voice in their space.
              </p>
              <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                Work with us <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Team card - bottom right */}
            <Link to="/contact" className="lg:col-span-5 p-6 lg:p-8 group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">The Team</h3>
                <Users className="w-12 h-12 lg:w-14 lg:h-14 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 shrink-0" strokeWidth={1} />
              </div>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                {aboutContent.team.description}
              </p>
              <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                Work with us <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="snap-section border-b border-border">
        <Testimonials
          heading={testimonialsHeading}
          subheading={testimonialsSubheading}
          testimonials={testimonials}
        />
      </div>

      <div className="snap-section border-b border-border">
        <FAQ heading={faqHeading} subheading={faqSubheading} faqs={faqs} />
      </div>

      <div className="snap-start surface-inverted min-h-dvh flex flex-col">
        {/* CTA Section */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-12">
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
        </div>

        <Footer variant="inverted" className="border-t border-primary-foreground/20" />
      </div>
    </div>
  )
}
