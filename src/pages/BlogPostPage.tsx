import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { format } from 'date-fns'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AuthorBio } from '@/components/blog/author-bio'
import { Button } from '@/components/ui/button'

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
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The post you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const publishedDate = post.publishedAt
    ? format(new Date(post.publishedAt), 'MMMM dd, yyyy')
    : format(new Date(post._creationTime), 'MMMM dd, yyyy')

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header className="pt-32 pb-12 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

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
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Lexical content would be rendered here with a proper Lexical renderer */}
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">
            {post.excerpt || 'Content will be rendered here using a Lexical renderer component.'}
          </p>
        </div>
      </div>

      {/* Author Bio */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="border-t border-border pt-12">
          <h3 className="text-lg font-semibold mb-4">About the Author</h3>
          <AuthorBio author={post.author} />
        </div>
      </div>
    </article>
  )
}
