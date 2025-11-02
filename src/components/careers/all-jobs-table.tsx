"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { MapPin, Shield, Search, X, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import type { Career } from "@/payload-types"

interface AllJobsTableProps {
  careers: Career[]
}

type SortField = 'title' | 'department' | 'location' | 'type' | 'remoteOption'
type SortDirection = 'asc' | 'desc' | null

export function AllJobsTable({ careers }: AllJobsTableProps) {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [remoteFilter, setRemoteFilter] = useState<string>("all")
  const [clearanceFilter, setClearanceFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<SortField | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

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
      departmentRaw: career.department,
      location: career.location,
      type: getTypeLabel(career.type),
      typeRaw: career.type,
      remoteOption: getRemoteLabel(career.remoteOption),
      remoteOptionRaw: career.remoteOption,
      clearanceRequired: career.clearanceRequired,
      clearanceDetails: career.clearanceDetails,
      salary: formatSalary(career.salary),
      url: `/careers/${career.slug}`,
    }
  }

  // Extract unique filter values
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

  // Get unique departments for tabs
  const uniqueDepartments = useMemo(() => {
    const depts = new Set(careers.map(c => c.department))
    return Array.from(depts).sort()
  }, [careers])

  // Filter and sort careers based on active tab and filters
  const filteredAndSortedCareers = useMemo(() => {
    let filtered = careers.filter(career => {
      const formattedCareer = formatCareer(career)

      // Tab filter (department)
      if (activeTab !== "all" && career.department !== activeTab) {
        return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          formattedCareer.title.toLowerCase().includes(query) ||
          formattedCareer.department.toLowerCase().includes(query) ||
          formattedCareer.location.toLowerCase().includes(query)

        if (!matchesSearch) return false
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

    // Sort
    if (sortField && sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        let aValue: string
        let bValue: string

        switch (sortField) {
          case 'title':
            aValue = a.title
            bValue = b.title
            break
          case 'department':
            aValue = a.department
            bValue = b.department
            break
          case 'location':
            aValue = a.location
            bValue = b.location
            break
          case 'type':
            aValue = a.type
            bValue = b.type
            break
          case 'remoteOption':
            aValue = a.remoteOption
            bValue = b.remoteOption
            break
          default:
            return 0
        }

        const comparison = aValue.localeCompare(bValue)
        return sortDirection === 'asc' ? comparison : -comparison
      })
    }

    return filtered
  }, [careers, activeTab, searchQuery, locationFilter, typeFilter, remoteFilter, clearanceFilter, sortField, sortDirection])

  const hasActiveFilters =
    searchQuery !== "" ||
    locationFilter !== "all" ||
    typeFilter !== "all" ||
    remoteFilter !== "all" ||
    clearanceFilter !== "all"

  const clearFilters = () => {
    setSearchQuery("")
    setLocationFilter("all")
    setTypeFilter("all")
    setRemoteFilter("all")
    setClearanceFilter("all")
  }

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortDirection(null)
        setSortField(null)
      }
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
    }
    if (sortDirection === 'asc') {
      return <ArrowUp className="ml-2 h-4 w-4" />
    }
    return <ArrowDown className="ml-2 h-4 w-4" />
  }

  if (!careers || careers.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              All Open Positions
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Browse all available opportunities and find the perfect role for you
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-4">
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

            {/* Filter Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
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
            Showing {filteredAndSortedCareers.length} of {careers.length} positions
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-transparent border-b rounded-none p-0 pb-2">
              <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-4 py-2">
                All Jobs
                <Badge variant="secondary" className="ml-2 text-xs">
                  {careers.length}
                </Badge>
              </TabsTrigger>
              {uniqueDepartments.map((dept) => {
                const deptCount = careers.filter(c => c.department === dept).length
                return (
                  <TabsTrigger
                    key={dept}
                    value={dept}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent px-4 py-2"
                  >
                    {getDepartmentLabel(dept)}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {deptCount}
                    </Badge>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              {/* Table */}
              {filteredAndSortedCareers.length > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="min-w-[250px] py-4 px-6 text-base">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('title')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-base"
                            >
                              Position
                              <SortIcon field="title" />
                            </Button>
                          </TableHead>
                          {activeTab === "all" && (
                            <TableHead className="min-w-[150px] py-4 px-6 text-base">
                              <Button
                                variant="ghost"
                                onClick={() => handleSort('department')}
                                className="h-auto p-0 font-semibold hover:bg-transparent text-base"
                              >
                                Department
                                <SortIcon field="department" />
                              </Button>
                            </TableHead>
                          )}
                          <TableHead className="min-w-[150px] py-4 px-6 text-base">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('location')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-base"
                            >
                              Location
                              <SortIcon field="location" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[120px] py-4 px-6 text-base">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('type')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-base"
                            >
                              Type
                              <SortIcon field="type" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[120px] py-4 px-6 text-base">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('remoteOption')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-base"
                            >
                              Work Model
                              <SortIcon field="remoteOption" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[150px] py-4 px-6 text-base">Salary</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAndSortedCareers.map((career) => {
                          const formattedCareer = formatCareer(career)
                          return (
                            <TableRow key={formattedCareer.id} className="hover:bg-muted/50">
                              <TableCell className="py-5 px-6">
                                <Link href={formattedCareer.url} className="hover:underline">
                                  <div className="flex flex-col gap-1.5">
                                    <span className="font-semibold text-base">{formattedCareer.title}</span>
                                    {formattedCareer.clearanceRequired && (
                                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Shield className="h-3.5 w-3.5" />
                                        <span>{formattedCareer.clearanceDetails || 'Clearance Required'}</span>
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </TableCell>
                              {activeTab === "all" && (
                                <TableCell className="py-5 px-6">
                                  <Badge variant="secondary">{formattedCareer.department}</Badge>
                                </TableCell>
                              )}
                              <TableCell className="py-5 px-6">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                  <span>{formattedCareer.location}</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-5 px-6">{formattedCareer.type}</TableCell>
                              <TableCell className="py-5 px-6">{formattedCareer.remoteOption}</TableCell>
                              <TableCell className="py-5 px-6 font-medium">{formattedCareer.salary || '—'}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 border rounded-lg bg-muted/30">
                  <p className="text-muted-foreground text-lg mb-2">No positions found matching your criteria</p>
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
