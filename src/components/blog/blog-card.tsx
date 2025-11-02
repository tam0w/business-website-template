import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Post, User, Media } from '@/payload-types'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const author = post.author as User | undefined
  const featuredImage = post.featuredImage as Media | null | undefined
  const authorAvatar = author?.avatar as Media | null | undefined

  const getAuthorInitials = (name?: string): string => {
    if (!name) return '?'
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getExcerpt = (): string => {
    if (post.excerpt) return post.excerpt
    if (post.subTitle) return post.subTitle
    return 'No excerpt available'
  }

  const getPublishedDate = (): string => {
    if (post.publishedAt) {
      return format(new Date(post.publishedAt), 'MMM dd, yyyy')
    }
    return format(new Date(post.createdAt), 'MMM dd, yyyy')
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
      {featuredImage?.url && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={featuredImage.url}
            alt={featuredImage.alt || post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        {post.subTitle && (
          <CardDescription className="line-clamp-1">{post.subTitle}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{getExcerpt()}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            {authorAvatar?.url && (
              <AvatarImage src={authorAvatar.url} alt={author?.name || 'Author'} />
            )}
            <AvatarFallback>{getAuthorInitials(author?.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{author?.name || 'Anonymous'}</span>
            {author?.designation && (
              <span className="text-xs text-muted-foreground">{author.designation}</span>
            )}
          </div>
        </div>
        <time className="text-xs text-muted-foreground">{getPublishedDate()}</time>
      </CardFooter>
    </Card>
  )
}
