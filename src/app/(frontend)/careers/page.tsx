import { getPayload } from 'payload'
import config from '@/payload.config'
import { FeaturedJobsGrid } from '@/components/careers/featured-jobs-grid'
import { AllJobsTable } from '@/components/careers/all-jobs-table'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import type { Career } from '@/payload-types'

export const dynamic = 'force-dynamic'

export default async function CareersPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [careersPageContent, { docs: allCareers }, { docs: featuredCareers }] = await Promise.all([
    payload.findGlobal({ slug: 'careers-page' }),
    payload.find({
      collection: 'careers',
      where: {
        status: {
          equals: 'published',
        },
      },
      depth: 2,
      sort: '-publishedAt',
      limit: 100,
    }),
    payload.find({
      collection: 'careers',
      where: {
        and: [
          {
            status: {
              equals: 'published',
            },
          },
          {
            featured: {
              equals: true,
            },
          },
        ],
      },
      depth: 2,
      sort: '-publishedAt',
      limit: 6,
    }),
  ])

  if (!allCareers || allCareers.length === 0) {
    return (
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <Empty className="my-16">
            <EmptyHeader>
              <EmptyTitle>{careersPageContent.emptyStateTitle}</EmptyTitle>
              <EmptyDescription>{careersPageContent.emptyStateDescription}</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </div>
      </section>
    )
  }

  return (
    <>
      {featuredCareers && featuredCareers.length > 0 && (
        <FeaturedJobsGrid careers={featuredCareers as Career[]} />
      )}
      <AllJobsTable careers={allCareers as Career[]} />
    </>
  )
}
