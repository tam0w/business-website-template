import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { CareersList } from '@/components/careers/careers-list'
import { Empty, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { Footer } from '@/components/Footer'
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
      <article className="w-full min-h-screen flex flex-col">
        <div className="mx-auto flex-1 flex flex-col max-w-6xl lg:border-x border-border w-full">
          <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
            <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
              {careersPageContent.heading}
            </h1>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              {careersPageContent.description}
            </p>
          </div>
          <div className="border-separator" />
          <div className="p-4 md:p-6 flex-1">
            <Empty>
              <EmptyTitle>{careersPageContent.emptyStateTitle}</EmptyTitle>
              <EmptyDescription>{careersPageContent.emptyStateDescription}</EmptyDescription>
            </Empty>
          </div>
        </div>
        <Footer />
      </article>
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
    <article className="w-full min-h-screen flex flex-col">
      <div className="mx-auto flex-1 flex flex-col max-w-6xl lg:border-x border-border w-full">
        <CareersList
          heading={careersPageContent.heading}
          description={careersPageContent.description}
          careers={transformedCareers}
        />
      </div>
      <Footer />
    </article>
  )
}
