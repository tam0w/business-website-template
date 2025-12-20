import { getPayload } from 'payload'
import config from '@/payload.config'
import { BlogHero, BlogList } from '@/components/blog'
import { NavbarSentinel } from '@/components/NavbarSentinel'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import type { Post } from '@/payload-types'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [blogPageContent, { docs: posts }] = await Promise.all([
    payload.findGlobal({ slug: 'blog-page' }),
    payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      depth: 2,
      sort: '-publishedAt',
      limit: 100,
    }),
  ])

  if (!posts || posts.length === 0) {
    return (
      <main>
        <BlogHero
          headline={blogPageContent.heading}
          description={blogPageContent.description}
        />
        <NavbarSentinel />
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <Empty className="my-16">
              <EmptyHeader>
                <EmptyTitle>{blogPageContent.emptyStateTitle}</EmptyTitle>
                <EmptyDescription>{blogPageContent.emptyStateDescription}</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <BlogHero
        headline={blogPageContent.heading}
        description={blogPageContent.description}
      />
      <NavbarSentinel />
      <BlogList
        ctaText={blogPageContent.ctaText}
        posts={posts as Post[]}
      />
    </main>
  )
}
