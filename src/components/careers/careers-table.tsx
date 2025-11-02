"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { MapPin, Briefcase, Clock, Shield, Code, Database, Cog, TrendingUp, ShieldCheck, Grid3x3, List, Search, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Career } from "@/payload-types"

interface CareersTableProps {
  heading: string
  description: string
  careers: Career[]
}

type ViewMode = "grid" | "list"

export function CareersTable({
  heading,
  description,
  careers,
}: CareersTableProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState<string>("all")
  const [locationFilter, setLocationFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [remoteFilter, setRemoteFilter] = useState<string>("all")
  const [clearanceFilter, setClearanceFilter] = useState<string>("all")

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
      departmentRaw: career.department,
      location: career.location,
      type: getTypeLabel(career.type),
      typeRaw: career.type,
      experienceLevel: getExperienceLabel(career.experienceLevel),
      remoteOption: getRemoteLabel(career.remoteOption),
      remoteOptionRaw: career.remoteOption,
      clearanceRequired: career.clearanceRequired,
      clearanceDetails: career.clearanceDetails,
      salary: formatSalary(career.salary),
      url: `/careers/${career.slug}`,
    }
  }

  // Extract unique filter values
  const uniqueDepartments = useMemo(() => {
    const depts = new Set(careers.map(c => c.department))
    return Array.from(depts)
  }, [careers])

  const uniqueLocations = useMemo(() => {
    const locs = new Set(careers.map(c => c.location))
    return Array.from(locs)
  }, [careers])

  const uniqueTypes = useMemo(() => {
    const types = new Set(careers.map(c => c.type))
    return Array.from(types)
  }, [careers])

  const uniqueRemoteOptions = useMemo(() => {
    const options = new Set(careers.map(c => c.remoteOption))
    return Array.from(options)
  }, [careers])

  // Filter careers
  const filteredCareers = useMemo(() => {
    return careers.filter(career => {
      const formattedCareer = formatCareer(career)

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          formattedCareer.title.toLowerCase().includes(query) ||
          formattedCareer.department.toLowerCase().includes(query) ||
          formattedCareer.location.toLowerCase().includes(query)

        if (!matchesSearch) return false
      }

      // Department filter
      if (departmentFilter !== "all" && career.department !== departmentFilter) {
        return false
      }

      // Location filter
      if (locationFilter !== "all" && career.location !== locationFilter) {
        return false
      }

      // Type filter
      if (typeFilter !== "all" && career.type !== typeFilter) {
        return false
      }

      // Remote filter
      if (remoteFilter !== "all" && career.remoteOption !== remoteFilter) {
        return false
      }

      // Clearance filter
      if (clearanceFilter === "required" && !career.clearanceRequired) {
        return false
      }
      if (clearanceFilter === "not-required" && career.clearanceRequired) {
        return false
      }

      return true
    })
  }, [careers, searchQuery, departmentFilter, locationFilter, typeFilter, remoteFilter, clearanceFilter])

  const hasActiveFilters =
    searchQuery !== "" ||
    departmentFilter !== "all" ||
    locationFilter !== "all" ||
    typeFilter !== "all" ||
    remoteFilter !== "all" ||
    clearanceFilter !== "all"

  const clearFilters = () => {
    setSearchQuery("")
    setDepartmentFilter("all")
    setLocationFilter("all")
    setTypeFilter("all")
    setRemoteFilter("all")
    setClearanceFilter("all")
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

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4 md:mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Filters and View Toggle */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {uniqueDepartments.map(dept => (
                    <SelectItem key={dept} value={dept}>
                      {getDepartmentLabel(dept)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {uniqueLocations.map(loc => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {uniqueTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {getTypeLabel(type)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={remoteFilter} onValueChange={setRemoteFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Remote" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Options</SelectItem>
                  {uniqueRemoteOptions.map(option => (
                    <SelectItem key={option} value={option}>
                      {getRemoteLabel(option)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={clearanceFilter} onValueChange={setClearanceFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Clearance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="required">Required</SelectItem>
                  <SelectItem value="not-required">Not Required</SelectItem>
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="w-full sm:w-auto"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredCareers.length} of {careers.length} positions
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map((career) => {
                const formattedCareer = formatCareer(career)
                return (
                  <Link
                    key={formattedCareer.id}
                    href={formattedCareer.url}
                    className="group block"
                  >
                    <article className="h-full bg-card rounded-lg border border-border p-6 transition-all hover:shadow-lg hover:border-primary/50 hover:bg-accent/50 cursor-pointer flex flex-col">
                      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all mb-4">
                        {getDepartmentIcon(career.department)}
                      </div>

                      <div className="flex flex-col gap-4 flex-1">
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
          )}

          {/* List/Table View */}
          {viewMode === "list" && (
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Remote</TableHead>
                    <TableHead>Salary</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCareers.map((career) => {
                    const formattedCareer = formatCareer(career)
                    return (
                      <TableRow key={formattedCareer.id} className="cursor-pointer">
                        <TableCell>
                          <Link href={formattedCareer.url} className="hover:underline">
                            <div className="flex flex-col gap-1">
                              <span className="font-semibold">{formattedCareer.title}</span>
                              {formattedCareer.clearanceRequired && (
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Shield className="h-3 w-3" />
                                  <span>{formattedCareer.clearanceDetails || 'Clearance Required'}</span>
                                </div>
                              )}
                            </div>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{formattedCareer.department}</Badge>
                        </TableCell>
                        <TableCell>{formattedCareer.location}</TableCell>
                        <TableCell>{formattedCareer.type}</TableCell>
                        <TableCell>{formattedCareer.remoteOption}</TableCell>
                        <TableCell className="font-medium">{formattedCareer.salary || '—'}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Empty State */}
          {filteredCareers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No positions found matching your criteria.</p>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="mt-4"
                >
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
