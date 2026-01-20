import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { ArrowLeft, MapPin, Briefcase, Clock, Shield, DollarSign } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import { LexicalRenderer } from '@/components/LexicalRenderer'

export default function CareerPage() {
  const { slug } = useParams<{ slug: string }>()
  const career = useQuery(api.careers.getCareerBySlug, { slug: slug || '' })

  if (career === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading position...</div>
      </div>
    )
  }

  if (career === null) {
    return (
      <section className="w-full">
        <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
          <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16 text-center min-h-[60vh]">
            <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
              Position Not Found
            </h1>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              The position you're looking for doesn't exist or has been filled.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/careers">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }

  const getDepartmentLabel = (dept: string): string => {
    const labels: Record<string, string> = {
      cybersecurity: 'Cybersecurity',
      'data-services': 'Data Services',
      engineering: 'Engineering',
      operations: 'Operations',
      'sales-marketing': 'Sales & Marketing',
    }
    return labels[dept] || dept
  }

  const getTypeLabel = (type: string): string => {
    const labels: Record<string, string> = {
      'full-time': 'Full-time',
      'part-time': 'Part-time',
      contract: 'Contract',
      internship: 'Internship',
    }
    return labels[type] || type
  }

  const getRemoteLabel = (option: string): string => {
    const labels: Record<string, string> = {
      remote: 'Remote',
      onsite: 'On-site',
      hybrid: 'Hybrid',
    }
    return labels[option] || option
  }

  const formatSalary = (): string | null => {
    const salary = career.salary
    if (!salary) return null

    const formatNumber = (num: number): string => {
      if (num >= 100000) {
        return `${(num / 100000).toFixed(1)}L`
      }
      return num.toLocaleString()
    }

    if (salary.type === 'competitive') return 'Competitive'

    const currency = salary.currency || 'INR'

    if (salary.type === 'range' && salary.min && salary.max) {
      return `${currency} ${formatNumber(salary.min)} - ${formatNumber(salary.max)}`
    }

    if (salary.type === 'fixed' && salary.amount) {
      return `${currency} ${formatNumber(salary.amount)}`
    }

    return null
  }

  const salary = formatSalary()

  return (
    <article className="w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header */}
        <header className="px-4 md:px-6 pt-32 pb-12">
          <Link
            to="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{getDepartmentLabel(career.department)}</Badge>
            {career.clearanceRequired && (
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" />
                Clearance Required
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{career.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{career.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>{getTypeLabel(career.type)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{getRemoteLabel(career.remoteOption)}</span>
            </div>
            {salary && (
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>{salary}</span>
              </div>
            )}
          </div>
        </header>

        <div className="border-separator" />

        {/* About the Role */}
        <section className="px-4 md:px-6 py-12 border-b border-border">
          <h2 className="text-sm tracking-caps font-bold text-muted-foreground mb-6">About the Role</h2>
          <LexicalRenderer content={career.description} />
        </section>

        {/* Responsibilities */}
        <section className="px-4 md:px-6 py-12 border-b border-border">
          <h2 className="text-sm tracking-caps font-bold text-muted-foreground mb-6">Responsibilities</h2>
          <LexicalRenderer content={career.responsibilities} />
        </section>

        {/* Requirements */}
        <section className="px-4 md:px-6 py-12 border-b border-border">
          <h2 className="text-sm tracking-caps font-bold text-muted-foreground mb-6">Requirements</h2>
          <LexicalRenderer content={career.requirements} />
        </section>

        {/* Nice to Have */}
        {career.niceToHave && (
          <section className="px-4 md:px-6 py-12 border-b border-border">
            <h2 className="text-sm tracking-caps font-bold text-muted-foreground mb-6">Nice to Have</h2>
            <LexicalRenderer content={career.niceToHave} />
          </section>
        )}

        {/* Apply CTA */}
        <div className="px-4 md:px-6 py-16 flex justify-center">
          <Button size="lg" className="px-12">
            Apply for this Position
          </Button>
        </div>
      </div>

      <Footer />
    </article>
  )
}
