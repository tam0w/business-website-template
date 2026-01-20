import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { format } from 'date-fns'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AuthorBio } from '@/components/blog/author-bio'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import { LexicalRenderer } from '@/components/LexicalRenderer'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = useQuery(api.posts.getPostBySlug, { slug: slug || '' })

  if (post === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading post...</div>
      </div>
    )
  }

  if (post === null) {
    return (
      <section className="w-full">
        <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
          <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16 text-center min-h-[60vh]">
            <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
              Post Not Found
            </h1>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    )
  }

  const publishedDate = post.publishedAt
    ? format(new Date(post.publishedAt), 'MMMM dd, yyyy')
    : format(new Date(post._creationTime), 'MMMM dd, yyyy')

  // Estimate reading time based on content
  const getReadingTime = (): string => {
    const wordCount = post.content?.root?.children?.reduce((count: number, node: { children?: { text?: string }[] }) => {
      if (node.children) {
        return count + node.children.reduce((c: number, child: { text?: string }) => {
          return c + (child.text?.split(/\s+/).length || 0)
        }, 0)
      }
      return count
    }, 0) || 0
    const minutes = Math.max(1, Math.ceil(wordCount / 200))
    return `${minutes} min read`
  }

  return (
    <article className="w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header */}
        <header className="px-4 md:px-6 pt-32 pb-12">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{post.title}</h1>

          {post.subTitle && (
            <p className="text-xl text-muted-foreground mb-6">{post.subTitle}</p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{publishedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{getReadingTime()}</span>
            </div>
          </div>
        </header>

        <div className="border-separator" />

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="px-4 md:px-6 py-8 border-b border-border">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <section className="px-4 md:px-6 py-12 border-b border-border">
          <LexicalRenderer content={post.content} className="max-w-3xl" />
        </section>

        {/* Author Bio */}
        <section className="px-4 md:px-6 py-12">
          <h3 className="text-sm tracking-caps font-bold text-muted-foreground mb-6">About the Author</h3>
          <AuthorBio author={post.author} />
        </section>
      </div>

      <Footer />
    </article>
  )
}
