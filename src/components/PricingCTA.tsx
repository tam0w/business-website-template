import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PricingCTAProps {
  heading: string
  description: string
  planName?: string
  price?: string
  priceSubtext?: string
  features?: Array<{ feature: string }>
  buttonText: string
  buttonLink: string
}

export function PricingCTA({
  heading,
  description,
  priceSubtext,
  buttonText,
  buttonLink,
}: PricingCTAProps) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-xl mx-auto">
        {description}
      </p>
      {priceSubtext && (
        <p className="text-sm text-primary-foreground/60 mb-8">
          Retainer partnerships {priceSubtext}
        </p>
      )}
      <Link
        to={buttonLink}
        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary text-lg font-medium hover:bg-primary-foreground/90 transition-colors"
      >
        {buttonText}
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  )
}
