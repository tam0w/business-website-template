import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { CareersContent } from '@/components/careers/careers-content'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Briefcase, Clock, Shield, DollarSign } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import type { Career } from '@/payload-types'

export const dynamic = 'force-dynamic'

interface CareerPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CareerPageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'careers',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const career = docs[0] as Career | undefined

  if (!career) {
    return {
      title: 'Position Not Found',
    }
  }

  return {
    title: career.seo?.title || career.title,
    description: career.seo?.description || `Join our ${career.department} team as a ${career.title}`,
  }
}

export default async function CareerPage({ params }: CareerPageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'careers',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    depth: 2,
    limit: 1,
  })

  const career = docs[0] as Career | undefined

  if (!career) {
    notFound()
  }

  const getDepartmentLabel = (dept: string): string => {
    const labels: Record<string, string> = {
      'cybersecurity': 'Cybersecurity',
      'data-services': 'Data Services',
      'engineering': 'Engineering',
      'operations': 'Operations',
      'sales-marketing': 'Sales & Marketing',
    }
    return labels[dept] || dept
  }

  const getTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      'full-time': 'Full-time',
      'part-time': 'Part-time',
      'contract': 'Contract',
      'internship': 'Internship',
    }
    return labels[type] || type
  }

  const getExperienceLabel = (level: string): string => {
    const labels: Record<string, string> = {
      'entry': 'Entry Level',
      'mid': 'Mid Level',
      'senior': 'Senior Level',
      'lead': 'Lead/Principal',
    }
    return labels[level] || level
  }

  const getRemoteLabel = (option: string): string => {
    const labels: Record<string, string> = {
      'remote': 'Remote',
      'onsite': 'On-site',
      'hybrid': 'Hybrid',
    }
    return labels[option] || option
  }

  const getPublishedDate = (): string => {
    if (career.publishedAt) {
      return format(new Date(career.publishedAt), 'dd MMM yyyy')
    }
    return format(new Date(career.createdAt), 'dd MMM yyyy')
  }

  const formatSalary = (): string | null => {
    const salary = career.salary
    if (!salary) return null

    const getCurrencySymbol = (currency: string): string => {
      const symbols: Record<string, string> = {
        'USD': '$',
        'EUR': '€',
        'GBP': '£',
      }
      return symbols[currency] || currency
    }

    const formatNumber = (num: number): string => {
      return num.toLocaleString()
    }

    if (salary.type === 'competitive') {
      return 'Competitive'
    }

    const symbol = getCurrencySymbol(salary.currency || 'USD')

    if (salary.type === 'range' && salary.min && salary.max) {
      return `${symbol}${formatNumber(salary.min)} - ${symbol}${formatNumber(salary.max)}`
    }

    if (salary.type === 'fixed' && salary.amount) {
      return `${symbol}${formatNumber(salary.amount)}`
    }

    return null
  }

  const salaryDisplay = formatSalary()

  return (
    <article className="py-12 md:py-16 lg:py-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-medium hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Careers
          </Link>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">{getDepartmentLabel(career.department)}</Badge>
            <Badge variant="outline">{getExperienceLabel(career.experienceLevel)}</Badge>
            {career.clearanceRequired && (
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" />
                {career.clearanceDetails || 'Clearance Required'}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
            {career.title}
          </h1>

          {/* Job Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Location:</span>
              <span className="text-muted-foreground">{career.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Type:</span>
              <span className="text-muted-foreground">{getTypeLabel(career.type)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Work Model:</span>
              <span className="text-muted-foreground">{getRemoteLabel(career.remoteOption)}</span>
            </div>
            {salaryDisplay && (
              <div className="flex items-center gap-2 text-sm md:text-base">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Salary:</span>
                <span className="text-muted-foreground">{salaryDisplay}</span>
              </div>
            )}
          </div>

          {/* Posted Date */}
          <p className="text-sm text-muted-foreground mb-8">
            Posted on <time dateTime={career.publishedAt || career.createdAt}>{getPublishedDate()}</time>
          </p>

          {/* Apply Button */}
          <div className="mb-12">
            <Button size="lg" asChild>
              <a href={`mailto:careers@example.com?subject=Application for ${career.title}`}>
                Apply for this position
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About the Role</h2>
            <CareersContent content={career.description} />
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Responsibilities</h2>
            <CareersContent content={career.responsibilities} />
          </section>

          {/* Requirements */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <CareersContent content={career.requirements} />
          </section>

          {/* Nice to Have */}
          {career.niceToHave && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Nice to Have</h2>
              <CareersContent content={career.niceToHave} />
            </section>
          )}

          {/* Apply Section */}
          <section className="border-t border-border pt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-muted-foreground mb-6">
                Join our team and help shape the future of cybersecurity and data services.
              </p>
              <Button size="lg" asChild>
                <a href={`mailto:careers@example.com?subject=Application for ${career.title}`}>
                  Apply Now
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
