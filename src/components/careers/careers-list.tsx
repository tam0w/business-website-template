import { MapPin, Briefcase, Clock, Shield, Code, Database, Cog, TrendingUp, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { Career } from "@/payload-types"

interface CareersListProps {
  heading: string
  description: string
  careers: Career[]
}

export function CareersList({
  heading,
  description,
  careers,
}: CareersListProps) {
  const getDepartmentIcon = (dept: string) => {
    const icons: Record<string, React.ReactNode> = {
      'cybersecurity': <ShieldCheck className="h-10 w-10" />,
      'data-services': <Database className="h-10 w-10" />,
      'engineering': <Code className="h-10 w-10" />,
      'operations': <Cog className="h-10 w-10" />,
      'sales-marketing': <TrendingUp className="h-10 w-10" />,
    }
    return icons[dept] || <Briefcase className="h-10 w-10" />
  }

  const formatCareer = (career: Career) => {
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

    const formatSalary = (salary: Career['salary']): string | null => {
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

    return {
      id: career.id.toString(),
      title: career.title,
      slug: career.slug,
      department: getDepartmentLabel(career.department),
      location: career.location,
      type: getTypeLabel(career.type),
      experienceLevel: getExperienceLabel(career.experienceLevel),
      remoteOption: getRemoteLabel(career.remoteOption),
      clearanceRequired: career.clearanceRequired,
      clearanceDetails: career.clearanceDetails,
      salary: formatSalary(career.salary),
      url: `/careers/${career.slug}`,
    }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4 md:mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {description}
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career) => {
              const formattedCareer = formatCareer(career)
              return (
                <Link
                  key={formattedCareer.id}
                  href={formattedCareer.url}
                  className="group block"
                >
                  <article className="h-full bg-card rounded-lg border border-border p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:bg-accent/50 cursor-pointer flex flex-col">
                    {/* Icon at the top */}
                    <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all mb-4">
                      {getDepartmentIcon(career.department)}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-4 flex-1">
                      {/* Header */}
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary">{formattedCareer.department}</Badge>
                          {formattedCareer.clearanceRequired && (
                            <Badge variant="outline" className="gap-1">
                              <Shield className="h-3 w-3" />
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {formattedCareer.title}
                        </h3>
                      </div>

                      {/* Details */}
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{formattedCareer.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" />
                          <span>{formattedCareer.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{formattedCareer.remoteOption}</span>
                        </div>
                      </div>

                      {/* Salary */}
                      {formattedCareer.salary && (
                        <div className="mt-auto pt-2 font-semibold text-foreground">
                          {formattedCareer.salary}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
