import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { BlogList } from '@/components/blog/blog-list'
import { Empty, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
import { Footer } from '@/components/Footer'
import { blogPageContent } from '@/data'
import type { Post } from '@/types'

export default function BlogPage() {
  const posts = useQuery(api.posts.listPosts, { status: 'published' })

  if (posts === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading posts...</div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <section className="w-full">
        <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
          <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
            <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
              {blogPageContent.heading}
            </h1>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              {blogPageContent.description}
            </p>
          </div>
          <div className="border-separator" />
          <div className="p-4 md:p-6">
            <Empty>
              <EmptyTitle>{blogPageContent.emptyStateTitle}</EmptyTitle>
              <EmptyDescription>{blogPageContent.emptyStateDescription}</EmptyDescription>
            </Empty>
          </div>
        </div>
        <Footer />
      </section>
    )
  }

  // Transform Convex data to match our Post type
  const transformedPosts: Post[] = posts.map((post) => ({
    _id: post._id,
    title: post.title,
    slug: post.slug,
    subTitle: post.subTitle,
    excerpt: post.excerpt,
    featuredImage: post.featuredImage,
    author: post.author,
    content: post.content,
    tags: post.tags,
    status: post.status,
    publishedAt: post.publishedAt,
    seo: post.seo,
    _creationTime: post._creationTime,
  }))

  return (
    <>
      <BlogList
        heading={blogPageContent.heading}
        description={blogPageContent.description}
        ctaText={blogPageContent.ctaText}
        posts={transformedPosts}
      />
      <Footer />
    </>
  )
}
