import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { BlogContent } from '@/components/blog/blog-content'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Twitter, Linkedin, Github, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Post, User, Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const post = docs[0] as Post | undefined

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt || post.subTitle,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    depth: 2,
    limit: 1,
  })

  const post = docs[0] as Post | undefined

  if (!post) {
    notFound()
  }

  const author = post.author as User
  const featuredImage = post.featuredImage as Media | null | undefined
  const authorAvatar = author?.avatar as Media | null | undefined

  const getPublishedDate = (): string => {
    if (post.publishedAt) {
      return format(new Date(post.publishedAt), 'dd MMM yyyy')
    }
    return format(new Date(post.createdAt), 'dd MMM yyyy')
  }

  const getAuthorInitials = (name?: string): string => {
    if (!name) return "?"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const socialLinks = [
    {
      name: 'Twitter',
      url: author?.social?.twitter,
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      url: author?.social?.linkedin,
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: author?.social?.github,
      icon: Github,
    },
    {
      name: 'Website',
      url: author?.social?.website,
      icon: Globe,
    },
  ].filter((link) => link.url)

  return (
    <article className="py-12 md:py-16 lg:py-24">
      {/* Hero Section - Centered */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Link>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="max-w-3xl text-pretty text-4xl font-bold md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subTitle && (
            <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
              {post.subTitle}
            </p>
          )}

          {/* Author & Date */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              {authorAvatar?.url && (
                <AvatarImage src={authorAvatar.url} alt={author?.name} />
              )}
              <AvatarFallback>{getAuthorInitials(author?.name)}</AvatarFallback>
            </Avatar>
            <span className="text-sm md:text-base">
              <span className="font-semibold">{author?.name || 'Anonymous'}</span>
              <span className="text-muted-foreground"> on </span>
              <time dateTime={post.publishedAt || post.createdAt} className="text-muted-foreground">
                {getPublishedDate()}
              </time>
            </span>
          </div>

          {/* Featured Image */}
          {featuredImage?.url && (
            <img
              src={featuredImage.url}
              alt={featuredImage.alt || post.title}
              className="mb-8 mt-4 aspect-video w-full rounded-lg border border-border object-cover"
            />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 mt-12 md:mt-16">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
          <BlogContent content={post.content} />
        </div>
      </div>

      {/* Author Bio Section */}
      {author && (
        <div className="container mx-auto px-4 mt-16 md:mt-24">
          <div className="mx-auto max-w-3xl border-t border-border pt-12">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20 border-2">
                {authorAvatar?.url && (
                  <AvatarImage src={authorAvatar.url} alt={author.name} />
                )}
                <AvatarFallback className="text-xl">{getAuthorInitials(author.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="mb-2">
                  <p className="text-lg font-semibold">{author.name}</p>
                  {author.designation && (
                    <p className="text-sm text-muted-foreground">{author.designation}</p>
                  )}
                </div>
                {author.bio && (
                  <p className="text-sm text-muted-foreground mb-4">{author.bio}</p>
                )}
                {socialLinks.length > 0 && (
                  <div className="flex gap-2">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Button key={link.name} variant="outline" size="sm" asChild>
                          <a
                            href={link.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Icon className="h-4 w-4" />
                            <span className="hidden sm:inline">{link.name}</span>
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
