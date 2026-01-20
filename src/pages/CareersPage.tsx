import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { CareersList } from '@/components/careers/careers-list'
import { Empty, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { careersPageContent } from '@/data'
import type { Career } from '@/types'

export default function CareersPage() {
  const careers = useQuery(api.careers.listCareers, { status: 'published' })

  if (careers === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading positions...</div>
      </div>
    )
  }

  if (careers.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold md:text-5xl text-foreground mb-4">
            {careersPageContent.heading}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-16">
            {careersPageContent.description}
          </p>
          <Empty>
            <EmptyTitle>{careersPageContent.emptyStateTitle}</EmptyTitle>
            <EmptyDescription>{careersPageContent.emptyStateDescription}</EmptyDescription>
          </Empty>
        </div>
      </div>
    )
  }

  // Transform Convex data to match our Career type
  const transformedCareers: Career[] = careers.map((career) => ({
    _id: career._id,
    title: career.title,
    slug: career.slug,
    department: career.department,
    location: career.location,
    type: career.type,
    experienceLevel: career.experienceLevel,
    remoteOption: career.remoteOption,
    description: career.description,
    responsibilities: career.responsibilities,
    requirements: career.requirements,
    niceToHave: career.niceToHave,
    featured: career.featured,
    clearanceRequired: career.clearanceRequired,
    clearanceDetails: career.clearanceDetails,
    salary: career.salary,
    status: career.status,
    publishedAt: career.publishedAt,
    seo: career.seo,
    _creationTime: career._creationTime,
  }))

  return (
    <CareersList
      heading={careersPageContent.heading}
      description={careersPageContent.description}
      careers={transformedCareers}
    />
  )
}
