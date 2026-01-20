import { Link } from 'react-router-dom'
import { ArrowRight, FileText, PenTool, Linkedin, Bot, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import { servicesContent } from '@/data'

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  FileText,
  PenTool,
  Linkedin,
  Bot,
}

export default function ServicesPage() {
  return (
    <article className="w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header */}
        <header className="px-4 md:px-6 pt-32 pb-16">
          <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
            {servicesContent.heading}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg md:text-xl max-w-2xl">
            {servicesContent.subheading}
          </p>
        </header>

        <div className="border-separator" />

        {/* Services */}
        {servicesContent.services.map((service, index) => {
          const Icon = iconMap[service.icon] || FileText

          return (
            <section
              key={service.id}
              id={service.id}
              className="border-b border-border"
            >
              {/* Service Header */}
              <div className="px-4 md:px-6 py-8 md:py-10 surface-inverted">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-sm tracking-caps text-primary-foreground/60 mb-1 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <Icon className="hidden md:block w-10 h-10 lg:w-12 lg:h-12 text-primary-foreground/70" strokeWidth={1.1} />
                </div>
              </div>

              {/* Service Description */}
              <div className="px-4 md:px-6 py-8 border-b border-border">
                <p className="text-lg text-primary font-medium mb-3">
                  {service.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="px-4 md:px-6 py-12 bg-card/50 border-y border-border">
                <h3 className="text-sm tracking-caps text-muted-foreground mb-8">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <h4 className="text-lg font-display font-bold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="px-4 md:px-6 py-6 border-t border-border">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <span className="text-muted-foreground">Results:</span>
                  {service.outcomes.map((outcome, outcomeIndex) => (
                    <span
                      key={outcomeIndex}
                      className="text-foreground"
                    >
                      {outcome}
                      {outcomeIndex < service.outcomes.length - 1 && (
                        <span className="text-border ml-6">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* CTA */}
        <section className="px-4 md:px-6 py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-display font-bold mb-4">
              {servicesContent.cta.heading}
            </h2>
            <p className="text-muted-foreground mb-8">
              {servicesContent.cta.description}
            </p>
            <Button asChild size="lg">
              <Link to={servicesContent.cta.buttonLink} className="gap-2">
                {servicesContent.cta.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </article>
  )
}
