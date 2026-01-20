import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { ArrowLeft, MapPin, Briefcase, Clock, Shield, DollarSign } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Position Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The position you're looking for doesn't exist or has been filled.
          </p>
          <Button asChild>
            <Link to="/careers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>
        </div>
      </div>
    )
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

  const getRemoteLabel = (option: string): string => {
    const labels: Record<string, string> = {
      'remote': 'Remote',
      'onsite': 'On-site',
      'hybrid': 'Hybrid',
    }
    return labels[option] || option
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

    if (salary.type === 'competitive') return 'Competitive'

    const symbol = getCurrencySymbol(salary.currency || 'USD')

    if (salary.type === 'range' && salary.min && salary.max) {
      return `${symbol}${salary.min.toLocaleString()} - ${symbol}${salary.max.toLocaleString()}`
    }

    if (salary.type === 'fixed' && salary.amount) {
      return `${symbol}${salary.amount.toLocaleString()}`
    }

    return null
  }

  const salary = formatSalary()

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="pt-32 pb-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>

          {/* Department Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{getDepartmentLabel(career.department)}</Badge>
            {career.clearanceRequired && (
              <Badge variant="outline" className="gap-1">
                <Shield className="h-3 w-3" />
                Clearance Required
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{career.title}</h1>

          {/* Meta */}
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
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About the Role</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Role description will be rendered here using a Lexical renderer component.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Responsibilities will be rendered here using a Lexical renderer component.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground">
                  Requirements will be rendered here using a Lexical renderer component.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Nice to Have */}
          {career.niceToHave && (
            <Card>
              <CardHeader>
                <CardTitle>Nice to Have</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground">
                    Nice to have qualifications will be rendered here.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Apply CTA */}
          <div className="flex justify-center pt-8">
            <Button size="lg" className="px-12">
              Apply for this Position
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
