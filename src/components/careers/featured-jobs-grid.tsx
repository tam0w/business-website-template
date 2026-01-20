import { Link } from "react-router-dom"
import { MapPin, Briefcase, Clock, Shield, Code, Database, Cog, TrendingUp, ShieldCheck, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Career } from "@/types"

interface FeaturedJobsGridProps {
  careers: Career[]
}

export function FeaturedJobsGrid({ careers }: FeaturedJobsGridProps) {
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
      id: career._id,
      title: career.title,
      slug: career.slug,
      department: getDepartmentLabel(career.department),
      location: career.location,
      type: getTypeLabel(career.type),
      remoteOption: getRemoteLabel(career.remoteOption),
      clearanceRequired: career.clearanceRequired,
      clearanceDetails: career.clearanceDetails,
      salary: formatSalary(career.salary),
      url: `/careers/${career.slug}`,
    }
  }

  if (!careers || careers.length === 0) {
    return null
  }

  // Split careers into rows based on count
  const splitIntoRows = () => {
    const count = careers.length
    if (count <= 3) {
      // 1-3 items: single row
      return [careers]
    } else if (count === 4) {
      // 4 items: 2 rows of 2
      return [careers.slice(0, 2), careers.slice(2, 4)]
    } else if (count === 5) {
      // 5 items: first row 3, second row 2
      return [careers.slice(0, 3), careers.slice(3, 5)]
    } else {
      // 6 items: 2 rows of 3
      return [careers.slice(0, 3), careers.slice(3, 6)]
    }
  }

  const renderJobCard = (career: Career) => {
    const formattedCareer = formatCareer(career)
    return (
      <Link
        key={formattedCareer.id}
        to={formattedCareer.url}
        className="group block"
      >
        <article className="h-full bg-card border border-border p-8 transition-all duration-300 hover:border-primary/60 hover:scale-[1.02] cursor-pointer flex flex-col relative overflow-hidden space-y-6">
          {/* Featured Badge */}
          <div className="absolute top-6 right-6">
            <div className="bg-primary/10 text-primary p-2 rounded-full border border-primary/30">
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 border border-border bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {getDepartmentIcon(career.department)}
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-6 flex-1">
            {/* Header */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{formattedCareer.department}</Badge>
                {formattedCareer.clearanceRequired && (
                  <Badge variant="outline" className="gap-1">
                    <Shield className="h-3 w-3" />
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 pr-8">
                {formattedCareer.title}
              </h3>
            </div>

            {/* Details */}
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{formattedCareer.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 flex-shrink-0" />
                <span>{formattedCareer.type}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>{formattedCareer.remoteOption}</span>
              </div>
            </div>

            {/* Salary */}
            {formattedCareer.salary && (
              <div className="mt-auto pt-6 border-t border-border space-y-1">
                <div className="text-sm text-muted-foreground">Salary</div>
                <div className="font-semibold text-lg text-foreground">
                  {formattedCareer.salary}
                </div>
              </div>
            )}
          </div>
        </article>
      </Link>
    )
  }

  const rows = splitIntoRows()

  return (
    <section className="min-h-screen w-full bg-muted/30">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header Section */}
        <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/30 mb-6 w-fit">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-semibold">Featured Positions</span>
          </div>
          <h1 className="text-4xl font-bold md:text-5xl text-foreground">
            Join Our Team
          </h1>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Explore our hand-picked opportunities and find your next career move
          </p>
        </div>

        <div className="border-separator" />

        {/* Featured Jobs Grid - aligned with borders */}
        <div className="grid md:grid-cols-3">
          {careers.slice(0, 3).map((career, index) => {
            const formattedCareer = formatCareer(career)
            const isLast = index === 2
            return (
              <Link
                key={formattedCareer.id}
                to={formattedCareer.url}
                className="group block"
              >
                <article className={cn(
                  "h-full bg-card border-b md:border-b-0 md:border-r p-8 transition-all duration-300 hover:bg-primary/5 cursor-pointer flex flex-col relative space-y-6 min-h-[400px]",
                  isLast && "md:border-r-0"
                )}>
                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-primary/10 text-primary p-2 rounded-full border border-primary/30">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 border border-border bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {getDepartmentIcon(career.department)}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col space-y-6 flex-1">
                    {/* Header */}
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{formattedCareer.department}</Badge>
                        {formattedCareer.clearanceRequired && (
                          <Badge variant="outline" className="gap-1">
                            <Shield className="h-3 w-3" />
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 pr-8">
                        {formattedCareer.title}
                      </h3>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{formattedCareer.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 flex-shrink-0" />
                        <span>{formattedCareer.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{formattedCareer.remoteOption}</span>
                      </div>
                    </div>

                    {/* Salary */}
                    {formattedCareer.salary && (
                      <div className="mt-auto pt-6 border-t border-border space-y-1">
                        <div className="text-sm text-muted-foreground">Salary</div>
                        <div className="font-semibold text-lg text-foreground">
                          {formattedCareer.salary}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            )
          })}
        </div>

        <div className="border-separator" />

        {/* Additional Featured Jobs - if more than 3 */}
        {careers.length > 3 && (
          <>
            <div className="flex flex-col space-y-16 px-4 md:px-6 py-16">
              <div className="flex flex-col space-y-8">
                {splitIntoRows().slice(1).map((row, rowIndex) => {
                  const itemCount = row.length
                  const gridClass = itemCount === 1
                    ? "grid grid-cols-1 gap-8 max-w-2xl mx-auto"
                    : itemCount === 2
                    ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

                  return (
                    <div key={rowIndex} className={gridClass}>
                      {row.map(renderJobCard)}
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
