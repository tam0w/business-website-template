import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { BlogArticleHero, BlogContent } from '@/components/blog'
import { NavbarSentinel } from '@/components/NavbarSentinel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Twitter, Linkedin, Github, Globe } from 'lucide-react'
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
    <article>
      <BlogArticleHero
        title={post.title}
        subtitle={post.subTitle}
        tags={post.tags || undefined}
        author={author ? {
          name: author.name,
          avatar: authorAvatar?.url,
          initials: getAuthorInitials(author.name),
        } : undefined}
        publishedDate={getPublishedDate()}
        featuredImage={featuredImage?.url ? {
          url: featuredImage.url,
          alt: featuredImage.alt || post.title,
        } : null}
      />
      <NavbarSentinel />

      {/* Content Section */}
      <div className={`bg-[#F5F5F5] ${featuredImage?.url ? 'pt-32 md:pt-40' : 'pt-12 md:pt-16'} pb-16 md:pb-24`}>
        <div className="max-w-[800px] mx-auto px-6">
          {/* Article Content */}
          <div className="bg-white rounded-2xl border border-[#DADADA] p-8 md:p-12 lg:p-16 shadow-sm">
            <BlogContent content={post.content} />
          </div>

          {/* Author Bio Section */}
          {author && (
            <div className="mt-12 bg-white rounded-2xl border border-[#DADADA] p-8 md:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Avatar className="h-20 w-20 border-4 border-[#0070B3]/20 flex-shrink-0">
                  {authorAvatar?.url && (
                    <AvatarImage src={authorAvatar.url} alt={author.name} />
                  )}
                  <AvatarFallback className="bg-[#0A1628] text-[#EDEDED] text-xl font-semibold">
                    {getAuthorInitials(author.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="mb-3">
                    <p className="text-xl font-semibold text-[#0A1628]">{author.name}</p>
                    {author.designation && (
                      <p className="text-sm text-[#0070B3] font-medium">{author.designation}</p>
                    )}
                  </div>
                  {author.bio && (
                    <p className="text-[#666666] text-base leading-relaxed mb-4">{author.bio}</p>
                  )}
                  {socialLinks.length > 0 && (
                    <div className="flex gap-2">
                      {socialLinks.map((link) => {
                        const Icon = link.icon
                        return (
                          <Button
                            key={link.name}
                            variant="outline"
                            size="sm"
                            asChild
                            className="border-[#DADADA] hover:border-[#0070B3] hover:text-[#0070B3]"
                          >
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
          )}

          {/* Back to Blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#0070B3] hover:text-[#0A1628] font-semibold transition-colors"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
