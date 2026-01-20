"use client"

import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
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
import type { Career } from "@/types"

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
      id: career._id,
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
    <section className="min-h-screen w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header Section */}
        <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
          <h1 className="text-4xl font-bold md:text-5xl text-foreground">
            All Open Positions
          </h1>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Browse all available opportunities and find the perfect role for you
          </p>
        </div>

        <div className="border-separator" />

        {/* Quick Stats Section - aligned with borders */}
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col border-b md:border-b-0 md:border-r p-8 space-y-2">
            <div className="text-4xl font-bold text-foreground">{careers.length}</div>
            <div className="text-sm text-muted-foreground">Open Positions</div>
          </div>
          <div className="flex flex-col border-b md:border-b-0 md:border-r p-8 space-y-2">
            <div className="text-4xl font-bold text-foreground">{uniqueDepartments.length}</div>
            <div className="text-sm text-muted-foreground">Departments</div>
          </div>
          <div className="flex flex-col border-b md:border-b-0 p-8 space-y-2">
            <div className="text-4xl font-bold text-foreground">{uniqueLocations.length}</div>
            <div className="text-sm text-muted-foreground">Locations</div>
          </div>
        </div>

        <div className="border-separator" />

        {/* Search & Filters Section - aligned with borders */}
        <div className="bg-muted/20">
          <div className="p-4 md:p-6 space-y-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search positions by title, department, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-11"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="h-10">
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
                <SelectTrigger className="h-10">
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
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Work Model" />
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
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Clearance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="required">Required</SelectItem>
                  <SelectItem value="not-required">Not Required</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count & Clear Filters */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{filteredAndSortedCareers.length}</span> of {careers.length} positions
              </div>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-8"
                >
                  <X className="h-3.5 w-3.5 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="border-separator" />

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b border-border bg-muted/10">
            <div className="overflow-x-auto px-4 md:px-6">
              <TabsList className="w-full justify-start h-auto gap-1 bg-transparent p-0">
                <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-background bg-transparent px-4 py-3 rounded-none border-b-2 border-transparent">
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
                      className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-background bg-transparent px-4 py-3 rounded-none border-b-2 border-transparent"
                    >
                      {getDepartmentLabel(dept)}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {deptCount}
                      </Badge>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>
          </div>

          {/* Render TabsContent for "all" */}
          <TabsContent value="all" className="mt-0">
            {/* Table */}
            {filteredAndSortedCareers.length > 0 ? (
              <div className="overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/30 hover:bg-muted/30">
                        <TableHead className="min-w-[250px] py-3 px-4 md:px-6 text-sm">
                          <Button
                            variant="ghost"
                            onClick={() => handleSort('title')}
                            className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                          >
                            Position
                            <SortIcon field="title" />
                          </Button>
                        </TableHead>
                        {activeTab === "all" && (
                          <TableHead className="min-w-[140px] py-3 px-4 md:px-6 text-sm">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('department')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                            >
                              Department
                              <SortIcon field="department" />
                            </Button>
                          </TableHead>
                        )}
                        <TableHead className="min-w-[140px] py-3 px-4 md:px-6 text-sm">
                          <Button
                            variant="ghost"
                            onClick={() => handleSort('location')}
                            className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                          >
                            Location
                            <SortIcon field="location" />
                          </Button>
                        </TableHead>
                        <TableHead className="min-w-[110px] py-3 px-4 md:px-6 text-sm">
                          <Button
                            variant="ghost"
                            onClick={() => handleSort('type')}
                            className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                          >
                            Type
                            <SortIcon field="type" />
                          </Button>
                        </TableHead>
                        <TableHead className="min-w-[110px] py-3 px-4 md:px-6 text-sm">
                          <Button
                            variant="ghost"
                            onClick={() => handleSort('remoteOption')}
                            className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                          >
                            Work Model
                            <SortIcon field="remoteOption" />
                          </Button>
                        </TableHead>
                        <TableHead className="min-w-[130px] py-3 px-4 md:px-6 text-sm">Salary</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAndSortedCareers.map((career) => {
                        const formattedCareer = formatCareer(career)
                        return (
                          <TableRow key={formattedCareer.id} className="hover:bg-muted/30">
                            <TableCell className="py-3 px-4 md:px-6">
                              <Link to={formattedCareer.url} className="hover:text-primary transition-colors">
                                <div className="flex flex-col gap-1">
                                  <span className="font-semibold text-sm">{formattedCareer.title}</span>
                                  {formattedCareer.clearanceRequired && (
                                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                      <Shield className="h-3 w-3" />
                                      <span>{formattedCareer.clearanceDetails || 'Clearance Required'}</span>
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </TableCell>
                            {activeTab === "all" && (
                              <TableCell className="py-3 px-4 md:px-6">
                                <Badge variant="secondary" className="text-xs">{formattedCareer.department}</Badge>
                              </TableCell>
                            )}
                            <TableCell className="py-3 px-4 md:px-6">
                              <div className="flex items-center gap-1.5 text-sm">
                                <MapPin className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                                <span>{formattedCareer.location}</span>
                              </div>
                            </TableCell>
                            <TableCell className="py-3 px-4 md:px-6 text-sm">{formattedCareer.type}</TableCell>
                            <TableCell className="py-3 px-4 md:px-6 text-sm">{formattedCareer.remoteOption}</TableCell>
                            <TableCell className="py-3 px-4 md:px-6 font-medium text-sm">{formattedCareer.salary || '—'}</TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/20">
                <p className="text-muted-foreground mb-2">No positions found matching your criteria</p>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    size="sm"
                    className="mt-4"
                  >
                    Clear all filters
                  </Button>
                )}
              </div>
            )}
          </TabsContent>

          {/* Render TabsContent for each department */}
          {uniqueDepartments.map((dept) => (
            <TabsContent key={dept} value={dept} className="mt-0">
              {/* Table */}
              {filteredAndSortedCareers.length > 0 ? (
                <div className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/30 hover:bg-muted/30">
                          <TableHead className="min-w-[250px] py-3 px-4 md:px-6 text-sm">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('title')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                            >
                              Position
                              <SortIcon field="title" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[140px] py-3 px-4 md:px-6 text-sm">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('location')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                            >
                              Location
                              <SortIcon field="location" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[110px] py-3 px-4 md:px-6 text-sm">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('type')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                            >
                              Type
                              <SortIcon field="type" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[110px] py-3 px-4 md:px-6 text-sm">
                            <Button
                              variant="ghost"
                              onClick={() => handleSort('remoteOption')}
                              className="h-auto p-0 font-semibold hover:bg-transparent text-sm"
                            >
                              Work Model
                              <SortIcon field="remoteOption" />
                            </Button>
                          </TableHead>
                          <TableHead className="min-w-[130px] py-3 px-4 md:px-6 text-sm">Salary</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredAndSortedCareers.map((career) => {
                          const formattedCareer = formatCareer(career)
                          return (
                            <TableRow key={formattedCareer.id} className="hover:bg-muted/30">
                              <TableCell className="py-3 px-4 md:px-6">
                                <Link to={formattedCareer.url} className="hover:text-primary transition-colors">
                                  <div className="flex flex-col gap-1">
                                    <span className="font-semibold text-sm">{formattedCareer.title}</span>
                                    {formattedCareer.clearanceRequired && (
                                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                        <Shield className="h-3 w-3" />
                                        <span>{formattedCareer.clearanceDetails || 'Clearance Required'}</span>
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              </TableCell>
                              <TableCell className="py-3 px-4 md:px-6">
                                <div className="flex items-center gap-1.5 text-sm">
                                  <MapPin className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                                  <span>{formattedCareer.location}</span>
                                </div>
                              </TableCell>
                              <TableCell className="py-3 px-4 md:px-6 text-sm">{formattedCareer.type}</TableCell>
                              <TableCell className="py-3 px-4 md:px-6 text-sm">{formattedCareer.remoteOption}</TableCell>
                              <TableCell className="py-3 px-4 md:px-6 font-medium text-sm">{formattedCareer.salary || '—'}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 bg-muted/20">
                  <p className="text-muted-foreground mb-2">No positions found matching your criteria</p>
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      size="sm"
                      className="mt-4"
                    >
                      Clear all filters
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>
          ))}
          </Tabs>
        </div>
      </section>
  )
}
