import Link from "next/link"
import { MapPin, Briefcase, Clock, Shield, Code, Database, Cog, TrendingUp, ShieldCheck, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Career } from "@/payload-types"

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
      id: career.id.toString(),
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
        href={formattedCareer.url}
        className="group block"
      >
        <article className="h-full bg-card rounded-lg border border-glow-hover p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/60 hover:scale-[1.02] cursor-pointer flex flex-col relative overflow-hidden space-y-6">
          {/* Featured Badge */}
          <div className="absolute top-6 right-6">
            <div className="bg-primary/10 text-primary p-2 rounded-full">
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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
    <section className="pt-32 md:pt-36 lg:pt-40 pb-16 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col space-y-16">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-semibold">Featured Positions</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Join Our Team
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Explore our hand-picked opportunities and find your next career move
            </p>
          </div>

          {/* Rows */}
          <div className="flex flex-col space-y-8">
            {rows.map((row, rowIndex) => {
              const itemCount = row.length
              // Determine grid classes based on items in this row
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
      </div>
    </section>
  )
}
