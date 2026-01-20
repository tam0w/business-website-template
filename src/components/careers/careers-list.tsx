import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import type { Career } from '@/types'

interface CareersListProps {
  heading: string
  description: string
  careers: Career[]
}

export function CareersList({ heading, description, careers }: CareersListProps) {
  const formatCareer = (career: Career) => {
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

    const formatSalary = (salary: Career['salary']): string | null => {
      if (!salary) return null

      const formatNumber = (num: number): string => {
        if (num >= 100000) {
          return `${(num / 100000).toFixed(1)}L`
        }
        return num.toLocaleString()
      }

      if (salary.type === 'competitive') {
        return 'Competitive'
      }

      const currency = salary.currency || 'INR'

      if (salary.type === 'range' && salary.min && salary.max) {
        return `${currency} ${formatNumber(salary.min)} - ${formatNumber(salary.max)}`
      }

      if (salary.type === 'fixed' && salary.amount) {
        return `${currency} ${formatNumber(salary.amount)}`
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
      salary: formatSalary(career.salary),
      url: `/careers/${career.slug}`,
    }
  }

  return (
    <>
      {/* Header Section */}
      <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
        <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">{heading}</h1>
        <p className="text-muted-foreground mt-4 text-base md:text-lg">{description}</p>
      </div>

      <div className="border-separator" />

      <div className="flex flex-col">
        {careers.map((career) => {
          const formattedCareer = formatCareer(career)
          return (
            <article
              key={formattedCareer.id}
              className="group border-b border-border hover:bg-muted/30 transition-all duration-300"
            >
              <Link to={formattedCareer.url}>
                <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Left: Title and Department */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {formattedCareer.department}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold md:text-xl group-hover:text-primary transition-colors">
                      {formattedCareer.title}
                    </h3>
                  </div>

                  {/* Middle: Details */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

                  {/* Right: Salary and Arrow */}
                  <div className="flex items-center gap-4 md:gap-6">
                    {formattedCareer.salary && (
                      <span className="font-semibold text-foreground whitespace-nowrap">
                        {formattedCareer.salary}
                      </span>
                    )}
                    <div className="inline-flex items-center gap-1.5 font-semibold text-xs group-hover:gap-2 transition-all">
                      <span className="hidden md:inline">View role</span>
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </>
  )
}
