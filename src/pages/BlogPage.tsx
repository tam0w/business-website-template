import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { BlogList } from '@/components/blog/blog-list'
import { Empty, EmptyTitle, EmptyDescription } from '@/components/ui/empty'
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
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl text-foreground mb-4">
            {blogPageContent.heading}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-16">
            {blogPageContent.description}
          </p>
          <Empty>
            <EmptyTitle>{blogPageContent.emptyStateTitle}</EmptyTitle>
            <EmptyDescription>{blogPageContent.emptyStateDescription}</EmptyDescription>
          </Empty>
        </div>
      </div>
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
    <BlogList
      heading={blogPageContent.heading}
      description={blogPageContent.description}
      ctaText={blogPageContent.ctaText}
      posts={transformedPosts}
    />
  )
}
