import { ArrowRight, Calendar } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post, User, Media } from "@/payload-types"

interface BlogListProps {
  heading: string
  description: string
  ctaText: string
  posts: Post[]
}

export function BlogList({
  heading,
  description,
  ctaText,
  posts,
}: BlogListProps) {
  const formatPost = (post: Post) => {
    const author = post.author as User | undefined
    const featuredImage = post.featuredImage as Media | null | undefined
    const authorAvatar = author?.avatar as Media | null | undefined

    const getAuthorInitials = (name?: string): string => {
      if (!name) return "?"
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }

    return {
      id: post.id.toString(),
      title: post.title,
      summary: post.excerpt || post.subTitle || "",
      author: {
        name: author?.name || "Anonymous",
        avatar: authorAvatar?.url,
        initials: getAuthorInitials(author?.name),
      },
      published: post.publishedAt
        ? format(new Date(post.publishedAt), "dd MMM yyyy")
        : format(new Date(post.createdAt), "dd MMM yyyy"),
      url: `/blog/${post.slug}`,
      image: featuredImage?.url || "https://placehold.co/800x450/333/666?text=No+Image",
      tags: post.tags || [],
    }
  }

  return (
    <section className="pt-32 md:pt-36 lg:pt-40 pb-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-16">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <div className="w-full flex flex-col space-y-12">
            {posts.map((post) => {
              const formattedPost = formatPost(post)
              return (
                <article
                  key={formattedPost.id}
                  className="group w-full max-w-6xl mx-auto bg-card rounded-lg border border-glow-hover p-8 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="flex flex-col md:col-span-3 space-y-6">
                      {formattedPost.tags.length > 0 && (
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {formattedPost.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold md:text-3xl group-hover:text-primary transition-colors duration-300">
                        <Link href={formattedPost.url}>
                          {formattedPost.title}
                        </Link>
                      </h3>
                      {formattedPost.summary && (
                        <p className="text-muted-foreground text-sm md:text-base line-clamp-3 leading-relaxed">
                          {formattedPost.summary}
                        </p>
                      )}
                      <div className="mt-auto space-y-4">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border">
                              {formattedPost.author.avatar && (
                                <AvatarImage
                                  src={formattedPost.author.avatar}
                                  alt={formattedPost.author.name}
                                />
                              )}
                              <AvatarFallback className="text-xs">
                                {formattedPost.author.initials}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">
                              {formattedPost.author.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            <time>{formattedPost.published}</time>
                          </div>
                        </div>
                        <Link
                          href={formattedPost.url}
                          className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
                        >
                          <span>{ctaText}</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="order-first md:order-last md:col-span-2">
                      <Link href={formattedPost.url} className="block h-full">
                        <div className="aspect-video md:aspect-square h-full overflow-clip rounded-lg border border-border bg-muted">
                          <img
                            src={formattedPost.image}
                            alt={formattedPost.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
